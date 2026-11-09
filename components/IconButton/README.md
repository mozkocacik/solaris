# IconButton

An icon button runs one action from a toolbar, header or row when space is tight; it is transparent until hovered.

## Anatomy
Square container (`size-md`, `r-md`, no border) · one Lucide icon (16px in the top bar, 14px in rows) · optional notification dot (`red`, 6px, ringed with `surface`).

## Sizes
- Default `.sl-iconbtn`: 28px. Top bar, panel headers, toolbars.
- `.sl-iconbtn--sm`: 26px, `r-sm`. Table row actions, composer toolbar.
- `.sl-iconbtn--xs`: 22px. Toast and chip close buttons.

## States
Default `text-3` · hover `sunken` fill with `text` · pressed or open (`aria-pressed="true"` / `aria-expanded="true"`) keeps the `sunken` fill · focus-visible 2px `focus` outline · disabled `text-5`, no fill.

The star toggle adds `.sl-star`: when `aria-pressed="true"` the icon fills with `amber`. The fill is the signal; the colour supports it.

## Tooltip
Wrap the button in `.sl-tip` and add `<span class="sl-tooltip" role="tooltip">`. The tooltip shows after 300ms on hover and at once on keyboard focus. Add a `.sl-kbd` when the action has a shortcut.

## Accessibility
- Always set `aria-label`; the tooltip repeats it for sighted users.
- A button with a dot states the count in its label ("Notifications, 2 new").
- In touch layouts the hit area grows to `size-touch` (44px) without a visual change.

## Do / Don't
- Do pair every icon-only button with a tooltip.
- Don't use an icon button for the primary action of a view.
- Don't invent icons: use the Lucide set (see Icons).
