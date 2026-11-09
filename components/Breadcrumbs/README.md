# Breadcrumbs

Breadcrumbs show where the current screen sits and link back up the path.

## Anatomy
`<nav class="sl-crumbs" aria-label="Breadcrumb">` holding an `<ol>`. Links in `text-4`, "/" separators in `text-5`, the current item in `text`, 500, with `aria-current="page"`.

## Behaviour
- Links underline on hover and turn `text`.
- The current item truncates with an ellipsis and keeps the full name in `title`. Earlier items never truncate before the current one.
- On narrow screens show only the parent and the current item.

## Do / Don't
- Do place breadcrumbs at the left of the top bar.
- Don't repeat the page title right under the breadcrumb in object view; the toolbar shows it.
