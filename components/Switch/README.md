# Switch

A switch turns a setting on or off, and the change applies at once with no Save button.

## Anatomy
`.sl-switch` on `<input type="checkbox" role="switch">`: 28 × 16px track (`border-strong` off, `primary` on), 12px knob (`surface` with `sh-1` off, `on-primary` on). The knob slides over `dur-base` with `ease-enter`.

## When to use
- Settings that take effect at once: Switch.
- Choices inside a form that is saved later: Checkbox.

## Accessibility
The label sits before the switch, in the same `<label>`. A disabled switch shows why only through its context (for example a "Managed by workspace" row), never through extra helper text.
