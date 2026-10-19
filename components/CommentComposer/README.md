# CommentComposer

The comment composer writes a comment or reply, with mentions and attachments.

## Anatomy
`.sl-composer` frame (1px `border`, `r-md`) · borderless textarea (64px minimum) · toolbar `.sl-composer__bar` on `surface-2` with a `divider` top line: mention and attach icon buttons (22px, `text-4`), spacer, send button (`.sl-sendbtn`, 26px, `primary`).

## Behaviour
- Send is disabled while the text is empty.
- `⌘ Enter` / `Ctrl Enter` sends. `@` opens a people combobox at the caret.
- After send, clear the box, keep focus in it, and add the comment to the list with a short fade.

## Accessibility
The textarea has a label (visible "Comment" heading, or `.sl-sr` "Reply"). Icon buttons have `aria-label`s.
