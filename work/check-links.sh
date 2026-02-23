#!/bin/bash

# Extract all URLs from criteria files
CRITERIA1="/Users/admin/Library/Mobile Documents/com~apple~CloudDocs/main-vault/Immigration/USA/EB1A/criteria-list.md"
CRITERIA2="/Users/admin/Library/Mobile Documents/com~apple~CloudDocs/main-vault/Immigration/USA/EB1A/criteria-list2.md"
ANALYSIS="/Users/admin/projects/cris-website/work/press-analysis.md"

echo "🔍 Checking for missing links..."
echo ""

# Extract URLs from criteria files
CRITERIA_URLS=$(cat "$CRITERIA1" "$CRITERIA2" 2>/dev/null | grep -oE 'https?://[^)>"'\''[:space:]]+' | sort -u)

# Extract URLs from analysis file
ANALYSIS_URLS=$(cat "$ANALYSIS" | grep -oE 'https?://[^)>"'\''[:space:]]+' | sort -u)

# Find missing URLs
MISSING=()
FOUND=0
TOTAL=0

for url in $CRITERIA_URLS; do
    TOTAL=$((TOTAL + 1))
    # Check if URL (or its domain) is mentioned in analysis
    domain=$(echo "$url" | sed -E 's|https?://([^/]+).*|\1|')
    if echo "$ANALYSIS_URLS" | grep -q "$domain"; then
        FOUND=$((FOUND + 1))
    else
        MISSING+=("$url")
    fi
done

echo "📊 Results:"
echo "   Total links in criteria files: $TOTAL"
echo "   Found in analysis: $FOUND"
echo "   Missing: ${#MISSING[@]}"
echo ""

if [ ${#MISSING[@]} -gt 0 ]; then
    echo "❌ Missing links:"
    for url in "${MISSING[@]}"; do
        echo "   - $url"
    done
else
    echo "✅ All links have been analyzed!"
fi
