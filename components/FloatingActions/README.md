# FloatingActions

Floating actions are small buttons that sit on a grid card and appear when the card is hovered or holds focus.

## Anatomy
- `.sl-card__check` (top left): a 22px `surface` holder with `sh-1` around a `.sl-check`.
- `.sl-card__actions` (top right): `.sl-floatbtn` buttons, 24px, `r-sm`, `surface`, `sh-1`, 12px icons. Usually Star and Open.

## Behaviour
- Hidden at rest (`opacity: 0`). Shown on `:hover` and `:focus-within` over `dur-base`.
- The checkbox stays visible while the card is checked (`.is-checked`), so a selection is never hidden.
- The first card in the preview shows the revealed state; hover the second.

## Accessibility
- Every button names its object: "Star Vendor contacts", "Open Vendor contacts".
- Because of `:focus-within`, keyboard users see the buttons when they tab into the card.
- In touch layouts the buttons stay visible and the hit area grows to 44px.

## Do / Don't
- Do keep two actions at most; put the rest in the context menu.
- Don't hide information that is only in these buttons.
