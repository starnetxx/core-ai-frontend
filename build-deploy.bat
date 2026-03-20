@echo off
REM Build script for deploying CORE AI Frontend (Windows)
REM This script builds the landing page with demo files included

echo Building CORE AI Frontend...

REM Step 1: Build the landing page (demo files are copied automatically via prebuild script)
echo Building landing page...
cd corelandingpage-main
call npm install
call npm run build
cd ..

echo Build complete! Deploy the 'corelandingpage-main/dist' folder
echo The dist folder contains:
echo - Landing page at root
echo - Demo at /demo
