# Pagination

Pagination sits under a list and shows how many items are visible, with previous and next buttons.

## Anatomy
`.sl-pagination`: count text (`fs-sm`, `text-4`, tabular) at the left; `.sl-pagebtn` pair (26px, `r-sm`, 1px `border`) at the right.

## Text
"10 of 46 items" on the first page; "11–20 of 46 items" after that. Use the object noun of the list ("records", "members") when the product knows it.

## States
A button is `disabled` at the first or last page (`text-5`). Hover: `hover` + `border-strong`.

## Accessibility
`aria-label="Previous page"` / `"Next page"`. After a page change, keep focus on the button and announce the new range with a polite live region.
