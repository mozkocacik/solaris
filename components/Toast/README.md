# Toast

A toast reports a background task — upload, import, export, sync — and short confirmations with Undo.

## Anatomy
`.sl-toast`: 290px, `surface`, `r-lg`, `sh-3`, 10 × 12px padding. Head: optional status icon (`.sl-status-ok` `green`, `.sl-status-err` `red`), title (600), one action button, dismiss. Detail row (`fs-sm`, `text-3`). Progress track 3px `sunken` with a `primary` bar.

## States
| State | Title | Action | Stays |
|---|---|---|---|
| In progress | "Importing 3 files" + file and "2 of 3" | — | until done |
| Done | "Export ready" | Download / Open | 6s, or until dismissed |
| Failed | "Sync failed" + reason | Retry | until dismissed |
| Undo | "2 items moved to Trash" | Undo | 6s |

## Placement and motion
Bottom left of the content area (`.sl-toast--anchored`), above everything but dialogs (`z-toast`). Rises in over `dur-enter`. Stack at most three; newer on top.

## Accessibility
`role="status"` for progress and success; `role="alert"` for failure. Pause the timer while the toast is hovered or focused.
