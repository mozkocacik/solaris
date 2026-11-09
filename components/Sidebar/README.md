# Sidebar

The sidebar is the main navigation: workspace, search, the product's collections and groups, usage and the signed-in person.

## Order, top to bottom
1. **Workspace switcher** (`size-lg`): brand square in `primary` with the first letter, workspace name (600), chevron; collapse button at the right.
2. **Search** (`.sl-inputbox`) with the `⌘K` hint; it opens the command palette.
3. **Ungrouped items:** Home, Inbox (count badge), My tasks (count).
4. **WORKSPACE** group label, then the product's main collections with counts.
5. **GROUPS** group label with an add button, then groups with tinted letter squares (`.sl-sq.sl-tint--{hue}`), counts and a chevron; expanded groups show indented sub-items on a 1px `border` guide.
6. Spacer.
7. **Usage card** (`.sl-usage`): label, figures, meter.
8. Settings.
9. **Profile row** (`.sl-profile`, `size-xl`): avatar with presence dot, name, role, ⋯.

## Nav item
`.sl-navitem`: `size-md`, `r-sm`, icon (15px, `text-3`) + label (`text-2`, 500) + right-aligned `.sl-count` or `.sl-countbadge`. Hover `selected`. Current: `selected`, `text`, 600, `aria-current="page"`. Sub-items: `size-sm`, 400, `text-3`.

## Group labels
Capitals, `fs-xs`, 500, +0.04em, `text-4`. This is the only place in Solaris that uses capitals.

## Group identity
Each group has a stable tint (blue, orange, green, violet, amber, red) chosen at creation and shown as a 16px letter square. Use the same square wherever the group appears (breadcrumbs, location rows).

## Accessibility
`<nav aria-label="Main">`. Expandable groups are buttons with `aria-expanded` that control their sub-list. The profile button names the person and presence.
