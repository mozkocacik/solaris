# SearchField

The search field filters the current list, or opens the command palette when it shows the ⌘K hint.

## Anatomy
`.sl-inputbox` wrapper (28px, 1px `border`, `r-md`) · search icon (12px, `text-4`) · `<input type="search">` · trailing `.sl-kbd` hint or a clear button (`.sl-chip__x`).

## Variants
- **Global (sidebar):** shows `⌘K`. A click or the shortcut opens the command palette.
- **List search:** filters rows as the user types (debounce 150ms). Shows a clear button when it has a value. The placeholder names the scope: "Search in Partners".

## States
Hover `border-strong` · focus-within 2px `focus` outline on the wrapper · disabled `.sl-inputbox--disabled`.

## Accessibility
Give the input a label (visually hidden with `.sl-sr`). The clear button has `aria-label="Clear search"`. When a search returns nothing, show the empty state with the query in its title.
