# CORE Landing Page

Modern landing page for CORE (Cognitive Objects Representation Engine) - AI object memory middleware.

## Features

- Modern React + TypeScript + Vite setup
- Tailwind CSS for styling
- Responsive design
- Authentication pages
- Documentation section
- Interactive demo integration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
corelandingpage-main/
├── components/          # React components
│   ├── About.tsx
│   ├── AuthModal.tsx
│   ├── AuthPage.tsx
│   ├── Benefits.tsx
│   ├── CTA.tsx
│   ├── DocsPage.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ProblemSection.tsx
│   ├── PromptMarketing.tsx
│   ├── SolutionSection.tsx
│   └── UseCases.tsx
├── src/
│   └── index.css        # Global styles with Tailwind
├── App.tsx              # Main app component
├── index.tsx            # Entry point
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Tech Stack

- React 19.2.4
- TypeScript 5.8.2
- Vite 6.2.0
- Tailwind CSS 3.4.17
- PostCSS & Autoprefixer

## Development

The app runs on `http://localhost:3000` by default. Hot module replacement is enabled for fast development.
