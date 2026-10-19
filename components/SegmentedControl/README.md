# SegmentedControl

A segmented control picks one option from two to five, such as the list view or the theme.

## Anatomy
Track `.sl-seg`: `surface`, 1px `border`, `r-md`, 2px inner padding. Items `.sl-seg__item`: 22px high, `r-sm`, icon (12px) or short label (`fs-sm`, 500). The checked item gets `sunken` fill and `text`.

## Variants
- **Icon only:** view toggles (table, grid, board) and the theme switcher (sun, sunset, moon). Each item has `aria-label` and `title`.
- **Label:** ranges and small option sets.

The theme switcher is this control with `data-sl-theme-switch`; `Solaris.setTheme()` sets `data-theme` on the app root and animates colours over `dur-theme`.

## States
Unchecked `text-4` · hover `text` · checked `sunken` + `text` · focus-visible 2px `focus` outline · disabled `text-5`.

## Accessibility
`role="radiogroup"` with an `aria-label`; items are `role="radio"` with `aria-checked`. Only the checked item is in the tab order; arrow keys move and select.

## Do / Don't
- Do use it for views of the same data. Use segmented tabs (`.sl-tabs`) for list filters with counts.
- Don't put more than five items in it. Don't mix icon and label items.
