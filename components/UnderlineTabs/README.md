# UnderlineTabs

Underline tabs switch the sections of a side panel or an object view.

## Anatomy
Row `.sl-utabs` with a 1px `border` bottom line, gap `space-16`. Tab `.sl-utab`: `size-row` (38px) high, icon (12px) + label (500) + optional count `.sl-utab__n` (`sunken` chip). Selected: `text` and a 2px `primary` underline. Others: `text-4`.

## Behaviour
Panels swap with a `dur-base` fade. The selected tab is kept per object while the user stays on the screen.

## Accessibility
`role="tablist"` / `tab` / `tabpanel`, `aria-selected`, `aria-controls`, `aria-labelledby`, roving `tabindex`, arrow keys.
