# Context detail

A DSH bundle that adds a context strip above the message composer and a **Context** panel in the right sidebar.

## What you see

The strip prints the model window in use: a segmented bar, the percentage, `~used / window`, and the three composition estimates. It is the way into the panel; clicking it opens the **Context** tab in the right sidebar, creating the column when it is collapsed.

The panel adds:

- the occupancy headline with a proportional bar and a 20 × 5 dot grid where one dot is 1% of the window, colored by category;
- **system prompt / tool definitions / messages / free space**, each with tokens and its share of the window;
- **tools**, attributed inside their measured total and ordered by size, with a percentage on every row:
  - one row per **MCP server**, with its tool count;
  - one row per **plugin-provided tool** — every non-MCP tool the request carried;
- the **skill catalog** read from the system prompt, skill by skill, with the share of the system total each entry takes;
- **compactions** with their count in the section title, and per entry the owning turn (or between turns), the time, the input size and the summary size; the list shows five rows and scrolls for the rest. Compactions older than the loaded window are read from the session log, so reopening a long session still lists them;
- the **system prompt** with a short description of what that prompt is, its measured size, and the text itself when the loaded window still holds it;
- **added notices**: the system messages the harness appends during a session (MCP instruction updates, mode notices), grouped by origin like the tools list, with the block count and each group's share of the system bucket;
- **session token usage**: total input, uncached input, cache read, cache write, output, each with its share of the input, plus the **prompt-cache hit rate** with a bar.

## Where the numbers come from

- `contextPressure`, `contextBreakdown` and `tokenUsage` from `@deepseek-ai/dsh-token-meter` give the measured totals.
- `useTrajectory()` supplies the latest request's effective prompt — system text and the complete tool catalog — plus the compaction requests inside the loaded window.
- `session/events` on the Client `session` Remote pages backwards through the durable log to list compactions the loaded window no longer holds, and to split the system bucket into the main prompt and the notices appended later. Those rows are read-only, cached per session, and labelled in the panel; no model request is made.

The bundle makes no model requests and adds nothing to the prompt, so it costs no tokens. Category totals are measured; the rows inside a category split that total in proportion to the character length of each part, which is why every row carries `~`.

## Limits

- Attribution covers what the loaded window still holds. In a long Session the system node is at the start of the log, so the skill catalog and the system text may be unavailable; the panel then shows the measured size and says so.
- The main-prompt / added-notices split is proportional to the text length of each surviving system node, so the two sections add up to the measured bucket rather than to their own character estimate. Notices that repeat the same origin collapse into one row with a block count.
- Every non-MCP tool is listed as a plugin tool. DSH registers tools from plugin packages, so that grouping is accurate, but it does not separate built-in packages from optional bundles.
- Compactions are listed newest first; the list shows five rows and scrolls for the rest, and the count in the title is the real one. Rows read from the session log carry only the summary size, because the log records the summary text rather than the request usage.
- The panel needs a session; the hero screen has no right sidebar.

## Install

```sh
git clone https://github.com/japr26/dsh-context-detail.git
```

The bundle is a local package: install the cloned directory from **Plugins** → **Add plugin**, or point `plugin_manager` `install_bundle` at the directory. It has a Client half, so the strip and the tab appear in open pages without a restart once the profile recomposes.

Tested on DSH Desktop 0.2.3-alpha.2. It reads only the Client slot and projection APIs, so it adds nothing to the prompt and cannot change Host session state.

## License

MIT — see [LICENSE](LICENSE). Use it, modify it, ship it.
