# 🚀 Quick Reference Guide

## Project Overview

**CORE AI Frontend** - Landing page at root, demo at `/demo`

## 📁 Structure

```
/                           → Landing Page (React)
/demo                       → Interactive Demo
```

## ⚡ Quick Commands

### Development
```bash
cd corelandingpage-main
npm install
npm run dev
```
Opens at `http://localhost:3000`

### Build
```bash
# Windows
build-deploy.bat

# Linux/Mac
./build-deploy.sh
```

### Deploy
```bash
# Push to Git (Netlify auto-deploys)
git add .
git commit -m "Update"
git push

# Or manual
cd corelandingpage-main/dist
netlify deploy --prod
```

## 🔗 URLs

| Environment | Landing Page | Demo |
|-------------|-------------|------|
| Local Dev | `http://localhost:3000` | `http://localhost:3000/demo` |
| Production | `yoursite.com` | `yoursite.com/demo` |

## 📂 Key Files

| File | Purpose |
|------|---------|
| `corelandingpage-main/App.tsx` | Main React app, navigation logic |
| `demo/index.html` | Demo interface |
| `demo/config.js` | API endpoints |
| `netlify.toml` | Deployment config |
| `_redirects` | URL routing |
| `build-deploy.sh` | Build script |

## 🔧 Common Tasks

### Update Landing Page
```bash
cd corelandingpage-main
# Edit files in components/
npm run dev  # Test
npm run build  # Build
```

### Update Demo
```bash
# Edit demo/index.html
# Open in browser to test
```

### Change API Endpoint
Edit `demo/config.js`:
```javascript
production: {
    apiUrl: 'https://your-api-url.com'
}
```

### Add New Component
```bash
cd corelandingpage-main/components
# Create NewComponent.tsx
# Import in App.tsx
```

## 🐛 Quick Fixes

### Build fails
```bash
cd corelandingpage-main
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Demo not loading
```bash
# Rebuild and copy demo
./build-deploy.sh
```

### Styles not working
```bash
cd corelandingpage-main
npm install tailwindcss postcss autoprefixer
npm run build
```

## 📊 File Locations

### Landing Page Source
`corelandingpage-main/`

### Demo Source
`demo/`

### Build Output
`corelandingpage-main/dist/`

### Deploy This
`corelandingpage-main/dist/` (contains both landing page and demo)

## ✅ Pre-Deploy Checklist

- [ ] Test landing page: `npm run dev`
- [ ] Test demo: Open `demo/index.html`
- [ ] Run build: `./build-deploy.sh`
- [ ] Check `dist/` has both landing page and demo
- [ ] Verify API URLs in `demo/config.js`
- [ ] Test built version locally
- [ ] Deploy!

## 🎯 Navigation Flow

```
User → yoursite.com
    ↓
Landing Page loads
    ↓
Click "Try Demo"
    ↓
Navigate to /demo
    ↓
Demo loads
```

## 📞 Help

- Full docs: `README.md`
- Deployment: `DEPLOYMENT_GUIDE.md`
- Structure: `PROJECT_STRUCTURE.md`
- Changes: `RESTRUCTURE_COMPLETE.md`
