# Forklift: first build milestone

## M0 — repository and design
Own Git repository, focused GDD, standalone browser entry point plan, playtest log, and sharing guide.

## M1 — playable core slice
1. Create index.html with embedded styles, code, controls, pause, and restart.
2. Implement the smallest readable scene: A compact warehouse bay with one pallet, a turn around an obstacle, and one low receiving shelf. Pick up, transport, and set down the load. Use an oblique view or a readable simplified spatial model with visible fork-height feedback.
3. Implement consistent physical response: Rear-steer behavior, acceleration and braking, fork height and tilt, load support and slip. High or forward loads increase instability; loads should fall and remain recoverable. Prefer a coherent simplified model over a claim of full industrial simulation.
4. Add objective detection: A pallet is delivered only when supported in the target, settled, and clear of the forks. Verify misaligned pickup fails visibly, a clean pickup succeeds, turning with a raised load is riskier, and dropped cargo can be retrieved.
5. Complete a success route and a recovery route, and inspect browser errors and resizing.
6. Commit a playable baseline and document controls, known simplifications, and checks actually performed.

## Scope gate
No campaign, progression economy, networking, asset pipeline, or dependency-heavy framework. Do not substitute a generic movement demo for the central mechanic. If a feature is too risky, document the reduction and preserve the core hypothesis.

## Later sharing milestone
Use this repository's own remote and static hosting; follow the parent project's standing instructions when shipping. Keep published contents limited to this game. Record the verified public URL and commit in README. First request prepares for later external testing; never report a public link before deployment succeeds.
