# 🚀 Deployment Guide

## Project Structure Overview

```
Website Root (/)
├── Landing Page (React App)
│   - Hero, Features, Benefits
│   - "Try Demo" buttons
│   - Documentation
│
└── /demo (Interactive Demo)
    - Object Detection
    - Similarity Search
    - Object Tracking
    - Model Interpretability
```

## 📦 Building for Deployment

### Automated Build (Recommended)

**Windows:**
```bash
build-deploy.bat
```

**Linux/Mac:**
```bash
chmod +x build-deploy.sh
./build-deploy.sh
```

This creates a complete deployment package in `corelandingpage-main/dist/`:
```
dist/
├── index.html              # Landing page
├── assets/                 # JS, CSS bundles
│   ├── index-[hash].js
│   └── index-[hash].css
└── demo/                   # Demo app
    ├── index.html
    ├── config.js
    ├── CORE 01.png
    └── favicon.png
```

### Manual Build

```bash
# 1. Build landing page
cd corelandingpage-main
npm install
npm run build

# 2. Copy demo files
cd ..
mkdir -p corelandingpage-main/dist/demo
cp -r demo/* corelandingpage-main/dist/demo/

# 3. Deploy corelandingpage-main/dist/ folder
```

## 🌐 Netlify Deployment

### Method 1: Git Integration (Recommended)

1. **Connect Repository:**
   - Go to Netlify Dashboard
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository

2. **Build Settings:**
   - Build command: `cd corelandingpage-main && npm install && npm run build`
   - Publish directory: `corelandingpage-main/dist`
   - Node version: 18

3. **Deploy:**
   - Netlify will automatically build and deploy
   - Every push to main branch triggers a new deployment

### Method 2: Manual Deploy

```bash
# 1. Build the project
./build-deploy.sh  # or build-deploy.bat on Windows

# 2. Install Netlify CLI
npm install -g netlify-cli

# 3. Deploy
cd corelandingpage-main/dist
netlify deploy --prod
```

## 🔧 Configuration Files

### netlify.toml
```toml
[build]
  publish = "corelandingpage-main/dist"
  command = "cd corelandingpage-main && npm install && npm run build"

# Handles /demo routing
[[redirects]]
  from = "/demo"
  to = "/demo/index.html"
  status = 200
```

### _redirects
```
/demo              /demo/index.html    200
/demo/*            /demo/:splat        200
/*                 /index.html         200
```

## 🧪 Testing Before Deployment

### Test Landing Page
```bash
cd corelandingpage-main
npm run dev
# Visit http://localhost:3000
```

### Test Demo
```bash
# Open demo/index.html in browser
# Or after building:
cd corelandingpage-main
npm run preview
# Visit http://localhost:4173/demo
```

### Test Complete Build
```bash
# Build everything
./build-deploy.sh

# Preview with local server
cd corelandingpage-main/dist
python -m http.server 8080
# Visit http://localhost:8080
```

## 🔗 URL Structure After Deployment

| Path | Content | Description |
|------|---------|-------------|
| `/` | Landing Page | Main entry point |
| `/demo` | Interactive Demo | Full demo interface |
| `/demo/index.html` | Demo HTML | Direct demo access |

## 🎯 Navigation Flow

```
User visits yoursite.com
    ↓
Landing page loads (React SPA)
    ↓
User clicks "Try Demo" button
    ↓
Navigates to yoursite.com/demo
    ↓
Demo interface loads
    ↓
Demo connects to Hugging Face API
```

## 🔐 Environment Variables

No environment variables needed for basic deployment. The demo automatically detects:
- Local: `http://localhost:8000`
- Production: `https://starnetwork-coremodel.hf.space`

## 📊 Build Output Size

Typical build sizes:
- Landing page JS: ~150-200 KB (gzipped)
- Landing page CSS: ~10-15 KB (gzipped)
- Demo: ~5 KB (vanilla JS)

## ✅ Pre-Deployment Checklist

- [ ] Run `npm install` in `corelandingpage-main/`
- [ ] Test landing page with `npm run dev`
- [ ] Test demo by opening `demo/index.html`
- [ ] Run build script (`build-deploy.bat` or `.sh`)
- [ ] Verify `dist/` folder contains both landing page and demo
- [ ] Check `dist/demo/config.js` has correct API URLs
- [ ] Test built version locally
- [ ] Deploy to Netlify

## 🐛 Troubleshooting

### Build fails on Netlify
- Check Node version is 18+
- Verify build command in netlify.toml
- Check build logs for npm errors

### Demo not loading
- Verify `/demo` folder exists in dist
- Check _redirects file is in dist root
- Verify config.js has correct API URL

### Landing page 404 errors
- Check publish directory is `corelandingpage-main/dist`
- Verify index.html exists in dist root
- Check SPA redirect is configured

### "Try Demo" button not working
- Verify App.tsx has `window.location.href = '/demo/'`
- Check demo folder exists in dist
- Test navigation in preview mode

## 🎉 Success Indicators

After successful deployment:
- ✅ Landing page loads at root URL
- ✅ "Try Demo" button navigates to `/demo`
- ✅ Demo interface loads and connects to API
- ✅ All images and assets load correctly
- ✅ Mobile responsive design works
- ✅ No console errors

## 📞 Support

For deployment issues:
1. Check build logs in Netlify dashboard
2. Review `QUICKSTART.md` in corelandingpage-main
3. Verify all configuration files are correct
4. Test locally before deploying
