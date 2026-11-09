# Skeleton

Skeletons hold the shape of content while it loads; Solaris never shows a page spinner.

## Anatomy
`.sl-skel` blocks on `sunken`: `--line` (8px text line), `--circle` (avatars), squares with `r-sm` (type badges). They pulse between full and 45% opacity over 1.4s; with reduced motion they are static.

## Rules
- Keep the real layout: header, columns, row height, card size. Only the content is replaced.
- Show four to eight rows; vary line widths so it does not look like data.
- Show skeletons after 150ms; fast loads show nothing.
- Buttons that start a task show their own loading state (`aria-busy`), not a skeleton.

## Accessibility
Set `aria-busy="true"` on the loading region with a label ("Loading records"); remove it when content arrives.
