// Layout check without the running app.
//
//   node dev/mock-tree.cjs        (writes dev/mock-tree.html)
//   open dev/mock-tree.html      (or serve it: npx serve dev)
//
// The page copies the plugin's real CSS straight out of client.js and rebuilds
// the tools tree with the same markup the panel renders, so column alignment can
// be measured in any browser. `mockTree.measure(335)` returns the right edge of
// every column at a given sidebar width; the numbers of a row are aligned when
// they share the right edge with the header of the same column.

const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const lines = fs.readFileSync(path.join(root, 'client.js'), 'utf8').split(/\r?\n/)

let start = -1
for (let index = 0; index < lines.length; index += 1) {
  if (lines[index].includes('const CSS = [')) { start = index; break }
}
let end = -1
for (let index = start + 1; index < lines.length; index += 1) {
  if (lines[index].trim() === ']') { end = index; break }
}
if (start < 0 || end < 0) throw new Error('cannot find the CSS array in client.js')

const rules = []
for (let index = start; index < end; index += 1) {
  const match = /^'((?:[^'\\]|\\.)*)',?$/.exec(lines[index].trim())
  if (match) rules.push(match[1].replace(/\\'/g, "'"))
}

const skillRow = (name, total, pct) => `        <li class="cdp-toolrow cdp-skill-row"><span class="cdp-mono">${name}</span></li>
        <li class="cdp-tool-defs"></li>
        <li class="cdp-tool-total">${total}</li>
        <li class="cdp-tool-pct">${pct}</li>`

const toolRow = (name, counts, defs, total, pct) => `        <li class="cdp-toolrow"><span class="cdp-mono">${name}</span>${counts}</li>
        <li class="cdp-tool-defs">${defs}</li>
        <li class="cdp-tool-total">${total}</li>
        <li class="cdp-tool-pct">${pct}</li>`

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>context-detail tool tree</title>
<style>
:root {
  --dsw-alias-label-primary: #e8e8ea;
  --dsw-alias-label-secondary: #9a9aa2;
  --dsw-alias-bg-layer-2: #202027;
  --dsw-alias-border-l1: #33333c;
  --dsw-alias-state-idle-primary: #4a4a55;
  --dsw-alias-brand-primary: #4d6bfe;
  --dsw-alias-state-warn-primary: #e0a33e;
  --dsw-alias-state-success-primary: #3fbf7f;
}
body { margin: 0; background: #17171b; font-family: system-ui, sans-serif; }
.cdp-tab { height: auto !important; }
</style>
<style>
${rules.join('\n')}
</style>
</head>
<body>
<div class="cdp-tab" id="panel" style="width:335px">
  <h2 class="cdp-tab-title">Context window</h2>

  <details class="cdp-section" open>
    <summary class="cdp-section-summary">
      <span class="cdp-section-title">TOOLS</span>
      <span class="cdp-section-meta">~121.7K</span>
    </summary>
    <div class="cdp-section-body">
      <p class="cdp-hint">Definitions are the fixed catalog sent with every request. Tool calls carry the arguments of each use and tool results carry what each tool returned; both travel inside the messages, so they are counted here and not in Messages.</p>

      <div class="cdp-rows cdp-rows-tight">
        <span class="cdp-row-label"><i class="cdp-swatch cdp-dot-tools"></i>Definitions (catalog) · 91 tools</span>
        <span class="cdp-row-val">~21.1K</span>
        <span class="cdp-row-pct">2.11%</span>
        <span class="cdp-row-label"><i class="cdp-swatch cdp-dot-tools"></i>Tool calls (arguments) · 175 calls</span>
        <span class="cdp-row-val">~37.1K</span>
        <span class="cdp-row-pct">3.71%</span>
        <span class="cdp-row-label"><i class="cdp-swatch cdp-dot-messages"></i>Tool results · 175 results</span>
        <span class="cdp-row-val">~63.5K</span>
        <span class="cdp-row-pct">6.35%</span>
      </div>

      <div class="cdp-toolhead"><span></span><span>defs</span><span>total</span><span>%</span></div>

      <details class="cdp-details">
        <summary class="cdp-summary cdp-summary-cols4">
          <span class="cdp-summary-text">MCP servers (4)</span>
          <span class="cdp-summary-val">~11.9K</span>
          <span class="cdp-tool-total">~12K</span>
          <span class="cdp-summary-pct">1.2%</span>
        </summary>
        <details class="cdp-details cdp-tool-nest" open>
          <summary class="cdp-summary cdp-summary-cols4">
            <span class="cdp-summary-text">playwright · 25 tools</span>
            <span class="cdp-summary-val">~4.7K</span>
            <span class="cdp-tool-total">~4.8K</span>
            <span class="cdp-summary-pct">0.48%</span>
          </summary>
          <ul class="cdp-toolrows cdp-toolrows-nested">
${toolRow('browser_take_screenshot', ' · 3 calls · 3 results', '~414', '~2.1K', '0.21%')}
          </ul>
        </details>
      </details>

      <details class="cdp-details">
        <summary class="cdp-summary cdp-summary-cols4">
          <span class="cdp-summary-text">Plugins (40)</span>
          <span class="cdp-summary-val">~9.2K</span>
          <span class="cdp-tool-total">~109.7K</span>
          <span class="cdp-summary-pct">11%</span>
        </summary>
        <ul class="cdp-toolrows">
${toolRow('read', ' · 29 calls · 29 results', '~110', '~27.3K', '2.73%')}
${toolRow('pwsh', ' · 44 calls · 44 results', '~875', '~20.7K', '2.07%')}
        </ul>
      </details>

      <details class="cdp-details" open>
        <summary class="cdp-summary cdp-summary-cols4" data-role="skills">
          <span class="cdp-summary-text">Skills (3)<span class="cdp-muted"> · system prompt</span></span>
          <span class="cdp-tool-defs"></span>
          <span class="cdp-tool-total">~258</span>
          <span class="cdp-summary-pct">0.03%</span>
        </summary>
        <ul class="cdp-toolrows">
${skillRow('diagnose-windows-sandbox-acl', '~83', '0.01%')}
${skillRow('dsh-doc', '~124', '0.01%')}
${skillRow('office', '~51', '0.01%')}
        </ul>
      </details>
    </div>
  </details>
</div>
<script>
window.mockTree = {
  measure: function (width) {
    const panel = document.getElementById('panel')
    panel.style.width = width + 'px'
    const edge = (element) => {
      if (!element) return null
      const rect = element.getBoundingClientRect()
      return Math.round(rect.right * 100) / 100
    }
    const heads = document.querySelectorAll('.cdp-toolhead span')
    const totals = document.querySelectorAll('.cdp-summary-cols4 .cdp-tool-total')
    const pcts = document.querySelectorAll('.cdp-summary-cols4 .cdp-summary-pct')
    const skillTotals = document.querySelectorAll('[data-role="skills"] + .cdp-toolrows .cdp-tool-total')
    const skillPcts = document.querySelectorAll('[data-role="skills"] + .cdp-toolrows .cdp-tool-pct')
    const result = {
      width: width,
      defs: edge(heads[1]),
      total: edge(heads[2]),
      pct: edge(heads[3]),
      rows: {
        mcp: edge(totals[0]),
        plugins: edge(totals[1]),
        skills: edge(document.querySelector('[data-role="skills"] .cdp-tool-total')),
        skillLeaf: edge(skillTotals[0]),
      },
      pcts: {
        mcp: edge(pcts[0]),
        skills: edge(document.querySelector('[data-role="skills"] .cdp-summary-pct')),
        skillLeaf: edge(skillPcts[0]),
      },
    }
    result.aligned = (result.rows.mcp === result.total)
      && (result.rows.plugins === result.total)
      && (result.rows.skills === result.total)
      && (result.rows.skillLeaf === result.total)
      && (result.pcts.skills === result.pct)
      && (result.pcts.skillLeaf === result.pct)
    return result
  },
}
</script>
</body>
</html>`

const target = path.join(__dirname, 'mock-tree.html')
fs.writeFileSync(target, html)
console.log('wrote ' + target + ' with ' + rules.length + ' CSS rules')
console.log('open it in a browser and run: [300, 335, 380, 460].map(w => mockTree.measure(w))')
