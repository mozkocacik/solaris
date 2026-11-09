# TypeBadge

A type badge names the kind of an object with a 2 to 4 character code in Geist Mono on a category tint.

## Anatomy
Square, `r-sm`; Geist Mono 500, 9px (sm 7.5px, lg 10px); fill `{hue}-bg`, text `{hue}-fg`.

## Sizes
`--sm` 20px (grid card footer) · default 24px (table rows, lists) · `--lg` 38px with `r-lg` (details panel title row).

## Mapping types to tints
Solaris does not fix which type gets which hue. Each product writes one stable table and documents it, for example:

| Code | Type | Tint |
|---|---|---|
| PG | Page | blue |
| TB | Table | green |
| FM | Form | amber |
| RP | Report | red |
| DG | Diagram | violet |
| DS | Dataset | orange |
| CL | Collection / any container | neutral (`sunken` + `text-2`) |

Rules: containers always use neutral. Never reuse a hue for two types in the same product. The code carries the meaning, so the type never depends on colour alone.

## Accessibility
Give the badge `title` with the full type name, or put the type in the row's accessible name. Every `{hue}-fg` on `{hue}-bg` pair meets 4.5:1 in all three themes.
