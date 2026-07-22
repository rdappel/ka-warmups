# Karate Warm-Ups

A static site of pre-class warm-up routines for adult karate classes, built with [Astro](https://astro.build). Live at **https://rdappel.github.io/ka-warmups/**.

## What this is

Ten structured, 10–12 minute warm-up routines, each built from a shared library of individual exercises (raising body temperature, joint mobility, dynamic activation, karate integration, and finish/reset stretches). The goal, per the [warm-up philosophy](src/content/warmups/overview.md), is to prepare students for class without exhausting them before it starts — routines should work for mixed-rank, mixed-age adult classes.

Key features:

- **Routine pages** — each routine lists its exercises in five phases, with a suggested reps/time value per exercise (e.g. "8 reps per side", "30 seconds").
- **Exercise instructions** — a shared, alphabetical library of exercise write-ups, reused across routines.
- **Modification/alternate tracking** — exercises meant as lower-impact or injury-friendly substitutes are tagged with `alternateFor` in their frontmatter, pointing back at the exercise(s) they stand in for. Routine pages show a small ⇄ marker next to any exercise that has a tagged alternate, and both the routine and exercise pages list them automatically — there's a single source of truth, no manually maintained "see also" lists.
- **Demo Mode** — a full-screen, swipeable, one-exercise-at-a-time view on each routine page, meant for an instructor to reference on a phone/tablet while demonstrating. Swipe left/right (or use the arrows/arrow keys) to move through the routine; each slide shows the phase, exercise name, description, reps/time, and any alternates.

## Development

```
npm install
npm run dev       # start the dev server
npm run build     # build the static site to dist/
npm run preview   # preview the production build locally
```

Requires Node >= 22.12.

## Content structure

Routines and exercises are plain Markdown files — there's no CMS or database. Everything is read via `import.meta.glob` at build time (see `src/pages/`).

```
src/content/warmups/
├── overview.md              # warm-up philosophy, shown on the home page
├── routines/                # one file per routine, e.g. 01-general-mobility.md
└── exercises/
    ├── 01-raise-temp/        # cardio / heart-rate-raising moves
    ├── 02-joint-mobility/     # circles, turns, twists
    ├── 03-dynamic/            # dynamic mobility & activation
    ├── 04-karate-integration/ # punches, kicks, blocks, stances
    └── 05-finish-reset/       # stretches, breathing, cooldown
```

**Routines** (`src/content/warmups/routines/*.md`) are Markdown with `title`/`theme`/`time` frontmatter, followed by five `### N. Phase Name` sections, each an ordered list of exercise links:

```markdown
### 1. Raise Body Temperature
1. [Jog in Place](/exercises/jog-in-place/) (30 seconds)
2. [Jumping Jack with Jab](/exercises/jumping-jack-jab/) (30 seconds)
```

Exercises are numbered sequentially 1–16 across the whole routine (not restarting per phase).

**Exercises** (`src/content/warmups/exercises/**/*.md`) are single Markdown files with a `title` and a short instructional body, optionally with a `**Modification:**` note for an easier in-place variation. An exercise that exists specifically as a lower-impact substitute for another tags itself with `alternateFor`:

```markdown
---
title: "Squat Thrusts"
alternateFor: ["burpees"]
---

Squat down, place hands on the floor, step or hop both feet back to a plank, then return to standing without a push-up or jump.
```

An exercise's folder (category) determines which phase of a routine it's meant to appear in — e.g. an exercise in `01-raise-temp/` should only be used in a routine's "Raise Body Temperature" phase.

## Deployment

Pushes to `master` are built and deployed to GitHub Pages automatically via `.github/workflows/astro.yml`.
