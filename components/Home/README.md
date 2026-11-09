# Home

Home greets the person and shows what to continue, what waits for them and what changed.

## Sections
1. **Greeting:** "Good morning, Hana" (`text-xl`) + one line that summarises the waiting work (`text-3`).
2. **Continue:** four recent items as cards: a tint band in the item's category hue with a mini page, the name, and one note ("Priya Nair is editing", "Edited 2 h ago by Oskar Lind").
3. **Waiting on you:** a list box: type badge, verb + item name, "From" person, due pill (today = error, tomorrow = warning, later = neutral), action button with the same verb.
4. **Activity:** feed of who + action + object + relative time ("35 min ago").

## Rules
- The summary line is real data, not a slogan.
- Show at most five rows per section; link to the full list in the section heading when there are more.
- Empty sections hide, except "Waiting on you", which shows "Nothing waiting for you".
