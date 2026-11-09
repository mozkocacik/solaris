# Checkbox

A checkbox turns one option on or off, or selects rows and cards.

## Anatomy
`.sl-check`: 14px square, `r-xs`, 1px `border-strong`, `surface`. Checked: `primary` fill with an `on-primary` tick. Mixed (`indeterminate`): `primary` fill with a dash. Wrap with `.sl-choice` (a `<label>`) for a text label, gap `space-8`.

## States
Hover `text-4` border · focus-visible 2px `focus` outline · error `aria-invalid="true"` → `red` border · disabled `surface-2` / `border`, label `text-5`.

## In lists
- The header checkbox of a table is mixed when some rows are checked.
- A checked row gets `.is-checked` (`hover` fill) and the bulk bar appears.

## Accessibility
Use a native `<input type="checkbox">`. Table checkboxes need a label that names the row: `aria-label="Select Vendor contacts"`.
