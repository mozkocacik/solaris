# Table

The table is the main list view: a bordered, rounded container with a muted header, row hover, checked and open states, and row actions on hover.

## Anatomy
- `.sl-tablewrap`: 1px `border`, `r-lg`, `surface`, scrolls sideways on its own when narrow.
- `<table class="sl-table">`, fixed layout, minimum 640px.
- Header `th`: `size-lg` (32px), `surface-2`, `fs-sm` 500 `text-3`, 1px `border` below. Sortable headers hold `button.sl-sorth`; the `th` carries `aria-sort`.
- Row `td`: `size-row` (38px), `text-3`, 1px `divider` between rows, `space-10` padding.

## Columns, in order
1. Checkbox (`.sl-col-check`, 38px).
2. Name: type badge (24px) + name button (`.sl-namebtn`, `text`, 500) + optional live pill.
3. Product fields: owner (avatar + name), shared with (avatar stack + "+N"), status pill, modified date, a numeric column (`.sl-col-num`, right aligned, tabular).
4. Row actions (`.sl-col-actions`): icon buttons hidden until the row is hovered or holds focus.

## Row states
| State | Look | Trigger |
|---|---|---|
| Hover | `hover` | pointer over row |
| Checked | `hover` (`.is-checked`) | checkbox on; bulk bar shows |
| Open | `selected` (`.is-open`) | the name opens the details panel |
| Focus | 2px `focus` outline on the focused control | keyboard |
| Loading | skeleton rows (see Skeleton) | first load |
| Empty | empty state in the table box (see ListStates) | no rows |

## Behaviour
- Click the name to open the details panel beside the table. Double-click or the Open action opens the object view.
- Selecting rows shows the bulk bar at the bottom centre (see BulkBar).
- Long names truncate with an ellipsis and keep the full text in `title`.

## Accessibility
Use a real `<table>` with `<th>`. Each checkbox names its row. Row actions appear on `:focus-within` so keyboard users reach them. Do not put click handlers on `<tr>`; the name is the button.

## Do / Don't
- Do show the count under the table ("6 of 46 items").
- Don't zebra-stripe rows. Don't colour whole rows by status.
