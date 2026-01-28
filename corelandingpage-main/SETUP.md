# Setup Instructions

This landing page has been migrated from AI Studio CDN imports to a proper npm-based setup.

## What Changed

### Before (AI Studio):
- Used `https://cdn.tailwindcss.com` for Tailwind CSS
- Used `https://esm.sh` CDN for React imports via importmap
- No proper build process

### After (Proper Setup):
- Tailwind CSS installed via npm with PostCSS
- React and React-DOM as npm dependencies
- Proper Vite build configuration
- TypeScript support
- Hot module replacement for development

## Installation Steps

1. **Navigate to the landing page directory:**
   ```bash
   cd corelandingpage-main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:3000`

4. **Build for production:**
   ```bash
   npm run build
   ```
   
   Output will be in the `dist/` folder

## Configuration Files Added

- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration for Tailwind
- `src/index.css` - Global styles with Tailwind directives

## Troubleshooting

### Port already in use
If port 3000 is already in use, Vite will automatically try the next available port.

### Module not found errors
Make sure you've run `npm install` in the `corelandingpage-main` directory.

### Tailwind classes not working
Ensure the build process is running (`npm run dev`) and that `src/index.css` is imported in `index.tsx`.
