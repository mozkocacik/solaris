# Pager

The compact pager steps through the items of a list without leaving the side panel.

## Anatomy
Previous icon button (22px) · `.sl-pager` text "02 of 10" (`fs-xs`, `text-4`, the position in `text` 500, two digits) · next icon button.

## Behaviour
- Steps follow the current list order, filters and sort.
- It wraps from the last item to the first.
- The open row in the list follows the pager (`.is-open`) and scrolls into view.
- `J` / `K` or `↑` / `↓` with the panel focused also step.

## Accessibility
Buttons say "Previous item" and "Next item". The position text is part of a polite live region.
