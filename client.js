window.__ModuleLoader__.load({
  id: '@local/dsh-context-detail',
  factory(require) {
    const React = require('react')
    const h = React.createElement

    const NS = 'contextDetail'
    const TAB_ID = '@local/dsh-context-detail/context'
    const TAB_KIND = 'context-detail'

    const DICTS = {
      en: {
        'strip.label': 'Context',
        'strip.open': 'Open the context panel',
        'tab.title': 'Context',
        'panel.title': 'Context window',
        'panel.subtitle': 'What the model reads on the next request',
        'row.used': 'Used',
        'row.system': 'System prompt',
        'row.tools': 'Tool definitions',
        'row.messages': 'Messages',
        'row.free': 'Free space',
        'section.tools': 'Tools',
        'section.tools.none': 'No tool catalog in the loaded history',
        'section.system': 'System prompt text',
        'section.system.hint': 'The standing instructions DSH sends before every conversation: identity, file and tool rules, the MCP server docs and the skill catalog. They are re-sent with every request, so this is the fixed cost paid before the conversation starts.',
        'section.system.none': 'The system prompt is outside the loaded history',
        'section.compaction': 'Compactions',
        'section.compaction.none': 'No compaction in the loaded history',
        'section.usage': 'Session token usage',
        'usage.input': 'Uncached input',
        'usage.read': 'Cache read',
        'usage.write': 'Cache write',
        'usage.output': 'Output',
        'usage.total': 'Total input',
        'usage.hit': 'Cache hit',
        'usage.hit.none': 'Cache hit —',
        'compaction.turn': 'Turn {turn}',
        'compaction.between': 'Between turns',
        'compaction.summary': 'Summary',
        'compaction.input': 'Input',
        'compaction.count': '{count}',
        'tools.mcp': 'MCP servers',
        'tools.plugins': 'Plugins',
        'tools.plugins.hint': 'Tools registered by DSH plugin packages',
        'tools.skills': 'Skills',
        'tools.skills.none': 'The skill catalog is outside the loaded history',
        'tools.skills.catalog': 'Estimated from the installed skill catalog: the prompt text is not in the loaded history.',
        'tools.count': '{count} tools',
        'tools.more': '{count} more',
        'panel.note': 'Category totals come from the measured context; the rows inside a category split that total in proportion to the text each part contributes. The used figure is the projected next request, so the four rows can sit slightly below it. The split is approximate, about four characters per token. Reads only loaded history; no model request is made.',
      },
      es: {
        'strip.label': 'Contexto',
        'strip.open': 'Abrir el panel de contexto',
        'tab.title': 'Contexto',
        'panel.title': 'Ventana de contexto',
        'panel.subtitle': 'Lo que el modelo lee en la próxima petición',
        'row.used': 'En uso',
        'row.system': 'Prompt del sistema',
        'row.tools': 'Definiciones de herramientas',
        'row.messages': 'Mensajes',
        'row.free': 'Espacio libre',
        'section.tools': 'Herramientas',
        'section.tools.none': 'Sin catálogo de herramientas en el historial cargado',
        'section.system': 'Texto del prompt del sistema',
        'section.system.hint': 'Las instrucciones fijas que DSH envía antes de cada conversación: identidad, reglas de archivos y herramientas, documentación de los MCP y catálogo de skills. Se reenvían en cada petición, así que es el coste fijo antes de escribir nada.',
        'section.system.none': 'El prompt del sistema está fuera del historial cargado',
        'section.compaction': 'Compactaciones',
        'section.compaction.none': 'Sin compactaciones en el historial cargado',
        'section.usage': 'Consumo de la sesión',
        'usage.input': 'Entrada sin caché',
        'usage.read': 'Caché leída',
        'usage.write': 'Caché escrita',
        'usage.output': 'Salida',
        'usage.total': 'Entrada total',
        'usage.hit': 'Acierto de caché',
        'usage.hit.none': 'Acierto de caché —',
        'compaction.turn': 'Turno {turn}',
        'compaction.between': 'Entre turnos',
        'compaction.summary': 'Resumen',
        'compaction.input': 'Entrada',
        'compaction.count': '{count}',
        'tools.mcp': 'Servidores MCP',
        'tools.plugins': 'Plugins',
        'tools.plugins.hint': 'Herramientas registradas por plugins de DSH',
        'tools.skills': 'Skills',
        'tools.skills.none': 'El catálogo de skills está fuera del historial cargado',
        'tools.skills.catalog': 'Estimado desde el catálogo instalado: el texto del prompt no está en el historial cargado.',
        'tools.count': '{count} herramientas',
        'tools.more': '{count} más',
        'panel.note': 'Los totales por categoría vienen del contexto medido; las filas dentro de una categoría reparten ese total en proporción al texto que aporta cada parte. La cifra en uso es la próxima petición proyectada, así que las cuatro filas pueden quedar algo por debajo. El reparto es aproximado, unos cuatro caracteres por token. Solo lee el historial cargado; no hace ninguna petición al modelo.',
      },
    }

    const CSS = [
      '.cdp-root{display:flex;align-items:center;justify-content:flex-end;gap:8px;min-width:0;box-sizing:border-box;align-self:stretch;padding-right:var(--dsh-composer-side-clearance, 16px);font-size:11px;line-height:1.4;color:var(--dsw-alias-label-secondary)}',
      '.cdp-strip{display:inline-flex;align-items:center;gap:8px;min-width:0;max-width:100%;padding:3px 8px;border:1px solid transparent;border-radius:8px;background:transparent;color:inherit;font:inherit;cursor:pointer}',
      '.cdp-strip:hover{background:var(--dsw-alias-bg-layer-2);border-color:var(--dsw-alias-border-l1)}',
      '.cdp-strip:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:1px}',
      '.cdp-title{white-space:nowrap}',
      '.cdp-bar{display:inline-flex;flex:0 0 auto;width:112px;height:6px;border-radius:3px;overflow:hidden;background:var(--dsw-alias-bg-layer-2);box-shadow:inset 0 0 0 1px var(--dsw-alias-border-l1)}',
      '.cdp-seg{height:100%;min-width:1px}',
      '.cdp-seg-system{background:var(--dsw-alias-brand-primary)}',
      '.cdp-seg-tools{background:var(--dsw-alias-state-warn-primary)}',
      '.cdp-seg-messages{background:var(--dsw-alias-state-success-primary)}',
      '.cdp-pct{color:var(--dsw-alias-label-primary);font-variant-numeric:tabular-nums;white-space:nowrap}',
      '.cdp-fig{font-variant-numeric:tabular-nums;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      '.cdp-cat{display:inline-flex;align-items:center;gap:4px;font-variant-numeric:tabular-nums;white-space:nowrap}',
      '.cdp-cat i{width:6px;height:6px;border-radius:2px;display:inline-block}',
      '.cdp-dot-system{background:var(--dsw-alias-brand-primary)}',
      '.cdp-dot-tools{background:var(--dsw-alias-state-warn-primary)}',
      '.cdp-dot-messages{background:var(--dsw-alias-state-success-primary)}',
      '.cdp-chev{flex:0 0 auto;opacity:.7}',
      '@media (max-width:1180px){.cdp-cat{display:none}}',
      '@media (max-width:980px){.cdp-fig{display:none}}',

      '.cdp-tab{height:100%;overflow:auto;box-sizing:border-box;padding:14px 16px 24px;font-size:12px;line-height:1.5;color:var(--dsw-alias-label-primary)}',
      '.cdp-tab-head{display:flex;align-items:baseline;justify-content:space-between;gap:10px}',
      '.cdp-tab-title{margin:0;font-size:13px;font-weight:600}',
      '.cdp-tab-fig{font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-secondary);white-space:nowrap}',
      '.cdp-tab-sub{margin:2px 0 0;color:var(--dsw-alias-label-secondary);font-size:11px}',
      '.cdp-tab-pct{font-size:26px;font-weight:600;line-height:1.2;margin:8px 0 10px;font-variant-numeric:tabular-nums}',
      '.cdp-tab-pct small{font-size:11px;font-weight:400;color:var(--dsw-alias-label-secondary);margin-left:8px}',
      '.cdp-tab-bar{display:flex;height:8px;border-radius:4px;overflow:hidden;background:var(--dsw-alias-bg-layer-2);box-shadow:inset 0 0 0 1px var(--dsw-alias-border-l1);margin-bottom:14px}',
      '.cdp-grid{display:grid;grid-template-columns:repeat(20,1fr);gap:3px;margin:0 0 14px}',
      '.cdp-cell{aspect-ratio:1/1;border-radius:2px;background:var(--dsw-alias-state-idle-primary);opacity:.28}',
      '.cdp-cell-system{background:var(--dsw-alias-brand-primary);opacity:1}',
      '.cdp-cell-tools{background:var(--dsw-alias-state-warn-primary);opacity:1}',
      '.cdp-cell-messages{background:var(--dsw-alias-state-success-primary);opacity:1}',
      '.cdp-rows{display:grid;grid-template-columns:1fr auto 60px;gap:5px 10px;margin:0}',
      '.cdp-row-label{display:flex;align-items:center;gap:6px;color:var(--dsw-alias-label-secondary);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',
      '.cdp-swatch{width:7px;height:7px;border-radius:2px;flex:0 0 auto}',
      '.cdp-swatch-free{background:var(--dsw-alias-state-idle-primary)}',
      '.cdp-row-val{text-align:right;font-variant-numeric:tabular-nums}',
      '.cdp-row-pct{text-align:right;font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-secondary)}',
      '.cdp-section{margin:16px 0 0;padding-top:12px;border-top:1px solid var(--dsw-alias-border-l1)}',
      '.cdp-section-title{margin:0 0 6px;font-size:11px;font-weight:600;letter-spacing:.02em;text-transform:uppercase;color:var(--dsw-alias-label-secondary)}',
      '.cdp-details{margin:0}',
      '.cdp-summary{cursor:pointer;list-style:none;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:3px 0;color:var(--dsw-alias-label-secondary)}',
      '.cdp-summary::-webkit-details-marker{display:none}',
      '.cdp-summary-text{display:flex;align-items:center;gap:7px;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',
      '.cdp-summary-text::before{content:"";flex:0 0 auto;width:0;height:0;border-left:5px solid currentColor;border-top:4px solid transparent;border-bottom:4px solid transparent;transition:transform .15s}',
      '.cdp-details[open] > .cdp-summary .cdp-summary-text::before{transform:rotate(90deg)}',
      '.cdp-summary-val{font-variant-numeric:tabular-nums;flex:0 0 auto}',
      '.cdp-list{display:grid;grid-template-columns:1fr auto 54px;gap:4px 10px;margin:8px 0 0;padding:0;list-style:none}',
      '.cdp-item{min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--dsw-alias-label-secondary)}',
      '.cdp-item-val{text-align:right;font-variant-numeric:tabular-nums}',
      '.cdp-item-pct{text-align:right;font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-secondary)}',
      '.cdp-hit{display:flex;align-items:center;gap:8px;margin:0 0 9px;font-size:12px}',
      '.cdp-hit-label{color:var(--dsw-alias-label-secondary);white-space:nowrap}',
      '.cdp-hit-value{font-variant-numeric:tabular-nums;font-weight:600;color:var(--dsw-alias-state-success-primary);white-space:nowrap}',
      '.cdp-hit-bar{flex:1 1 auto;height:5px;border-radius:3px;background:var(--dsw-alias-bg-layer-2);overflow:hidden;box-shadow:inset 0 0 0 1px var(--dsw-alias-border-l1)}',
      '.cdp-hit-fill{display:block;height:100%;background:var(--dsw-alias-state-success-primary)}',
      '.cdp-mono{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:11px;color:var(--dsw-alias-label-primary)}',
      '.cdp-pre{max-height:200px;overflow:auto;margin:8px 0 0;padding:8px 10px;border-radius:8px;background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l1);font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:10.5px;line-height:1.45;white-space:pre-wrap;word-break:break-word;color:var(--dsw-alias-label-secondary)}',
      '.cdp-empty{margin:4px 0 0;color:var(--dsw-alias-label-secondary)}',
      '.cdp-note{margin:16px 0 0;font-size:10.5px;line-height:1.45;color:var(--dsw-alias-label-secondary)}',
      '.cdp-compaction{display:grid;grid-template-columns:1fr auto;gap:2px 10px;margin:0 0 8px}',
      '.cdp-compaction-when{color:var(--dsw-alias-label-primary)}',
      '.cdp-compaction-meta{grid-column:1 / -1;color:var(--dsw-alias-label-secondary);font-size:11px;font-variant-numeric:tabular-nums}',
      '.cdp-hint{margin:2px 0 9px;color:var(--dsw-alias-label-secondary);font-size:11px;line-height:1.45}',
      '.cdp-compactions{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin;padding-right:4px}',
      '.cdp-compactions .cdp-compaction:last-child{margin-bottom:0}',
    ].join('\n')

    /** Insert the package stylesheet with the strongest mechanism the host allows. */
    function adoptStyles() {
      try {
        if (typeof CSSStyleSheet === 'function' && 'adoptedStyleSheets' in document) {
          const sheet = new CSSStyleSheet()
          sheet.replaceSync(CSS)
          document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet]
          return () => {
            document.adoptedStyleSheets = document.adoptedStyleSheets.filter(candidate => candidate !== sheet)
          }
        }
      } catch (error) {
        console.error('[context-detail] adopted stylesheet unavailable', error)
      }
      const element = document.createElement('style')
      element.textContent = CSS
      document.head.appendChild(element)
      return () => { element.remove() }
    }

    function isNumber(value) {
      return typeof value === 'number' && Number.isFinite(value)
    }

    /** Compact token count for a strip, table cell or tab row. */
    function compact(value, locale) {
      if (!isNumber(value)) return '—'
      const format = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 })
      const magnitude = Math.abs(value)
      if (magnitude < 1000) return format.format(Math.round(value))
      if (magnitude < 1e6) return format.format(Math.round(value / 100) / 10) + 'K'
      return format.format(Math.round(value / 1e5) / 10) + 'M'
    }

    function percentOf(part, whole) {
      if (!isNumber(part) || !isNumber(whole) || whole <= 0) return 0
      return Math.round(part / whole * 1000) / 10
    }

    /** Share of the window, with a second decimal for small parts. */
    function share(part, whole) {
      if (!isNumber(part) || !isNumber(whole) || whole <= 0) return ''
      const value = part / whole * 100
      return (value >= 10 ? Math.round(value * 10) / 10 : Math.round(value * 100) / 100) + '%'
    }

    /** Read the skill catalog the system prompt carries, one entry per line. */
    function parseSkills(systemText) {
      if (typeof systemText !== 'string' || systemText.length === 0) return null
      const open = systemText.indexOf('<available_skills>')
      const close = systemText.indexOf('</available_skills>')
      if (open < 0 || close <= open) return null
      const block = systemText.slice(open, close)
      const entries = []
      for (const line of block.split('\n')) {
        const match = /^\s*[-*]\s+`([^`]+)`/.exec(line)
          || /^\s*[-*]\s+([a-z0-9][a-z0-9._-]{2,})\s*[:(]/.exec(line)
        if (match) entries.push({ name: match[1], size: line.length })
      }
      if (entries.length === 0) return null
      return { entries, chars: block.length }
    }

    /** Session totals and the prompt-cache hit rate, when the provider reported them. */
    function usageDetail(usage) {
      if (!usage || typeof usage !== 'object') return null
      const read = isNumber(usage.cacheReadTokens) ? usage.cacheReadTokens : 0
      const write = isNumber(usage.cacheWriteTokens) ? usage.cacheWriteTokens : 0
      const uncached = isNumber(usage.uncachedInputTokens) ? usage.uncachedInputTokens : 0
      const output = isNumber(usage.outputTokens) ? usage.outputTokens : 0
      const total = read + write + uncached
      if (total <= 0 && output <= 0) return null
      const denominator = read + uncached
      return {
        read,
        write,
        uncached,
        output,
        total,
        hit: denominator > 0 ? read / denominator * 100 : undefined,
      }
    }

    /** Read the three composition estimates, or null when the projection is absent. */
    function readSplit(breakdown) {
      if (!breakdown || typeof breakdown !== 'object') return null
      const system = isNumber(breakdown.systemTokens) ? breakdown.systemTokens : 0
      const tools = isNumber(breakdown.toolsTokens) ? breakdown.toolsTokens : 0
      const messages = isNumber(breakdown.messageTokens) ? breakdown.messageTokens : 0
      if (system + tools + messages <= 0) return null
      return { system, tools, messages }
    }

    /** Distribute the filled share of a 100-cell grid across the three categories. */
    function cellCounts(percent, split) {
      const filled = Math.max(0, Math.min(100, Math.round(percent)))
      if (!split) return [filled, 0, 0]
      const total = split.system + split.tools + split.messages
      let system = Math.round(filled * split.system / total)
      let tools = Math.round(filled * split.tools / total)
      let over = system + tools - filled
      if (over > 0) {
        const fromTools = Math.min(tools, over)
        tools -= fromTools
        over -= fromTools
        system = Math.max(0, system - over)
      }
      return [system, tools, Math.max(0, filled - system - tools)]
    }

    function segmentWidths(percent, split) {
      if (!split) return [{ key: 'used', className: 'cdp-seg cdp-seg-system', width: percent }]
      const total = split.system + split.tools + split.messages
      return [
        { key: 'system', className: 'cdp-seg cdp-seg-system', width: percent * split.system / total },
        { key: 'tools', className: 'cdp-seg cdp-seg-tools', width: percent * split.tools / total },
        { key: 'messages', className: 'cdp-seg cdp-seg-messages', width: percent * split.messages / total },
      ]
    }

    function safeStringify(value) {
      try {
        return JSON.stringify(value) || ''
      } catch (error) {
        return ''
      }
    }

    /**
     * Group the request's tool catalog into MCP servers and other tools, then
     * split the measured tool total across every entry at once so the two
     * groups add up to that total instead of each claiming all of it.
     */
    function groupTools(tools, toolsTokens) {
      if (!Array.isArray(tools) || tools.length === 0) return null
      const entries = []
      const servers = new Map()
      for (const tool of tools) {
        const name = tool && typeof tool.name === 'string' ? tool.name : ''
        if (!name) continue
        const size = safeStringify(tool).length
        const match = /^mcp__(.+?)__(.+)$/.exec(name)
        if (match) {
          const server = match[1]
          const entry = servers.get(server) || { server, size: 0, count: 0 }
          entry.size += size
          entry.count += 1
          servers.set(server, entry)
        } else {
          entries.push({ key: 'tool:' + name, label: name, size, group: 'other' })
        }
      }
      for (const entry of servers.values()) {
        entries.push({ key: 'mcp:' + entry.server, label: entry.server, size: entry.size, group: 'mcp', count: entry.count })
      }
      const total = entries.reduce((sum, entry) => sum + entry.size, 0)
      if (!isNumber(toolsTokens) || toolsTokens <= 0 || total <= 0) return null
      const sized = entries
        .map(entry => ({ ...entry, tokens: toolsTokens * entry.size / total }))
        .sort((left, right) => right.tokens - left.tokens)
      return {
        mcpRows: sized.filter(entry => entry.group === 'mcp'),
        otherRows: sized.filter(entry => entry.group === 'other'),
        toolCount: tools.length,
      }
    }

    function compactionRows(requests) {
      if (!Array.isArray(requests)) return []
      return requests
        .filter(request => request && request.purpose === 'compaction')
        .map(request => {
          const usage = request.usage && typeof request.usage === 'object' ? request.usage : null
          const input = usage
            ? (isNumber(usage.uncachedInputTokens) ? usage.uncachedInputTokens : 0)
              + (isNumber(usage.cacheReadTokens) ? usage.cacheReadTokens : 0)
              + (isNumber(usage.cacheWriteTokens) ? usage.cacheWriteTokens : 0)
            : undefined
          const output = usage && isNumber(usage.outputTokens) ? usage.outputTokens : undefined
          return {
            key: 'compaction:' + String(request.startSeq),
            turn: isNumber(request.turn) ? request.turn : null,
            time: isNumber(request.startedAt) ? request.startedAt : undefined,
            input: input && input > 0 ? input : undefined,
            output: output && output > 0 ? output : undefined,
          }
        })
    }

    function latestPrompt(requests) {
      if (!Array.isArray(requests)) return null
      for (let index = requests.length - 1; index >= 0; index -= 1) {
        const request = requests[index]
        if (request && request.purpose === 'assistant' && request.prompt) return request.prompt
      }
      return null
    }

    /**
     * The request's own rendered prompt when the window still holds it; a
     * standalone system node otherwise, which is the usual case in a long
     * Session whose first message scrolled out of the loaded history.
     */
    function resolveSystemText(prompt, trajectory) {
      if (prompt && typeof prompt.system === 'string' && prompt.system.length > 0) return prompt.system
      const nodes = trajectory && Array.isArray(trajectory.systemPrompts) ? trajectory.systemPrompts : []
      for (let index = nodes.length - 1; index >= 0; index -= 1) {
        const node = nodes[index]
        if (node && typeof node.text === 'string' && node.text.length > 0) return node.text
      }
      return ''
    }

    function createStrip(ctx, t) {
      return function ContextDetailStrip(props) {
        const useProjection = props.useProjection
        const pressure = useProjection ? useProjection('contextPressure') : undefined
        const breakdown = useProjection ? useProjection('contextBreakdown') : undefined

        React.useSyncExternalStore(
          React.useCallback(callback => ctx.locale.subscribe(callback), []),
          () => ctx.locale.getSnapshot().revision,
        )

        // Line the row up with the composer card: measure the card beside the
        // dock, take its width, and centre the row the same way.
        const rootRef = React.useRef(null)
        React.useLayoutEffect(() => {
          const root = rootRef.current
          if (!root) return undefined
          const measure = () => {
            const dock = document.querySelector('[data-composer-dock]')
            const bar = dock ? dock.parentElement : null
            if (!bar) return
            let card = null
            for (const child of bar.children) {
              if (child === dock) continue
              const rect = child.getBoundingClientRect()
              if (rect.width > 0 && rect.height > 0 && (card === null || rect.height > card.height)) card = rect
            }
            if (card === null) return
            // Sit at the row's start edge and end exactly at the card's right edge.
            root.style.marginLeft = '0'
            root.style.marginRight = 'auto'
            root.style.paddingRight = '0'
            const left = root.getBoundingClientRect().left
            const width = Math.round(card.right - left)
            if (width > 0 && root.style.width !== width + 'px') root.style.width = width + 'px'
          }
          measure()
          const host = document.querySelector('[data-composer-dock]')
          const target = host ? host.parentElement : document.body
          if (typeof ResizeObserver === 'function' && target) {
            const observer = new ResizeObserver(measure)
            observer.observe(target)
            return () => observer.disconnect()
          }
          return undefined
        }, [])

        const locale = ctx.locale.getLocale().active
        const used = isNumber(pressure && pressure.projectedTokens)
          ? pressure.projectedTokens
          : (isNumber(pressure && pressure.pressureTokens) ? pressure.pressureTokens : undefined)
        const capacity = isNumber(pressure && pressure.contextWindow) && pressure.contextWindow > 0
          ? pressure.contextWindow
          : undefined

        if (used === undefined || capacity === undefined) return null

        const percent = Math.min(100, Math.round(used / capacity * 100))
        const split = readSplit(breakdown)
        const segments = segmentWidths(percent, split)

        const open = () => {
          try {
            ctx.sidebarRight.openTab(TAB_KIND)
          } catch (error) {
            console.error('[context-detail] cannot open the context panel', error)
          }
        }

        return h('div', { className: 'cdp-root', ref: rootRef },
          h('button', {
            type: 'button',
            className: 'cdp-strip',
            title: t('strip.open'),
            'aria-label': t('strip.open'),
            onClick: open,
          },
            h('span', { className: 'cdp-title' }, t('strip.label')),
            h('span', { className: 'cdp-bar', 'aria-hidden': true },
              segments.map(segment => h('span', {
                key: segment.key,
                className: segment.className,
                style: { width: segment.width.toFixed(2) + '%' },
              })),
            ),
            h('span', { className: 'cdp-pct' }, percent + '%'),
            h('span', { className: 'cdp-fig' }, '~' + compact(used, locale) + ' / ' + compact(capacity, locale)),
            split
              ? [
                h('span', { key: 'cat-system', className: 'cdp-cat' },
                  h('i', { className: 'cdp-dot-system' }), compact(split.system, locale)),
                h('span', { key: 'cat-tools', className: 'cdp-cat' },
                  h('i', { className: 'cdp-dot-tools' }), compact(split.tools, locale)),
                h('span', { key: 'cat-messages', className: 'cdp-cat' },
                  h('i', { className: 'cdp-dot-messages' }), compact(split.messages, locale)),
              ]
              : null,
            h('svg', {
              className: 'cdp-chev',
              width: 10,
              height: 10,
              viewBox: '0 0 10 10',
              'aria-hidden': true,
            }, h('path', {
              d: 'M3.5 2 L6.5 5 L3.5 8',
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: 1.4,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            })),
          ),
        )
      }
    }

    function createPanel(ctx, t, remoteRef) {
      return function ContextDetailPanel(props) {
        const useProjection = props.useProjection
        const pressure = useProjection ? useProjection('contextPressure') : undefined
        const breakdown = useProjection ? useProjection('contextBreakdown') : undefined
        const usage = useProjection ? useProjection('tokenUsage') : undefined
        const useTrajectory = props.useTrajectory
        const trajectory = useTrajectory ? useTrajectory(snapshot => snapshot) : undefined

        // The installed skill catalog, as the `/` menu reads it. Used only when
        // the prompt text is outside the loaded history.
        const sessionId = props.sessionId
        const [catalog, setCatalog] = React.useState(null)
        React.useEffect(() => {
          if (!sessionId) return undefined
          let cancelled = false
          let timer
          const controller = new AbortController()
          const attempt = (tries) => {
            const remote = remoteRef.current
              || (typeof ctx.get === 'function' ? ctx.get('remote.skills') : undefined)
              || (ctx.remote && ctx.remote.skills)
            if (!remote || typeof remote.list !== 'function') {
              if (tries > 0) timer = setTimeout(() => attempt(tries - 1), 800)
              return
            }
            Promise.resolve(remote.list({ sessionId }, controller.signal))
              .then(result => {
                if (cancelled || !result || !result.ok) return
                const list = result.value && Array.isArray(result.value.skills) ? result.value.skills : []
                setCatalog(list)
              })
              .catch(() => {})
          }
          attempt(3)
          return () => {
            cancelled = true
            controller.abort()
            if (timer) clearTimeout(timer)
          }
        }, [sessionId])

        React.useSyncExternalStore(
          React.useCallback(callback => ctx.locale.subscribe(callback), []),
          () => ctx.locale.getSnapshot().revision,
        )

        // The compaction list shows five rows and scrolls for the rest. Measure
        // the sixth row instead of hard-coding a height: the position of that
        // row is where the scroll window has to end, whatever the row heights.
        const compactionListRef = React.useRef(null)
        React.useLayoutEffect(() => {
          const list = compactionListRef.current
          if (!list) return undefined
          const measure = () => {
            const box = list.getBoundingClientRect()
            if (box.width === 0 || box.height === 0) return
            const rows = list.children
            if (rows.length <= 5) {
              if (list.style.maxHeight !== '') list.style.maxHeight = ''
              return
            }
            const next = Math.max(
              1,
              Math.round(rows[5].getBoundingClientRect().top - list.getBoundingClientRect().top + list.scrollTop),
            ) + 'px'
            if (list.style.maxHeight !== next) list.style.maxHeight = next
          }
          measure()
          if (typeof ResizeObserver !== 'function') return undefined
          const observer = new ResizeObserver(measure)
          observer.observe(list)
          return () => observer.disconnect()
        })

        const locale = ctx.locale.getLocale().active
        try {
        const used = isNumber(pressure && pressure.projectedTokens)
          ? pressure.projectedTokens
          : (isNumber(pressure && pressure.pressureTokens) ? pressure.pressureTokens : undefined)
        const capacity = isNumber(pressure && pressure.contextWindow) && pressure.contextWindow > 0
          ? pressure.contextWindow
          : undefined
        const available = used !== undefined && capacity !== undefined
        const percent = available ? Math.min(100, Math.round(used / capacity * 100)) : 0
        const split = readSplit(breakdown)

        const requests = trajectory && Array.isArray(trajectory.requests) ? trajectory.requests : []
        const prompt = latestPrompt(requests)
        const toolGroups = split ? groupTools(prompt ? prompt.tools : null, split.tools) : null
        const systemText = resolveSystemText(prompt, trajectory)
        const compactions = compactionRows(requests)

        const rows = []
        if (split) {
          rows.push(
            { key: 'system', label: t('row.system'), swatch: 'cdp-swatch cdp-dot-system', tokens: split.system },
            { key: 'tools', label: t('row.tools'), swatch: 'cdp-swatch cdp-dot-tools', tokens: split.tools },
            { key: 'messages', label: t('row.messages'), swatch: 'cdp-swatch cdp-dot-messages', tokens: split.messages },
          )
        } else if (available) {
          rows.push({ key: 'used', label: t('row.used'), swatch: 'cdp-swatch cdp-dot-system', tokens: used })
        }
        if (available) {
          rows.push({ key: 'free', label: t('row.free'), swatch: 'cdp-swatch cdp-swatch-free', tokens: Math.max(0, capacity - used) })
        }

        const usageInfo = usageDetail(usage)
        const parsedSkills = parseSkills(systemText)
        const catalogSkills = parsedSkills === null && Array.isArray(catalog) && catalog.length > 0
          ? {
            fromCatalog: true,
            chars: 0,
            entries: catalog
              .map(entry => ({
                name: String((entry && entry.name) || ''),
                size: (String((entry && entry.name) || '') + ': ' + String((entry && entry.description) || '')).length,
              }))
              .filter(entry => entry.name.length > 0),
          }
          : null
        const skills = parsedSkills || catalogSkills
        const skillChars = skills ? skills.entries.reduce((sum, entry) => sum + entry.size, 0) : 0
        const skillsTokens = skills === null
          ? undefined
          : (parsedSkills !== null && split && systemText.length > 0
            ? split.system * (skills.chars / systemText.length)
            : Math.min(skillChars / 4, split ? split.system : skillChars / 4))

        const counts = cellCounts(percent, split)
        const cells = []
        for (let index = 0; index < 100; index += 1) {
          const filledClass = index < counts[0]
            ? 'cdp-cell cdp-cell-system'
            : index < counts[0] + counts[1]
              ? 'cdp-cell cdp-cell-tools'
              : index < counts[0] + counts[1] + counts[2]
                ? 'cdp-cell cdp-cell-messages'
                : 'cdp-cell'
          cells.push(h('span', { key: index, className: filledClass }))
        }

        const segments = segmentWidths(percent, split)

        const mcpTotal = toolGroups ? toolGroups.mcpRows.reduce((sum, row) => sum + row.tokens, 0) : 0
        const pluginsTotal = toolGroups ? toolGroups.otherRows.reduce((sum, row) => sum + row.tokens, 0) : 0
        const skillTotalSize = skills ? skills.entries.reduce((sum, entry) => sum + entry.size, 0) : 0

        const toolRows = (entries, limit) => entries.slice(0, limit).map(entry => [
          h('li', { key: entry.key, className: 'cdp-item' },
            h('span', { className: 'cdp-mono' }, entry.label),
            entry.count !== undefined ? ' · ' + t('tools.count', { count: entry.count }) : ''),
          h('li', { key: entry.key + '-value', className: 'cdp-item-val' }, '~' + compact(entry.tokens, locale)),
          h('li', { key: entry.key + '-pct', className: 'cdp-item-pct' }, share(entry.tokens, capacity)),
        ]).concat(
          entries.length > limit
            ? [[
              h('li', { key: 'more', className: 'cdp-item' }, t('tools.more', { count: entries.length - limit })),
              h('li', { key: 'more-value', className: 'cdp-item-val' }, ''),
              h('li', { key: 'more-pct', className: 'cdp-item-pct' }, ''),
            ]]
            : [],
        )

        const toolSection = h('section', { className: 'cdp-section' },
          h('h3', { className: 'cdp-section-title' }, t('section.tools')),
          toolGroups === null
            ? h('p', { className: 'cdp-empty' }, t('section.tools.none'))
            : [
              toolGroups.mcpRows.length > 0
                ? h('details', { key: 'mcp', className: 'cdp-details' },
                  h('summary', { className: 'cdp-summary' },
                    h('span', { className: 'cdp-summary-text' }, t('tools.mcp')),
                    h('span', { className: 'cdp-summary-val' },
                      '~' + compact(mcpTotal, locale) + ' · ' + share(mcpTotal, capacity)),
                  ),
                  h('ul', { className: 'cdp-list' }, toolRows(toolGroups.mcpRows, 30)),
                )
                : null,
              toolGroups.otherRows.length > 0
                ? h('details', { key: 'plugins', className: 'cdp-details', title: t('tools.plugins.hint') },
                  h('summary', { className: 'cdp-summary' },
                    h('span', { className: 'cdp-summary-text' }, t('tools.plugins')),
                    h('span', { className: 'cdp-summary-val' },
                      '~' + compact(pluginsTotal, locale) + ' · ' + share(pluginsTotal, capacity)),
                  ),
                  h('ul', { className: 'cdp-list' }, toolRows(toolGroups.otherRows, 40)),
                )
                : null,
            ],
          h('details', { key: 'skills', className: 'cdp-details' },
            h('summary', { className: 'cdp-summary' },
              h('span', { className: 'cdp-summary-text' }, t('tools.skills')),
              h('span', { className: 'cdp-summary-val' },
                skillsTokens !== undefined
                  ? '~' + compact(skillsTokens, locale) + ' · ' + share(skillsTokens, capacity)
                  : '—'),
            ),
            skills
              ? [
                h('ul', { key: 'skills-list', className: 'cdp-list' },
                skills.entries.slice(0, 40).map(entry => {
                  const tokens = skillsTokens !== undefined && skillTotalSize > 0
                    ? skillsTokens * entry.size / skillTotalSize
                    : undefined
                  return [
                    h('li', { key: 'skill:' + entry.name, className: 'cdp-item' },
                      h('span', { className: 'cdp-mono' }, entry.name)),
                    h('li', { key: 'skill:' + entry.name + '-value', className: 'cdp-item-val' },
                      tokens !== undefined ? '~' + compact(tokens, locale) : ''),
                    h('li', { key: 'skill:' + entry.name + '-pct', className: 'cdp-item-pct' },
                      share(tokens, capacity)),
                  ]
                }).concat(
                  skills.entries.length > 40
                    ? [[
                      h('li', { key: 'skills-more', className: 'cdp-item' },
                        t('tools.more', { count: skills.entries.length - 40 })),
                      h('li', { key: 'skills-more-value', className: 'cdp-item-val' }, ''),
                      h('li', { key: 'skills-more-pct', className: 'cdp-item-pct' }, ''),
                    ]]
                    : [],
                ),
              ),
                skills.fromCatalog
                  ? h('p', { key: 'skills-hint', className: 'cdp-empty' }, t('tools.skills.catalog'))
                  : null,
              ]
              : h('p', { className: 'cdp-empty' }, t('tools.skills.none')),
          ),
        )

        const systemSection = h('section', { className: 'cdp-section' },
          h('h3', { className: 'cdp-section-title' }, t('section.system')),
          h('p', { className: 'cdp-hint' }, t('section.system.hint')),
          systemText
            ? h('details', { className: 'cdp-details' },
              h('summary', { className: 'cdp-summary' },
                h('span', { className: 'cdp-summary-text' }, t('row.system')),
                h('span', { className: 'cdp-summary-val' },
                  '~' + compact(split ? split.system : undefined, locale)),
              ),
              h('pre', { className: 'cdp-pre' }, systemText.length > 8000 ? systemText.slice(0, 8000) + '\n…' : systemText),
            )
            : h('p', { className: 'cdp-empty' },
              (split ? '~' + compact(split.system, locale) + ' · ' : '') + t('section.system.none')),
        )

        const compactionSection = h('section', { className: 'cdp-section' },
          h('h3', { className: 'cdp-section-title' },
            t('section.compaction') + (compactions.length > 0 ? ' · ' + t('compaction.count', { count: compactions.length }) : '')),
          compactions.length === 0
            ? h('p', { className: 'cdp-empty' }, t('section.compaction.none'))
            : h('div', { className: 'cdp-compactions', ref: compactionListRef },
              compactions.slice().reverse().map(entry => h('div', { key: entry.key, className: 'cdp-compaction' },
                h('span', { className: 'cdp-compaction-when' },
                  entry.turn === null ? t('compaction.between') : t('compaction.turn', { turn: entry.turn })),
                h('span', { className: 'cdp-item-val' }, entry.time !== undefined
                  ? new Date(entry.time).toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })
                  : ''),
                h('span', { className: 'cdp-compaction-meta' },
                  [
                    entry.input !== undefined ? t('compaction.input') + ' ~' + compact(entry.input, locale) : null,
                    entry.output !== undefined ? t('compaction.summary') + ' ~' + compact(entry.output, locale) : null,
                  ].filter(Boolean).join('  ·  ')),
              ))),
        )

        const usageRow = (key, label, value, extra) => [
          h('span', { key: key + '-label', className: 'cdp-row-label' }, label),
          h('span', { key: key + '-value', className: 'cdp-row-val' }, value),
          h('span', { key: key + '-pct', className: 'cdp-row-pct' }, extra === undefined ? '' : extra),
        ]

        const hitPercent = usageInfo && usageInfo.hit !== undefined
          ? Math.max(0, Math.min(100, usageInfo.hit))
          : undefined

        const usageSection = usageInfo === null
          ? null
          : h('section', { className: 'cdp-section' },
            h('h3', { className: 'cdp-section-title' }, t('section.usage')),
            h('div', { className: 'cdp-hit' },
              h('span', { className: 'cdp-hit-label' }, t('usage.hit')),
              h('span', { className: 'cdp-hit-value' },
                hitPercent === undefined ? '—' : (Math.round(hitPercent * 10) / 10) + '%'),
              h('span', { className: 'cdp-hit-bar', 'aria-hidden': true },
                h('span', {
                  className: 'cdp-hit-fill',
                  style: { width: (hitPercent === undefined ? 0 : hitPercent).toFixed(1) + '%' },
                }),
              ),
            ),
            h('div', { className: 'cdp-rows' },
              [
                usageRow('total', t('usage.total'), compact(usageInfo.total, locale), '100%'),
                usageRow('input', t('usage.input'), compact(usageInfo.uncached, locale), share(usageInfo.uncached, usageInfo.total)),
                usageRow('read', t('usage.read'), compact(usageInfo.read, locale), share(usageInfo.read, usageInfo.total)),
                usageInfo.write > 0
                  ? usageRow('write', t('usage.write'), compact(usageInfo.write, locale), share(usageInfo.write, usageInfo.total))
                  : null,
                usageRow('output', t('usage.output'), compact(usageInfo.output, locale), ''),
              ].filter(Boolean),
            ),
          )

        return h('div', { className: 'cdp-tab' },
          h('div', { className: 'cdp-tab-head' },
            h('h2', { className: 'cdp-tab-title' }, t('panel.title')),
            h('span', { className: 'cdp-tab-fig' },
              available ? '~' + compact(used, locale) + ' / ' + compact(capacity, locale) : '—'),
          ),
          h('p', { className: 'cdp-tab-sub' }, t('panel.subtitle')),
          h('div', { className: 'cdp-tab-pct' },
            available ? percent + '%' : '—',
            h('small', {}, t('row.used')),
          ),
          h('div', { className: 'cdp-tab-bar', 'aria-hidden': true },
            segments.map(segment => h('span', {
              key: segment.key,
              className: segment.className,
              style: { width: segment.width.toFixed(2) + '%' },
            })),
          ),
          available ? h('div', { className: 'cdp-grid', 'aria-hidden': true }, cells) : null,
          rows.length > 0
            ? h('div', { className: 'cdp-rows' },
              rows.map(row => [
                h('span', { key: row.key + '-label', className: 'cdp-row-label' },
                  h('i', { className: row.swatch, 'aria-hidden': true }), row.label),
                h('span', { key: row.key + '-value', className: 'cdp-row-val' }, '~' + compact(row.tokens, locale)),
                h('span', { key: row.key + '-pct', className: 'cdp-row-pct' },
                  (row.key === 'free'
                    ? Math.round(Math.max(0, 100 - percent) * 10) / 10
                    : percentOf(row.tokens, capacity)) + '%'),
              ]),
            )
            : null,
          toolSection,
          systemSection,
          compactionSection,
          usageSection,
          h('p', { className: 'cdp-note' }, t('panel.note')),
        )
        } catch (error) {
          console.error('[context-detail] panel render failed', error)
          return h('div', { className: 'cdp-tab' },
            h('h2', { className: 'cdp-tab-title' }, t('panel.title')),
            h('pre', { className: 'cdp-pre' }, String((error && error.stack) || error)),
          )
        }
      }
    }

    return {
      inject: ['slots', 'locale', 'sidebarRight', 'sidebarRightTabs'],
      apply(ctx) {
        ctx.effect(() => adoptStyles(), 'context-detail styles')
        for (const locale of Object.keys(DICTS)) {
          ctx.effect(() => ctx.locale.register(NS, locale, DICTS[locale]), 'context-detail locale ' + locale)
        }

        const t = ctx.locale.bind(NS)
        // The skill catalog Remote is resolved at call time through ctx.get, so
        // its absence can never block this plugin's activation.
        const remoteRef = { current: null }
        const Panel = createPanel(ctx, t, remoteRef)
        const Strip = createStrip(ctx, t)

        ctx.effect(() => ctx.sidebarRightTabs.register({
          id: TAB_ID,
          kind: TAB_KIND,
          title: () => t('tab.title'),
          keepMounted: true,
        }), 'context-detail tab type')

        ctx.effect(() => ctx.slots.register({
          name: 'sidebar.right.pane.tab',
          key: TAB_ID,
        }, Panel), 'context-detail tab body')

        ctx.slots.inject('conversation.input.dock', () => ctx.slots.register({
          name: 'conversation.input.dock',
          id: 'context-detail',
          order: 30,
          label: () => t('strip.label'),
        }, Strip))
      },
    }
  },
})
