# CountBadge

Counts show the size of a list; a count badge marks unread or new items that need attention.

## Count
`.sl-count`: `fs-xs`, `text-4`, tabular numbers. Use it in nav items, tabs, section headings and filter tabs. Format with thousands separators ("1,204"). Show "0" rather than hiding the count.

## Count badge
`.sl-countbadge`: pill, 18px high, minimum 18px wide, `blue` fill with `on-blue` text, 600. Above 99 show "99+". `--neutral` uses `sunken` / `text-2` for a total that does not need attention.

## Rules
- A nav item shows either a count or a badge, never both.
- A badge means "unread" or "new for you". Clear it when the user opens the list.

## Accessibility
Give a badge an `aria-label` with the meaning ("4 unread"); the bare number is not enough.
