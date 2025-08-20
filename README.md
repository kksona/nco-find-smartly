## NCO Smart Search — AI-Powered Occupation Code Search

### Depolyed URL : [Live Demo](https://nco-find-smartly-e6lw57jpr-jaisimha-ks-projects.vercel.app)

### Overview
NCO Smart Search helps users find relevant NCO-2015 occupation codes using a fast, user-friendly interface and intelligent matching (exact, synonym-based, and typo-tolerant fuzzy search).

### Features
- Intelligent search: exact match, rich synonyms, and typo tolerance (Damerau–Levenshtein)
- Polished UI built with shadcn-ui + Tailwind CSS
- Subtle, professional micro-animations (no flashy effects)
- Mock dataset covering a broad set of roles for realistic demos

### Tech Stack
- React + TypeScript (Vite)
- shadcn-ui (Radix primitives)
- Tailwind CSS (+ tailwindcss-animate)

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install
```bash
npm install
```

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

## Project Structure
```text
src/
  components/
    HeroSection.tsx
    SearchBar.tsx
    SearchResults.tsx
    ui/*
  data/
    mockResults.ts         # roles dataset + search logic
  pages/
    Index.tsx
  lib/
    utils.ts
public/
  mylogo.png               # custom favicon (you provide)
  placeholder.svg
  robots.txt
index.html                 # favicon links + meta
```

## Search Behavior
Search is powered by a hybrid approach implemented in `src/data/mockResults.ts`:
- Token overlap across title, description, category, and relatedTerms
- Synonym expansion (e.g., RN → nurse, frontend → software engineer)
- Typo tolerance using Damerau–Levenshtein distance (e.g., "sofware enginer")

### Example queries to demo
- Typos: `sofware enginer`, `eletrician`, `acountent`, `weldding`, `registred nurs`
- Synonyms/aliases: `RN`, `frontend developer`, `product owner`, `brand manager`, `CSR`, `joiner`
- Related phrases: `build dashboards sql`, `design bridges and roads`, `install water pipes`, `deploy ml pipelines`

## Favicon / Tab Icon
Place your custom icon at `public/mylogo.png` and ensure it’s referenced in `index.html`:
```html
<link rel="icon" type="image/png" href="/mylogo.png?v=1" />
```
Recommended sizes: 256×256 or 512×512 PNG. After replacing, hard refresh the browser (Ctrl+Shift+R).

## Deployment
This app runs well on platforms like Vercel/Netlify.
- For Vercel: import the repo, framework preset “Vite”, default build `npm run build` and output `dist/`.
- Post-deploy, verify the favicon and search behavior on the live URL.

## Scripts
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview build locally

## License
MIT
