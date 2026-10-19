# ObjectViewPattern

The object view shows one item full screen inside the shell: a toolbar, a canvas with the item content, and a right panel.

## Toolbar
`.sl-objbar` (`size-bar`): back button · type badge · name (`fs-lg`, 600) · version tag (mono role chip) · save state ("Saved", "Saving…", "Offline — changes wait") in `text-4` · people editing now (avatar stack with coloured rings) · secondary icon actions (Export, ⋯) · Share (primary).

## Canvas
`.sl-canvas` on `bg` with 24px padding. The item sits on `paper` with `r-xs` and `sh-page`: a page, a form, a table or a chart. Comment markers are 20px `blue` circles with a `blue-bg` halo and a number.

## Right panel
320px, UnderlineTabs: **Comments** (count) with a reply box at the bottom, **Versions** (mono version tag, note, who and when, "Current" pill) and **Activity** (who + action + time).

## Behaviour
Back returns to the list with its scroll, filters, selection and open row intact. Save state updates without toasts.
