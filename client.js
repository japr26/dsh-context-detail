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
        'strip.cache': 'Cache',
        'strip.cache.session': 'session {value}',
        'strip.cache.title': 'Prompt-cache hit — last turn {last} · session {session}',
        'tab.title': 'Context',
        'panel.title': 'Context window',
        'panel.subtitle': 'What the model reads on the next request',
        'row.used': 'Used',
        'row.system': 'System prompt',
        'notices.count': '{count} blocks',
        'row.tools': 'Tools',
        'row.messages': 'Messages',
        'row.free': 'Free space',
        'section.tools': 'Tools',
        'section.tools.none': 'No tool catalog in the loaded history',
        'section.tools.hint': 'Definitions are the fixed catalog sent with every request. Tool calls carry the arguments of each use and tool results carry what each tool returned; both travel inside the messages, so they are counted here and not in Messages.',
        'tools.definitions': 'Definitions (catalog)',
        'tools.calls': 'Tool calls (arguments)',
        'tools.results': 'Tool results',
        'tools.title.definitions': 'One entry per tool: its name, description and the JSON schema of its parameters. It is re-sent with every request.',
        'tools.title.calls': 'The JSON arguments of every tool call the session recorded, read from the session log.',
        'tools.title.results': 'What each tool returned: file contents, command output, search results, in the session log.',
        'tools.column.defs': 'defs',
        'tools.column.total': 'total',
        'tools.column.pct': '%',
        'tools.column.total.hint': 'Definitions plus the arguments and results the calls of these tools added.',
        'tools.server': '{name} · {count} tools',
        'tools.mcp.hint': 'Every MCP server the request carried, with the definitions of its tools and everything their calls add.',
        'tools.skills.title': 'The skill catalog travels inside the system prompt, so its size is part of the system bucket, not of Tools.',
        'tools.skills.scope': 'system prompt',
        'tools.calls.count': '{count} calls',
        'tools.results.count': '{count} results',
        'tools.scan.unavailable': 'The session log could not be read; calls and results stay inside Messages.',
        'section.messages': 'Messages',
        'messages.hint': 'Conversation only: prompts, assistant responses and reasoning. Tool definitions, call arguments and results are counted under Tools.',
        'messages.user': 'Your prompts',
        'messages.assistant': 'Assistant responses',
        'messages.reasoning': 'Reasoning',
        'section.system': 'System prompt',
        'section.system.hint': 'The standing instructions DSH sends before every conversation: identity, file and tool rules, the MCP server docs and the skill catalog. They are re-sent with every request, so this is the fixed cost paid before the conversation starts.',
        'section.system.none': 'The system prompt is outside the loaded history',
        'section.notices': 'Added notices',
        'system.show': 'Show the text',
        'system.log': 'Read from the session log: the loaded history no longer carries the prompt text, so this is the last version the session recorded.',
        'system.saved': 'Restored from the copy saved earlier in this session.',
        'section.compaction': 'Compactions',
        'section.compaction.none': 'No compaction in the loaded history',
        'section.usage': 'Session token usage',
        'section.growth': 'Context growth',
        'growth.turns': '{count} turns',
        'growth.summary': '{steps} requests · {turns} turns',
        'growth.hint': 'Prompt size of every request in the session, oldest to newest. A drop is a compaction or pruned history. The list below holds every request, newest first.',
        'growth.step': 'step {index}',
        'growth.turnStep': 'turn {turn} · step {step}',
        'growth.empty': 'No request usage in the session log.',
        'usage.input': 'Uncached input',
        'usage.read': 'Cache read',
        'usage.write': 'Cache write',
        'usage.output': 'Output',
        'usage.total': 'Total input',
        'usage.hit.last': 'Cache hit · last turn',
        'usage.hit.lastTurn': 'Cache hit · turn {turn}',
        'usage.hit.session': 'Cache hit · session',
        'compaction.turn': 'Turn {turn}',
        'compaction.between': 'Between turns',
        'compaction.summary': 'Summary',
        'compaction.input': 'Input',
        'compaction.compacted': 'compacted {value}',
        'compaction.items': '{count} items',
        'compaction.count': '{count} compactions',
        'compaction.log': '{count} read from the session log, outside the loaded window.',
        'compaction.log.one': 'Read from the session log, outside the loaded window.',
        'compaction.log.all': 'All {count} read from the session log, outside the loaded window.',
        'compaction.reading': 'Reading the session log…',
        'compaction.unavailable': 'The session log could not be read; only the loaded window is listed.',
        'tools.mcp': 'MCP servers',
        'tools.plugins': 'Plugins',
        'tools.plugins.hint': 'Tools registered by DSH plugin packages',
        'tools.skills': 'Skills',
        'tools.skills.none': 'The skill catalog is outside the loaded history',
        'tools.skills.catalog': 'Estimated from the installed skill catalog: the prompt text is not in the loaded history.',
        'tools.count': '{count} tools',
        'tools.more': '{count} more',
        'panel.note': 'Category totals come from the measured context. Tools is the real tool context — the definitions catalog plus the arguments of every call and their results; Messages is conversation only. The calls/results split is read from the session log and distributed in proportion to the text each part contributes, so the rows approximate the measured total instead of billing it. The used figure is the projected next request, so the four rows can sit slightly below it. The split is approximate, about four characters per token. Reads only the session; no model request is made.',
      },
      es: {
        'strip.label': 'Contexto',
        'strip.open': 'Abrir el panel de contexto',
        'strip.cache': 'Caché',
        'strip.cache.session': 'sesión {value}',
        'strip.cache.title': 'Acierto de caché — último turno {last} · sesión {session}',
        'tab.title': 'Contexto',
        'panel.title': 'Ventana de contexto',
        'panel.subtitle': 'Lo que el modelo lee en la próxima petición',
        'row.used': 'En uso',
        'row.system': 'Prompt del sistema',
        'notices.count': '{count} bloques',
        'row.tools': 'Herramientas',
        'row.messages': 'Mensajes',
        'row.free': 'Espacio libre',
        'section.tools': 'Herramientas',
        'section.tools.none': 'Sin catálogo de herramientas en el historial cargado',
        'section.tools.hint': 'Las definiciones son el catálogo fijo que viaja en cada petición. Las llamadas llevan los argumentos de cada uso y los resultados llevan lo que devolvió cada herramienta; ambos van dentro de los mensajes, así que se cuentan aquí y no en Mensajes.',
        'tools.definitions': 'Definiciones (catálogo)',
        'tools.calls': 'Llamadas (argumentos)',
        'tools.results': 'Resultados de herramientas',
        'tools.title.definitions': 'Una entrada por herramienta: su nombre, su descripción y el esquema JSON de sus parámetros. Viaja en cada petición.',
        'tools.title.calls': 'Los argumentos JSON de cada llamada a herramienta que registró la sesión, leídos del registro de sesión.',
        'tools.title.results': 'Lo que devolvió cada herramienta: contenido de archivos, salida de comandos, resultados de búsqueda, del registro de sesión.',
        'tools.column.defs': 'defs',
        'tools.column.total': 'total',
        'tools.column.pct': '%',
        'tools.column.total.hint': 'Las definiciones más los argumentos y resultados que sumaron las llamadas de esas herramientas.',
        'tools.server': '{name} · {count} herramientas',
        'tools.mcp.hint': 'Cada servidor MCP que llevaba la petición, con las definiciones de sus herramientas y todo lo que suman sus llamadas.',
        'tools.skills.title': 'El catálogo de skills viaja dentro del system prompt, así que su tamaño es parte del bloque del sistema y no de Herramientas.',
        'tools.skills.scope': 'prompt del sistema',
        'tools.calls.count': '{count} llamadas',
        'tools.results.count': '{count} resultados',
        'tools.scan.unavailable': 'No se pudo leer el registro de la sesión; las llamadas y los resultados quedan dentro de Mensajes.',
        'section.messages': 'Mensajes',
        'messages.hint': 'Solo conversación: tus prompts, las respuestas del asistente y su razonamiento. Las definiciones, los argumentos de las llamadas y los resultados se cuentan en Herramientas.',
        'messages.user': 'Tus prompts',
        'messages.assistant': 'Respuestas del asistente',
        'messages.reasoning': 'Razonamiento',
        'section.system': 'Prompt del sistema',
        'section.system.hint': 'Las instrucciones fijas que DSH envía antes de cada conversación: identidad, reglas de archivos y herramientas, documentación de los MCP y catálogo de skills. Se reenvían en cada petición, así que es el coste fijo antes de escribir nada.',
        'section.system.none': 'El prompt del sistema está fuera del historial cargado',
        'section.notices': 'Avisos añadidos',
        'system.show': 'Ver el texto',
        'system.log': 'Leído del registro de la sesión: el historial cargado ya no trae el texto del prompt, así que esta es la última versión que la sesión registró.',
        'system.saved': 'Recuperado de la copia guardada antes en esta sesión.',
        'section.compaction': 'Compactaciones',
        'section.compaction.none': 'Sin compactaciones en el historial cargado',
        'section.usage': 'Consumo de la sesión',
        'section.growth': 'Crecimiento del contexto',
        'growth.turns': '{count} turnos',
        'growth.summary': '{steps} peticiones · {turns} turnos',
        'growth.hint': 'Tamaño del prompt de cada petición de la sesión, de la más antigua a la más reciente. Una caída es una compactación o historial podado. Abajo está la lista completa, la petición más reciente primero.',
        'growth.step': 'paso {index}',
        'growth.turnStep': 'turno {turn} · paso {step}',
        'growth.empty': 'Sin uso de peticiones en el registro de la sesión.',
        'usage.input': 'Entrada sin caché',
        'usage.read': 'Caché leída',
        'usage.write': 'Caché escrita',
        'usage.output': 'Salida',
        'usage.total': 'Entrada total',
        'usage.hit.last': 'Acierto de caché · último turno',
        'usage.hit.lastTurn': 'Acierto de caché · turno {turn}',
        'usage.hit.session': 'Acierto de caché · sesión',
        'compaction.turn': 'Turno {turn}',
        'compaction.between': 'Entre turnos',
        'compaction.summary': 'Resumen',
        'compaction.input': 'Entrada',
        'compaction.compacted': 'compactado {value}',
        'compaction.items': '{count} elementos',
        'compaction.count': '{count} compactaciones',
        'compaction.log': '{count} leídas del registro de la sesión, fuera del historial cargado.',
        'compaction.log.one': 'Leída del registro de la sesión, fuera del historial cargado.',
        'compaction.log.all': 'Las {count} se leyeron del registro de la sesión, fuera del historial cargado.',
        'compaction.reading': 'Leyendo el registro de la sesión…',
        'compaction.unavailable': 'No se pudo leer el registro de la sesión; solo se lista el historial cargado.',
        'tools.mcp': 'Servidores MCP',
        'tools.plugins': 'Plugins',
        'tools.plugins.hint': 'Herramientas registradas por plugins de DSH',
        'tools.skills': 'Skills',
        'tools.skills.none': 'El catálogo de skills está fuera del historial cargado',
        'tools.skills.catalog': 'Estimado desde el catálogo instalado: el texto del prompt no está en el historial cargado.',
        'tools.count': '{count} herramientas',
        'tools.more': '{count} más',
        'panel.note': 'Los totales por categoría vienen del contexto medido. Herramientas reúne el contexto real de herramientas — el catálogo de definiciones más los argumentos de cada llamada y sus resultados; Mensajes cuenta solo conversación. El reparto de llamadas y resultados se lee del registro de la sesión y se distribuye en proporción al texto que aporta cada parte, así que las filas aproximan el total medido sin facturarlo. La cifra en uso es la próxima petición proyectada, así que las cuatro filas pueden quedar algo por debajo. El reparto es aproximado, unos cuatro caracteres por token. Solo lee la sesión; no hace ninguna petición al modelo.',
      },
    }

    const CSS = [
      '.cdp-root{display:flex;align-items:center;justify-content:space-between;gap:8px;min-width:0;box-sizing:border-box;width:calc(100% - 2 * var(--dsh-composer-side-clearance, 16px));max-width:var(--dsh-composer-card-max-width, 952px);margin:0 auto;font-size:11px;line-height:1.4;color:var(--dsw-alias-label-secondary)}',
      '.cdp-side{display:flex;align-items:center;min-width:0}',
      '.cdp-side-left{flex:1 1 auto;justify-content:flex-start;overflow:hidden}',
      '.cdp-side-right{flex:0 0 auto;justify-content:flex-end}',
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
      '.cdp-cache-label{white-space:nowrap}',
      '.cdp-cache-session{white-space:nowrap;color:var(--dsw-alias-label-secondary)}',
      '.cdp-cache-bar{display:inline-flex;flex:0 0 auto;width:34px;height:5px;border-radius:3px;overflow:hidden;background:var(--dsw-alias-bg-layer-2);box-shadow:inset 0 0 0 1px var(--dsw-alias-border-l1)}',
      '.cdp-cache-fill{display:block;height:100%;background:var(--dsw-alias-state-success-primary)}',
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
      '.cdp-rows{display:grid;grid-template-columns:minmax(0,1fr) 72px 56px;gap:5px 10px;margin:0}',
      '.cdp-rows-tight{margin-top:6px}',
      '.cdp-row-label{display:flex;align-items:center;gap:6px;color:var(--dsw-alias-label-secondary);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',
      '.cdp-swatch{width:7px;height:7px;border-radius:2px;flex:0 0 auto}',
      '.cdp-swatch-free{background:var(--dsw-alias-state-idle-primary)}',
      '.cdp-row-val{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      '.cdp-row-pct{text-align:right;font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      '.cdp-section{margin:16px 0 0;padding-top:12px;border-top:1px solid var(--dsw-alias-border-l1)}',
      '.cdp-section-summary{cursor:pointer;list-style:none;display:flex;align-items:center;gap:8px;padding:2px 0}',
      '.cdp-section-summary::-webkit-details-marker{display:none}',
      '.cdp-section-summary::before{content:"";flex:0 0 auto;width:0;height:0;border-left:5px solid currentColor;border-top:4px solid transparent;border-bottom:4px solid transparent;transition:transform .15s;color:var(--dsw-alias-label-secondary)}',
      '.cdp-section[open] > .cdp-section-summary::before{transform:rotate(90deg)}',
      '.cdp-section-title{margin:0;flex:1 1 auto;font-size:11px;font-weight:600;letter-spacing:.02em;text-transform:uppercase;color:var(--dsw-alias-label-secondary)}',
      '.cdp-section-meta{flex:0 0 auto;font-size:11px;font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-secondary);white-space:nowrap}',
      '.cdp-section-body{padding-top:8px}',
      '.cdp-details{margin:0}',
      '.cdp-summary{cursor:pointer;list-style:none;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:3px 0;color:var(--dsw-alias-label-secondary)}',
      '.cdp-summary::-webkit-details-marker{display:none}',
      '.cdp-summary-text{display:flex;align-items:center;gap:7px;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',
      '.cdp-summary-text::before{content:"";flex:0 0 auto;width:0;height:0;border-left:5px solid currentColor;border-top:4px solid transparent;border-bottom:4px solid transparent;transition:transform .15s}',
      '.cdp-details[open] > .cdp-summary .cdp-summary-text::before{transform:rotate(90deg)}',
      '.cdp-summary-val{font-variant-numeric:tabular-nums;flex:0 0 auto}',
      '.cdp-summary.cdp-summary-cols{display:grid;grid-template-columns:minmax(0,1fr) 72px 56px;gap:10px;align-items:center;justify-content:initial}',
      // Tool hierarchy: one row that prints the definition share, then the same
      // definition plus the arguments and results its calls added, then the share
      // of the window. Group rows, server rows and tool rows share the grid.
      '.cdp-summary.cdp-summary-cols4{display:grid;grid-template-columns:minmax(0,1fr) 50px 54px 38px;gap:8px;align-items:center;justify-content:initial}',
      '.cdp-summary-cols4 .cdp-summary-val{text-align:right;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      '.cdp-muted{color:var(--dsw-alias-label-secondary);opacity:.85}',
      '.cdp-toolhead{display:grid;grid-template-columns:minmax(0,1fr) 50px 54px 38px;gap:8px;margin:9px 0 1px;font-size:9px;letter-spacing:.04em;text-transform:uppercase;color:var(--dsw-alias-label-secondary);opacity:.8}',
      '.cdp-toolhead span{text-align:right;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      '.cdp-toolhead span:first-child{text-align:left}',
      '.cdp-toolrows{display:grid;grid-template-columns:minmax(0,1fr) 50px 54px 38px;gap:4px 8px;margin:4px 0 0;padding:0;list-style:none}',
      // Only the label is indented, so the three number columns stay aligned
      // with the group rows above.
      '.cdp-tool-nest{margin:6px 0 0}',
      '.cdp-tool-nest > .cdp-summary .cdp-summary-text{padding-left:12px}',
      '.cdp-toolrows-nested .cdp-toolrow{padding-left:24px}',
      '.cdp-toolrow{min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--dsw-alias-label-secondary)}',
      '.cdp-tool-defs,.cdp-tool-total,.cdp-tool-pct{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      '.cdp-tool-defs,.cdp-tool-pct{color:var(--dsw-alias-label-secondary)}',
      '.cdp-skill-row{padding-left:12px}',
      '.cdp-summary-cols .cdp-summary-val{text-align:right;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      '.cdp-summary-pct{text-align:right;font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      '.cdp-list{display:grid;grid-template-columns:minmax(0,1fr) 72px 56px;gap:4px 10px;margin:8px 0 0;padding:0;list-style:none}',
      '.cdp-item{min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--dsw-alias-label-secondary)}',
      '.cdp-item-val{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
      '.cdp-item-pct{text-align:right;font-variant-numeric:tabular-nums;color:var(--dsw-alias-label-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
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
      '.cdp-compactions{padding:6px 0 0}',
      '.cdp-compactions .cdp-compaction:last-child{margin-bottom:0}',
      '.cdp-growth{display:block;width:100%;height:72px;margin:6px 0 10px;overflow:visible}',
      '.cdp-growth-area{fill:var(--dsw-alias-brand-primary);opacity:.12}',
      '.cdp-growth-line{fill:none;stroke:var(--dsw-alias-brand-primary);stroke-width:1.6;stroke-linejoin:round;stroke-linecap:round}',
      '.cdp-growth-dot{fill:var(--dsw-alias-state-success-primary)}',
      '.cdp-growth-dot-last{fill:var(--dsw-alias-brand-primary)}',
      '.cdp-growth-list{display:grid;grid-template-columns:86px minmax(0,1fr) 62px;gap:4px 10px;max-height:200px;overflow:auto;margin:0;padding:0;list-style:none}',
      '.cdp-growth-item{min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--dsw-alias-label-secondary);font-variant-numeric:tabular-nums}',
      '.cdp-growth-track{height:5px;border-radius:3px;background:var(--dsw-alias-bg-layer-2);overflow:hidden;align-self:center;box-shadow:inset 0 0 0 1px var(--dsw-alias-border-l1)}',
      '.cdp-growth-fill{display:block;height:100%;background:var(--dsw-alias-brand-primary)}',
      '.cdp-growth-val{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}',
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

    /**
     * Compact stamp for a dated row: short month and day, then the clock time,
     * with no year. The active locale decides the order and the wording, so an
     * English panel prints "Nov 24 · 21:25" and a Spanish one "24 nov. · 21:25".
     */
    function formatWhen(time, locale) {
      if (!isNumber(time)) return ''
      const date = new Date(time)
      const day = date.toLocaleDateString(locale, { month: 'short', day: 'numeric' })
      const clock = date.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })
      return day + ' · ' + clock
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

    /**
     * Re-cut the measured messages bucket into tool calls, tool results and the
     * conversation that remains, distributing it in proportion to the text the
     * session log carries for each part. Definitions keep their measured total,
     * so the top "Tools" row adds the real tool context to the catalog.
     */
    function toolUsageTokens(usage, split) {
      if (!usage || !split || !isNumber(split.messages) || split.messages <= 0) return null
      const messageChars = usage.userChars + usage.assistantChars + usage.reasoningChars + usage.developerChars
      const callChars = isNumber(usage.callChars) ? usage.callChars : 0
      const resultChars = isNumber(usage.resultChars) ? usage.resultChars : 0
      const toolChars = callChars + resultChars
      const totalChars = messageChars + toolChars
      if (totalChars <= 0) return null
      const ratio = split.messages / (totalChars / 4)
      let callTokens = Math.max(0, Math.round(callChars / 4 * ratio))
      let resultTokens = Math.max(0, Math.round(resultChars / 4 * ratio))
      const overflow = callTokens + resultTokens - split.messages
      if (overflow > 0) {
        const trim = Math.min(resultTokens, overflow)
        resultTokens -= trim
        callTokens = Math.max(0, callTokens - (overflow - trim))
      }
      const messagesTokens = Math.max(0, split.messages - callTokens - resultTokens)
      const toolScale = toolChars > 0 ? (callTokens + resultTokens) / (toolChars / 4) : 0
      const messageScale = messageChars > 0 ? messagesTokens / (messageChars / 4) : 0
      const tokensOf = (chars, scale) => Math.max(0, Math.round(chars / 4 * scale))
      return {
        callTokens,
        resultTokens,
        messagesTokens,
        toolTotal: split.tools + callTokens + resultTokens,
        calls: usage.calls,
        results: usage.results,
        userTokens: tokensOf(usage.userChars, messageScale),
        assistantTokens: tokensOf(usage.assistantChars, messageScale),
        reasoningTokens: tokensOf(usage.reasoningChars, messageScale),
        byTool: (usage.byTool || [])
          .map(row => ({
            name: row.name,
            calls: row.calls,
            results: row.results,
            tokens: tokensOf(row.chars, toolScale),
          }))
          .filter(row => row.tokens > 0),
      }
    }

    /**
     * Sparkline of the context size per request: the line, the filled area and
     * the sampled dots the SVG draws. Values are prompt-side tokens, oldest
     * request first.
     */
    function growthChart(steps) {
      if (!Array.isArray(steps) || steps.length === 0) return null
      const values = steps.map(step => step.context)
      const width = 320
      const height = 72
      const pad = 6
      const min = Math.min(...values)
      const max = Math.max(...values)
      const span = max - min > 0 ? max - min : 1
      const x = index => (steps.length === 1 ? width / 2 : pad + index * (width - pad * 2) / (steps.length - 1))
      const y = value => height - pad - (value - min) / span * (height - pad * 2)
      const points = steps.map((step, index) => ({ x: x(index), y: y(step.context) }))
      const line = points
        .map((point, index) => (index === 0 ? 'M' : 'L') + point.x.toFixed(1) + ' ' + point.y.toFixed(1))
        .join(' ')
      const area = 'M' + points[0].x.toFixed(1) + ' ' + (height - pad)
        + points.map(point => ' L' + point.x.toFixed(1) + ' ' + point.y.toFixed(1)).join('')
        + ' L' + points[points.length - 1].x.toFixed(1) + ' ' + (height - pad) + ' Z'
      const stride = Math.max(1, Math.ceil(points.length / 90))
      const dots = points.filter((point, index) => index % stride === 0 || index === points.length - 1)
      return {
        width,
        height,
        line,
        area,
        dots,
        last: points[points.length - 1],
        min,
        max,
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
            seq: isNumber(request.startSeq) ? request.startSeq : undefined,
            turn: isNumber(request.turn) ? request.turn : null,
            time: isNumber(request.startedAt) ? request.startedAt : undefined,
            input: input && input > 0 ? input : undefined,
            output: output && output > 0 ? output : undefined,
          }
        })
    }

    // The client window holds the last turns only, so compactions from earlier
    // turns never reach useTrajectory(). These pages read the durable log
    // instead: read-only Remote calls, no model request, no Host state.
    const LOG_SCAN_PAGES = 60
    const LOG_SCAN_MESSAGES = 500
    const logScanCache = new Map()
    const logScanFailed = new Set()

    // A compaction replaces the loaded window, and the window is where the
    // prompt text used to come from, so a long session loses it. The text of the
    // newest prompt is kept here as well: an unreadable log or a reload still
    // shows the copy saved earlier in the same session.
    const SYSTEM_STORE_KEY = 'dsh-context-detail:system-prompts'
    const SYSTEM_STORE_SESSIONS = 8
    const SYSTEM_STORE_CHARS = 200000

    function readSystemStore() {
      try {
        if (typeof window === 'undefined' || !window.localStorage) return {}
        const raw = window.localStorage.getItem(SYSTEM_STORE_KEY)
        if (typeof raw !== 'string' || raw.length === 0) return {}
        const parsed = JSON.parse(raw)
        return parsed && typeof parsed === 'object' ? parsed : {}
      } catch (error) {
        return {}
      }
    }

    function savedSystemText(sessionId) {
      if (!sessionId) return null
      const entry = readSystemStore()[sessionId]
      if (!entry || typeof entry !== 'object') return null
      return typeof entry.text === 'string' && entry.text.length > 0 ? entry : null
    }

    function saveSystemText(sessionId, text, seq) {
      if (!sessionId || typeof text !== 'string' || text.length === 0) return
      const value = text.length > SYSTEM_STORE_CHARS ? text.slice(0, SYSTEM_STORE_CHARS) : text
      try {
        if (typeof window === 'undefined' || !window.localStorage) return
        const store = readSystemStore()
        const previous = store[sessionId]
        if (previous && previous.text === value) return
        store[sessionId] = {
          text: value,
          seq: isNumber(seq) ? seq : undefined,
          savedAt: Date.now(),
        }
        const kept = Object.entries(store)
          .sort((left, right) => ((right[1] && right[1].savedAt) || 0) - ((left[1] && left[1].savedAt) || 0))
          .slice(0, SYSTEM_STORE_SESSIONS)
        window.localStorage.setItem(SYSTEM_STORE_KEY, JSON.stringify(Object.fromEntries(kept)))
      } catch (error) {
        /* storage full or blocked: the session log still carries the text */
      }
    }

    function resolveSessionRemote(ctx) {
      try {
        const bound = typeof ctx.get === 'function' ? ctx.get('remote.session') : undefined
        if (bound && typeof bound.events === 'function') return bound
      } catch (error) {
        /* the Remote is absent in profiles without the session controller */
      }
      const direct = ctx.remote && ctx.remote.session
      return direct && typeof direct.events === 'function' ? direct : null
    }

    /** Build the panel rows from the compaction events a page carried. */
    function logCompactionRows(starts, summaries) {
      const rows = []
      for (const event of starts.values()) {
        const data = event.data && typeof event.data === 'object' ? event.data : {}
        const id = typeof data.compactionId === 'string' ? data.compactionId : ''
        const summary = summaries.get(id) || null
        rows.push({
          key: 'log:' + String(event.seq),
          seq: event.seq,
          turn: isNumber(data.turn) ? data.turn : null,
          time: isNumber(event.time) ? event.time : undefined,
          input: summary && isNumber(summary.input) ? summary.input : undefined,
          output: summary && isNumber(summary.output)
            ? summary.output
            : (summary && summary.chars > 0 ? Math.round(summary.chars / 4) : undefined),
          compacted: summary && isNumber(summary.compacted) ? summary.compacted : undefined,
          items: summary && isNumber(summary.items) ? summary.items : undefined,
          fromLog: true,
        })
      }
      rows.sort((left, right) => right.seq - left.seq)
      return rows
    }

    /** Surface event types whose model-visible content the panel can measure. */
    const LOG_SURFACE_TYPES = new Set([
      'system/message',
      'developer/message',
      'user/message',
      'assistant/message',
      'tool/result',
    ])

    /** Mark the log positions a replacement removed from the model surface. */
    function markReplaced(op, dead) {
      if (!op || typeof op !== 'object') return
      const start = isNumber(op.startSeq) ? op.startSeq : undefined
      if (start === undefined) return
      const end = isNumber(op.endSeq) ? op.endSeq : start
      for (let seq = start; seq <= end && seq - start < 20000; seq += 1) dead.add(seq)
    }

    /** Mark the log positions a compaction event shadowed. */
    function markShadowed(event, dead) {
      const data = event.data && typeof event.data === 'object' ? event.data : {}
      if (Array.isArray(data.shadowedSeqs)) {
        for (const seq of data.shadowedSeqs) if (isNumber(seq)) dead.add(seq)
        return
      }
      const range = data.shadowedRange
      if (range && typeof range === 'object' && isNumber(range.start) && isNumber(range.end)) {
        for (let seq = range.start; seq <= range.end && seq - range.start < 20000; seq += 1) dead.add(seq)
      }
    }

    /** Text length of one rendered content block list. */
    function blocksChars(blocks) {
      let chars = 0
      for (const block of Array.isArray(blocks) ? blocks : []) {
        if (!block || typeof block !== 'object') continue
        if (block.type === 'text' || block.type === 'reasoning') {
          chars += typeof block.text === 'string' ? block.text.length : 0
        } else if (block.type === 'tool-call') {
          chars += (typeof block.name === 'string' ? block.name.length : 0)
            + (typeof block.arguments === 'string' ? block.arguments.length : safeStringify(block.arguments).length)
        } else {
          chars += safeStringify(block).length
        }
      }
      return chars
    }

    /** The rendered system text of a content block list. */
    function textOfBlocks(blocks) {
      return (Array.isArray(blocks) ? blocks : [])
        .map(block => (block && typeof block.text === 'string' ? block.text : ''))
        .join('\n\n')
    }

    /** The model-visible message one surface event derives to. */
    function surfaceMessage(event) {
      if (event.type === 'user/message') return event.data
      const data = event.data
      return data && typeof data === 'object' ? data.message : null
    }

    /** Measure what one surface event contributes to the loaded log. */
    function logSurfaceEntry(event) {
      const message = surfaceMessage(event)
      if (!message || typeof message !== 'object') return null
      const blocks = Array.isArray(message.content) ? message.content : []
      const entry = { type: event.type, text: '', chars: 0, reasoningChars: 0, calls: null, resultCallId: '' }
      if (event.type === 'assistant/message') {
        for (const block of blocks) {
          if (!block || typeof block !== 'object') continue
          if (block.type === 'text') entry.chars += typeof block.text === 'string' ? block.text.length : 0
          else if (block.type === 'reasoning') {
            entry.reasoningChars += typeof block.text === 'string' ? block.text.length : 0
          } else if (block.type === 'tool-call') {
            if (entry.calls === null) entry.calls = []
            entry.calls.push({
              callId: typeof block.id === 'string' ? block.id : '',
              name: typeof block.name === 'string' ? block.name : '',
              chars: (typeof block.name === 'string' ? block.name.length : 0)
                + (typeof block.arguments === 'string' ? block.arguments.length : safeStringify(block.arguments).length),
            })
          } else entry.chars += safeStringify(block).length
        }
        return entry
      }
      entry.chars = blocksChars(blocks)
      if (event.type === 'system/message') entry.text = textOfBlocks(blocks)
      if (event.type === 'tool/result') {
        entry.resultCallId = typeof message.toolCallId === 'string' && message.toolCallId.length > 0
          ? message.toolCallId
          : (message.source && typeof message.source.callId === 'string' ? message.source.callId : '')
      }
      return entry
    }

    /** Fold the collected surface entries into the panel totals and per-tool rows. */
    function foldLogSurface(surface, dead, callNames, turns) {
      const usage = {
        turns,
        calls: 0,
        callChars: 0,
        results: 0,
        resultChars: 0,
        userChars: 0,
        userCount: 0,
        assistantChars: 0,
        assistantCount: 0,
        reasoningChars: 0,
        reasoningCount: 0,
        developerChars: 0,
        byTool: [],
      }
      const tools = new Map()
      const toolRow = name => {
        const row = tools.get(name) || { name, calls: 0, callChars: 0, results: 0, resultChars: 0 }
        tools.set(name, row)
        return row
      }
      for (const [seq, entry] of surface) {
        if (dead.has(seq)) continue
        if (entry.type === 'user/message') {
          usage.userChars += entry.chars
          usage.userCount += 1
        } else if (entry.type === 'developer/message') {
          usage.developerChars += entry.chars
        } else if (entry.type === 'assistant/message') {
          usage.assistantChars += entry.chars
          usage.assistantCount += 1
          if (entry.reasoningChars > 0) {
            usage.reasoningChars += entry.reasoningChars
            usage.reasoningCount += 1
          }
          for (const call of entry.calls || []) {
            usage.calls += 1
            usage.callChars += call.chars
            const row = toolRow(call.name || '—')
            row.calls += 1
            row.callChars += call.chars
          }
        } else if (entry.type === 'tool/result') {
          usage.results += 1
          usage.resultChars += entry.chars
          const name = (entry.resultCallId && callNames.get(entry.resultCallId)) || '—'
          const row = toolRow(name)
          row.results += 1
          row.resultChars += entry.chars
        }
      }
      usage.byTool = [...tools.values()]
        .map(row => ({ ...row, chars: row.callChars + row.resultChars }))
        .filter(row => row.chars > 0)
        .sort((left, right) => right.chars - left.chars)
      return usage
    }

    /**
     * Prompt-cache hit of the newest turn, from the provider usage samples the
     * log records for its assistant settlements.
     */
    function summarizeTurnUsage(turnUsage) {
      if (!turnUsage || turnUsage.size === 0) return null
      const turns = new Map()
      for (const row of turnUsage.values()) {
        const entry = turns.get(row.turn) || { turn: row.turn, uncached: 0, read: 0, write: 0, output: 0 }
        entry.uncached += row.uncached
        entry.read += row.read
        entry.write += row.write
        entry.output += row.output
        turns.set(row.turn, entry)
      }
      let last = null
      for (const entry of turns.values()) if (last === null || entry.turn > last.turn) last = entry
      if (last === null) return null
      const denominator = last.read + last.uncached
      return {
        turn: last.turn,
        uncached: last.uncached,
        read: last.read,
        write: last.write,
        output: last.output,
        hit: denominator > 0 ? last.read / denominator * 100 : undefined,
      }
    }

    /** Walk the session log backwards, one page at a time, collecting events. */
    async function scanSessionLog(remote, sessionId, signal, onProgress) {
      const starts = new Map()
      const summaries = new Map()
      const systems = []
      const surface = new Map()
      const dead = new Set()
      const callNames = new Map()
      const turnUsage = new Map()
      let turns = 0
      // The newest request header carries the effective tool catalog. It is a
      // log-only event, so the scan keeps it for panels whose loaded window no
      // longer holds the latest request prompt (a compaction or a reload).
      let latestTools
      let latestToolsSeq
      let beforeSeq
      for (let page = 0; page < LOG_SCAN_PAGES; page += 1) {
        const request = {
          address: { kind: 'session', sessionId },
          maxMessages: LOG_SCAN_MESSAGES,
          turnWindow: { minMessages: 50, minTurns: 2 },
        }
        if (beforeSeq !== undefined) request.beforeSeq = beforeSeq
        const response = await remote.events(request, signal)
        // Remote methods answer `{ ok, value }`; a bare page is accepted too.
        const result = response && response.ok === true ? response.value : response
        if (response && response.ok === false) {
          throw new Error('session/events ' + String((response.error && response.error.code) || 'failed'))
        }
        if (!result || !Array.isArray(result.records)) break
        let oldest
        for (const record of result.records) {
          const event = record && record.event
          if (!event || typeof event.type !== 'string' || !isNumber(event.seq)) continue
          if (oldest === undefined || event.seq < oldest) oldest = event.seq
          if (event.type === 'turn/start') {
            turns += 1
            continue
          }
          if (event.type === 'request/header') {
            const data = event.data && typeof event.data === 'object' ? event.data : {}
            const header = data.header && typeof data.header === 'object' ? data.header : null
            const tools = header && Array.isArray(header.tools) ? header.tools : null
            if (tools !== null && tools.length > 0
              && (latestToolsSeq === undefined || event.seq > latestToolsSeq)) {
              latestTools = tools
              latestToolsSeq = event.seq
            }
            continue
          }
          if (event.type === 'compaction/start') {
            starts.set(event.seq, event)
            continue
          }
          if (event.type === 'compaction/summary' || event.type === 'compaction/prune') {
            markShadowed(event, dead)
            if (event.type === 'compaction/summary') {
              const data = event.data && typeof event.data === 'object' ? event.data : {}
              const id = typeof data.compactionId === 'string' ? data.compactionId : ''
              const text = Array.isArray(data.summary)
                ? data.summary.map(block => (block && typeof block.text === 'string' ? block.text : '')).join('')
                : ''
              // The summary event is the only record of how much history the
              // compaction actually replaced: `shadowedTokenCount` is the
              // estimated size of everything it removed, and `shadowedSeqs`
              // names each of those surface nodes.
              const sample = data.usage && typeof data.usage === 'object' ? data.usage : null
              const promptTokens = sample === null
                ? 0
                : (isNumber(sample.inputTokens) ? sample.inputTokens : 0)
                  + (isNumber(sample.cacheReadTokens) ? sample.cacheReadTokens : 0)
                  + (isNumber(sample.cacheWriteTokens) ? sample.cacheWriteTokens : 0)
              const summaryTokens = sample !== null && isNumber(sample.outputTokens) ? sample.outputTokens : 0
              if (id) {
                summaries.set(id, {
                  chars: text.length,
                  input: promptTokens > 0 ? promptTokens : undefined,
                  output: summaryTokens > 0 ? summaryTokens : undefined,
                  compacted: isNumber(data.shadowedTokenCount) && data.shadowedTokenCount > 0
                    ? data.shadowedTokenCount
                    : undefined,
                  items: Array.isArray(data.shadowedSeqs) && data.shadowedSeqs.length > 0
                    ? data.shadowedSeqs.length
                    : undefined,
                })
              }
            }
            continue
          }
          if (event.type === 'tool/call') {
            const data = event.data && typeof event.data === 'object' ? event.data : {}
            if (typeof data.callId === 'string' && typeof data.name === 'string' && data.name.length > 0) {
              callNames.set(data.callId, data.name)
            }
            continue
          }
          if (event.type === 'assistant/message') {
            const data = event.data && typeof event.data === 'object' ? event.data : {}
            const sample = data.usage && typeof data.usage === 'object' ? data.usage : null
            if (sample !== null && isNumber(data.turn)) {
              const step = isNumber(data.step) ? data.step : 0
              const key = data.turn + ':' + step
              const previous = turnUsage.get(key)
              if (previous === undefined || previous.seq < event.seq) {
                turnUsage.set(key, {
                  seq: event.seq,
                  turn: data.turn,
                  step,
                  time: isNumber(event.time) ? event.time : undefined,
                  uncached: isNumber(sample.inputTokens) ? sample.inputTokens : 0,
                  read: isNumber(sample.cacheReadTokens) ? sample.cacheReadTokens : 0,
                  write: isNumber(sample.cacheWriteTokens) ? sample.cacheWriteTokens : 0,
                  output: isNumber(sample.outputTokens) ? sample.outputTokens : 0,
                })
              }
            }
          }
          if (!LOG_SURFACE_TYPES.has(event.type) || event.surfaceOp === undefined) continue
          markReplaced(event.surfaceOp, dead)
          const entry = logSurfaceEntry(event)
          if (entry === null) continue
          surface.set(event.seq, entry)
          if (entry.calls !== null) {
            for (const call of entry.calls) {
              if (call.callId.length > 0 && call.name.length > 0) callNames.set(call.callId, call.name)
            }
          }
          if (event.type === 'system/message') {
            systems.push({
              seq: event.seq,
              chars: entry.chars,
              text: entry.text,
              time: isNumber(event.time) ? event.time : undefined,
              label: noticeLabel(entry.text),
              op: event.surfaceOp,
            })
          }
        }
        if (onProgress) onProgress(logCompactionRows(starts, summaries))
        if (result.hasMore !== true || result.records.length === 0) break
        if (oldest === undefined) break
        if (beforeSeq !== undefined && oldest >= beforeSeq) break
        beforeSeq = oldest
      }
      const liveSystems = systems.filter(node => !dead.has(node.seq))
      const usage = foldLogSurface(surface, dead, callNames, turns)
      usage.lastTurn = summarizeTurnUsage(turnUsage)
      // Prompt size of every request, oldest first: the context growth series.
      usage.steps = [...turnUsage.values()]
        .sort((left, right) => left.seq - right.seq)
        .map(row => ({
          seq: row.seq,
          turn: row.turn,
          step: row.step,
          time: row.time,
          context: row.uncached + row.read + row.write,
          output: row.output,
        }))
      return {
        compactions: logCompactionRows(starts, summaries),
        systems: liveSystems,
        // Every system emission, including the ones a compaction shadowed, so
        // the panel can still show the text of the newest prompt when the live
        // surface no longer holds it.
        systemNodes: systems,
        split: systemSplit(liveSystems, systems),
        tools: latestTools,
        usage,
      }
    }

    /**
     * One shared, cached session-log scan for the strip and the panel; the second
     * consumer waits for the first instead of walking the log again.
     */
    const logScanPending = new Map()

    function ensureLogScan(ctx, sessionId, onProgress) {
      const cached = logScanCache.get(sessionId)
      if (cached !== undefined) return Promise.resolve(cached)
      if (logScanFailed.has(sessionId)) return Promise.reject(new Error('session log unavailable'))
      const existing = logScanPending.get(sessionId)
      if (existing !== undefined) {
        if (typeof onProgress === 'function') existing.listeners.push(onProgress)
        return existing.promise
      }
      const remote = resolveSessionRemote(ctx)
      if (remote === null) {
        logScanFailed.add(sessionId)
        return Promise.reject(new Error('session events Remote unavailable'))
      }
      const listeners = typeof onProgress === 'function' ? [onProgress] : []
      const promise = scanSessionLog(remote, sessionId, new AbortController().signal, rows => {
        for (const listener of listeners) {
          try {
            listener(rows)
          } catch (error) {
            /* a consumer render error must not abort the shared scan */
          }
        }
      }).then(result => {
        const split = result.split !== undefined ? result.split : systemSplit(result.systems, result.systemNodes)
        const next = {
          compactions: result.compactions,
          split,
          systemText: split && typeof split.text === 'string' ? split.text : '',
          tools: Array.isArray(result.tools) ? result.tools : null,
          usage: result.usage,
        }
        logScanCache.set(sessionId, next)
        logScanPending.delete(sessionId)
        return next
      }).catch(error => {
        logScanFailed.add(sessionId)
        logScanPending.delete(sessionId)
        throw error
      })
      logScanPending.set(sessionId, { promise, listeners })
      return promise
    }

    /** First meaningful line of a notice, without the boilerplate prefix. */
    function noticeLabel(text) {
      const line = String(text || '').split('\n').find(part => part.trim().length > 0) || ''
      const trimmed = line.trim()
      const replaced = /^The following replaces the earlier instructions from\s+(.+?)\.?$/i.exec(trimmed)
      if (replaced) return replaced[1].trim()
      return trimmed
    }

    /**
     * Split the system bucket the way the harness builds it: the prompt that
     * replaced earlier ones, plus the notices appended during the session. A
     * compaction can shadow every system node on the surface, so the newest
     * emission of the whole log is the fallback for the main prompt: its text
     * is the one DSH still sends, even when the surface no longer holds it.
     */
    function systemSplit(systems, allNodes) {
      const nodes = Array.isArray(systems) ? systems : []
      const all = Array.isArray(allNodes) && allNodes.length > 0 ? allNodes : nodes
      if (all.length === 0) return null
      const dead = new Set()
      for (const node of nodes) {
        const op = node.op
        if (!op || typeof op !== 'object' || op.op !== 'replace') continue
        const start = isNumber(op.startSeq) ? op.startSeq : undefined
        if (start === undefined) continue
        const end = isNumber(op.endSeq) ? op.endSeq : start
        for (let seq = start; seq <= end; seq += 1) dead.add(seq)
      }
      const alive = nodes.filter(node => !dead.has(node.seq))
      let main = null
      for (const node of alive) {
        const op = node.op
        if (op && typeof op === 'object' && op.op === 'replace' && (main === null || node.seq > main.seq)) main = node
      }
      if (main === null && alive.length > 0) main = alive[0]
      if (main === null) {
        for (const node of all) if (main === null || node.seq > main.seq) main = node
      }
      const notices = alive
        .filter(node => node !== main)
        .sort((left, right) => right.seq - left.seq)
        .map(node => ({
          key: 'notice:' + String(node.seq),
          label: node.label,
          chars: node.chars,
          time: node.time,
        }))
      return {
        mainChars: main.chars,
        mainSeq: main.seq,
        text: typeof main.text === 'string' ? main.text : '',
        noticeChars: notices.reduce((sum, node) => sum + node.chars, 0),
        noticeCount: notices.length,
        blocks: notices,
      }
    }

    /**
     * Join the window rows with the log rows, newest first, one row per
     * compaction. The two sources describe the same event from different
     * sides: the window request carries the summarization call's own usage,
     * while the log summary carries the measured size of the history it
     * replaced, so the fields merge instead of one row shadowing the other.
     */
    function mergeCompactions(windowRows, logRows) {
      const merged = []
      const bySeq = new Map()
      for (const row of windowRows) {
        if (!isNumber(row.seq)) {
          merged.push(row)
          continue
        }
        const copy = { ...row }
        bySeq.set(row.seq, copy)
        merged.push(copy)
      }
      for (const row of logRows || []) {
        if (!isNumber(row.seq)) {
          merged.push(row)
          continue
        }
        const existing = bySeq.get(row.seq)
        if (existing === undefined) {
          const copy = { ...row }
          bySeq.set(row.seq, copy)
          merged.push(copy)
          continue
        }
        for (const key of ['input', 'output', 'compacted', 'items', 'time', 'turn']) {
          if (existing[key] === undefined && row[key] !== undefined) existing[key] = row[key]
        }
        if (row.fromLog === true) existing.fromLog = true
      }
      merged.sort((left, right) => {
        const leftSeq = isNumber(left.seq) ? left.seq : 0
        const rightSeq = isNumber(right.seq) ? right.seq : 0
        if (leftSeq !== rightSeq) return rightSeq - leftSeq
        const leftTime = isNumber(left.time) ? left.time : 0
        const rightTime = isNumber(right.time) ? right.time : 0
        return rightTime - leftTime
      })
      return merged
    }

    /**
     * A compaction that finished after this page read the log leaves a row in
     * the loaded window but none in the cached scan, so the panel would show the
     * summarization request instead of what the compaction measured. The
     * sequence number of the newest such row is the signal to read the log
     * again, which keeps every later compaction as complete as the first one.
     */
    function missingCompactionSeq(requests, logRows) {
      if (!Array.isArray(requests) || !Array.isArray(logRows)) return undefined
      const known = new Set()
      for (const row of logRows) if (row && isNumber(row.seq)) known.add(row.seq)
      let missing
      for (const request of requests) {
        if (!request || request.purpose !== 'compaction') continue
        // A running compaction has no summary event yet; wait for it to finish.
        if (request.status === 'running') continue
        if (!isNumber(request.startSeq)) continue
        if (known.has(request.startSeq)) continue
        if (missing === undefined || request.startSeq > missing) missing = request.startSeq
      }
      return missing
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
     * The prompt text the panel shows, with the source it came from. The
     * loaded window is the freshest source; a long Session whose history was
     * compacted keeps the text in the session log instead, and the copy saved
     * from an earlier visit is the last resort.
     */
    function resolveSystemText(prompt, trajectory, logScan, sessionId, logState) {
      if (prompt && typeof prompt.system === 'string' && prompt.system.length > 0) {
        return { text: prompt.system, source: 'window', seq: undefined }
      }
      const nodes = trajectory && Array.isArray(trajectory.systemPrompts) ? trajectory.systemPrompts : []
      for (let index = nodes.length - 1; index >= 0; index -= 1) {
        const node = nodes[index]
        if (node && typeof node.text === 'string' && node.text.length > 0) {
          return { text: node.text, source: 'window', seq: isNumber(node.seq) ? node.seq : undefined }
        }
      }
      const fromLog = logScan && typeof logScan.systemText === 'string' ? logScan.systemText : ''
      if (fromLog.length > 0) {
        return {
          text: fromLog,
          source: 'log',
          seq: logScan.split && isNumber(logScan.split.mainSeq) ? logScan.split.mainSeq : undefined,
        }
      }
      // The saved copy is the last resort, once the log has been read: before
      // that the scan simply has not finished, so it must not report the copy.
      const saved = logState === 'done' || logState === 'failed' ? savedSystemText(sessionId) : null
      if (saved !== null) {
        return { text: saved.text, source: 'saved', seq: isNumber(saved.seq) ? saved.seq : undefined }
      }
      return { text: '', source: 'none', seq: undefined }
    }

    function createStrip(ctx, t) {
      return function ContextDetailStrip(props) {
        const useProjection = props.useProjection
        const pressure = useProjection ? useProjection('contextPressure') : undefined
        const breakdown = useProjection ? useProjection('contextBreakdown') : undefined
        const usageProjection = useProjection ? useProjection('tokenUsage') : undefined

        React.useSyncExternalStore(
          React.useCallback(callback => ctx.locale.subscribe(callback), []),
          () => ctx.locale.getSnapshot().revision,
        )

        // The row aligns with the composer card from CSS alone: the slot renders
        // as a flex item of the composer stack, and the card is the stack width
        // minus both side clearances, capped by the card max width. The same two
        // host variables (see .cdp-root) reproduce that box exactly, so no
        // measured DOM or resize observer is needed and nothing can drift when
        // the column, the sidebar or the width control changes size.

        // The same cached log scan the panel uses recuts the strip: Tools carries
        // the definitions plus the call arguments and results, Messages keeps
        // conversation only.
        const [logScan, setLogScan] = React.useState(() => {
          const sessionId = props.sessionId
          const cached = sessionId ? logScanCache.get(sessionId) : undefined
          return cached === undefined ? null : cached
        })
        React.useEffect(() => {
          const sessionId = props.sessionId
          if (!sessionId) return undefined
          const cached = logScanCache.get(sessionId)
          if (cached !== undefined) {
            setLogScan(cached)
            return undefined
          }
          if (logScanFailed.has(sessionId)) return undefined
          let alive = true
          ensureLogScan(ctx, sessionId)
            .then(next => {
              if (alive) setLogScan(next)
            })
            .catch(() => {})
          return () => {
            alive = false
          }
        }, [props.sessionId])

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
        const stripToolSummary = logScan && logScan.usage ? toolUsageTokens(logScan.usage, split) : null
        const rowSplit = split
          ? {
            system: split.system,
            tools: stripToolSummary === null ? split.tools : stripToolSummary.toolTotal,
            messages: stripToolSummary === null ? split.messages : stripToolSummary.messagesTokens,
          }
          : null
        const segments = segmentWidths(percent, rowSplit)

        // Prompt-cache hit on the composer row: the newest turn when the log has
        // been read, the whole session otherwise.
        const stripUsage = usageDetail(usageProjection)
        const stripScanUsage = logScan && logScan.usage ? logScan.usage : null
        const stripLastTurn = stripScanUsage && stripScanUsage.lastTurn ? stripScanUsage.lastTurn : null
        const sessionHit = stripUsage && stripUsage.hit !== undefined ? stripUsage.hit : undefined
        const turnHit = stripLastTurn && isNumber(stripLastTurn.hit) ? stripLastTurn.hit : undefined
        const cacheHit = turnHit !== undefined ? turnHit : sessionHit
        const cachePercent = isNumber(cacheHit) ? Math.max(0, Math.min(100, cacheHit)) : undefined
        const formatHit = value => (isNumber(value) ? (Math.round(value * 10) / 10) + '%' : '—')
        const cacheTitle = cachePercent === undefined
          ? undefined
          : t('strip.cache.title', { last: formatHit(turnHit), session: formatHit(sessionHit) })

        const open = () => {
          try {
            ctx.sidebarRight.openTab(TAB_KIND)
          } catch (error) {
            console.error('[context-detail] cannot open the context panel', error)
          }
        }

        const cacheChip = cachePercent === undefined
          ? null
          : h('button', {
            type: 'button',
            className: 'cdp-strip cdp-cache',
            title: cacheTitle,
            'aria-label': cacheTitle,
            onClick: open,
          },
            h('span', { className: 'cdp-cache-label' }, t('strip.cache')),
            h('span', { className: 'cdp-cache-bar', 'aria-hidden': true },
              h('span', { className: 'cdp-cache-fill', style: { width: cachePercent.toFixed(1) + '%' } })),
            h('span', { className: 'cdp-pct' }, formatHit(cachePercent)),
            turnHit !== undefined && sessionHit !== undefined
              ? h('span', { className: 'cdp-cache-session' },
                t('strip.cache.session', { value: formatHit(sessionHit) }))
              : null,
          )

        return h('div', { className: 'cdp-root' },
          h('div', { className: 'cdp-side cdp-side-left' }, cacheChip),
          h('div', { className: 'cdp-side cdp-side-right' },
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
            rowSplit
              ? [
                h('span', { key: 'cat-system', className: 'cdp-cat' },
                  h('i', { className: 'cdp-dot-system' }), compact(rowSplit.system, locale)),
                h('span', { key: 'cat-tools', className: 'cdp-cat' },
                  h('i', { className: 'cdp-dot-tools' }), compact(rowSplit.tools, locale)),
                h('span', { key: 'cat-messages', className: 'cdp-cat' },
                  h('i', { className: 'cdp-dot-messages' }), compact(rowSplit.messages, locale)),
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
          )),
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

        // Compactions older than the loaded window, and the split of the system
        // bucket, are read from the session log once per session.
        const [logScan, setLogScan] = React.useState(() => {
          const cached = sessionId ? logScanCache.get(sessionId) : undefined
          return cached === undefined ? null : cached
        })
        const [logState, setLogState] = React.useState('idle')
        // Bumped when a compaction finished after the cached read, which re-runs
        // the shared scan so the newest compaction gets its measured numbers.
        const [scanNonce, setScanNonce] = React.useState(0)
        // The growth list can hold hundreds of rows, so it mounts only after the
        // section is opened, not on every projection tick of a streaming turn.
        const [growthOpen, setGrowthOpen] = React.useState(false)
        React.useEffect(() => {
          if (!sessionId) return undefined
          const cached = logScanCache.get(sessionId)
          if (cached !== undefined) {
            setLogScan(cached)
            setLogState('done')
            return undefined
          }
          if (logScanFailed.has(sessionId)) {
            setLogState('failed')
            return undefined
          }
          let alive = true
          setLogState('running')
          ensureLogScan(ctx, sessionId, rows => {
            if (!alive) return
            setLogScan(previous => ({
              compactions: rows,
              split: previous ? previous.split : null,
              systemText: previous ? previous.systemText : '',
              tools: previous ? previous.tools : null,
              usage: previous ? previous.usage : null,
            }))
          })
            .then(next => {
              if (!alive) return
              setLogScan(next)
              setLogState('done')
            })
            .catch(() => {
              if (!alive) return
              setLogState('failed')
            })
          return () => {
            alive = false
          }
        }, [sessionId, scanNonce])

        // A compaction that finished after the cached read is only in the
        // loaded window, so read the log again and fill in its measured size.
        // A few retries cover the moment between the summary event and the
        // request settling; the guard stops after that instead of looping.
        const refreshRequests = trajectory && Array.isArray(trajectory.requests) ? trajectory.requests : []
        const refreshMissing = logScan ? missingCompactionSeq(refreshRequests, logScan.compactions) : undefined
        const refreshRef = React.useRef({ key: null, attempts: 0 })
        React.useEffect(() => {
          if (!sessionId || !isNumber(refreshMissing)) {
            refreshRef.current = { key: null, attempts: 0 }
            return undefined
          }
          const key = String(refreshMissing)
          if (refreshRef.current.key !== key) refreshRef.current = { key, attempts: 0 }
          if (logState === 'running' || logState === 'failed') return undefined
          if (refreshRef.current.attempts >= 5) return undefined
          const delay = refreshRef.current.attempts === 0 ? 0 : 4000
          const timer = setTimeout(() => {
            refreshRef.current.attempts += 1
            logScanCache.delete(sessionId)
            logScanFailed.delete(sessionId)
            setScanNonce(value => value + 1)
          }, delay)
          return () => clearTimeout(timer)
        }, [sessionId, refreshMissing, logState])

        // The system prompt text outlives the loaded window, so it is kept for
        // the session: an unreadable log still shows the last saved copy.
        const windowRequests = trajectory && Array.isArray(trajectory.requests) ? trajectory.requests : []
        const systemResolved = resolveSystemText(latestPrompt(windowRequests), trajectory, logScan, sessionId, logState)
        const systemText = systemResolved.text
        React.useEffect(() => {
          if (!sessionId || systemText.length === 0 || systemResolved.source === 'saved') return
          saveSystemText(sessionId, systemText, systemResolved.seq)
        }, [sessionId, systemText, systemResolved.source, systemResolved.seq])

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
        // The measured messages bucket carries the tool calls and their results,
        // so re-cut it from the session log: Tools keeps the catalog and adds the
        // call arguments and result content, and Messages keeps conversation only.
        const toolUsage = logScan && logScan.usage ? logScan.usage : null
        const toolSummary = toolUsageTokens(toolUsage, split)
        const rowSplit = split
          ? {
            system: split.system,
            tools: toolSummary === null ? split.tools : toolSummary.toolTotal,
            messages: toolSummary === null ? split.messages : toolSummary.messagesTokens,
          }
          : null

        const requests = trajectory && Array.isArray(trajectory.requests) ? trajectory.requests : []
        const prompt = latestPrompt(requests)
        // The loaded window usually holds the newest request prompt, but after a
        // compaction (or a reload of a long session) it no longer does. The log
        // scan keeps the newest request header, which is the same catalog.
        const promptTools = prompt && Array.isArray(prompt.tools) && prompt.tools.length > 0
          ? prompt.tools
          : (logScan && Array.isArray(logScan.tools) ? logScan.tools : null)
        const toolGroups = split ? groupTools(promptTools, split.tools) : null
        const compactions = mergeCompactions(compactionRows(requests), logScan ? logScan.compactions : null)
        const logCompactionCount = compactions.reduce((sum, row) => (row.fromLog ? sum + 1 : sum), 0)
        const sysSplit = logScan ? logScan.split : null
        const sysChars = sysSplit ? sysSplit.mainChars + sysSplit.noticeChars : 0
        const mainSystemTokens = split && sysChars > 0
          ? split.system * (sysSplit.mainChars / sysChars)
          : (split ? split.system : undefined)
        const noticeSystemTokens = split && sysSplit && sysChars > 0
          ? Math.max(0, split.system - mainSystemTokens)
          : undefined

        const rows = []
        if (rowSplit) {
          rows.push(
            { key: 'system', label: t('row.system'), swatch: 'cdp-swatch cdp-dot-system', tokens: rowSplit.system },
            { key: 'tools', label: t('row.tools'), swatch: 'cdp-swatch cdp-dot-tools', tokens: rowSplit.tools },
            { key: 'messages', label: t('row.messages'), swatch: 'cdp-swatch cdp-dot-messages', tokens: rowSplit.messages },
          )
        } else if (available) {
          rows.push({ key: 'used', label: t('row.used'), swatch: 'cdp-swatch cdp-dot-system', tokens: used })
        }
        if (available) {
          rows.push({ key: 'free', label: t('row.free'), swatch: 'cdp-swatch cdp-swatch-free', tokens: Math.max(0, capacity - used) })
        }

        const usageInfo = usageDetail(usage)
        // The skill catalog is parsed from the prompt the loaded window carries.
        // The log copy only feeds the text, so the installed catalog keeps
        // counting the skills when the window no longer holds the prompt.
        const parsedSkills = systemResolved.source === 'window' ? parseSkills(systemText) : null
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

        const counts = cellCounts(percent, rowSplit)
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

        const segments = segmentWidths(percent, rowSplit)

        const skillTotalSize = skills ? skills.entries.reduce((sum, entry) => sum + entry.size, 0) : 0

        // The tool hierarchy. Every tool of the request keeps two numbers: the
        // share of the measured definition bucket it takes, and what its own
        // calls add on top (arguments plus result content). Server rows and the
        // two group rows just add their leaves up, so the same pair of numbers
        // can be read at every level and nothing is listed twice.
        const toolExtra = new Map()
        if (toolSummary !== null) {
          for (const row of toolSummary.byTool) toolExtra.set(row.name, row)
        }
        const toolLeaves = []
        if (split && Array.isArray(promptTools) && promptTools.length > 0) {
          let catalogSize = 0
          const sized = []
          for (const tool of promptTools) {
            const name = tool && typeof tool.name === 'string' ? tool.name : ''
            if (!name) continue
            const size = safeStringify(tool).length
            catalogSize += size
            sized.push({ name, size })
          }
          for (const entry of sized) {
            const extra = toolExtra.get(entry.name)
            toolLeaves.push({
              name: entry.name,
              defs: catalogSize > 0 ? split.tools * entry.size / catalogSize : 0,
              extra: extra ? extra.tokens : 0,
              calls: extra ? extra.calls : 0,
              results: extra ? extra.results : 0,
            })
          }
        }
        // A tool the session called but the catalog no longer carries still
        // counts: it is listed without a definition share instead of dropped.
        const catalogNames = new Set(toolLeaves.map(tool => tool.name))
        for (const extra of toolExtra.values()) {
          if (catalogNames.has(extra.name)) continue
          toolLeaves.push({ name: extra.name, defs: undefined, extra: extra.tokens, calls: extra.calls, results: extra.results })
        }
        const leafTotal = leaf => (leaf.defs || 0) + leaf.extra
        const byLeafTotal = (left, right) => leafTotal(right) - leafTotal(left)
        const mcpServers = []
        const serverIndex = new Map()
        const pluginLeaves = []
        for (const leaf of toolLeaves) {
          const match = /^mcp__(.+?)__(.+)$/.exec(leaf.name)
          if (!match) {
            pluginLeaves.push(leaf)
            continue
          }
          const server = match[1]
          let bucket = serverIndex.get(server)
          if (!bucket) {
            bucket = { server, leaves: [], defs: 0, extra: 0 }
            serverIndex.set(server, bucket)
            mcpServers.push(bucket)
          }
          bucket.leaves.push({ ...leaf, short: match[2] })
          bucket.defs += leaf.defs || 0
          bucket.extra += leaf.extra
        }
        for (const bucket of mcpServers) bucket.leaves.sort(byLeafTotal)
        mcpServers.sort((left, right) => (right.defs + right.extra) - (left.defs + left.extra))
        pluginLeaves.sort(byLeafTotal)
        const mcpDefs = mcpServers.reduce((sum, bucket) => sum + bucket.defs, 0)
        const mcpExtra = mcpServers.reduce((sum, bucket) => sum + bucket.extra, 0)
        const pluginDefs = pluginLeaves.reduce((sum, leaf) => sum + (leaf.defs || 0), 0)
        const pluginExtra = pluginLeaves.reduce((sum, leaf) => sum + leaf.extra, 0)
        const hasToolTree = mcpServers.length > 0 || pluginLeaves.length > 0

        const toolRowCell = (key, className, value) => h('li', { key, className }, value)
        const toolLeafRow = leaf => [
          h('li', { key: 'tool:' + leaf.name, className: 'cdp-toolrow', title: leaf.name },
            h('span', { className: 'cdp-mono' }, leaf.short || leaf.name),
            leaf.calls > 0 ? ' · ' + t('tools.calls.count', { count: leaf.calls }) : '',
            leaf.results > 0 ? ' · ' + t('tools.results.count', { count: leaf.results }) : ''),
          toolRowCell('tool:' + leaf.name + '-defs', 'cdp-tool-defs',
            leaf.defs === undefined ? '—' : '~' + compact(leaf.defs, locale)),
          toolRowCell('tool:' + leaf.name + '-total', 'cdp-tool-total', '~' + compact(leafTotal(leaf), locale)),
          toolRowCell('tool:' + leaf.name + '-pct', 'cdp-tool-pct', share(leafTotal(leaf), capacity)),
        ]

        /** A group or server row: label, definitions, definitions + calls, share. */
        const toolTreeRow = (key, label, defs, extra, title) => h('summary', {
          key,
          className: 'cdp-summary cdp-summary-cols4',
          title,
        },
          h('span', { className: 'cdp-summary-text', title }, label),
          h('span', { className: 'cdp-summary-val' }, '~' + compact(defs, locale)),
          h('span', { className: 'cdp-tool-total' }, '~' + compact(defs + extra, locale)),
          h('span', { className: 'cdp-summary-pct' }, share(defs + extra, capacity)),
        )

        const toolHead = hasToolTree
          ? h('div', { key: 'head', className: 'cdp-toolhead' },
            h('span', { key: 'label' }, ''),
            h('span', { key: 'defs', title: t('tools.title.definitions') }, t('tools.column.defs')),
            h('span', { key: 'total', title: t('tools.column.total.hint') }, t('tools.column.total')),
            h('span', { key: 'pct' }, t('tools.column.pct')),
          )
          : null

        const toolTree = []
        if (mcpServers.length > 0) {
          toolTree.push(h('details', { key: 'mcp', className: 'cdp-details' },
            toolTreeRow('mcp-summary', t('tools.mcp') + ' (' + mcpServers.length + ')', mcpDefs, mcpExtra, t('tools.mcp.hint')),
            h('div', { key: 'mcp-body' }, mcpServers.map(bucket => h('details', {
              key: 'server:' + bucket.server,
              className: 'cdp-details cdp-tool-nest',
            },
              toolTreeRow(
                'server-summary:' + bucket.server,
                t('tools.server', { name: bucket.server, count: bucket.leaves.length }),
                bucket.defs,
                bucket.extra,
                bucket.server,
              ),
              h('ul', { key: 'server-list', className: 'cdp-toolrows cdp-toolrows-nested' }, bucket.leaves.map(toolLeafRow)),
            ))),
          ))
        }
        if (pluginLeaves.length > 0) {
          toolTree.push(h('details', { key: 'plugins', className: 'cdp-details' },
            toolTreeRow('plugins-summary', t('tools.plugins') + ' (' + pluginLeaves.length + ')', pluginDefs, pluginExtra, t('tools.plugins.hint')),
            h('ul', { key: 'plugins-list', className: 'cdp-toolrows' },
              pluginLeaves.slice(0, 40).map(toolLeafRow).concat(
                pluginLeaves.length > 40
                  ? [[
                    h('li', { key: 'plugins-more', className: 'cdp-toolrow' },
                      t('tools.more', { count: pluginLeaves.length - 40 })),
                    h('li', { key: 'plugins-more-defs', className: 'cdp-tool-defs' }, ''),
                    h('li', { key: 'plugins-more-total', className: 'cdp-tool-total' }, ''),
                    h('li', { key: 'plugins-more-pct', className: 'cdp-tool-pct' }, ''),
                  ]]
                  : [],
              )),
          ))
        }

        const toolNumericRow = (key, label, detail, tokens, swatch, title) => [
          h('span', { key: key + '-label', className: 'cdp-row-label', title },
            h('i', { className: 'cdp-swatch ' + swatch, 'aria-hidden': true }),
            detail === undefined ? label : label + ' · ' + detail),
          h('span', { key: key + '-value', className: 'cdp-row-val' }, '~' + compact(tokens, locale)),
          h('span', { key: key + '-pct', className: 'cdp-row-pct' }, share(tokens, capacity)),
        ]

        // Every numeric row shares one grid, so the value and share columns line
        // up across the definitions, the calls and the results.
        const toolNumericRows = []
        if (toolGroups !== null) {
          toolNumericRows.push(toolNumericRow(
            'definitions',
            t('tools.definitions'),
            t('tools.count', { count: toolGroups.toolCount }),
            split.tools,
            'cdp-dot-tools',
            t('tools.title.definitions'),
          ))
        }
        if (toolSummary !== null) {
          toolNumericRows.push(
            toolNumericRow(
              'calls',
              t('tools.calls'),
              t('tools.calls.count', { count: toolSummary.calls }),
              toolSummary.callTokens,
              'cdp-dot-tools',
              t('tools.title.calls'),
            ),
            toolNumericRow(
              'results',
              t('tools.results'),
              t('tools.results.count', { count: toolSummary.results }),
              toolSummary.resultTokens,
              'cdp-dot-messages',
              t('tools.title.results'),
            ),
          )
        }

        /**
         * One collapsible section below the Context window header; closed by
         * default. `onOpen` lets a heavy body mount on the first expansion.
         */
        const foldSection = (key, title, meta, content, onOpen) => h('details', {
          key,
          className: 'cdp-section',
          ...(onOpen === undefined ? {} : {
            onToggle: event => {
              if (event && event.currentTarget && event.currentTarget.open) onOpen()
            },
          }),
        },
          h('summary', { className: 'cdp-section-summary' },
            h('span', { className: 'cdp-section-title' }, title),
            meta === undefined || meta === null ? null : h('span', { className: 'cdp-section-meta' }, meta),
          ),
          h('div', { className: 'cdp-section-body' }, content),
        )

        const toolSection = foldSection('tools', t('section.tools'),
          rowSplit ? '~' + compact(rowSplit.tools, locale) : undefined,
          [
          h('p', { key: 'hint', className: 'cdp-hint' }, t('section.tools.hint')),
          toolNumericRows.length > 0
            ? h('div', { key: 'rows', className: 'cdp-rows cdp-rows-tight' }, toolNumericRows)
            : null,
          toolGroups === null && !hasToolTree
            ? h('p', { key: 'none', className: 'cdp-empty' }, t('section.tools.none'))
            : [
              toolHead,
              toolTree,
            ],
          toolSummary === null && logState === 'failed'
            ? h('p', { key: 'scan', className: 'cdp-hint' }, t('tools.scan.unavailable'))
            : null,
          h('details', { key: 'skills', className: 'cdp-details' },
            h('summary', { className: 'cdp-summary cdp-summary-cols4', title: t('tools.skills.title') },
              h('span', { className: 'cdp-summary-text' },
                t('tools.skills') + (skills ? ' (' + skills.entries.length + ')' : ''),
                h('span', { className: 'cdp-muted' }, ' · ' + t('tools.skills.scope'))),
              // A skill is not a tool: it has no definition in the tools bucket,
              // so the defs cell stays empty on purpose and the size it takes
              // inside the system prompt prints in the total column, aligned with
              // the group rows above it.
              h('span', { className: 'cdp-tool-defs' }, ''),
              h('span', { className: 'cdp-tool-total' },
                skillsTokens !== undefined ? '~' + compact(skillsTokens, locale) : '—'),
              h('span', { className: 'cdp-summary-pct' },
                skillsTokens !== undefined ? share(skillsTokens, capacity) : ''),
            ),
            skills
              ? [
                // Same four-column grid as the rows above: the name, an empty
                // defs cell (a skill has no tool definition) and the size it
                // takes inside the system prompt, under the total column.
                h('ul', { key: 'skills-list', className: 'cdp-toolrows' },
                skills.entries.slice(0, 40).map(entry => {
                  const tokens = skillsTokens !== undefined && skillTotalSize > 0
                    ? skillsTokens * entry.size / skillTotalSize
                    : undefined
                  return [
                    h('li', { key: 'skill:' + entry.name, className: 'cdp-toolrow cdp-skill-row' },
                      h('span', { className: 'cdp-mono' }, entry.name)),
                    h('li', { key: 'skill:' + entry.name + '-defs', className: 'cdp-tool-defs' }, ''),
                    h('li', { key: 'skill:' + entry.name + '-total', className: 'cdp-tool-total' },
                      tokens !== undefined ? '~' + compact(tokens, locale) : ''),
                    h('li', { key: 'skill:' + entry.name + '-pct', className: 'cdp-tool-pct' },
                      share(tokens, capacity)),
                  ]
                }).concat(
                  skills.entries.length > 40
                    ? [[
                      h('li', { key: 'skills-more', className: 'cdp-toolrow cdp-skill-row' },
                        t('tools.more', { count: skills.entries.length - 40 })),
                      h('li', { key: 'skills-more-defs', className: 'cdp-tool-defs' }, ''),
                      h('li', { key: 'skills-more-total', className: 'cdp-tool-total' }, ''),
                      h('li', { key: 'skills-more-pct', className: 'cdp-tool-pct' }, ''),
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
          ])

        const messageSplitRows = toolSummary === null
          ? []
          : [
            { key: 'user', label: t('messages.user'), tokens: toolSummary.userTokens },
            { key: 'assistant', label: t('messages.assistant'), tokens: toolSummary.assistantTokens },
            { key: 'reasoning', label: t('messages.reasoning'), tokens: toolSummary.reasoningTokens },
          ].filter(row => row.tokens > 0)

        const messagesSection = messageSplitRows.length === 0
          ? null
          : foldSection('messages', t('section.messages'),
            rowSplit ? '~' + compact(rowSplit.messages, locale) : undefined,
            [
              h('p', { key: 'hint', className: 'cdp-hint' }, t('messages.hint')),
              h('div', { key: 'rows', className: 'cdp-rows cdp-rows-tight' },
                messageSplitRows.map(row => [
                  h('span', { key: row.key + '-label', className: 'cdp-row-label' },
                    h('i', { className: 'cdp-swatch cdp-dot-messages', 'aria-hidden': true }),
                    row.label),
                  h('span', { key: row.key + '-value', className: 'cdp-row-val' },
                    '~' + compact(row.tokens, locale)),
                  h('span', { key: row.key + '-pct', className: 'cdp-row-pct' },
                    share(row.tokens, capacity)),
                ])),
            ])

        const noticeRows = []
        if (sysSplit) {
          const byLabel = new Map()
          for (const block of sysSplit.blocks) {
            const label = block.label || '—'
            const existing = byLabel.get(label)
            if (existing) {
              existing.count += 1
              existing.chars += block.chars
            } else {
              byLabel.set(label, { key: 'notice:' + label, label, count: 1, chars: block.chars })
            }
          }
          for (const group of byLabel.values()) {
            noticeRows.push({
              key: group.key,
              label: group.label,
              count: group.count,
              tokens: noticeSystemTokens !== undefined && sysSplit.noticeChars > 0
                ? noticeSystemTokens * group.chars / sysSplit.noticeChars
                : undefined,
            })
          }
          noticeRows.sort((left, right) => (right.tokens || 0) - (left.tokens || 0))
        }

        const systemSection = foldSection('system', t('section.system'),
          split ? '~' + compact(split.system, locale) : undefined,
          [
            h('p', { key: 'hint', className: 'cdp-hint' }, t('section.system.hint')),
            systemResolved.source === 'log'
              ? h('p', { key: 'source-log', className: 'cdp-hint' }, t('system.log'))
              : (systemResolved.source === 'saved'
                ? h('p', { key: 'source-saved', className: 'cdp-hint' }, t('system.saved'))
                : null),
            h('div', {
              key: 'row',
              className: 'cdp-rows cdp-rows-tight',
              title: !systemText && split ? t('section.system.none') : undefined,
            },
              h('span', { className: 'cdp-row-label' }, t('row.system')),
              h('span', { className: 'cdp-row-val' }, '~' + compact(mainSystemTokens, locale)),
              h('span', { className: 'cdp-row-pct' }, share(mainSystemTokens, capacity)),
            ),
            systemText
              ? h('details', { key: 'text', className: 'cdp-details' },
                h('summary', { className: 'cdp-summary' },
                  h('span', { className: 'cdp-summary-text' }, t('system.show')),
                ),
                h('pre', { className: 'cdp-pre' }, systemText.length > 20000 ? systemText.slice(0, 20000) + '\n…' : systemText),
              )
              : null,
          ])

        const noticesSection = sysSplit && sysSplit.noticeCount > 0
          ? foldSection('notices', t('section.notices'),
            noticeSystemTokens !== undefined
              ? '~' + compact(noticeSystemTokens, locale) + ' · ' + share(noticeSystemTokens, capacity)
              : t('notices.count', { count: sysSplit.noticeCount }),
            [
              h('div', { key: 'row', className: 'cdp-rows cdp-rows-tight' },
                h('span', { className: 'cdp-row-label' }, t('notices.count', { count: sysSplit.noticeCount })),
                h('span', { className: 'cdp-row-val' }, '~' + compact(noticeSystemTokens, locale)),
                h('span', { className: 'cdp-row-pct' }, share(noticeSystemTokens, capacity)),
              ),
              h('ul', { key: 'list', className: 'cdp-list' }, noticeRows.slice(0, 40).map(row => [
                h('li', { key: row.key, className: 'cdp-item', title: row.label },
                  h('span', { className: 'cdp-mono' }, row.label || '—'),
                  ' · ' + row.count),
                h('li', { key: row.key + '-value', className: 'cdp-item-val' },
                  row.tokens === undefined ? '—' : '~' + compact(row.tokens, locale)),
                h('li', { key: row.key + '-pct', className: 'cdp-item-pct' }, share(row.tokens, capacity)),
              ]).concat(
                noticeRows.length > 40
                  ? [[
                    h('li', { key: 'notices-more', className: 'cdp-item' },
                      t('tools.more', { count: noticeRows.length - 40 })),
                    h('li', { key: 'notices-more-value', className: 'cdp-item-val' }, ''),
                    h('li', { key: 'notices-more-pct', className: 'cdp-item-pct' }, ''),
                  ]]
                  : [],
              )),
            ])
          : null

        const compactionSection = foldSection('compaction', t('section.compaction'),
          t('compaction.count', { count: compactions.length }),
          [
            compactions.length === 0
              ? h('p', { key: 'none', className: 'cdp-empty' }, t('section.compaction.none'))
              : h('div', { key: 'list', className: 'cdp-compactions' },
                compactions.map(entry => h('div', { key: entry.key, className: 'cdp-compaction' },
                  h('span', { className: 'cdp-compaction-when' },
                    entry.turn === null ? t('compaction.between') : t('compaction.turn', { turn: entry.turn })),
                  h('span', { className: 'cdp-item-val' }, formatWhen(entry.time, locale)),
                  h('span', { className: 'cdp-compaction-meta' },
                    [
                      // The measured size of the history the compaction
                      // replaced, straight from the summary event.
                      entry.compacted !== undefined
                        ? t('compaction.compacted', { value: '~' + compact(entry.compacted, locale) })
                        : null,
                      entry.items !== undefined
                        ? t('compaction.items', { count: entry.items })
                        : null,
                      // The summary request's own prompt only matters when the
                      // replaced size is unknown.
                      entry.input !== undefined && entry.compacted === undefined
                        ? t('compaction.input') + ' ~' + compact(entry.input, locale)
                        : null,
                      entry.output !== undefined ? t('compaction.summary') + ' ~' + compact(entry.output, locale) : null,
                    ].filter(Boolean).join('  ·  ')),
                ))),
            logCompactionCount > 0
              ? h('p', { key: 'log', className: 'cdp-hint' }, logCompactionCount === 1
                ? t('compaction.log.one')
                : (logCompactionCount >= compactions.length
                  ? t('compaction.log.all', { count: logCompactionCount })
                  : t('compaction.log', { count: logCompactionCount })))
              : null,
            logState === 'running'
              ? h('p', { key: 'reading', className: 'cdp-hint' }, t('compaction.reading'))
              : logState === 'failed'
                ? h('p', { key: 'unavailable', className: 'cdp-hint' }, t('compaction.unavailable'))
                : null,
          ])

        const usageRow = (key, label, value, extra) => [
          h('span', { key: key + '-label', className: 'cdp-row-label' }, label),
          h('span', { key: key + '-value', className: 'cdp-row-val' }, value),
          h('span', { key: key + '-pct', className: 'cdp-row-pct' }, extra === undefined ? '' : extra),
        ]

        const lastTurn = toolUsage && toolUsage.lastTurn ? toolUsage.lastTurn : null
        const lastTurnHit = lastTurn && isNumber(lastTurn.hit)
          ? Math.max(0, Math.min(100, lastTurn.hit))
          : undefined
        const sessionHit = usageInfo && usageInfo.hit !== undefined
          ? Math.max(0, Math.min(100, usageInfo.hit))
          : undefined
        const hitRows = [
          {
            key: 'hit-turn',
            label: lastTurn && isNumber(lastTurn.turn)
              ? t('usage.hit.lastTurn', { turn: lastTurn.turn })
              : t('usage.hit.last'),
            value: lastTurnHit,
          },
          { key: 'hit-session', label: t('usage.hit.session'), value: sessionHit },
        ].filter(row => row.value !== undefined)

        const usageSection = usageInfo === null && hitRows.length === 0
          ? null
          : foldSection('usage', t('section.usage'),
            sessionHit !== undefined ? (Math.round(sessionHit * 10) / 10) + '%' : undefined,
            [
            hitRows.map(row => h('div', { key: row.key, className: 'cdp-hit' },
              h('span', { className: 'cdp-hit-label' }, row.label),
              h('span', { className: 'cdp-hit-value' }, (Math.round(row.value * 10) / 10) + '%'),
              h('span', { className: 'cdp-hit-bar', 'aria-hidden': true },
                h('span', {
                  className: 'cdp-hit-fill',
                  style: { width: row.value.toFixed(1) + '%' },
                }),
              ),
            )),
            usageInfo === null
              ? null
              : h('div', { key: 'rows', className: 'cdp-rows' },
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
            ])

        // Context growth: the prompt size of every request in the session log,
        // newest request last in the chart and first in the list.
        const growthSteps = toolUsage && Array.isArray(toolUsage.steps) ? toolUsage.steps : []
        const growth = growthChart(growthSteps)
        // Every request the scan could read, newest first: the chart above it
        // already draws the whole series, so the list must not truncate it.
        const growthRows = React.useMemo(
          () => growthSteps.map((step, index) => ({ ...step, index: index + 1 })).reverse(),
          [growthSteps],
        )
        const growthMax = growthSteps.reduce((max, step) => Math.max(max, step.context), 1)

        const growthSection = toolUsage === null
          ? null
          : foldSection('growth', t('section.growth'),
            t('growth.summary', {
              steps: growthSteps.length,
              turns: isNumber(toolUsage.turns) ? toolUsage.turns : 0,
            }),
            growth === null
              ? [h('p', { key: 'empty', className: 'cdp-empty' }, t('growth.empty'))]
              : [
                h('p', { key: 'hint', className: 'cdp-hint' }, t('growth.hint')),
                h('svg', {
                  key: 'chart',
                  className: 'cdp-growth',
                  viewBox: '0 0 ' + growth.width + ' ' + growth.height,
                  preserveAspectRatio: 'none',
                  role: 'img',
                  'aria-label': t('section.growth'),
                },
                  h('path', { key: 'area', className: 'cdp-growth-area', d: growth.area }),
                  h('path', {
                    key: 'line',
                    className: 'cdp-growth-line',
                    d: growth.line,
                    'vector-effect': 'non-scaling-stroke',
                  }),
                  growth.dots.map((point, index) => h('circle', {
                    key: 'dot:' + index,
                    className: 'cdp-growth-dot' + (index === growth.dots.length - 1 ? ' cdp-growth-dot-last' : ''),
                    cx: point.x.toFixed(1),
                    cy: point.y.toFixed(1),
                    r: index === growth.dots.length - 1 ? 2.4 : 1.6,
                  })),
                ),
                growthOpen
                  ? h('ul', { key: 'list', className: 'cdp-growth-list' },
                    growthRows.flatMap(row => [
                      h('li', {
                        key: 'growth:' + row.index,
                        className: 'cdp-growth-item',
                        title: t('growth.turnStep', { turn: row.turn, step: row.step }),
                      }, t('growth.step', { index: row.index })),
                      h('li', {
                        key: 'growth:' + row.index + '-bar',
                        className: 'cdp-growth-track',
                        'aria-hidden': true,
                      }, h('span', {
                        className: 'cdp-growth-fill',
                        style: { width: Math.max(0, Math.min(100, row.context / growthMax * 100)).toFixed(1) + '%' },
                      })),
                      h('li', { key: 'growth:' + row.index + '-value', className: 'cdp-growth-val' },
                        compact(row.context, locale)),
                    ]))
                  : null,
              ],
            () => setGrowthOpen(true))

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
          messagesSection,
          systemSection,
          noticesSection,
          compactionSection,
          usageSection,
          growthSection,
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
