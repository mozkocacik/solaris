# ConfirmDialog

A confirm dialog asks once before an action that removes data or access.

## Anatomy
`.sl-dialog--sm` (380px) with `role="alertdialog"`: a 32px `red-bg` icon square, a question title ("Delete 2 items?"), one sentence that names what happens, and a footer with Cancel and the danger button (`.sl-btn--danger`) whose label repeats the verb.

## Rules
- Focus starts on Cancel.
- Name the objects and the effect. Say what can be undone ("move to Trash") and what cannot.
- For actions that can be undone, skip the dialog and show a toast with Undo instead.
- For actions on many objects or with no undo, ask the user to type the name.

## Accessibility
`aria-labelledby` → title, `aria-describedby` → sentence. `Esc` equals Cancel.
