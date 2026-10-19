# RoleChip

A role chip shows a person's access level, and opens a menu to change it when the viewer may edit access.

## Anatomy
`.sl-role`: 20px, `r-sm`, `sunken`, `fs-xs`, `text-3`. As a `<button>` it adds a 12px chevron and hovers to `selected`.

## Rules
Roles are words, not colours: Owner, Editor, Commenter, Viewer. Owner is never a button. The menu lists roles plus "Remove access" as a danger item.
