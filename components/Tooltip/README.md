# Tooltip

A tooltip shows a short name for an icon button, a truncated label or an avatar.

## Anatomy
`.sl-tooltip`: `bar` fill, `on-bar` text, `fs-xs` 500, `r-sm`, 3px × 7px padding. Optional `.sl-kbd` with the shortcut. Above the target by default; `--below` places it under.

## Behaviour
Appears after 300ms of hover, at once on keyboard focus; hides on leave, blur or `Esc`. Never holds links or buttons; use a Popover for that.

## Accessibility
`role="tooltip"`. The target already has the same text as its `aria-label`, so the tooltip adds nothing for screen readers.

## Do / Don't
- Do keep it to one to four words.
- Don't use a tooltip to explain a feature. Solaris has no helper text outside empty states.
