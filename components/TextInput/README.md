# TextInput

A text input takes one line of text; it always has a label.

## Anatomy
`.sl-input`: `size-md` (28px) high, `space-8` side padding, 1px `border`, `r-md`, `surface`, `text`. Placeholder in `text-4`. Use `.sl-input--lg` (32px) in dialogs that hold a single field.

## States
| State | Look |
|---|---|
| Default | `border` |
| Hover | `border-strong` |
| Focus-visible | 2px `focus` outline, 1px offset |
| Error | `aria-invalid="true"` → `red` border; message below (see FormField) |
| Read only | `surface-2` fill, text stays `text` |
| Disabled | `surface-2` fill, `text-5`, `not-allowed` |

## Labels
- Always pair with `<label for>`. Hide the label with `.sl-sr` only when the context names the field (a search box, a reply box).
- Mark optional fields with `.sl-label__opt` ("Optional"). Required is the default, so it needs no mark.
- No permanent hint text under the field. A placeholder may show a format ("REC-0000"), never an instruction.

## Do / Don't
- Do keep inputs at full width of their column.
- Don't use a placeholder as the label.
