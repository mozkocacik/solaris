# ListStates

Every list has five states: filled, filtered and sorted, loading, empty and error. The header and toolbar stay visible in all of them.

## Filtering and sorting
Segmented tabs (saved filters with counts) · applied filter chips · dashed add chip · "Clear" when two or more filters apply · a divider · the sort button. Tab counts and the pagination text follow the filters.

## Loading
Skeleton rows in the real layout inside the list box (`aria-busy="true"`). After 150ms only; never a page spinner. Paging and refresh keep the old rows visible and show a 2px progress line under the toolbar instead.

## Empty
- First use: EmptyState with what to do, supported formats and New / Import.
- Empty after a filter or search: "No … match these filters" + Clear filters.
- Empty tab: title only ("Nothing assigned to you").

## Error
InlineAlert (`--error`) in place of the rows: what failed and Retry. Keep the toolbar active so the user can change filters.
