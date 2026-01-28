# CORE AI Frontend - Project Structure

This repository contains the complete frontend for CORE (Cognitive Objects Representation Engine).

## 📁 New Repository Structure

```
core-ai-frontend/
├── corelandingpage-main/          # Landing Page (React + Vite)
│   ├── components/                # React components
│   │   ├── Hero.tsx              # Hero section
│   │   ├── Navbar.tsx            # Navigation
│   │   ├── Benefits.tsx          # Benefits section
│   │   ├── UseCases.tsx          # Use cases
│   │   ├── AuthPage.tsx          # Auth UI (redirects to demo)
│   │   ├── DocsPage.tsx          # Documentation
│   │   └── ...
│   ├── src/
│   │   └── index.css             # Global styles + Tailwind
│   ├── dist/                      # Build output (after npm run build)
│   │   ├── index.html            # Built landing page
│   │   ├── assets/               # Bundled JS/CSS
│   │   └── demo/                 # Demo files (copied during build)
│   ├── App.tsx                    # Main React app
│   ├── index.tsx                  # Entry point
│   ├── index.html                 # HTML template
│   ├── package.json               # Dependencies
│   ├── vite.config.ts             # Vite configuration
│   ├── tailwind.config.js         # Tailwind configuration
│   └── postcss.config.js          # PostCSS configuration
│
├── demo/                          # Interactive Demo App
│   ├── index.html                # Demo interface
│   ├── config.js                 # API configuration
│   ├── CORE 01.png               # Logo
│   └── favicon.png               # Favicon
│
├── netlify.toml                   # Netlify deployment config
├── _redirects                     # URL routing rules
├── build-deploy.bat               # Windows build script
├── build-deploy.sh                # Linux/Mac build script
├── DEPLOYMENT_GUIDE.md            # Deployment instructions
├── PROJECT_STRUCTURE.md           # This file
└── README.md                      # Main documentation
```

## 🎯 Application Flow

### User Journey
```
1. User visits yoursite.com
   ↓
2. Landing page loads (React SPA)
   - Hero section
   - Features & Benefits
   - Use Cases
   - Documentation
   ↓
3. User clicks "Try Demo" button
   ↓
4. Navigates to yoursite.com/demo
   ↓
5. Interactive demo loads
   - Object Detection
   - Similarity Search
   - Object Tracking
   - Model Interpretability
   ↓
6. Demo connects to backend API
   - Hugging Face Spaces (production)
   - Railway (alternative)
   - localhost:8000 (development)
```

## 🏗️ Two Applications

### 1. Landing Page (Main Entry Point)
**Location:** `corelandingpage-main/`  
**URL:** `/` (root)  
**Purpose:** Marketing, product showcase, navigation  
**Tech Stack:** React 19 + TypeScript + Vite + Tailwind CSS

**Key Features:**
- ✅ Modern, responsive design
- ✅ Hero section with CTA
- ✅ Problem/Solution sections
- ✅ Benefits showcase (4 key features)
- ✅ Use cases (robotics, AR, assistants)
- ✅ Documentation page
- ✅ "Try Demo" buttons → navigate to `/demo`

**Development:**
```bash
cd corelandingpage-main
npm install
npm run dev  # http://localhost:3000
```

**Build:**
```bash
npm run build  # Output: dist/
```

### 2. Interactive Demo
**Location:** `demo/`  
**URL:** `/demo`  
**Purpose:** Full-featured testing interface for CORE API  
**Tech Stack:** Vanilla HTML/CSS/JavaScript

**Key Features:**
- ✅ Object Detection & Recognition
- ✅ Similarity Search
- ✅ Object Tracking across frames
- ✅ Model Interpretability
- ✅ Hierarchy Analysis
- ✅ Quick Demo Pipeline
- ✅ Drag-and-drop image upload
- ✅ Real-time API connection

**Development:**
Open `demo/index.html` directly in browser

## 🔧 Configuration Files

### netlify.toml
Configures Netlify deployment:
- Build command: `cd corelandingpage-main && npm install && npm run build`
- Publish directory: `corelandingpage-main/dist`
- Redirects for `/demo` routing
- Security headers

### _redirects
URL routing rules:
```
/demo              /demo/index.html    200
/demo/*            /demo/:splat        200
/*                 /index.html         200
```

### demo/config.js
API endpoint configuration:
- Local: `http://localhost:8000`
- Production: `https://starnetwork-coremodel.hf.space`

### corelandingpage-main/vite.config.ts
Vite build configuration:
- Base path: `/`
- Output directory: `dist/`
- Dev server port: 3000

### corelandingpage-main/tailwind.config.js
Tailwind CSS configuration:
- Content paths
- Custom colors (Google Green #34A853)
- Custom animations

## 📦 Build Process

### Automated Build
```bash
# Windows
build-deploy.bat

# Linux/Mac
./build-deploy.sh
```

**What it does:**
1. Installs dependencies in `corelandingpage-main/`
2. Builds React app → `corelandingpage-main/dist/`
3. Copies `demo/` → `corelandingpage-main/dist/demo/`
4. Creates complete deployment package

### Manual Build
```bash
cd corelandingpage-main
npm install
npm run build
cd ..
mkdir -p corelandingpage-main/dist/demo
cp -r demo/* corelandingpage-main/dist/demo/
```

## 🌐 Deployment

### Netlify (Recommended)
1. Connect Git repository to Netlify
2. Netlify reads `netlify.toml` configuration
3. Automatic builds on every push
4. Deploys to CDN globally

### Manual Deployment
1. Run build script
2. Upload `corelandingpage-main/dist/` to any static host
3. Configure redirects for SPA routing

## 🎨 Design System

### Colors
- Primary Green: `#34A853` (Google Green)
- Dark Green: `#1E8E3E`
- Background: Slate grays (`#f8fafc`, `#f1f5f9`)
- Text: Slate (`#1e293b`, `#64748b`)

### Typography
- Font: Inter (Google Fonts)
- Weights: 300, 400, 500, 600, 700

### Components
- Rounded corners: `rounded-2xl`, `rounded-full`
- Shadows: Subtle elevation with green tints
- Animations: Fade-in-up, hover effects
- Responsive: Mobile-first design

## 🔗 Navigation Links

### Landing Page → Demo
```typescript
// App.tsx
const navigateToAuth = () => {
  window.location.href = '/demo/';
};
```

### Demo → Landing Page
User can use browser back button or manually navigate to `/`

## 📊 File Sizes

### Landing Page (Built)
- HTML: ~2 KB
- JavaScript: ~150-200 KB (gzipped)
- CSS: ~10-15 KB (gzipped)
- Total: ~200-250 KB

### Demo
- HTML: ~50 KB (includes inline styles/scripts)
- Images: ~100 KB
- Total: ~150 KB

## ✅ Recent Changes

### Migration from AI Studio
- ❌ Removed CDN Tailwind CSS
- ❌ Removed ESM.sh React imports
- ✅ Added npm-based Tailwind CSS
- ✅ Added proper build process
- ✅ Added TypeScript types

### Restructuring
- ✅ Moved demo to `/demo` folder
- ✅ Landing page becomes main entry point
- ✅ Updated navigation flow
- ✅ Created build scripts
- ✅ Updated deployment configuration

## 🛠️ Tech Stack Summary

| Component | Landing Page | Demo App |
|-----------|-------------|----------|
| Framework | React 19 | Vanilla JS |
| Language | TypeScript 5.8 | JavaScript |
| Build Tool | Vite 6.2 | None |
| Styling | Tailwind CSS 3.4 | Inline CSS |
| Bundler | Vite | None |
| Dev Server | Vite (port 3000) | File system |
| Hot Reload | ✅ Yes | ❌ No |
| TypeScript | ✅ Yes | ❌ No |
| Code Splitting | ✅ Yes | ❌ No |
| Tree Shaking | ✅ Yes | ❌ No |

## 📚 Documentation Files

- `README.md` - Main project documentation
- `DEPLOYMENT_GUIDE.md` - Detailed deployment instructions
- `PROJECT_STRUCTURE.md` - This file
- `MIGRATION_COMPLETE.md` - CDN to npm migration details
- `corelandingpage-main/QUICKSTART.md` - Quick start guide
- `corelandingpage-main/SETUP.md` - Setup instructions

## 🎯 Next Steps

1. **Development:**
   ```bash
   cd corelandingpage-main
   npm run dev
   ```

2. **Build:**
   ```bash
   ./build-deploy.sh
   ```

3. **Deploy:**
   - Push to Git
   - Netlify auto-deploys
   - Or manually upload `dist/` folder

## 🐛 Troubleshooting

### Landing page not loading
- Check `corelandingpage-main/dist/index.html` exists
- Verify build completed successfully
- Check browser console for errors

### Demo not accessible
- Verify `demo/` folder copied to `dist/demo/`
- Check `_redirects` file in dist root
- Test `/demo` URL directly

### Build fails
- Run `npm install` in `corelandingpage-main/`
- Check Node version (18+)
- Review build logs for errors

### Styles not working
- Verify Tailwind CSS installed
- Check `src/index.css` imported in `index.tsx`
- Rebuild with `npm run build`

## 🎉 Status: ✅ PRODUCTION READY

The project is fully restructured and ready for deployment!

