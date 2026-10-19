# Solaris

Solaris is a design system for dense, data-heavy management and collaboration apps: admin consoles, internal tools, record and asset management, review and approval workflows, team workspaces and operational dashboards. It has three themes (Light, Night light and Dark), Geist and Geist Mono, and Lucide icons.

| System | For |
| --- | --- |
| **Solaris** | Dense management and collaboration apps |
| Meridian | Marketing and landing pages |
| Vesper | Developer and infrastructure tools |

Solaris is a reference, not a component library. Each component is a definition (`README.md`) and a static HTML picture (`preview.html`). Build the components in your own stack.

## Files

| Path | Content |
| --- | --- |
| `README.md` | This page. |
| `GUIDELINES.md` | Rules for color, type, layout, content and accessibility. Read it before you build a screen. |
| `tokens.json` | All tokens with a usage note for each token. |
| `tokens.css` | The same tokens as CSS custom properties and type classes. When you change a token, change both files. |
| `components/bundle.css` | Styles for the previews. It uses only the custom properties from `tokens.css`. |
| `components/bundle.js` | The `window.Solaris` helpers: icon sprite, theme switch, small behaviours for the previews. |
| `components/<Name>/README.md` | The definition of one component: parts, states, content and when to use it. |
| `components/<Name>/preview.html` | A static HTML picture of one component. |

## Fonts and icons

The repository does not contain font or icon files. Get them from their own sources:

- **Fonts:** Geist and Geist Mono (Google Fonts). `components/bundle.css` loads them.
- **Icons:** Lucide (lucide.dev). Use the Lucide icon names.

## Theme

```html
<body class="sl" data-theme="light"> <!-- light, night or dark -->
```

Put `class="sl"` and a theme on the app root. Component classes use the prefix `sl-`.

## Components

AppShell, Avatar, Breadcrumbs, BulkBar, Button, ChartColors, Checkbox, Color, Combobox, CommandPalette, CommentComposer, ConfirmDialog, CountBadge, Cover, DatePicker, DetailsPanel, Dialog, Elevation, EmptyState, FilterChip, FloatingActions, FormField, GridCard, Home, IconButton, Icons, InlineAlert, ListStates, LivePill, Menu, Meter, Motion, ObjectViewPattern, Pager, Pagination, Popover, Radio, Radius, RoleChip, ScreenCollection, ScreenObject, SearchField, SegmentedControl, SegmentedTabs, Select, ShareDialog, Sidebar, Skeleton, SortButton, SpacingAndSizes, StatTile, StatusPill, Switch, Table, TagChip, TextInput, Textarea, Toast, Tooltip, TypeBadge, Typography, UnderlineTabs
