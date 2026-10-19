# Dialog

A dialog asks for a short task that must finish before the user goes on, over a dimmed screen.

## Anatomy
- Backdrop `.sl-backdrop`: `overlay`, the dialog sits 72px from the top.
- `.sl-dialog`: `r-xl`, `sh-4`, `surface`. Widths: `--sm` 380px (confirm), default 440px, `--lg` 560px.
- Header: title (`fs-lg`, 600) + close icon button.
- Body: 14px side padding, column gap `space-12`.
- Footer `.sl-dialog__foot`: `surface-2`, 1px `border` top; left side for a secondary tool (Copy link), right side Cancel then the primary action.

## Motion
Backdrop fades over `dur-base`; the dialog rises 10px and scales from .98 over `dur-enter` with `ease-enter`.

## Accessibility
`role="dialog"`, `aria-modal="true"`, `aria-labelledby` → title. Focus goes to the first field (or the primary button), is trapped inside, `Esc` closes, and focus returns to the trigger.

## Do / Don't
- Do prefer a side panel for details and edits that do not block.
- Don't stack dialogs. Don't add a description paragraph under the title.
