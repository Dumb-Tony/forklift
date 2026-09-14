# Forklift — first-pass GDD

Status: design hypothesis, prototype first. Source: Game Ideas Planning (conversation 6aa70669-0724-83ea-8d1a-5398e0350b84), continued 14 September 2026. Controls below are proposed prototype mappings, not locked design decisions.

## Fantasy and identity
Become absurdly skilled at operating a forklift.

Mechanical mastery and satisfying precise work. Forks require alignment and physical support; pallets must not magically attach from a distance.

## Design pillars
Tiny control set. Physical mastery rather than stat upgrades. Readable cause and effect. A disaster should usually create another problem instead of stopping play. Skill progression is new situation → struggle → understand → master → harder situation. No skill trees, rarity tiers, or arbitrary balance bonuses.

## Core loop
Observe the situation, act with the core tool/body, read the physical response, correct or recover, complete the objective, and retry for a cleaner approach. Restart is always a deliberate option, never the default consequence of a small mistake.

## Proposed controls
W/S drive, A/D steer, Up/Down lift, Q/E tilt; R explicitly restarts. Fork spread is deferred.

## First standalone HTML vertical slice
A compact warehouse bay with one pallet, a turn around an obstacle, and one low receiving shelf. Pick up, transport, and set down the load. Use an oblique view or a readable simplified spatial model with visible fork-height feedback.

Rear-steer behavior, acceleration and braking, fork height and tilt, load support and slip. High or forward loads increase instability; loads should fall and remain recoverable. Prefer a coherent simplified model over a claim of full industrial simulation.

Desktop keyboard and pointer first. Make a self-contained index.html with embedded CSS and JavaScript, procedural visuals, no CDN, no installation, and no required network requests. Render with Canvas or native browser graphics. Use a fixed simulation step, bounded frame catch-up, and clear input state on focus loss. Physics may be simplified but must remain consistent and disclosed.

## Success and recovery
A pallet is delivered only when supported in the target, settled, and clear of the forks. Verify misaligned pickup fails visibly, a clean pickup succeeds, turning with a raised load is riskier, and dropped cargo can be retrieved.

## Mastery and replay hypothesis
First 30 seconds: align and lift with a clunk. Ten hours: brake, tilt, and turn cleanly under load. Long-term hypothesis: cargo geometry and crowded workspaces make the same controls continually interesting.

## Beyond the prototype
Different jobs reuse the same verbs: stacking, loading, retrieving, clearing accidents. Machine variants alter reach and handling. Later fragile or oversized loads and leaning shelving; defer destruction chains, warehouse economy, and vehicle collection.

## Main risk
A forklift-shaped character with an attach button misses the core. Prioritize alignment, lift clearance, and satisfying placement before large environments.

## Presentation and accessibility
Readable shapes and silhouettes before decorative assets. Persistent short controls and objective text. Show interaction eligibility before input. Do not rely on color alone. Provide restart and pause, reduced camera shake, and a useful window-size response. Sound is optional; do not block play on autoplay permission.

## Validation gate
A new player should start interacting within 30 seconds. Run an entire successful objective, intentionally cause a recoverable mistake, and complete after recovery. Record automated browser checks separately from manual feel testing. Ask playtesters what caused their failure, whether correction felt possible, and whether they wanted another attempt. Choose the next milestone from this evidence rather than adding content automatically.
