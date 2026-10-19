# Avatar

An avatar stands for a person with their initials on a stable pastel fill; stacks show several people, and a dot shows presence.

## Anatomy
Circle (`r-full`) · initials (600, two letters) in `av-fg` · fill `av-o`, `av-g`, `av-b` or `av-p`. Optional `.sl-presence` dot at the bottom right, ringed with `surface`.

## Sizes
`--xs` 16px (chips) · `--sm` 20px (table cells, stacks) · default 24px (lists, comments, profile row) · `--lg` 32px (share dialog, headers).

## Fill rule
The fill is stable per person: hash the user ID to one of the four fills. Never change it between screens. A photo, when the product has one, replaces initials and keeps the same size.

## Presence
`--on` `green` online · `--away` `amber` away · plain `text-5` offline. Put the state in the accessible name ("Amara Okafor, online").

## Stack
`.sl-stack`: avatars overlap by 7px with a 2px `surface` ring; show at most three, then "+N" in `fs-xs` `text-4`. Hover lifts an avatar 2px. In object view, people editing now get a 2px ring in their cursor colour.

## Do / Don't
- Do use initials when space is tight; never shorten a name to "Name S.".
- Don't use avatar fills for anything other than people.
