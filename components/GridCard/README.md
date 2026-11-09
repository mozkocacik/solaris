# GridCard

A grid card shows one object with a small preview of its kind; use the grid view when the look of objects helps people find them.

## Anatomy
- `.sl-card`: 1px `border`, `r-lg`, `surface`, clipped.
- Preview `.sl-card__thumb`: 104px on `sunken`, holding a mini page that shows the object kind.
- Footer `.sl-card__foot`: 1px `divider` top, type badge (`--sm`, 20px) + name (500) + meta line (`fs-xs`, `text-4`).
- Overlay: selection checkbox (top left), floating actions (top right), optional live pill (bottom left).

## Preview kinds
| Kind | Markup | Shows |
|---|---|---|
| Page | `.sl-mini` + `__h`, `__s`, `__l`, `__block` | text lines and a block |
| Table | `.sl-mini.sl-tint--{hue}` + `__rows` | header band and rows, some cells tinted |
| Diagram | `.sl-mini` + `__canvas` | grid paper with boxes and a connector |
| Chart | `.sl-mini.sl-tint--{hue}` + `__bars` | bars in the type's hue |
| Form | `.sl-mini` + `__field` | labels and fields |
| Collection | `.sl-mini-stack` | two tilted sheets over a container block |
| Fallback | `.sl-mini-icon` | one large outline icon |

Products add kinds in the same style: shapes from `paper`, `line`, `border-strong` and one tint. No real images of content are required; when a real thumbnail exists, show it in the same 104px box.

## States
Hover: `sh-2`, `border-strong`, 2px lift, overlay controls appear · checked (`.is-checked`): `border-strong`, checkbox stays visible · open (`.is-open`): `text-4` border with the `ring-open` soft ring, no lift · focus: `focus` outline on the main button.

## Grid
`.sl-cardgrid`: `repeat(auto-fill, minmax(176px, 1fr))`, gap `space-10`.

## Accessibility
The whole card body is one `<button>` that opens details ("Show details for …"). Checkbox and action buttons are siblings, not nested inside it.
