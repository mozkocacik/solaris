# AppShell

The app shell is the fixed frame of every Solaris product: sidebar | (top bar + content), flush and split only by 1px lines.

## Sharp shell, soft content
- The shell has **no** outer gap, radius or shadow. Regions touch the window edges.
- Sidebar on `bg`; top bar and content on `surface`; dividers are 1px `border`.
- Everything inside the content is soft: cards, tables, buttons, inputs, chips and dialogs use the radius scale.

## Regions
| Region | Class | Size | Fill |
|---|---|---|---|
| Sidebar | `.sl-sidebar` | `size-sidebar` (228px, band 210–240) | `bg` |
| Top bar | `.sl-topbar` | `size-bar` (44px) | `surface` |
| Content | `.sl-content` > `.sl-screen` | fills | `surface` |
| Side panel | `.sl-panel` | `size-panel` (310px, band 290–340) | `surface` |

## Top bar
Breadcrumb at the left (muted links, "/" separators, current item in `text`); at the right the three-way theme switcher (sun / sunset / moon) and the notifications bell with a dot.

## Screen flow
Screens change inside `.sl-content`; the shell stays. A new screen fades in and moves up 6px over `dur-enter`. Details open beside the list (side panel) or as a full object view, and Back always returns to the same list position, filters and selection.

## Responsive
Under 760px the sidebar stacks above the content, the toolbars wrap, the side panel moves under the list, and wide tables scroll inside their own box. Touch targets grow to 44px.

## Themes
Set `data-theme` (or `.t-light`, `.t-night`, `.t-dark`) on the app root. `Solaris.setTheme(root, id)` also animates colours for one `dur-theme` transition.
