# ChartColors

Charts use the category hues in a fixed order, `divider` gridlines and `text-4` axis labels.

## Series order
1 `blue` · 2 `green` · 3 `amber` · 4 `red` · 5 `violet` · 6 `orange`. Use classes `.sl-s1` … `.sl-s6` on SVG marks, `.sl-fill--{hue}` on HTML legend swatches.

When a series has a meaning (errors, success), use its semantic hue instead of the order.

## Marks
- Gridlines: `.sl-grid` (`divider`, 1px). Baseline: `.sl-axis` (`border`).
- Axis and tick labels: `fs-xs`, `text-4`, tabular numbers.
- Lines 2px, round joins, with a 3.5px dot on the last point. Bars with 1px radius and 2px gaps.
- No gradients, no 3D, no shadows on marks.

## Accessibility
- More than three series: always show a legend with words; never rely on hue alone.
- Neighbouring hues differ in lightness. For dense charts, add direct labels or patterns.
- Give each SVG `role="img"` and an `aria-label` that states what it shows; add a table view for exact values.
