# AGENTS.md

## Project Goal

Build an internal Astro website for adult karate warm-up routines. The site should be easy for instructors to browse on a phone/tablet and should also print cleanly to PDF.

## Content Source

Markdown files are the source of truth.

Suggested structure:

```txt
src/content/warmups/
  overview.md
  routines/
    01-general-mobility.md
    02-kicking-mobility.md
    ...
```

## Content Guidelines

- Preserve the routine structure:
  1. Raise Body Temperature
  2. Joint Mobility
  3. Dynamic Mobility & Activation
  4. Karate Integration
  5. Finish / Reset
- Keep routines around 10-12 minutes.
- Use descriptive exercise names.
- Avoid vague labels like "mobility" when a specific movement name is clearer.
- Keep every routine equipment-free.
- Include small-space options where needed.
- Include modifications for higher-impact or higher-intensity exercises.
- Karate integration should use fundamental techniques only.

## Astro Implementation Notes

- Use content collections for routines if helpful.
- Each routine page should show:
  - title
  - theme
  - estimated time
  - overview
  - instructor notes
- Create a print/export route or print-friendly layout for each routine.
- Consider a combined "Print All" page that renders all routines in order.

## Styling Goals

- Clean, readable, instructor-friendly.
- Works well on mobile.
- Prints beautifully to PDF.
- Avoid dark backgrounds for print.
- Use page breaks between routines when printing all routines.
- Overview sections should be glanceable.
- Instructor notes should be readable but not visually overwhelming.

## Do Not

- Add equipment requirements.
- Add partner drills.
- Add advanced karate techniques into warm-ups.
- Turn warm-ups into conditioning workouts.
- Remove modifications from challenging movements.
