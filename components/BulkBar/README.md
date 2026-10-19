# BulkBar

The bulk bar appears at the bottom centre when one or more items are selected and holds the actions for all of them.

## Anatomy
`.sl-bulkbar` on `bar` (dark in every theme), `on-bar` text, `r-lg`, `sh-3`: count ("3 selected", 600, tabular) · action buttons (`bar-btn`, 26px, icon + label): Share, Move, Export · Delete (`bar-danger-bg` / `bar-danger-fg`) · clear button (`on-bar-2`).

## Behaviour
- Rises from 10px below with a small scale over `dur-enter` when the first item is checked; hides when the selection is cleared.
- The count updates live. `Esc` clears the selection.
- Delete opens a ConfirmDialog. Other actions keep the selection until they finish.

## Accessibility
`role="toolbar"` with `aria-label="Selection actions"`. Announce the count in a polite live region. Focus outline on the bar uses `on-bar`.
