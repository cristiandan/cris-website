"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Masonry from "react-masonry-css";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const breakpointColumns = {
  default: 3,
  1024: 3,
  768: 2,
  640: 2,
};

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex w-auto -ml-4"
        columnClassName="pl-4 bg-clip-padding"
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="group mb-4 cursor-pointer overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={img}
              alt={`${title} screenshot ${idx + 1}`}
              width={600}
              height={800}
              className="w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </div>
        ))}
      </Masonry>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation arrows */}
            <button
              className="absolute left-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                const currentIdx = images.indexOf(selectedImage);
                const prevIdx = currentIdx === 0 ? images.length - 1 : currentIdx - 1;
                setSelectedImage(images[prevIdx]);
              }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="absolute right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                const currentIdx = images.indexOf(selectedImage);
                const nextIdx = currentIdx === images.length - 1 ? 0 : currentIdx + 1;
                setSelectedImage(images[nextIdx]);
              }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt={`${title} screenshot ${images.indexOf(selectedImage) + 1}`}
                width={1200}
                height={900}
                className="max-h-[90vh] w-auto rounded-lg object-contain"
              />
            </motion.div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm text-white">
              {images.indexOf(selectedImage) + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
