# Popover

A popover is a small panel anchored to a control; it holds a few controls or a short summary.

## Anatomy
`.sl-popover`: 280px, `surface`, `r-lg`, `sh-3`, `space-12` padding, column gap `space-10`. `--flush` removes padding for calendars and lists.

## Behaviour
Opens on click (not hover) with a `dur-base` pop; click outside or `Esc` closes and returns focus. Changes inside a filter popover apply on "Apply"; changes in a settings popover apply at once.

## Accessibility
`role="dialog"` with an `aria-label`; the trigger has `aria-haspopup="dialog"` and `aria-expanded`. Focus moves into the popover when opened from the keyboard.
