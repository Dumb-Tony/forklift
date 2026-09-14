# Forklift / Bay 01

A first playable warehouse precision game. Enter the pallet pockets with both forks, carry the load around a divider, and lower it onto a 24 cm receiving shelf. The job completes only after the pallet settles and the forks are clear.

Public deployment: pending verification at https://dumb-tony.github.io/forklift/.
Repository: https://github.com/Dumb-Tony/forklift.

## Play locally

Open `index.html` in a desktop browser. Everything is embedded: no install, server, build, external assets, or network dependency. Keyboard required; small-screen layouts adapt, but touch driving is not implemented.

| Input | Action |
| --- | --- |
| W / S | Forward / reverse; opposite direction brakes first |
| A / D | Steer the nose left / right using the rear wheels |
| Up / Down | Raise / lower forks |
| Q / E | Tilt back / forward |
| Space | Brake |
| P / Escape | Pause / resume |
| R | Restart the whole shift |

Approach slowly with forks at floor level. When **POCKETS ALIGNED** appears, lift a little and tilt back. Use the open lane above the divider. Slow down before turning: a raised or forward-tilted load slips more easily. Lift above 24 cm before entering the shelf, lower onto it, then reverse fully clear. Dropped pallets stay in the bay and can be retrieved by lowering and aligning again. Losing focus pauses the shift.

## First slice status

Implemented and locally browser-tested: rear steering, acceleration/braking, alignment-gated fork support, height/tilt-dependent load slip, recoverable drops, shelf support and clearance checks, pause/reset, responsive presentation. Automated clean and recovery routes both complete. Human steering-feel and first-time-player testing remain open.

This is a simplified planar machine model with explicit vertical load motion, not a full industrial or rigid-body simulation. Pallets retain orientation after falling, collision shapes are conservative, and the truck does not roll over. See `docs/GDD.md` for exact boundaries and `docs/PLAYTEST.md` for actual evidence.

## Test again

`tests/playtest.cjs` uses Playwright and desktop Edge (or set `BROWSER_CHANNEL`). Install Playwright in your test environment or set `PLAYWRIGHT_PATH` to an existing package. Run `node tests/playtest.cjs` from this folder. Set `GAME_URL` to test the published game instead of the local file. These are development-only dependencies; players need only the HTML.

## Project map

- `index.html` — self-contained game and deterministic input replay hook
- `docs/GDD.md` — design, physics model, and remaining hypotheses
- `docs/PLAYTEST.md` — tests and limitations
- `docs/PROTOTYPE_PLAN.md` — milestone checklist
- `docs/SHARING.md` — deployment and external playtest guide
- `tests/playtest.cjs` — browser regression suite

This folder owns its own Git repository. No sibling project files are included.
