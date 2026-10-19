# StatusPill

A status pill shows the state of an object with a word and one of five tones.

## Anatomy
`.sl-pill`: 20px, `r-pill`, `fs-xs` 500, 7px side padding, optional 6px dot (`.sl-pill__dot`) in the text colour.

## Tones
| Class | Fill / text | Meaning |
|---|---|---|
| (none) | `sunken` / `text-3` | neutral: draft, not started, a plain date |
| `--info` | `blue-bg` / `blue-fg` | in progress, in review |
| `--success` | `green-bg` / `green-fg` | done, approved, current |
| `--warning` | `amber-bg` / `amber-fg` | needs attention soon, on hold, due tomorrow |
| `--error` | `red-bg` / `red-fg` | blocked, failed, overdue, due today |

## Mapping
Each product maps its own statuses to these five tones in one table and keeps it stable. Use the dot in tables and lists; leave it out for due-date pills.

## Accessibility
The word carries the meaning, so status never depends on colour alone. All pairs meet 4.5:1 in every theme.
