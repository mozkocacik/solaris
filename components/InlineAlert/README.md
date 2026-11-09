# InlineAlert

An inline alert shows an error or a blocking warning inside the content, next to what it is about.

## Anatomy
`.sl-alert`: `r-lg`, 9 × 12px padding, icon (14px) · title (600) + one sentence · optional small button. `--error`: `red-bg` / `red-fg`. `--warning`: `amber-bg` / `amber-fg`.

## Rules
- Only for errors and warnings that block work. Never for tips, announcements or explanations.
- Name the problem, then the fix. One action at most.
- Field errors belong under the field (FormField), not in an alert.

## Accessibility
`role="alert"` for errors that appear after an action; `role="status"` for warnings present on load.
