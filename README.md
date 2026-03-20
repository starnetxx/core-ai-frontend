# CORE - AI Object Memory Frontend

This repository contains the complete frontend for CORE (Cognitive Objects Representation Engine) - an AI object memory middleware system.

## 🏗️ Project Structure

```
core-ai-frontend/
├── corelandingpage-main/     # Landing Page (React + Vite)
│   ├── components/           # React components
│   ├── src/                  # Source files
│   ├── dist/                 # Build output (after build)
│   └── ...
├── demo/                     # Interactive Demo App
│   ├── index.html           # Demo interface
│   ├── config.js            # API configuration
│   └── ...
├── netlify.toml             # Netlify deployment config
└── build-deploy.bat/sh      # Build scripts
```

## 🎯 Two Applications

### 1. Landing Page (Main Entry Point)
**Location:** `corelandingpage-main/`  
**Purpose:** Marketing, product showcase, and navigation  
**Tech:** React 19 + TypeScript + Vite + Tailwind CSS  
**URL:** `/` (root)

**Features:**
- Hero section with call-to-action
- Problem/Solution sections
- Benefits and use cases
- "Try Demo" buttons → link to `/demo`
- Documentation page
- Responsive design

### 2. Interactive Demo
**Location:** `demo/`  
**Purpose:** Full-featured testing interface for CORE API  
**Tech:** Vanilla HTML/CSS/JavaScript  
**URL:** `/demo`

**Features:**
- Object Detection & Recognition
- Similarity Search
- Object Tracking
- Model Interpretability
- Hierarchy Analysis
- Connects to Hugging Face Spaces / Railway backend

## 🚀 Quick Start

### Development (Landing Page)
```bash
cd corelandingpage-main
npm install
npm run dev
```
Opens at `http://localhost:3000`

### Testing Demo Locally
Open `demo/index.html` in your browser

## 📦 Deployment

### Option 1: Automated Build (Recommended)

**Windows:**
```bash
build-deploy.bat
```

**Linux/Mac:**
```bash
chmod +x build-deploy.sh
./build-deploy.sh
```

This will:
1. Build the landing page
2. Copy demo files to `dist/demo`
3. Create a complete deployment in `corelandingpage-main/dist/`

### Option 2: Manual Build

```bash
cd corelandingpage-main
npm install
npm run build
cd ..
mkdir -p corelandingpage-main/dist/demo
cp -r demo/* corelandingpage-main/dist/demo/
```

### Deploy to Netlify

The `netlify.toml` is configured to:
- Build the landing page automatically
- Serve landing page at root (`/`)
- Serve demo at `/demo`
- Handle SPA routing

Just connect your repo to Netlify and it will deploy automatically!

## 🌐 API Configuration

Backend API endpoints (configured in `demo/config.js`):
- **Local:** `http://localhost:8000`
- **Production:** `https://starnetwork-coremodel.hf.space` (Hugging Face Spaces)

## 🎨 Brand Colors

- Primary Green: `#34A853` (Google Green)
- Dark Green: `#1E8E3E`
- Background: Slate grays

## 📚 Documentation

- Landing Page Setup: `corelandingpage-main/QUICKSTART.md`
- Migration Details: `MIGRATION_COMPLETE.md`
- Project Structure: `PROJECT_STRUCTURE.md`

## 🛠️ Tech Stack

| Component | Landing Page | Demo App |
|-----------|-------------|----------|
| Framework | React 19 | Vanilla JS |
| Language | TypeScript | JavaScript |
| Build Tool | Vite 6.2 | None |
| Styling | Tailwind CSS 3.4 | Inline CSS |
| Port | 3000 (dev) | N/A |

## 📁 Navigation Flow

```
User visits site (/)
    ↓
Landing Page loads
    ↓
User clicks "Try Demo"
    ↓
Redirects to /demo
    ↓
Interactive Demo loads
```

## 🔧 Local Development URLs

- Landing Page: `http://localhost:3000`
- Demo: `http://localhost:3000/demo` (after build) or open `demo/index.html` directly

## ✅ Status

- ✅ Landing page migrated from CDN to npm
- ✅ Demo moved to `/demo` folder
- ✅ Navigation configured
- ✅ Build scripts created
- ✅ Netlify deployment configured
- ✅ Ready for production deployment
