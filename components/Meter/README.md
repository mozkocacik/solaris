# Meter

A meter shows how much of a limit is used: storage, seats or a quota.

## Anatomy
`.sl-meter`: 4px track (6px with `--lg`), `border-strong`, rounded. Segments are `<span>` with a `.sl-fill--{hue}` class and a width. In the sidebar it sits in a `.sl-usage` card (`sunken`, `r-md`) with a label row.

## Colour
- One segment: `blue` up to 80%, `amber` from 80%, `red` at or over the limit.
- Several segments: use the chart order (blue, violet, green …) and show a legend near the meter when the parts matter.

## Accessibility
`role="meter"` with `aria-valuemin`, `aria-valuemax`, `aria-valuenow` and a readable `aria-valuetext`. The numbers are always shown as text next to the bar.
