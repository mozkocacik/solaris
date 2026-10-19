# Menu

A menu lists actions for a button (dropdown) or an object (context menu, opened by right click or the ⋯ button).

## Anatomy
`.sl-menu`: `surface`, `r-lg`, `sh-3`, 4px padding, minimum 200px. Items `.sl-menu__item`: `size-md` (28px), `r-sm`, icon (14px, `text-4`) + label (`text-2`) + optional `.sl-kbd` shortcut at the right. Group label `.sl-menu__label` (`fs-xs`, `text-4`). Separator `.sl-menu__sep` (`divider`).

## Item states
Hover / keyboard focus: `hover` fill, `text`. Checked (`menuitemradio`, `menuitemcheckbox`): a tick at the right. Disabled: `text-5`. Danger (`--danger`): `red-fg`, hover `red-bg`; always the last item, after a separator.

## Behaviour
- Opens below its trigger, aligned to the start (`.sl-pop--end` aligns to the end) with a `dur-base` pop.
- Click outside, `Esc` or choosing an item closes it and returns focus to the trigger.
- Context menus open at the pointer; the same actions are in the row's ⋯ button.

## Accessibility
Trigger: `aria-haspopup="menu"`, `aria-expanded`. Menu: `role="menu"`, items `role="menuitem"`. `↑` `↓` move, `Home` / `End` jump, typing a letter jumps to the item.
