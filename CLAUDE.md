# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server (localhost:3000)
npm run build      # Production build
npm test           # Run all tests (Jest / React Testing Library)
npm test -- --testPathPattern=App  # Run a single test file
npm run lint       # ESLint check
npm run lint:fix   # ESLint auto-fix
npm run format     # Prettier format src/**
npm run deploy     # Build + publish to GitHub Pages
```

Husky runs `lint-staged` on pre-commit (ESLint fix on staged JS files).

## Architecture

This is a Create React App (react-scripts) project — a scrollable historical timeline for the Model Peril Collective, deployed to GitHub Pages.

### Data flow

All content lives in **`src/content/content.json`** as a flat `stories` array. The `App` component reads this file, derives unique years, and renders a `Year → Story → Artifact` component hierarchy.

A `Story` object shape:

```json
{
  "date": { "day": "7", "month": "August", "year": "1869" },
  "title": "...",
  "subtitle": "...",
  "forms": [{ "type": "image|paragraph|quote|highlight|popout", "content": "..." }],
  "ignore": false
}
```

- Stories with `"ignore": true` are filtered out at render time.
- Image `content` values are filenames resolved from `src/content/timelineImages/` via `require()` in `Artifact.tsx`.

### Component lazy-loading

All components are registered in **`src/components/index.ts`** (`ComponentFactory`) and lazy-loaded with `React.lazy`. When adding a new component, register it in `ComponentFactory` to maintain this pattern.

### Key components

| Component | Role |
| --- | --- |
| `App` | Reads content.json, derives sorted year list, orchestrates layout |
| `Year` | Renders all stories for one year; tracks scroll to animate the year-bar fill for the last year |
| `Story` | GSAP `ScrollTrigger` fade/slide animations on each artifact as it enters the viewport |
| `Artifact` | Renders a single content unit; images are randomly floated left or right |
| `Timeline` | Scroll-progress bar (separate from Year) |
| `Spotify` | Sticky compact player; visibility controlled by `useInView` on hero/timeline/footer refs |

### Styling

SCSS modules per component (e.g., `Story.module.scss` alongside `Story.tsx`). Global fonts are declared in `src/assets/fonts/fonts.scss`.

Prettier config: single quotes, 2-space indent, 100-char print width, trailing commas (ES5).

### ArtifactType enum

Defined in `src/components/artifact/Artifact.tsx` and re-exported from `src/components/index.ts`:

- `paragraph`, `image`, `quote`, `highlight`, `popout`
