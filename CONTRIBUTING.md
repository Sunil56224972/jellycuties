# Contributing to Jelly Zoo

Thanks for your interest in contributing! Here's how to get started.

## Development Setup

1. Fork and clone the repo
2. Run `npm install`
3. Run `npm run dev` to start the dev server
4. Make your changes in the `src/` directory

## Code Style

- Use ES modules (`import`/`export`)
- Use JSDoc comments for public modules and functions
- Keep functions focused and avoid per-frame allocations inside the animation loop
- Prefer `const` over `let`, avoid `var`

## Adding a New Animal Species

1. Add the species name to `SPECIES_NAMES` and its SDF definition to `SPECIES_DEFS` in `src/models/species.js`
2. Compose the silhouette with smooth-blended primitives (`primSphere`, `primEllipsoid`, `primCapsule`, `primCone`)
3. Add color patches, face anchor angles, mouth style, and base musical pitch
4. Test interactions (poke, squash, drag, pet) on both desktop and mobile

## Submitting Changes

- Create a descriptive branch name
- Write clear commit messages
- Run `npm run build` to verify the production build succeeds cleanly
- Include screenshots if adding visual changes
