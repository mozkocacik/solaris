# Radio

A radio group picks exactly one option when all options should stay visible.

## Anatomy
`.sl-radio`: 14px circle, 1px `border-strong`. Checked: `primary` ring 3.5px with an `on-primary` centre. Wrap each in `.sl-choice`; group them in a `<fieldset>` with a `<legend>` styled `.sl-label`.

## When to use
- Two to five options with short labels: Radio.
- Options for a view: SegmentedControl. Long lists: Select.

## Accessibility
Native radios share a `name`. Arrow keys move the choice. Disabled options use `disabled` and `text-5`.
