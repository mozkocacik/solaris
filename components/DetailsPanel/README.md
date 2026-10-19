# DetailsPanel

The details panel opens beside a list when the user clicks a row or card, so the user never loses their place.

## Anatomy
- **Header** (40px, 1px `border` below): "Details", compact pager ("01 of 10") and close.
- **Title row:** large type badge (38px), name (`fs-lg`, 600, truncates), mono ID (`text-2` in `text-4` "ID"), star.
- **Actions:** Open (primary) and Share (secondary), full width, side by side.
- **Information:** rows of icon (`text-5`) | label (`text-4`, 84px) | value (`text`). Values may hold an avatar, a group square, a status pill. Product fields use the same row. Tags last.
- **Access:** people with avatar, name and role chip; count in the heading.
- **Comment:** CommentComposer.

Sections are split by 1px `divider` lines with `space-12` above. Section headings are icon + label (`fs-md`, 600).

## Behaviour
- Opens with a 14px slide from the right over `dur-enter`. The source row gets `.is-open` (`selected`).
- Clicking the same row again, or close, hides it. The pager and `↑` `↓` step through the list.
- On narrow screens the panel moves under the list.

## Accessibility
`<aside aria-label="Details">`. Focus stays on the row that opened the panel; `Esc` closes it and keeps focus on the row.
