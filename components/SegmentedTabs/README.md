# SegmentedTabs

Segmented tabs switch between saved filters of one list, and every tab shows its count.

## Anatomy
Track `.sl-tabs`: `sunken`, `r-md`, 2px padding. Tab `.sl-tab`: 24px, `r-sm`, icon (12px) + label (500) + `.sl-count` (`fs-xs`, `text-4`, tabular). The selected tab gets `surface` fill, `text` and `sh-tab`.

## Behaviour
- Switching a tab swaps the list content with a `dur-base` fade. It keeps the sort and the search.
- Counts update when filters change. A count of 0 still shows "0".
- On narrow screens the track scrolls sideways inside itself.

## Accessibility
`role="tablist"` with an `aria-label`; tabs `role="tab"`, `aria-selected`, roving `tabindex`. Arrow keys move and select.

## Do / Don't
- Do use three to five tabs. Do start with "All".
- Don't use segmented tabs for panel sections; use UnderlineTabs.
