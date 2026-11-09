# FilterChip

Filter chips narrow a list: a dashed chip adds a filter, a solid chip shows one that is applied and removes it.

## Anatomy
- **Add chip** `.sl-chip.sl-chip--add`: 1px dashed `border-strong`, `surface` fill, plus icon (12px), field name.
- **Applied chip** `.sl-chip.sl-chip--applied`: `sunken` fill, field name in `text-3` (`.sl-chip__key`), value in `text`, optional avatar or dot, remove button (`.sl-chip__x`, 20px).

Height `size-sm` (26px), radius `r-md`, gap `space-6`.

## Behaviour
- The add chip opens a menu of fields, then a menu or combobox of values. When a value is picked, the dashed chip becomes a solid chip at the same place.
- Several values of one field collapse to "N selected".
- Show "Clear" (ghost, small) when two or more chips are applied.
- Applied filters change the counts in tabs and the pagination text.

## States
Hover: `hover` fill with `border-strong` (add chip) or `border-strong` border (applied). Focus-visible: 2px `focus` outline. The remove button turns `selected` on hover.

## Accessibility
- The remove button names the filter: `aria-label="Remove filter Type: Form"`.
- After removal, move focus to the next chip or to the add chip.

## Do / Don't
- Do keep chips in the list toolbar, after the segmented tabs.
- Don't explain filters with helper text; the chip label is enough.
- Don't colour chips by value.
