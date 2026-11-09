# CommandPalette

The command palette (⌘K) finds items and runs actions from the keyboard.

## Anatomy
`.sl-palette`: `size-dialog-lg` (560px), `r-xl`, `sh-4`, over the `overlay` backdrop at 72px from the top. Input row (44px, 14px text) · result list (max 320px) grouped by `.sl-menu__label` · footer on `surface-2` with key hints.

## Results
Items show type badge + name + location and date. Actions show an icon + verb phrase + shortcut. The first result is active. Group order: recent items (empty query), items, people, actions.

## Behaviour
`⌘K` / `Ctrl K` opens from anywhere. `↑` `↓` move, `Enter` runs, `Esc` closes and returns focus. Empty query shows recent items. No results: one empty-state line with the query.

## Accessibility
`role="dialog"` + `aria-modal`; the input is a `combobox` controlling a `listbox` with `aria-activedescendant`. Focus is trapped while open.
