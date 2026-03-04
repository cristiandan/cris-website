#!/usr/bin/env node
/**
 * Image optimization script for cris.sh
 * Resizes images to max 1200px width and converts to WebP
 */

import sharp from 'sharp';
import { readdir, stat, unlink, rename } from 'fs/promises';
import { join, extname, dirname, basename } from 'path';

const MAX_WIDTH = 1200;
const WEBP_QUALITY = 85;
const PUBLIC_IMAGES = './public/images';

async function* walkDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walkDir(path);
    } else {
      yield path;
    }
  }
}

async function processImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.gif'].includes(ext)) {
    return null;
  }

  const dir = dirname(filePath);
  const name = basename(filePath, ext);
  const webpPath = join(dir, `${name}.webp`);
  
  // Skip if already WebP
  if (ext === '.webp') return null;
  
  const originalStats = await stat(filePath);
  const originalSize = originalStats.size;
  
  try {
    const metadata = await sharp(filePath).metadata();
    let pipeline = sharp(filePath);
    
    // Resize if wider than 1200px
    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    // Convert to WebP
    await pipeline
      .webp({ quality: WEBP_QUALITY })
      .toFile(webpPath);
    
    const newStats = await stat(webpPath);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    // Delete original
    await unlink(filePath);
    
    return {
      original: filePath,
      new: webpPath,
      originalSize,
      newSize,
      savings,
      resized: metadata.width > MAX_WIDTH
    };
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err.message);
    return null;
  }
}

async function main() {
  console.log('🖼️  Optimizing images...\n');
  
  let totalOriginal = 0;
  let totalNew = 0;
  let processed = 0;
  const results = [];
  
  for await (const filePath of walkDir(PUBLIC_IMAGES)) {
    const result = await processImage(filePath);
    if (result) {
      processed++;
      totalOriginal += result.originalSize;
      totalNew += result.newSize;
      results.push(result);
      
      const origMB = (result.originalSize / 1024 / 1024).toFixed(2);
      const newMB = (result.newSize / 1024 / 1024).toFixed(2);
      const resizeNote = result.resized ? ' (resized)' : '';
      console.log(`✓ ${basename(result.original)} → ${basename(result.new)}: ${origMB}MB → ${newMB}MB (-${result.savings}%)${resizeNote}`);
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`   Processed: ${processed} images`);
  console.log(`   Original total: ${(totalOriginal / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   New total: ${(totalNew / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   Savings: ${((totalOriginal - totalNew) / 1024 / 1024).toFixed(2)}MB (${((totalOriginal - totalNew) / totalOriginal * 100).toFixed(1)}%)`);
}

main().catch(console.error);
