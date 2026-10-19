# LivePill

The live pill marks an item that someone is working on right now, or a process that is running.

## Anatomy
`.sl-live`: 18px, `r-pill`, `green-bg` / `green-fg`, `fs-xs`; a 5px `green` dot with a soft pulse ring (`pulse` token, `dur-pulse`).

## Rules
- Show the first name of the person, with the full name in `title` ("Oskar Lind is editing").
- Place it after the name in a table row, or at the bottom left of a card preview.
- Remove it within a few seconds after the activity stops.

## Motion
The pulse is the only looping animation in Solaris. With `prefers-reduced-motion: reduce` the dot is static.
