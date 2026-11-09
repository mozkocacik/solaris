# Textarea

A textarea takes several lines of text, such as a description or a reason.

## Anatomy
`.sl-textarea`: same border, radius and fill as TextInput; minimum 72px high; `space-6` / `space-8` padding; vertical resize only.

## States
Default, hover, focus-visible, error (`aria-invalid`), read only, disabled: as TextInput.

## Do / Don't
- Do use the CommentComposer for comments; it adds mention, attach and send.
- Don't show a character counter unless a limit exists. When it does, show it only near the limit (last 10%).
