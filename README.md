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
- **compactions** with their count in the section title, and per entry the owning turn (or between turns), the time, the input size and the summary size; the list shows five rows and scrolls for the rest;
- the **system prompt text** with a short description of what that prompt is, its measured size, and the text itself when the loaded window still holds it;
- **session token usage**: total input, uncached input, cache read, cache write, output, each with its share of the input, plus the **prompt-cache hit rate** with a bar.

## Where the numbers come from

- `contextPressure`, `contextBreakdown` and `tokenUsage` from `@deepseek-ai/dsh-token-meter` give the measured totals.
- `useTrajectory()` supplies the latest request's effective prompt — system text and the complete tool catalog — plus the compaction requests.

The bundle makes no model requests and adds nothing to the prompt, so it costs no tokens. Category totals are measured; the rows inside a category split that total in proportion to the character length of each part, which is why every row carries `~`.

## Limits

- Attribution covers what the loaded window still holds. In a long Session the system node is at the start of the log, so the skill catalog and the system text may be unavailable; the panel then shows the measured size and says so.
- Every non-MCP tool is listed as a plugin tool. DSH registers tools from plugin packages, so that grouping is accurate, but it does not separate built-in packages from optional bundles.
- Compactions are listed from the loaded history, newest first; the list shows five rows and scrolls for the rest, so the count in the title is always the real one.
- The panel needs a session; the hero screen has no right sidebar.

## Install

The bundle is a local package. Install its directory from **Plugins** → **Add plugin**, or point `plugin_manager` `install_bundle` at the directory. It has a Client half, so the strip and the tab appear in open pages without a restart once the profile recomposes.
