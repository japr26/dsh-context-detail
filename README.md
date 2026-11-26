# Context detail

A DSH bundle that adds a context strip above the message composer and a **Context** panel in the right sidebar.

## What you see

The strip prints the model window in use: a segmented bar, the percentage, `~used / window`, and the three composition estimates with the same re-cut the panel uses once the session log is read. On the opposite side of the same row, a small **cache** chip prints the **prompt-cache hit of the last turn**, with the session rate beside it. The row spans exactly the composer card, so the chip starts at the chat box's left edge and the context strip ends at its right edge: it derives that box from the host's own composer variables (`--dsh-composer-side-clearance`, `--dsh-composer-card-max-width`), the same ones the input card uses, so it stays aligned while the column, the sidebar or the width control changes size and needs no measured DOM. Either control opens the **Context** tab in the right sidebar, creating the column when it is collapsed.

The panel adds:

- the occupancy headline with a proportional bar and a 20 × 5 dot grid where one dot is 1% of the window, colored by category;
- the sections below the headline — tools, messages, system prompt, added notices, compactions and session usage — each collapse from its title row and start **closed**; the title row keeps the section name and its measured size, so the whole panel opens as a short list;
- **system prompt / tools / messages / free space**, each with tokens and its share of the window. **Tools** is the real tool context — the definitions catalog plus the arguments of every call and its result content — so **Messages** is conversation only;
- inside **tools**, first the three measured parts, one row each:
  - **definitions (catalog)** — the fixed catalog DSH re-sends with every request: one entry per tool with its name, description and the JSON schema of its parameters. Hover the row to read that definition;
  - **tool calls (arguments)** — the JSON arguments of every tool call the session recorded, read from the session log. Hover for the definition;
  - **tool results** — what each tool returned: file contents, command output, search results. Also from the session log, and also with a definition on hover;
- then the same numbers as a tree, so every tool shows where its size comes from. Each row prints **defs** (its share of the measured definition bucket), **total** (that definition plus the arguments and results its own calls added) and the share of the window:
  - **MCP servers (n)** — the group row adds every server up; inside it, one row per server (`playwright · 25 tools`) with its own two numbers, and inside the server one row per tool with its call and result counts;
  - **plugins (n)** — one row per non-MCP tool, the tools DSH registers from plugin packages, with the same two numbers and no extra nesting;
  - **skills (n) · system prompt** — the skill catalog closes the section for reference. A skill is not a tool, so its row prints only its size, the definition column stays empty, and the label says the size belongs to the system prompt, not to Tools;
  - the `by tool` list no longer exists as a separate block: every call and result is counted on the row of the tool, server or group it belongs to;
- inside **messages**, the split between **your prompts**, **assistant responses** and **reasoning**;
- the **skill catalog** read from the system prompt, skill by skill, with the share of the system total each entry takes;
- **compactions** in a collapsible row that starts closed, with the count on the row and, per entry, the owning turn (or between turns), the **date and time** (short month and day, no year, in the page's language), the **size of the history the compaction replaced** (the summary event's estimated token count) with how many history items it removed, and the summary size. Compactions older than the loaded window are read from the session log, so reopening a long session still lists them; a compaction that finishes while the page is open is read again on its own, so it shows the same measured numbers as the ones before it without a reload;
- the **system prompt** with a short description of what that prompt is, its measured size, and the text itself: the loaded window when it still carries it, otherwise the last version the session log recorded, and as a last resort the copy the panel saved for that session;
- **added notices**: the system messages the harness appends during a session (MCP instruction updates, mode notices), grouped by origin like the tools list, with the block count and each group's share of the system bucket;
- **session token usage**: total input, uncached input, cache read, cache write, output, each with its share of the input, plus the **prompt-cache hit rate of the last turn and of the session**, each with a bar;
- **context growth**: a sparkline of the prompt size of **every** request in the session, oldest to newest, with the request count and the turn count on the row and every request listed below it — a scrollable list with the request number, a proportional bar and its tokens. A drop is a compaction or pruned history.

## Where the numbers come from

- `contextPressure`, `contextBreakdown` and `tokenUsage` from `@deepseek-ai/dsh-token-meter` give the measured totals.
- `useTrajectory()` supplies the complete tool catalog of the latest request — and the prompt text when the loaded window still carries it — plus the compaction requests inside the loaded window.
- `session/events` on the Client `session` Remote pages backwards through the durable log to list compactions the loaded window no longer holds, to split the system bucket into the main prompt and the notices appended later, to keep the newest `system/message` text (the prompt a compaction pushed out of the window is still in the log, so it stays shown and is saved for the session), to keep the newest request header's tool catalog (so the definitions, the MCP servers and the plugin rows survive a compaction or a reload whose loaded window no longer holds the latest request prompt), and to measure the tool and message text that recuts the measured messages bucket. The same pass says which tool every call and result belongs to, which is what fills the `total` column of the tool tree. The scan folds the provider usage samples of the newest turn, so the **last-turn cache hit rate** comes from the log while the **session** rate comes from `tokenUsage`; it also keeps the prompt size of every request as the **context growth** series. The panel watches the loaded window's compaction rows: when one is missing from the cached scan it reads the log again, which is what keeps every later compaction measured. Those calls are read-only, cached and shared by the strip and the panel; no model request is made.

The bundle makes no model requests and adds nothing to the prompt, so it costs no tokens. Category totals are measured; the rows inside a category split that total in proportion to the character length of each part, which is why every row carries `~`. The tool calls and results take their share of the measured messages bucket in proportion to the text the session log carries for arguments, results, prompts, assistant text and reasoning, so **Tools** and **Messages** always add up to the measured total. Inside the tool tree, `defs` splits the measured definition bucket across the tools of the request, and `total` adds the arguments and results the log attributes to each tool; a server row and a group row are the sum of the rows under them, so the same pair of numbers can be read at any level and nothing is counted twice.

Every part of the plugin, in one place:

| Part | What it is |
| --- | --- |
| **strip** (above the composer) | Segmented bar, percentage and `~used / window` from `contextPressure`; the three category chips appear when the viewport is wider than 1180 px. |
| **cache chip** (left of the strip) | Prompt-cache hit of the last turn (from the log's newest usage sample) with the session rate beside it (`tokenUsage`). |
| **Context window** headline | Projected size of the next request over the model window, with a bar and a 100-dot grid. |
| **system prompt / tools / messages / free space** | The measured `contextBreakdown`, after the recut that moves call arguments and results into Tools. |
| **Tools → definitions / calls / results** | The three measured parts of the tool context: the catalog, the call arguments and the result content. |
| **Tools → MCP servers / plugins** | The catalogue tree: group → server → tool, with `defs` and `total` on every row. |
| **Skills** | The skill catalog carried inside the system prompt, skill by skill. It is not a tool, so the row shows only its size (no `defs`) and says the size belongs to the system bucket. |
| **Messages** | Conversation only: your prompts, assistant responses and reasoning. |
| **System prompt** | The standing instructions, their measured size and their text, from the window, the log or the copy saved for the session. |
| **Added notices** | The system messages appended during the session, grouped by origin, with their blocks. |
| **Compactions** | Date and time, replaced size, removed items and summary size per compaction, including the ones outside the loaded window. |
| **Session token usage** | Input, uncached input, cache read, cache write and output, with the last-turn and session cache hit. |
| **Context growth** | Prompt size of every request in the session as a sparkline, plus the newest requests as rows. |

## Limits

- Attribution covers what the loaded window still holds, but the **system prompt text** no longer depends on it: the scan keeps the newest `system/message` the session recorded and the panel saves that text per session, so a long Session whose history was compacted — or whose log cannot be read — still shows the last version DSH sent, and says where it came from. DSH records a new system message when the prompt changes, so the text is the last emitted version, not a live render.
- The main-prompt / added-notices split is proportional to the text length of each surviving system node, so the two sections add up to the measured bucket rather than to their own character estimate. Notices that repeat the same origin collapse into one row with a block count.
- The calls/results split is proportional to the text the session log holds — arguments, result content, prompts, assistant text and reasoning — not an exact per-item allocation. Content a compaction or a prune replaced is dropped before it is measured. If the log cannot be read, the panel keeps the measured breakdown (definitions only) and says so.
- The scan reads up to 60 pages of 500 messages per session and caches the result. In an extremely long Session older text outside those pages is not measured, and the proportions still apply to the measured total.
- Every non-MCP tool is listed as a plugin tool. DSH registers tools from plugin packages, so that grouping is accurate, but it does not separate built-in packages from optional bundles.
- A tool the catalog no longer carries but the session did call is still listed, under Plugins, with `—` in `defs`: its arguments and results are real, its definition share is unknown.
- The two columns of the tree are shares of two measured buckets, never a second measurement: `defs` splits the measured definition total, `total` adds the arguments and results proportionally attributed from the log. A server or group row is the sum of its rows, so tiny rounding differences can show up against the row above.
- Compactions and added notices start collapsed and expand in place; the compaction list shows every entry, and the counts on their rows are the real ones. A compaction row shows the size the summary event replaced (`shadowedTokenCount`), the number of history items it removed (`shadowedSeqs`), and the summary size; when the log cannot be read, the row falls back to the summarization request's own usage.
- The panel needs a session; the hero screen has no right sidebar.

## Install

```sh
git clone https://github.com/japr26/dsh-context-detail.git
```

The bundle is a local package: install the cloned directory from **Plugins** → **Add plugin**, or point `plugin_manager` `install_bundle` at the directory. It has a Client half, so the strip and the tab appear in open pages without a restart once the profile recomposes.

Built for DSH Desktop 0.2.x, verified against the 0.2.2-rc.5 Client APIs and tested on 0.2.3-alpha.2. It reads only the Client slot and projection APIs, so it adds nothing to the prompt and cannot change Host session state.

## License

MIT — see [LICENSE](LICENSE). Use it, modify it, ship it.
