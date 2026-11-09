# Button

A button starts one action. Use `.sl-btn` for secondary actions and add `--primary` for the one main action of a view.

## Anatomy
Optional leading icon (`.sl-icon`, 14px) · label (500, `fs-md`) · container (`size-md` high, `r-md`, 1px border).

## Variants
| Class | Fill | Use |
|---|---|---|
| `.sl-btn--primary` | `primary` / `on-primary`, 600 | The single main action of a screen, dialog or panel: New, Done, Open, Invite. |
| `.sl-btn` | `surface` + `border` | All other actions: Import, Share, Copy link. |
| `.sl-btn--ghost` | transparent, `text-2` | Low-weight actions in toolbars and footers. |
| `.sl-btn--danger` | `red-bg` / `red-fg`, 600 | The confirm button of a destructive dialog. Never in a toolbar. |

## Sizes
`.sl-btn--sm` = `size-sm` (26px), `fs-sm`, `r-sm`. Default = `size-md` (28px). `.sl-btn--lg` = `size-lg` (32px). `.sl-btn--icon` makes the button square; give it an `aria-label`. `.sl-btn--block` fills the row (side panel actions).

## States
- **Hover:** secondary goes to `hover` with `border-strong`; primary goes to `primary-hover`.
- **Pressed:** moves 1px down over `dur-fast`.
- **Focus-visible:** 2px `focus` outline, 2px offset.
- **Loading:** set `aria-busy="true"`. The leading icon is replaced by a spinner and the label stays. Change the label to the running form ("Importing").
- **Disabled:** `disabled` attribute. `text-5`, no hover, `not-allowed` cursor. Prefer to keep the button enabled and show a validation error on submit.

## Themes
All fills are tokens. In Dark the primary turns light (`#ededed`) with dark text, so the ink button stays the strongest element.

## Accessibility
- Use a real `<button type="button">`; use `<a href>` with button classes only for navigation.
- An icon-only button needs `aria-label` and a tooltip.
- A product accent must keep `on-primary` on `primary` at 4.5:1 or more.

## Do / Don't
- Do use one primary per view. Do write short verbs: "New", "Import", "Export", "Share", "Done".
- Don't put two primaries side by side. Don't use the danger variant to draw attention.
- Don't add a colored button: color is for meaning, not for actions.
