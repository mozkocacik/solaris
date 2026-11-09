# SortButton

The sort button shows the current sort field and direction of a list and opens a menu to change them.

## Anatomy
A `.sl-chip` with a solid border: arrow-up-down icon (12px) · field name · direction arrow in `text-4` (↑ ascending, ↓ descending). Height `size-sm`.

## Behaviour
- Click opens a `.sl-menu` with two radio groups: the field and the direction.
- In a table, the column headers also sort (`button.sl-sorth` inside `th`, `aria-sort` on the `th`). Keep the sort button and headers in sync.
- Place it at the right end of the list toolbar, after a `.sl-vsep` divider.

## States
Hover `hover` fill with `border-strong`; open `aria-expanded="true"`; focus-visible 2px `focus` outline.

## Accessibility
- The direction arrow has an `aria-label` ("newest first", "A to Z").
- The menu uses `role="menu"` and `menuitemradio` with `aria-checked`. Arrow keys move between items; `Esc` closes.

## Do / Don't
- Do default to "Modified, newest first" for most lists.
- Don't use a dashed border: dashed means "add".
