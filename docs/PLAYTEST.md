# Playtest log

## 14 September 2026 — first playable baseline

Tested the self-contained local HTML with Playwright driving installed Microsoft Edge headlessly. Automated input replay invokes the exact 120 Hz simulation through key codes; it does not teleport the machine, move the pallet, or force completion. A separate page exercised real keyboard events and the normal animation loop. These checks are **not manual feel testing**.

| Check | Actual result |
| --- | --- |
| Raise from initial distance | No support; pallet remains on floor |
| Turn off-axis, enter, then raise | No pickup; visible “Pockets missed” feedback |
| Straight entry and lift | Both pockets eligible; pallet becomes supported without snapping |
| Full clean route | Pickup, left lane, right turn above divider, raised shelf approach, set down, reverse clear; win at 15.54 simulated seconds, zero drops |
| Held load in target | No win |
| Pallet resting on shelf with forks inside | No win |
| Settled shelf load after reversing | Win after more than 1 second with forks clear |
| High versus low turn | Same loaded turn retains cargo at 12.6 cm; at 100 cm it slips and settles on the floor |
| Full recovery route | Forward tilt drops raised cargo; lower forks, square up, re-lift, complete delivery; win at 25.09 simulated seconds with one recorded drop |
| Pause/resume/reset | Simulation freezes on pause, resumes, and reset restores initial machine/pallet/objective |
| Focus loss | Pauses and clears input |
| Real keyboard + animation | W moves, P freezes time, R restores starting position |
| Resizing | 1440×1050, 800×900, 390×844; no horizontal page overflow |
| Browser errors | Zero uncaught browser exceptions |

Visual screenshots were inspected at desktop and narrow widths, plus the completed-job screen. The narrow layout stacks panels and preserves controls, but the bay is small: desktop keyboard play is the supported experience.

During implementation, testing exposed an incorrect shelf-surface calculation that could raise low cargo without fork support. Fixed by requiring prior height, checking the full rotated footprint, and treating the shelf face as solid for low cargo. Re-ran the complete suite after the physics correction. Completed-job feedback was also corrected to stop asking the player to reverse after success.

## Limits and next external session

No human playtester session has happened. Automated clean-route times are reproducibility evidence, not target completion times. Browser checks covered Edge/Chromium; Firefox, Safari, touch, gamepads, and assistive-technology playability have not been validated. There is no sound or camera shake. Collision circles and constrained load support are intentionally simplified; dropped loads do not tumble or change heading, and the truck cannot tip over.

For a first human session: provide the public link and no route coaching. Ask the player to finish one delivery, intentionally drop/retrieve the pallet, and retry. Record time to first lift, failed alignment attempts, cause-of-drop explanation, whether recovery felt possible, and whether another shift felt appealing. Focus the next tuning pass on steering/braking feel and pocket readability before adding content.
