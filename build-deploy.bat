@echo off
REM Build script for deploying CORE AI Frontend (Windows)
REM This script builds the landing page and prepares the demo

echo Building CORE AI Frontend...

REM Step 1: Build the landing page
echo Building landing page...
cd corelandingpage-main
call npm install
call npm run build
cd ..

REM Step 2: Copy demo files to dist
echo Copying demo files...
if not exist "corelandingpage-main\dist\demo" mkdir "corelandingpage-main\dist\demo"
xcopy /E /I /Y demo corelandingpage-main\dist\demo

echo Build complete! Deploy the 'corelandingpage-main/dist' folder
