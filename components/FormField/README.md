# FormField

A form field groups a label, one control and an error message that appears only when it applies.

## Anatomy
`.sl-field` (column, gap `space-6`) · `.sl-label` (`fs-sm`, 500, `text-2`; optional mark `.sl-label__opt`) · control · `.sl-error` (`fs-sm`, `red-fg`, alert icon), hidden until there is an error. Space fields 14px apart.

## Validation
- Validate on blur and on submit, not on every key press.
- Set `aria-invalid="true"` on the control and link the message with `aria-describedby`.
- The message says what is wrong and how to fix it, in one sentence.
- On submit with errors, move focus to the first invalid field.

## No helper text
Never place permanent hints or format notes under a field. If a format matters, show it as the placeholder or accept several formats. An error message is not helper text: it appears only when it applies.

## Layout
One column. Actions at the bottom right: secondary then primary. In dialogs the actions sit in the dialog footer.
