# External browser playtesting

**Play:** https://dumb-tony.github.io/forklift/

**Repository:** https://github.com/Dumb-Tony/forklift

GitHub Pages serves `main` at the repository root with `.nojekyll`. The first playable gameplay commit is `4f1e725`. The public game was verified in Edge on 14 September 2026 with the complete automated success/recovery suite. README and PLAYTEST distinguish these automated checks from human feel testing.

## Invite a first playtester

Send the public play URL with this brief: “Use a desktop keyboard. Pick up the pallet, carry it around the divider, and set it on the green receiving shelf. Try to recover from a dropped load without restarting.” Let them discover the route. Ask what caused failures, whether they could correct them, and whether they want another attempt. Record browser, viewport, first-lift time, completion attempts, and steering feedback in PLAYTEST.md.

## Ship later edits

Work only in this repository. Inspect `git remote -v`, test locally, review intended files, commit, push `main`, wait for the Pages build to finish, and verify the public URL. `tests/playtest.cjs` accepts `GAME_URL` for public regression checks. Screenshots are ignored; no dependencies, credentials, or sibling projects are shipped. Keep `index.html` self-contained so direct local opening also works.

No license is selected yet; decide redistribution terms before accepting outside contributions.
