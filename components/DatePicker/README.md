# DatePicker

The date picker is a text input with a calendar popover; users can type a date or pick one.

## Anatomy
`.sl-inputbox` with a calendar icon · popover (`.sl-popover--flush`, `sh-3`, `r-lg`) holding `.sl-cal`: month title, previous / next icon buttons, a 7-column grid of weekday labels (`fs-xs`, `text-4`) and day buttons (28px, `r-sm`).

## Day states
Default `text-2` · hover `hover` · outside month `text-5` (`data-out`) · today: 1px `border-strong` ring (`aria-current="date"`) · selected: `primary` fill, `on-primary`, 600 (`aria-selected="true"`) · disabled `text-5`.

## Behaviour
- The input accepts typed dates in the product locale. Show the value as "Oct 22, 2026".
- Arrow keys move by day, `PageUp` / `PageDown` by month, `Enter` picks, `Esc` closes.
- The week start follows the locale. Leave room for longer month names (+40%).

## Accessibility
The popover is `role="dialog"` with a label. The grid is `role="grid"`; each day button has a full date `aria-label` ("Thursday, October 22, 2026").
