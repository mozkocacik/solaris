# Solaris brand book

Solaris is a design system for dense, data-heavy management and collaboration apps: admin consoles, internal tools, record and asset management, review and approval workflows, team workspaces and operational dashboards. It feels calm, dense and crisp, and quietly alive: a sharp shell around soft content.

## Principles

- **Calm and dense, "inside the app".** Small type (13px base), tight controls (28px), 1px lines. Show many objects at once without noise.
- **Density creates context.** Every label has an icon. Every list shows its count. Every object shows its owner, people and status. Previews replace empty rows. Details open beside the list or over it, so the user never loses their place.
- **Neutral first, colour for meaning.** The UI is greys plus one ink primary (`primary`). Colour appears only in small amounts: category tints on type badges, status pills, group squares and avatars. No large coloured fills, no gradients, no coloured left borders.
- **Motion gives life, not decoration.** Short fades, slides and hover reveals (`dur-fast`, `dur-base`, `dur-enter`). Everything respects `prefers-reduced-motion`.
- **No marketing or helper text in the app.** Never show permanent explanations such as "Supported formats: …". Hints appear only in empty states. Validation errors are not helper text: they appear when they apply.
- **Three themes from day one:** Light, Night light and Dark. Every colour is a token; components contain no literal colours.
- **Sharp shell, soft content.** This mix is the signature of Solaris (next section).

## Sharp shell, soft content

- The app frame — sidebar, top bar, content area, side panels — is **flush**. It has no outer gap, no radius and no shadow. Regions are split only by 1px `border` lines.
- Everything inside the content — cards, tables, buttons, inputs, chips, menus, dialogs — has **soft rounded corners** from the radius scale: `r-sm` chips, `r-md` controls, `r-lg` cards and tables, `r-xl` dialogs.
- Sidebar on `bg`; top bar and content on `surface`; object canvas on `bg`.

## Domain-neutral rule

Solaris names no product, industry or data type. Components describe generic objects: item, record, collection, group, member. Example content is neutral placeholder data and changes from page to page, so no single domain leads. Products bring their own nouns, type codes and icons in the same style.

## Themes

Set the theme on the app root: `data-theme="light" | "night" | "dark"`, or the classes `.t-light`, `.t-night`, `.t-dark` (from `tokens.css`). Each theme sets `color-scheme`.

- **Light:** plain white and pure neutral greys. No blue tint in the neutrals.
- **Night light:** a warm, yellowish-white palette for eye comfort; warm greys; shadows tinted warm (`68,51,30`).
- **Dark:** pure neutral greys, never blue-tinted blacks. Semantic and tint colours are lighter and less saturated. Floating surfaces get a light 1px ring so their edges show.

The top bar always has a three-way theme switcher: sun (Light), sunset (Night light), moon (Dark).

## Colour rules

- **Neutrals** carry the UI. Text steps: `text` (primary), `text-2` (secondary, nav), `text-3` (cells, meta values), `text-4` (labels, counts, icons, placeholders), `text-5` (disabled and decorative only).
- **Primary action** is ink: `primary` with `on-primary`. A product may set a brand accent instead, if `on-primary` on it stays at 4.5:1 or more.
- **Category tints** (`{hue}-bg` + `{hue}-fg`): blue, green, amber, red, violet, orange. Each product maps its own object types to tints in one stable, documented table, and shows a 2–4 character code in Geist Mono on the type badge, so type never depends on colour alone. Containers (collections, folders, groups of items) always use `sunken` with `text-2`.
- **Status tones:** products map their statuses to five tones: neutral (`sunken`), info (blue), success (green), warning (amber), error (red). A status is always a word in a pill, never a colour alone.
- **Group identity:** every group (team, space, project) gets a stable tint at creation, shown as a small letter square.
- **Avatars:** four pastel fills (`av-o`, `av-g`, `av-b`, `av-p`) with `av-fg` initials, stable per person.
- **Charts:** series in the fixed order blue, green, amber, red, violet, orange; `divider` gridlines; `text-4` labels.
- **Focus:** `focus` (= `blue`), a 2px outline with 2px offset. Never removed.

## Typography

- **Geist** 400, 500, 600 for the UI. **Geist Mono** 400, 500 for IDs, type codes, keyboard hints, version tags and code.
- Base 13px. Scale: `text-xs` 11 · `text-sm` 12 · `text-md` 13 · `text-lg` 14 · `text-xl` 18. Names and headings use 500–600. Page titles use 600 with −0.01em tracking.
- Use tabular figures on every count, number, date column and meter.
- Long names truncate with an ellipsis and keep the full text in `title`. Never shorten a person's name to "Name S."; use initials in an avatar when space is tight.

## Spacing, sizes and layout

- 4px base: `space-2` · `space-4` · `space-8` · `space-12` · `space-16` · `space-24` · `space-32`. `space-6` and `space-10` only inside compact controls.
- Control heights: `size-sm` 26 (chips, small icon buttons, segmented items) · `size-md` 28 (buttons, inputs, nav items) · `size-lg` 32 (workspace switcher, table header) · `size-row` 38 (table rows, underline tabs) · `size-bar` 44 (top bar).
- Widths: sidebar `size-sidebar` 228 · side panel `size-panel` 310 · dialogs 380 / 440 / 560.
- Prefer a 1px `border` to a shadow. Shadows: `sh-1` small floating buttons · `sh-2` card hover · `sh-3` toasts, menus, bulk bar · `sh-4` dialogs.

## Iconography

Lucide outline icons (ISC licence): `stroke: currentColor`, round caps and joins, stroke 1.8. Sizes 12–16px in the UI, up to 18px in panel headers. Icon + label everywhere: nav, tabs, toolbar buttons, section headings, info rows, filter chips. Muted icons use `text-4` or `text-5`; active icons use `text`. Icon-only buttons have an `aria-label` and a tooltip. No emoji. No filled icons, except the star, which fills with `amber` when on. Products add domain icons from Lucide.

## Content rules

- Sentence case everywhere, except sidebar group labels (capitals).
- Short labels: "New", "Import", "Export", "Open", "Share", "Copy link", "Done".
- Counts are always visible where a list has a size.
- Dates: "Today, 08:40", "Yesterday", "Oct 14". Relative times in activity: "35 min ago". Numbers: "4.8 MB", "1,204". Use "—" for not applicable.
- No helper text in the normal UI; only empty states explain.
- Language-agnostic: no fixed UI language, room for about 40% longer translations, no text in images.

## Accessibility

- Text contrast ≥ 4.5:1 (≥ 3:1 for large text, focus rings and meaningful icons) in all three themes. The Color page measures the key pairs live.
- Colours that must be told apart also differ in lightness.
- Real `<button>`, `<a href>`, `<input>` + `<label>`. No click handlers on `div` or `span`.
- Icon-only buttons have `aria-label`; decorative SVGs have `aria-hidden="true"`.
- Roles and states: tabs (`tablist`, `tab`, `aria-selected`), segmented controls (`radiogroup`, `radio`, `aria-checked`), current nav (`aria-current`), expandable groups (`aria-expanded`), dialogs (`aria-modal`, focus trap, focus return, `Esc` closes).
- Hover-revealed actions also appear on `:focus-within`.
- In touch layouts, targets are at least 44px (`size-touch`): the hit area grows, the visual does not.

## Adjusting values

- Token values are **defaults, not fixed rules**. Ranges in the token notes show the accepted band (for example sidebar 210–240px, `r-md` 7–8px).
- A product may adjust a value slightly: one step on the spacing scale, ±2px on a control height, a small change to a radius or a duration.
- An adjustment must keep the relations: the order of sizes, the sharp-shell / soft-content contrast, the density, and the contrast rules above.
- Adjust values in the tokens, never inside a component. Write down each product-level override (token, old value, new value, reason).

## Using Solaris in a product

1. Load `tokens.css` and `components/bundle.css`. `bundle.css` loads Geist and Geist Mono from Google Fonts.
2. Optional: load `components/bundle.js`. It defines `window.Solaris`: the Lucide icon sprite (`Solaris.icon(name)`, `Solaris.hydrate(root)` for `<i data-icon="…">`), `Solaris.setTheme(root, id)`, and small behaviours for tabs, segmented controls, menus, dialogs, selection and the bulk bar.
3. Put `class="sl"` and a theme on the app root, then copy markup from the component previews.

Solaris is framework-neutral: the components are CSS classes with documented markup and ARIA, so they are a visual and structural reference for any stack. Every component page shows its states in all three themes, and the two reference screens show how the parts work together.


## Decisions and additions

This page lists where Solaris fills a gap in its brief, fixes a contradiction, or adds something the brief did not name. Products that override a value should keep a list in the same form.

## Contradictions resolved

| Topic | Brief | Decision | Why |
|---|---|---|---|
| Contrast section | Refers to "section 12" | Read as the accessibility rules | The brief has no section 12. |
| Placeholder colour | `text-5` | `text-4` | `text-5` is about 2.5:1 on `surface`; placeholders must be readable. `text-5` stays for disabled text and decorative icons. |
| `text-4` value | Light `#737373`, Night `#736c64` | Light `#6b6b6b`, Night `#6d665e` | The brief values pass on `surface` but miss 4.5:1 on `bg`, `hover` and `sunken`, where sidebar counts and chips sit. Dark is unchanged. |
| Primary hover | Not defined (the reference used a brightness filter) | New token `primary-hover` | A filter has no visible effect on ink. |
| Dark shadows | Black rings | Light 1px rings (`rgba(255,255,255,.06–.08)`) in Dark | Black rings vanish on dark surfaces; menus and toasts had no edge. |

## Tokens added

| Token | Purpose |
|---|---|
| `on-bar`, `on-bar-2`, `bar-btn`, `bar-btn-hover` | Text and buttons on the bulk bar and tooltip, so components have no literal white. |
| `on-blue` | Text on the count badge. Dark uses a dark text because white on the lighter blue is under 4.5:1. |
| `orange` (solid) | Chart series 6; the brief had only the orange tint. |
| `violet`, `violet-bg`, `violet-fg` | A sixth category hue, taken from the avatar palette. |
| `pulse` | Start colour of the live-pulse ring. |
| `focus` | Alias of `blue`, so the focus colour can change on its own. |
| `sh-tab`, `ring-open`, `sh-page` | The selected segment, the open card ring and the page on the object canvas — all used in the reference feel. |
| `fs-*`, `lh-*`, `dur-*`, `ease-*`, `z-*`, `icon-*`, `avatar-*`, `badge-*` | Every adjustable value is a token. |

## Defaults picked from ranges

`text-xl` 18px · `size-sm` 26px · `size-md` 28px · `size-lg` 32px · `size-row` 38px · `r-sm` 6px · `r-md` 7px · `r-lg` 9px · sidebar 228px · side panel 310px · dialogs 380 / 440 / 560px · `dur-fast` 100ms · `dur-base` 150ms.

## Patterns and rules added

- **Optional fields** carry an "Optional" mark in the label. Required fields have no mark, so forms need no helper text.
- **Danger button** is a soft `red-bg` / `red-fg` fill, not a solid red, to keep "no large coloured fills" and 4.5:1 text.
- **Neutral type codes** for examples: PG page, TB table, FM form, RP report, DG diagram, DS dataset, CL collection.
- **Meter colour** turns `amber` from 80% and `red` at the limit.
- **Skeleton delay:** skeletons appear after 150ms only.
- **Toast lifetimes:** done and undo toasts stay 6s; progress and failure stay until done or dismissed.
- **Theme transition** runs only while the theme switches (`.sl-theming`), so normal hovers keep their own short timing.
- **Framework-neutral delivery:** components are CSS classes plus an optional plain-script helper. No framework is required.

## Known limits

- The star's `amber` fill is under 3:1 on light surfaces. The filled shape, not the colour, carries the "on" state, and the button has `aria-pressed`.
- `text-5` is below 4.5:1 by intent and is never used for text a user must read.
