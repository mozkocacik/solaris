# Select

A select picks one value from a short, fixed list with the platform's own menu.

## Anatomy
`.sl-select` wrapper · native `<select>` styled like `.sl-input` (28px, `r-md`) · chevrons-up-down icon (12px, `text-4`) at the right.

## When to use
- Up to about 10 options with no search: use Select.
- Long or searchable lists, people, or values with avatars: use Combobox.

## States
Same as TextInput: hover `border-strong`, focus-visible `focus` outline, error `red` border with `.sl-error` below, disabled `surface-2` + `text-5`.

## Accessibility
The native element gives keyboard and screen-reader support for free. Link the error with `aria-describedby`.
