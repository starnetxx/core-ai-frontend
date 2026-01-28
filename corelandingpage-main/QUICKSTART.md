# Quick Start Guide

## ✅ Setup Complete!

The landing page has been successfully migrated from AI Studio CDN to a proper npm-based setup.

## What Was Fixed

1. **Removed CDN dependencies:**
   - ❌ `https://cdn.tailwindcss.com`
   - ❌ `https://esm.sh` React imports
   
2. **Added proper npm packages:**
   - ✅ Tailwind CSS 3.4.17
   - ✅ PostCSS & Autoprefixer
   - ✅ React & React-DOM as dependencies
   - ✅ TypeScript types

3. **Created configuration files:**
   - ✅ `tailwind.config.js`
   - ✅ `postcss.config.js`
   - ✅ `src/index.css`

4. **Updated entry point:**
   - ✅ `index.html` now properly loads `/index.tsx`
   - ✅ CSS imports added to `index.tsx`

## Running the App

### Development Mode
```bash
cd corelandingpage-main
npm run dev
```
Opens at `http://localhost:3000`

### Production Build
```bash
npm run build
```
Output in `dist/` folder

### Preview Production Build
```bash
npm run preview
```

## File Structure

```
corelandingpage-main/
├── components/          # All React components
├── src/
│   └── index.css       # Tailwind CSS imports
├── App.tsx             # Main app
├── index.tsx           # Entry point (imports CSS)
├── index.html          # HTML template (loads index.tsx)
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS for Tailwind
├── vite.config.ts      # Vite build config
└── package.json        # Dependencies
```

## Next Steps

1. Run `npm run dev` to start development
2. Make changes to components in `components/` folder
3. Styles are in `src/index.css` and inline Tailwind classes
4. Build with `npm run build` when ready to deploy

## Deployment

The built files in `dist/` can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

Just upload the contents of the `dist/` folder after running `npm run build`.
