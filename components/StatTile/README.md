# StatTile

A stat tile shows one key figure with a label and its change.

## Anatomy
`.sl-stat` card (1px `border`, `r-lg`, `space-12` padding): label row (icon + `fs-sm` `text-3`) · value (22px, 600, tabular) · delta (`fs-xs`): `--up` `green-fg`, `--down` `red-fg`, neutral `text-4`.

## Rules
- Up is not always good: colour the delta by meaning (more overdue items is `--down` styling even when the number rises).
- The delta always includes words or an arrow, never colour alone.
- Use tiles only when the figures are the point of the screen, such as an operational dashboard. Lists do not need tiles.
