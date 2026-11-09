# EmptyState

The empty state fills a list or panel that has nothing to show; it is the only place where Solaris explains things.

## Anatomy
`.sl-empty`, centred, 32px vertical padding: icon in a 40px `sunken` square (`r-lg`, 20px icon) · title (`fs-lg`, 600) · one short helper line (`text-3`, max 320px) · optional actions (secondary, then primary).

## Kinds
| Kind | Title | Helper line | Action |
|---|---|---|---|
| First use | "No items yet" | what to do, and supported formats or limits | New / Import |
| No results | "No results for "…"" | how to widen the search | Clear filters |
| Filtered empty tab | "Nothing assigned to you" | — | — |
| No access | "You do not have access" | who to ask | Request access |
| Error | use InlineAlert in the list area | | Retry |

## Rules
- This is the place for hints such as supported file types. Do not show them anywhere else.
- One helper line. No illustrations; one Lucide icon.
- Keep the list header and toolbar visible above the empty state.
