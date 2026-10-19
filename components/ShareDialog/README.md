# ShareDialog

The share dialog controls who can open an item: invite people, change roles, set workspace access and copy the link.

## Anatomy
- **Title:** Share “Item name”, close button.
- **Invite row:** input "Add people or groups" (32px) + role select + Invite (primary).
- **People list:** avatar (32px), name, email (`fs-xs`, `text-4`), role chip (Owner is static; other roles open a menu with Editor, Commenter, Viewer and Remove access).
- **Workspace access row:** building icon square, workspace name, "Anyone in the workspace", role chip.
- **Footer** (`surface-2`): Copy link at the left (shows "Link copied" with a check for 2s), Done (primary) at the right.

## Behaviour
Changes apply at once; Done only closes. Inviting adds the person to the list with a fade. Copy link writes the link to the clipboard.

## Accessibility
Dialog rules apply (`aria-modal`, focus trap, `Esc`, focus return). The invite input has a hidden label. Role chips name the person in their label.
