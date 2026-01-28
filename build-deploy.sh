#!/bin/bash

# Build script for deploying CORE AI Frontend
# This script builds the landing page and prepares the demo

echo "🚀 Building CORE AI Frontend..."

# Step 1: Build the landing page
echo "📦 Building landing page..."
cd corelandingpage-main
npm install
npm run build
cd ..

# Step 2: Copy demo files to dist
echo "📋 Copying demo files..."
mkdir -p corelandingpage-main/dist/demo
cp -r demo/* corelandingpage-main/dist/demo/

echo "✅ Build complete! Deploy the 'corelandingpage-main/dist' folder"
