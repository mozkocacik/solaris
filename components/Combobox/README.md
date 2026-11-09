# Combobox

A combobox is an input with a filtered list below it; use it for people, groups and long value lists.

## Anatomy
`.sl-inputbox` with an optional leading avatar or dot, the text input (`role="combobox"`) and a chevrons icon · popup `.sl-menu` holding `.sl-listbox` · options `.sl-option` (28px, or two-line with `.sl-stack2`) with a trailing check for the selected value.

## Behaviour
- Typing filters options. The first match is active (`data-active`, `hover` fill).
- `↑` `↓` move the active option, `Enter` selects, `Esc` closes and keeps the old value.
- Multi-select keeps the popup open and shows the picked values as applied chips in the input.
- No match shows one line in `text-4`: "No people match "K"". This is an empty state, not helper text.

## Accessibility
`role="combobox"`, `aria-expanded`, `aria-controls` → listbox, `aria-activedescendant` → active option, `aria-selected` on options. Focus stays in the input.
