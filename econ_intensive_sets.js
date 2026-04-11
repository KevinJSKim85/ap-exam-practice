(function () {
  const INTENSIVE_SOURCE = 'Original AP-style intensive item written for this site.';

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function esc(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function cleanText(text) {
    if (typeof text !== 'string') return text;
    return text
      .replace(/\\+\$/g, '$')
      .replace(/([.!?])\s+\d{1,2}\s*$/g, '$1')
      .replace(/(<\/(?:div|p|table)>)\s+\d{1,2}\s*$/gi, '$1')
      .replace(/\u00a0/g, ' ');
  }

  function hasStimulus(html) {
    return /<img|<svg|<table|class=["']stimulus/i.test(html || '');
  }

  function textNode(x, y, value, opts) {
    const settings = opts || {};
    const anchor = settings.anchor || 'middle';
    const size = settings.size || 12;
    const weight = settings.weight || 600;
    const fill = settings.fill || '#1f2937';
    const rotate = settings.rotate ? ` transform="rotate(${settings.rotate} ${x} ${y})"` : '';
    return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" fill="${fill}"${rotate}>${esc(value)}</text>`;
  }

  function lineNode(x1, y1, x2, y2, opts) {
    const settings = opts || {};
    const stroke = settings.stroke || '#334155';
    const width = settings.width || 2;
    const dash = settings.dash ? ` stroke-dasharray="${settings.dash}"` : '';
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${width}"${dash} />`;
  }

  function pathNode(points, opts) {
    const settings = opts || {};
    const stroke = settings.stroke || '#2563eb';
    const width = settings.width || 3;
    const fill = settings.fill || 'none';
    const dash = settings.dash ? ` stroke-dasharray="${settings.dash}"` : '';
    const data = points.map((point, index) => `${index ? 'L' : 'M'} ${point[0]} ${point[1]}`).join(' ');
    return `<path d="${data}" stroke="${stroke}" stroke-width="${width}" fill="${fill}"${dash} stroke-linecap="round" stroke-linejoin="round" />`;
  }

  function dotNode(x, y, opts) {
    const settings = opts || {};
    return `<circle cx="${x}" cy="${y}" r="${settings.r || 4}" fill="${settings.fill || '#111827'}" />`;
  }

  function figure(title, body, caption) {
    return `<div class="stimulus"><div class="econ-figure-title">${title}</div>${body}${caption ? `<div class="stimulus-caption">${caption}</div>` : ''}</div>`;
  }

  function svgFigure(config) {
    const title = config.title;
    const xLabel = config.xLabel || 'Quantity';
    const yLabel = config.yLabel || 'Price';
    const curves = config.curves || [];
    const guides = config.guides || [];
    const points = config.points || [];
    const extras = config.extras || [];
    const caption = config.caption || '';
    const body = [
      '<svg viewBox="0 0 360 240" role="img" aria-label="' + esc(title) + '">',
      '<rect x="0" y="0" width="360" height="240" fill="#fffdf7" rx="12" ry="12" />',
      lineNode(55, 200, 310, 200, { stroke: '#0f172a', width: 2.5 }),
      lineNode(55, 200, 55, 28, { stroke: '#0f172a', width: 2.5 }),
      textNode(188, 224, xLabel, { size: 12, weight: 700 }),
      textNode(18, 120, yLabel, { size: 12, weight: 700, rotate: -90 })
    ];

    guides.forEach((guide) => {
      body.push(lineNode(guide.x1, guide.y1, guide.x2, guide.y2, {
        stroke: guide.stroke || '#64748b',
        width: guide.width || 1.75,
        dash: guide.dash || '6 4'
      }));
      if (guide.label) {
        body.push(textNode(
          guide.textX !== undefined ? guide.textX : guide.x2 + 8,
          guide.textY !== undefined ? guide.textY : guide.y2,
          guide.label,
          { anchor: guide.anchor || 'start', size: 11, weight: 700, fill: guide.fill || '#334155' }
        ));
      }
    });

    curves.forEach((curve) => {
      body.push(pathNode(curve.points, {
        stroke: curve.stroke,
        width: curve.width,
        dash: curve.dash,
        fill: curve.fill
      }));
      if (curve.label) {
        body.push(textNode(curve.labelX, curve.labelY, curve.label, {
          anchor: curve.anchor || 'start',
          size: curve.size || 12,
          weight: 700,
          fill: curve.labelFill || curve.stroke || '#1f2937'
        }));
      }
    });

    points.forEach((point) => {
      body.push(dotNode(point.x, point.y, { fill: point.fill }));
      if (point.label) {
        body.push(textNode(point.x + (point.dx || 0), point.y + (point.dy || -8), point.label, {
          anchor: point.anchor || 'start',
          size: point.size || 11,
          weight: 700,
          fill: point.labelFill || '#111827'
        }));
      }
    });

    extras.forEach((extra) => body.push(extra));
    body.push('</svg>');
    return figure(title, body.join(''), caption);
  }

  function tableFigure(title, headers, rows, caption) {
    const thead = `<tr>${headers.map((header) => `<th>${header}</th>`).join('')}</tr>`;
    const tbody = rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('');
    return figure(title, `<table class="econ-table">${thead}${tbody}</table>`, caption);
  }

  function payoffFigure(title, rowLabels, colLabels, rows, caption) {
    const header = `<tr><th></th>${colLabels.map((label) => `<th>${label}</th>`).join('')}</tr>`;
    const body = rows.map((row, index) => `<tr><th>${rowLabels[index]}</th>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('');
    return figure(title, `<table class="econ-table">${header}${body}</table>`, caption);
  }

  function normalizeQuestion(question) {
    const next = clone(question);
    next.q = cleanText(next.q);
    next.choices = Array.isArray(next.choices) ? next.choices.map((choice) => cleanText(choice)) : next.choices;
    return next;
  }

  function prependStimulus(question, stimulusHtml) {
    const next = normalizeQuestion(question);
    if (hasStimulus(next.q)) return next;
    next.q = `${stimulusHtml}${next.q}`;
    return next;
  }

  function clinkersStimulus() {
    return svgFigure({
      title: 'Figure 1. Market for Clinkers',
      caption: 'The dashed line marks a market price of $20. At that price, quantity demanded is 6 clinkers and quantity supplied is 8 clinkers.',
      curves: [
        { points: [[82, 70], [285, 182]], stroke: '#2563eb', label: 'D', labelX: 266, labelY: 182 },
        { points: [[88, 178], [285, 100]], stroke: '#dc2626', label: 'S', labelX: 271, labelY: 104 }
      ],
      guides: [
        { x1: 55, y1: 120, x2: 255, y2: 120, label: '$20', textX: 40, textY: 124, anchor: 'end' },
        { x1: 175, y1: 200, x2: 175, y2: 120, label: '6', textX: 175, textY: 214, anchor: 'middle' },
        { x1: 215, y1: 200, x2: 215, y2: 120, label: '8', textX: 215, textY: 214, anchor: 'middle' }
      ]
    });
  }

  function ppcStimulus() {
    return svgFigure({
      title: 'Figure 2. Peter’s Production Possibilities Curve',
      xLabel: 'Lawns mowed',
      yLabel: 'Pools cleaned',
      caption: 'Peter can produce 6 lawns and 0 pools at one endpoint, or 0 lawns and 3 pools at the other.',
      curves: [
        { points: [[70, 54], [300, 190]], stroke: '#0f766e', label: 'PPC', labelX: 238, labelY: 112 }
      ],
      guides: [
        { x1: 300, y1: 190, x2: 300, y2: 200, label: '6', textX: 300, textY: 214, anchor: 'middle', dash: '2 2' },
        { x1: 55, y1: 54, x2: 70, y2: 54, label: '3', textX: 42, textY: 58, anchor: 'end', dash: '2 2' }
      ],
      points: [
        { x: 70, y: 54, label: '(0, 3)', dx: 8, dy: -10 },
        { x: 300, y: 190, label: '(6, 0)', dx: -8, dy: -10, anchor: 'end' }
      ]
    });
  }

  function phillipsStimulus() {
    return svgFigure({
      title: 'Figure 3. Phillips Curve Model',
      xLabel: 'Unemployment rate',
      yLabel: 'Inflation rate',
      caption: 'Point A is the initial long-run equilibrium on SRPC1 and the LRPC. Point B lies down and to the right on SRPC1.',
      curves: [
        { points: [[85, 70], [285, 178]], stroke: '#2563eb', label: 'SRPC1', labelX: 255, labelY: 170 },
        { points: [[85, 48], [285, 156]], stroke: '#7c3aed', dash: '8 5', label: 'SRPC2', labelX: 252, labelY: 146 },
        { points: [[180, 42], [180, 194]], stroke: '#dc2626', dash: '7 4', label: 'LRPC', labelX: 196, labelY: 46 }
      ],
      points: [
        { x: 180, y: 122, label: 'A', dx: -12, dy: -8, anchor: 'end' },
        { x: 218, y: 144, label: 'B', dx: 8, dy: -4 },
        { x: 180, y: 100, label: 'C', dx: -12, dy: -8, anchor: 'end' },
        { x: 224, y: 124, label: 'D', dx: 8, dy: -2 },
        { x: 180, y: 74, label: 'E', dx: 8, dy: -2 }
      ]
    });
  }

  function monopsonyStimulus() {
    return svgFigure({
      title: 'Figure 4. Labor Market for FishNets',
      xLabel: 'Workers',
      yLabel: 'Wage rate',
      caption: 'The competitive equilibrium occurs where labor supply intersects marginal revenue product: wage $40 and employment 40 workers.',
      curves: [
        { points: [[84, 176], [280, 78]], stroke: '#2563eb', label: 'MRP', labelX: 252, labelY: 80 },
        { points: [[88, 184], [280, 112]], stroke: '#0f766e', label: 'S', labelX: 272, labelY: 116 },
        { points: [[88, 194], [170, 156], [280, 56]], stroke: '#dc2626', label: 'MFC', labelX: 264, labelY: 58 }
      ],
      guides: [
        { x1: 55, y1: 120, x2: 220, y2: 120, label: '$40', textX: 40, textY: 124, anchor: 'end' },
        { x1: 220, y1: 200, x2: 220, y2: 120, label: '40', textX: 220, textY: 214, anchor: 'middle' }
      ]
    });
  }

  function externalityStimulus() {
    return svgFigure({
      title: 'Figure 5. Home Remodeling Services',
      caption: 'The market quantity is Q2 at the intersection of MPB and MPC. The socially optimal quantity is Q1 where MPB intersects MSC.',
      curves: [
        { points: [[82, 70], [286, 176]], stroke: '#2563eb', label: 'MPB', labelX: 264, labelY: 176 },
        { points: [[88, 180], [286, 102]], stroke: '#0f766e', label: 'MPC', labelX: 272, labelY: 104 },
        { points: [[90, 150], [286, 72]], stroke: '#dc2626', label: 'MSC', labelX: 272, labelY: 72 }
      ],
      guides: [
        { x1: 55, y1: 118, x2: 194, y2: 118, label: 'A', textX: 200, textY: 112 },
        { x1: 194, y1: 200, x2: 194, y2: 118, label: 'Q1', textX: 194, textY: 214, anchor: 'middle' },
        { x1: 224, y1: 200, x2: 224, y2: 134, label: 'Q2', textX: 224, textY: 214, anchor: 'middle' }
      ],
      points: [
        { x: 194, y: 118, label: 'B', dx: -12, dy: -8, anchor: 'end' },
        { x: 224, y: 134, label: 'C', dx: 8, dy: -8 }
      ]
    });
  }

  function demandMovementStimulus() {
    return svgFigure({
      title: 'Figure 6. Demand Curve',
      caption: 'Point A is at price $6 and quantity 20. Point B is at price $4 and quantity 30 on the same demand curve.',
      curves: [
        { points: [[88, 62], [292, 182]], stroke: '#2563eb', label: 'D1', labelX: 266, labelY: 182 }
      ],
      guides: [
        { x1: 55, y1: 92, x2: 168, y2: 92, label: '$6', textX: 40, textY: 96, anchor: 'end' },
        { x1: 55, y1: 124, x2: 210, y2: 124, label: '$4', textX: 40, textY: 128, anchor: 'end' },
        { x1: 168, y1: 200, x2: 168, y2: 92, label: '20', textX: 168, textY: 214, anchor: 'middle' },
        { x1: 210, y1: 200, x2: 210, y2: 124, label: '30', textX: 210, textY: 214, anchor: 'middle' }
      ],
      points: [
        { x: 168, y: 92, label: 'A', dx: -10, dy: -10, anchor: 'end' },
        { x: 210, y: 124, label: 'B', dx: 8, dy: -8 }
      ]
    });
  }

  function supplyMovementStimulus() {
    return svgFigure({
      title: 'Figure 7. Supply Curve',
      caption: 'On S1, quantity supplied is 8 units when price is $4 and 30 units when price is $8.',
      curves: [
        { points: [[96, 184], [278, 62]], stroke: '#dc2626', label: 'S1', labelX: 260, labelY: 70 }
      ],
      guides: [
        { x1: 55, y1: 152, x2: 136, y2: 152, label: '$4', textX: 40, textY: 156, anchor: 'end' },
        { x1: 55, y1: 88, x2: 248, y2: 88, label: '$8', textX: 40, textY: 92, anchor: 'end' },
        { x1: 136, y1: 200, x2: 136, y2: 152, label: '8', textX: 136, textY: 214, anchor: 'middle' },
        { x1: 248, y1: 200, x2: 248, y2: 88, label: '30', textX: 248, textY: 214, anchor: 'middle' }
      ]
    });
  }

  function supplyShiftStimulus(direction) {
    const leftShift = direction === 'left';
    return svgFigure({
      title: 'Figure 8. Market Supply Shift',
      caption: leftShift ? 'S2 lies left of S1, consistent with fewer sellers or higher costs.' : 'S2 lies right of S1, consistent with lower costs or a subsidy.',
      curves: [
        { points: leftShift ? [[112, 186], [274, 82]] : [[90, 186], [252, 82]], stroke: '#dc2626', label: 'S2', labelX: leftShift ? 258 : 236, labelY: 88 },
        { points: leftShift ? [[90, 186], [252, 82]] : [[112, 186], [274, 82]], stroke: '#2563eb', label: 'S1', labelX: leftShift ? 236 : 258, labelY: 110 }
      ]
    });
  }

  function priceCeilingStimulus() {
    return svgFigure({
      title: 'Figure 9. Rental Scooter Market',
      caption: 'The competitive equilibrium is $8 and 50 units. A binding price ceiling of $6 leaves only 40 units exchanged.',
      curves: [
        { points: [[84, 70], [286, 182]], stroke: '#2563eb', label: 'D', labelX: 270, labelY: 182 },
        { points: [[90, 184], [286, 76]], stroke: '#dc2626', label: 'S', labelX: 272, labelY: 78 }
      ],
      guides: [
        { x1: 55, y1: 132, x2: 280, y2: 132, label: '$6', textX: 40, textY: 136, anchor: 'end' },
        { x1: 55, y1: 100, x2: 210, y2: 100, label: '$8', textX: 40, textY: 104, anchor: 'end' },
        { x1: 180, y1: 200, x2: 180, y2: 132, label: '40', textX: 180, textY: 214, anchor: 'middle' },
        { x1: 210, y1: 200, x2: 210, y2: 100, label: '50', textX: 210, textY: 214, anchor: 'middle' }
      ]
    });
  }

  function voucherStimulus() {
    return svgFigure({
      title: 'Figure 10. Consumer Voucher in a Competitive Market',
      caption: 'A per-unit voucher shifts effective demand from D1 to D2. Sellers receive a higher price and total quantity rises.',
      curves: [
        { points: [[84, 84], [286, 184]], stroke: '#2563eb', label: 'D1', labelX: 268, labelY: 182 },
        { points: [[84, 56], [286, 156]], stroke: '#7c3aed', dash: '8 5', label: 'D2', labelX: 268, labelY: 154 },
        { points: [[90, 184], [286, 88]], stroke: '#dc2626', label: 'S', labelX: 272, labelY: 92 }
      ]
    });
  }

  function laborFloorStimulus() {
    return svgFigure({
      title: 'Figure 11. Entry-Level Labor Market',
      xLabel: 'Workers',
      yLabel: 'Wage',
      caption: 'At the binding wage floor of $9, firms hire the quantity of labor demanded: 40 workers.',
      curves: [
        { points: [[88, 72], [286, 180]], stroke: '#0f766e', label: 'S', labelX: 270, labelY: 180 },
        { points: [[88, 178], [286, 76]], stroke: '#2563eb', label: 'D', labelX: 270, labelY: 78 }
      ],
      guides: [
        { x1: 55, y1: 108, x2: 240, y2: 108, label: '$9', textX: 40, textY: 112, anchor: 'end' },
        { x1: 190, y1: 200, x2: 190, y2: 108, label: '40', textX: 190, textY: 214, anchor: 'middle' }
      ]
    });
  }

  function naturalMonopolyStimulus() {
    return svgFigure({
      title: 'Figure 12. Natural Monopoly with a Price Ceiling',
      caption: 'The ceiling creates a horizontal effective marginal revenue segment from demand to the point where the ceiling meets marginal cost.',
      curves: [
        { points: [[84, 70], [286, 178]], stroke: '#2563eb', label: 'D', labelX: 268, labelY: 178 },
        { points: [[84, 30], [180, 78], [286, 122]], stroke: '#7c3aed', label: 'MR', labelX: 266, labelY: 124 },
        { points: [[88, 182], [286, 98]], stroke: '#dc2626', label: 'ATC', labelX: 266, labelY: 98 },
        { points: [[84, 160], [286, 130]], stroke: '#0f766e', label: 'MC', labelX: 270, labelY: 132 },
        { points: [[96, 106], [236, 106]], stroke: '#f59e0b', width: 3, label: 'Pc', labelX: 244, labelY: 110 }
      ]
    });
  }

  function fixedCostStimulus() {
    return tableFigure(
      'Figure 13. Fixed-Cost Regulation',
      ['Market structure', 'Effect of regulation'],
      [
        ['Long-run perfect competition', 'ATC rises, MC unchanged; some firms exit over time'],
        ['Monopoly', 'ATC rises, MC unchanged; MR = MC output rule is unchanged']
      ],
      'The regulation raises fixed cost only. Marginal cost is unchanged in both market structures.'
    );
  }

  function smokeAlarmStimulus() {
    return svgFigure({
      title: 'Figure 14. Market for Smoke Alarms',
      caption: 'MSB lies above MPB, indicating a positive consumption externality. Market equilibrium is where MPB intersects MPC.',
      curves: [
        { points: [[82, 88], [286, 182]], stroke: '#2563eb', label: 'MPB', labelX: 264, labelY: 182 },
        { points: [[82, 56], [286, 150]], stroke: '#7c3aed', dash: '8 5', label: 'MSB', labelX: 264, labelY: 148 },
        { points: [[88, 184], [286, 84]], stroke: '#dc2626', label: 'MPC = MSC', labelX: 214, labelY: 84 }
      ],
      guides: [
        { x1: 175, y1: 200, x2: 175, y2: 130, label: 'Qm', textX: 175, textY: 214, anchor: 'middle' },
        { x1: 220, y1: 200, x2: 220, y2: 108, label: 'Qs', textX: 220, textY: 214, anchor: 'middle' }
      ]
    });
  }

  function leatherShoesStimulus() {
    return svgFigure({
      title: 'Figure 15. Leather Shoes Monopoly',
      caption: 'Fixed cost is zero and marginal cost is constant. The monopoly chooses the quantity where MR = MC.',
      curves: [
        { points: [[84, 70], [286, 178]], stroke: '#2563eb', label: 'D', labelX: 268, labelY: 178 },
        { points: [[84, 30], [180, 86], [286, 146]], stroke: '#7c3aed', label: 'MR', labelX: 270, labelY: 146 },
        { points: [[82, 126], [286, 126]], stroke: '#0f766e', label: 'MC', labelX: 270, labelY: 122 }
      ],
      guides: [
        { x1: 190, y1: 200, x2: 190, y2: 126, label: 'Qm', textX: 190, textY: 214, anchor: 'middle' },
        { x1: 55, y1: 92, x2: 190, y2: 92, label: 'Pm', textX: 40, textY: 96, anchor: 'end' }
      ]
    });
  }

  function decorateQuestion(question) {
    const next = normalizeQuestion(question);
    const stem = next.q || '';
    if (hasStimulus(stem)) return next;

    if (/market for clinkers/i.test(stem)) return prependStimulus(next, clinkersStimulus());
    if (/Peter runs a small business mowing lawns and cleaning pools/i.test(stem)) return prependStimulus(next, ppcStimulus());
    if (/Phillips curve model provided/i.test(stem)) return prependStimulus(next, phillipsStimulus());
    if (/RKB and JCM are two competing firms/i.test(stem)) {
      return prependStimulus(next, payoffFigure(
        'Figure 16. RKB and JCM Payoff Matrix',
        ['Project Alpha', 'Project Beta'],
        ['Project X', 'Project Y'],
        [['8, 4', '6, 7'], ['4, 6', '2, 5']],
        'Each cell lists RKB’s payoff first and JCM’s payoff second.'
      ));
    }
    if (/FishNets hires workers/i.test(stem)) return prependStimulus(next, monopsonyStimulus());
    if (/Home remodeling services/i.test(stem)) return prependStimulus(next, externalityStimulus());
    if (/Rover’s Rest and Dave’s Den/i.test(stem)) {
      return prependStimulus(next, payoffFigure(
        'Figure 17. Dog Daycare Advertising Game',
        ['Dave: Run Ads', 'Dave: No Ads'],
        ['Rover: Run Ads', 'Rover: No Ads'],
        [['12, 12', '18, 8'], ['8, 18', '16, 16']],
        'Each cell lists Dave’s Den’s profit first and Rover’s Rest’s profit second.'
      ));
    }
    if (/Based on the demand curve shown/i.test(stem) || /market moves to point B/i.test(stem)) {
      return prependStimulus(next, demandMovementStimulus());
    }
    if (/market price rises from \$4 to \$8/i.test(stem) || /quantity supplied on S1 at a price of \$4/i.test(stem)) {
      return prependStimulus(next, supplyMovementStimulus());
    }
    if ((/supply curves shown/i.test(stem) && /number of sellers/i.test(stem)) || /fewer corn farmers/i.test(stem) || /higher input prices/i.test(stem)) {
      return prependStimulus(next, supplyShiftStimulus('left'));
    }
    if (/A subsidy is paid to producers/i.test(stem) || /per-unit subsidy/i.test(stem) || /subsidies lower effective costs/i.test(stem) || /producers of the good receive a per-unit subsidy/i.test(stem)) {
      return prependStimulus(next, supplyShiftStimulus('right'));
    }
    if (/rental scooters/i.test(stem) && /price ceiling/i.test(stem)) {
      return prependStimulus(next, priceCeilingStimulus());
    }
    if (/natural monopoly/i.test(stem) && /price ceiling/i.test(stem)) {
      return prependStimulus(next, naturalMonopolyStimulus());
    }
    if (/voucher/i.test(stem) && /per-unit/i.test(stem)) {
      return prependStimulus(next, voucherStimulus());
    }
    if (/binding price floor/i.test(stem) && /entry-level workers/i.test(stem)) {
      return prependStimulus(next, laborFloorStimulus());
    }
    if (/increasing fixed costs but not changing marginal cost/i.test(stem)) {
      return prependStimulus(next, fixedCostStimulus());
    }
    return next;
  }

  function decorateFrq(frq) {
    const next = clone(frq);
    next.text = cleanText(next.text);
    if (hasStimulus(next.text)) return next;
    if (/market for smoke alarms/i.test(next.text)) {
      next.text = `${smokeAlarmStimulus()}${next.text}`;
    } else if (/sells leather shoes/i.test(next.text)) {
      next.text = `${leatherShoesStimulus()}${next.text}`;
    }
    return next;
  }

  function makeQuestion(stem, choices, answer, explanation, stimulusHtml) {
    return {
      q: `${stimulusHtml || ''}${stem}`,
      choices,
      answer,
      explanation,
      source: INTENSIVE_SOURCE
    };
  }

  function adasFigure(title, caption) {
    return svgFigure({
      title,
      xLabel: 'Real output',
      yLabel: 'Price level',
      caption,
      curves: [
        { points: [[92, 176], [286, 78]], stroke: '#0f766e', label: 'SRAS', labelX: 264, labelY: 78 },
        { points: [[198, 34], [198, 196]], stroke: '#dc2626', dash: '7 4', label: 'LRAS', labelX: 214, labelY: 38 },
        { points: [[84, 66], [286, 174]], stroke: '#2563eb', label: 'AD1', labelX: 264, labelY: 172 },
        { points: [[66, 86], [268, 194]], stroke: '#7c3aed', dash: '8 5', label: 'AD2', labelX: 244, labelY: 194 }
      ],
      points: [{ x: 198, y: 121, label: 'A', dx: 8, dy: -8 }]
    });
  }

  function moneyMarketFigure(title, caption, shiftRight) {
    return svgFigure({
      title,
      xLabel: 'Quantity of money',
      yLabel: 'Nominal interest rate',
      caption,
      curves: [
        { points: [[208, 34], [208, 196]], stroke: '#0f766e', label: 'MS1', labelX: 222, labelY: 40 },
        shiftRight ? { points: [[238, 34], [238, 196]], stroke: '#7c3aed', dash: '8 5', label: 'MS2', labelX: 252, labelY: 40 } : null,
        { points: [[84, 72], [286, 176]], stroke: '#2563eb', label: 'MD1', labelX: 266, labelY: 176 },
        !shiftRight ? { points: [[84, 52], [286, 156]], stroke: '#7c3aed', dash: '8 5', label: 'MD2', labelX: 266, labelY: 156 } : null
      ].filter(Boolean)
    });
  }

  function loanableFundsFigure(title, caption, demandRight) {
    return svgFigure({
      title,
      xLabel: 'Quantity of loanable funds',
      yLabel: 'Real interest rate',
      caption,
      curves: [
        { points: [[88, 174], [286, 72]], stroke: '#0f766e', label: demandRight ? 'S' : 'D', labelX: 268, labelY: 76 },
        { points: [[88, 70], [286, 176]], stroke: '#2563eb', label: demandRight ? 'D1' : 'S1', labelX: 266, labelY: 176 },
        { points: [[110, 50], [308, 156]], stroke: '#7c3aed', dash: '8 5', label: demandRight ? 'D2' : 'S2', labelX: 286, labelY: 156 }
      ]
    });
  }

  function forexFigure(title, caption, demandRight) {
    return svgFigure({
      title,
      xLabel: 'Quantity of currency',
      yLabel: 'Price of currency',
      caption,
      curves: [
        { points: [[90, 182], [286, 78]], stroke: '#0f766e', label: 'S', labelX: 272, labelY: 82 },
        { points: [[86, demandRight ? 86 : 62], [286, demandRight ? 190 : 166]], stroke: '#2563eb', label: 'D1', labelX: 264, labelY: demandRight ? 188 : 164 },
        { points: [[68, demandRight ? 62 : 86], [268, demandRight ? 166 : 190]], stroke: '#7c3aed', dash: '8 5', label: 'D2', labelX: 246, labelY: demandRight ? 164 : 188 }
      ]
    });
  }

  function ppcGrowthFigure(title, caption) {
    return svgFigure({
      title,
      xLabel: 'Consumer goods',
      yLabel: 'Capital goods',
      caption,
      curves: [
        { points: [[74, 58], [148, 84], [220, 132], [290, 188]], stroke: '#2563eb', label: 'PPC1', labelX: 238, labelY: 134 },
        { points: [[74, 42], [156, 70], [234, 118], [306, 180]], stroke: '#7c3aed', dash: '8 5', label: 'PPC2', labelX: 256, labelY: 120 }
      ]
    });
  }

  function competitiveFirmFigure(title, caption) {
    return svgFigure({
      title,
      xLabel: 'Quantity',
      yLabel: 'Cost / revenue',
      caption,
      curves: [
        { points: [[84, 168], [160, 120], [286, 72]], stroke: '#0f766e', label: 'MC', labelX: 270, labelY: 74 },
        { points: [[92, 172], [164, 112], [234, 104], [286, 128]], stroke: '#dc2626', label: 'ATC', labelX: 270, labelY: 130 },
        { points: [[90, 188], [156, 136], [214, 126], [286, 136]], stroke: '#f59e0b', label: 'AVC', labelX: 268, labelY: 138 },
        { points: [[70, 110], [300, 110]], stroke: '#2563eb', label: 'P = MR = AR', labelX: 248, labelY: 104 }
      ],
      guides: [{ x1: 186, y1: 200, x2: 186, y2: 110, label: 'Q*', textX: 186, textY: 214, anchor: 'middle' }]
    });
  }

  function monopolyFigure(title, caption) {
    return svgFigure({
      title,
      xLabel: 'Quantity',
      yLabel: 'Price / cost',
      caption,
      curves: [
        { points: [[84, 70], [286, 178]], stroke: '#2563eb', label: 'D', labelX: 270, labelY: 178 },
        { points: [[84, 32], [182, 88], [286, 148]], stroke: '#7c3aed', label: 'MR', labelX: 270, labelY: 148 },
        { points: [[84, 156], [286, 126]], stroke: '#0f766e', label: 'MC', labelX: 270, labelY: 128 },
        { points: [[96, 106], [236, 106]], stroke: '#f59e0b', label: 'Pc', labelX: 244, labelY: 100 }
      ]
    });
  }

  function taxIncidenceFigure(title, caption) {
    return svgFigure({
      title,
      caption,
      curves: [
        { points: [[108, 62], [248, 188]], stroke: '#2563eb', label: 'D', labelX: 234, labelY: 188 },
        { points: [[82, 186], [286, 88]], stroke: '#0f766e', label: 'S1', labelX: 270, labelY: 92 },
        { points: [[82, 160], [286, 62]], stroke: '#7c3aed', dash: '8 5', label: 'S2', labelX: 270, labelY: 64 }
      ]
    });
  }

  function compAdvTable(title, data) {
    return tableFigure(
      title,
      ['Producer', 'Pizzas per day', 'Salads per day'],
      [
        [data.aName, data.aPizza, data.aSalad],
        [data.bName, data.bPizza, data.bSalad]
      ],
      'Each producer can allocate a full day to only one product.'
    );
  }

  function laborMarketFigure(title, caption) {
    return svgFigure({
      title,
      xLabel: 'Labor',
      yLabel: 'Wage',
      caption,
      curves: [
        { points: [[86, 182], [286, 72]], stroke: '#2563eb', label: 'MRP', labelX: 264, labelY: 76 },
        { points: [[88, 186], [286, 112]], stroke: '#0f766e', label: 'S', labelX: 272, labelY: 116 },
        { points: [[88, 196], [180, 154], [286, 54]], stroke: '#dc2626', label: 'MFC', labelX: 268, labelY: 56 },
        { points: [[70, 118], [230, 118]], stroke: '#f59e0b', label: 'Wmin', labelX: 240, labelY: 112 }
      ]
    });
  }

  function voucherGraphFigure(title, caption) {
    return svgFigure({
      title,
      caption,
      curves: [
        { points: [[88, 84], [286, 184]], stroke: '#2563eb', label: 'D1', labelX: 266, labelY: 182 },
        { points: [[88, 56], [286, 156]], stroke: '#7c3aed', dash: '8 5', label: 'D2', labelX: 266, labelY: 156 },
        { points: [[92, 184], [286, 88]], stroke: '#dc2626', label: 'S', labelX: 272, labelY: 92 }
      ]
    });
  }

  function priceFloorFigure(title, caption) {
    return svgFigure({
      title,
      xLabel: 'Quantity',
      yLabel: 'Price',
      caption,
      curves: [
        { points: [[90, 74], [286, 180]], stroke: '#2563eb', label: 'D', labelX: 270, labelY: 180 },
        { points: [[90, 182], [286, 74]], stroke: '#dc2626', label: 'S', labelX: 272, labelY: 78 },
        { points: [[70, 106], [290, 106]], stroke: '#f59e0b', label: 'Pf', labelX: 298, labelY: 110 }
      ]
    });
  }

  function macroGraphQuestions(index) {
    const adasVariants = [
      'households sharply reduce autonomous consumption',
      'businesses postpone planned investment spending',
      'the foreign exchange value of the currency appreciates and net exports fall',
      'the government cuts purchases with no offsetting policy response'
    ];
    const phillipsPolicies = [
      'the government raises personal income taxes',
      'the central bank sells bonds on the open market',
      'consumer wealth falls and planned spending contracts',
      'the government reduces transfer payments'
    ];
    const moneyDemandShifts = [
      'real GDP increases while the money supply is unchanged',
      'the price level rises with no change in the nominal money supply',
      'households hold more transactions balances because nominal income rises',
      'firms increase planned spending and demand more money for transactions'
    ];
    const deficitVariants = [
      'the federal government runs a larger deficit financed by borrowing',
      'Congress expands spending without increasing taxes',
      'the treasury issues more bonds to finance new infrastructure spending',
      'the government cuts taxes and borrowing demand rises'
    ];
    const fxDemandVariants = [
      'foreign demand for the nation’s exports increases',
      'domestic interest rates rise relative to foreign interest rates',
      'foreign investors expect higher returns on domestic assets',
      'a domestic technology boom attracts more foreign capital inflows'
    ];
    const ppcVariants = [
      'a nation shifts resources toward capital-goods production for several years',
      'firms adopt a new technology that raises productivity in the capital-goods sector',
      'the labor force receives additional STEM training that mainly raises investment-goods output',
      'the government funds infrastructure that mainly lowers production costs in heavy industry'
    ];
    const supplyShockVariants = [
      'oil prices fall unexpectedly',
      'economy-wide productivity rises',
      'employers face lower payroll taxes',
      'shipping bottlenecks are resolved'
    ];
    const moneySupplyVariants = [
      'the central bank buys bonds on the open market',
      'the central bank lowers the required reserve ratio',
      'the central bank reduces the policy rate and banks expand lending',
      'the central bank increases reserves through large-scale asset purchases'
    ];
    const savingsVariants = [
      'households become more future-oriented and save a larger share of income',
      'the government creates tax-favored retirement accounts that raise private saving',
      'consumer confidence falls and households delay purchases',
      'a pension reform leads households to increase desired saving'
    ];
    const fxDepreciationVariants = [
      'domestic inflation persistently exceeds foreign inflation',
      'foreign central banks raise rates while domestic rates stay unchanged',
      'foreign investors expect weaker domestic growth and reduce asset purchases',
      'the domestic current account deficit widens and capital inflows slow'
    ];

    return [
      makeQuestion(
        'The economy is initially at point A. If ' + adasVariants[index] + ' and aggregate demand shifts from AD1 to AD2, which of the following is most likely in the short run?',
        ['Output rises and the price level rises.', 'Output falls and the price level falls.', 'Output is unchanged and the price level falls.', 'Output falls and the price level rises.', 'Output is unchanged and the natural rate of unemployment falls.'],
        1,
        'A leftward shift of aggregate demand lowers both real output and the price level in the short run.',
        adasFigure('Intensive Macro Graph 1. AD-AS Contraction', 'AD shifts left from AD1 to AD2 while SRAS and LRAS are unchanged.')
      ),
      makeQuestion(
        'In the Phillips curve model shown, suppose ' + phillipsPolicies[index] + '. Which change is most consistent with the short-run outcome?',
        ['A movement down and to the right along the existing short-run Phillips curve', 'A movement up and to the left along the existing short-run Phillips curve', 'A rightward shift of the long-run Phillips curve', 'A leftward shift of the short-run Phillips curve', 'A rightward shift of the short-run Phillips curve'],
        0,
        'A contractionary demand-side shock lowers inflation and raises cyclical unemployment, which is a movement down and right along the existing SRPC.',
        phillipsStimulus()
      ),
      makeQuestion(
        'In the money market shown, ' + moneyDemandShifts[index] + '. If money demand shifts from MD1 to MD2, what happens immediately to the nominal interest rate?',
        ['It decreases because the equilibrium quantity of money rises.', 'It increases because the equilibrium nominal interest rate rises.', 'It is unchanged because the money supply is vertical.', 'It decreases because bond prices fall.', 'It becomes zero if the shift is large enough.'],
        1,
        'A rightward shift of money demand, holding money supply fixed, raises the equilibrium nominal interest rate.',
        moneyMarketFigure('Intensive Macro Graph 2. Money Market Demand Shift', 'Money supply is fixed while money demand shifts right.', false)
      ),
      makeQuestion(
        'In the loanable-funds market shown, suppose ' + deficitVariants[index] + '. If demand shifts from D1 to D2, which of the following is most likely?',
        ['The real interest rate falls and private investment rises.', 'The real interest rate rises and private investment is crowded out.', 'The real interest rate rises and private saving falls because supply shifts left.', 'The nominal interest rate must fall because fiscal policy is expansionary.', 'There is no change because the supply of loanable funds is perfectly inelastic.'],
        1,
        'A rightward shift of demand for loanable funds raises the real interest rate and crowds out some private investment.',
        loanableFundsFigure('Intensive Macro Graph 3. Loanable Funds', 'Government borrowing shifts demand for loanable funds right.', true)
      ),
      makeQuestion(
        'In the foreign-exchange market shown, suppose ' + fxDemandVariants[index] + '. If demand for the domestic currency shifts from D1 to D2, which outcome is most likely?',
        ['The domestic currency depreciates and net exports rise.', 'The domestic currency appreciates and net exports fall.', 'The domestic currency appreciates and net exports rise.', 'The domestic currency depreciates and capital inflows rise.', 'The domestic currency is unchanged because supply is fixed.'],
        1,
        'A higher demand for the domestic currency causes appreciation, which tends to reduce net exports.',
        forexFigure('Intensive Macro Graph 4. Foreign Exchange Market', 'Demand for the domestic currency shifts right while supply is unchanged.', true)
      ),
      makeQuestion(
        'Based on the PPC shift shown, which of the following best explains why future long-run economic growth could be greater if ' + ppcVariants[index] + '?',
        ['The economy sacrifices current consumer goods to expand future productive capacity.', 'The economy eliminates scarcity because PPC2 lies outside PPC1.', 'Opportunity cost falls to zero at every point on PPC2.', 'The economy can now produce beyond full employment with no inflation.', 'Capital accumulation lowers the natural rate of unemployment to zero.'],
        0,
        'Shifting resources toward capital formation can reduce current consumption but expand future productive capacity and long-run growth.',
        ppcGrowthFigure('Intensive Macro Graph 5. Capital Goods and Growth', 'PPC2 lies outside PPC1, with the largest outward shift in capital goods.')
      ),
      makeQuestion(
        'The economy starts at long-run equilibrium. If ' + supplyShockVariants[index] + ' and short-run aggregate supply shifts right, which of the following is most likely in the short run?',
        ['Real output rises and the price level falls.', 'Real output rises and the price level rises.', 'Real output falls and the price level falls.', 'Real output and the price level both remain unchanged.', 'Real output falls while the price level rises.'],
        0,
        'A positive supply shock shifts SRAS right, lowering the price level and increasing real output in the short run.',
        adasFigure('Intensive Macro Graph 6. Positive Supply Shock', 'SRAS shifts right while aggregate demand and LRAS remain unchanged.')
      ),
      makeQuestion(
        'In the money market shown, suppose ' + moneySupplyVariants[index] + '. If money supply shifts from MS1 to MS2, which effect occurs immediately?',
        ['Nominal interest rates rise and bond prices fall.', 'Nominal interest rates fall as the quantity of money increases.', 'The price level falls immediately because SRAS shifts right.', 'Real interest rates rise because saving becomes more attractive.', 'The demand for money falls because more reserves exist.'],
        1,
        'An increase in money supply lowers the equilibrium nominal interest rate in the money market.',
        moneyMarketFigure('Intensive Macro Graph 7. Money Supply Expansion', 'Money supply shifts right while money demand is unchanged.', true)
      ),
      makeQuestion(
        'In the loanable-funds market shown, suppose ' + savingsVariants[index] + '. If supply shifts from S1 to S2, which change is most likely?',
        ['The real interest rate rises and planned investment falls.', 'The real interest rate falls and long-run capital formation rises.', 'The nominal interest rate rises and the money supply falls.', 'The real interest rate is unchanged because both saving and investment increase equally.', 'The financial account must move into deficit.'],
        1,
        'A rightward shift of loanable-funds supply lowers the real interest rate and supports more investment spending.',
        loanableFundsFigure('Intensive Macro Graph 8. Higher Saving', 'Private saving rises and the supply of loanable funds shifts right.', false)
      ),
      makeQuestion(
        'In the foreign-exchange market shown, suppose ' + fxDepreciationVariants[index] + '. If demand for the domestic currency shifts from D1 to D2, what happens?',
        ['The currency appreciates and imports become more expensive.', 'The currency depreciates and domestic net exports tend to rise.', 'The currency appreciates and the financial account moves into deficit.', 'The currency depreciates and domestic real interest rates must rise.', 'The exchange rate is fixed by the market, so no change occurs.'],
        1,
        'A leftward shift of currency demand causes depreciation, which tends to increase net exports over time.',
        forexFigure('Intensive Macro Graph 9. Currency Depreciation', 'Demand for the domestic currency shifts left while supply is unchanged.', false)
      )
    ];
  }

  function microGraphQuestions(index) {
    const compData = [
      { aName: 'Aria', aPizza: 24, aSalad: 12, bName: 'Ben', bPizza: 12, bSalad: 18 },
      { aName: 'Mina', aPizza: 30, aSalad: 10, bName: 'Joon', bPizza: 10, bSalad: 20 },
      { aName: 'Lena', aPizza: 16, aSalad: 8, bName: 'Noah', bPizza: 8, bSalad: 16 },
      { aName: 'Sara', aPizza: 28, aSalad: 14, bName: 'Theo', bPizza: 12, bSalad: 24 }
    ][index];
    const actionPairs = [
      ['Charge High', 'Charge Low'],
      ['Advertise', 'Do Not Advertise'],
      ['Expand Output', 'Restrict Output'],
      ['Offer Warranty', 'Do Not Offer Warranty']
    ][index];

    return [
      makeQuestion(
        'The graph shows a demand curve that is relatively steep compared with supply. If the government imposes a per-unit excise tax that shifts supply from S1 to S2, who bears more of the tax burden?',
        ['Producers, because the flatter curve bears more of the burden.', 'Consumers, because demand is relatively price inelastic.', 'Both sides bear equal burdens because the tax is per unit.', 'Nobody, because total surplus is unchanged.', 'Only the government bears the burden because it collects the revenue.'],
        1,
        'The side of the market that is relatively more inelastic bears more of the tax burden; here, that is consumers.',
        taxIncidenceFigure('Intensive Micro Graph 1. Tax Incidence', 'Demand is steeper than supply, so consumers bear more of a per-unit tax.')
      ),
      makeQuestion(
        'For the perfectly competitive firm shown, which of the following is true at the displayed market price?',
        ['The firm should shut down because price is below average variable cost.', 'The firm should continue producing in the short run even though it incurs an economic loss.', 'The firm earns positive economic profit because price exceeds marginal cost at Q*.', 'The firm is allocatively inefficient because price equals marginal cost.', 'The firm maximizes profit by producing where price equals average total cost.'],
        1,
        'The price line lies above AVC but below ATC at the profit-maximizing output, so the firm produces in the short run and incurs a loss.',
        competitiveFirmFigure('Intensive Micro Graph 2. Competitive Firm', 'The market price intersects MC above AVC but below ATC at the profit-maximizing output.')
      ),
      makeQuestion(
        'For the monopolist shown, a binding price ceiling at Pc is imposed. Relative to the unregulated monopoly outcome, which of the following is most likely?',
        ['Output falls because marginal revenue is lower at every quantity.', 'Output rises because the ceiling creates an effective horizontal MR segment until demand intersects the ceiling.', 'Output is unchanged because fixed cost determines monopoly output.', 'Price rises because the ceiling is binding.', 'Economic profit necessarily becomes zero.'],
        1,
        'A binding ceiling can increase output because the monopolist expands until MC equals the effective marginal revenue created by the ceiling.',
        monopolyFigure('Intensive Micro Graph 3. Monopoly Price Ceiling', 'The firm faces a binding ceiling Pc below the unregulated monopoly price.')
      ),
      makeQuestion(
        'In the negative externality graph shown, which policy would move the market from the market quantity toward the socially optimal quantity?',
        ['A per-unit subsidy to consumers equal to the marginal external benefit', 'A per-unit tax on producers equal to the marginal external cost', 'A lump-sum subsidy to producers equal to total deadweight loss', 'A price ceiling set at the socially optimal price', 'No policy is needed because competitive markets are efficient'],
        1,
        'When marginal social cost exceeds marginal private cost, a per-unit tax equal to the marginal external cost can internalize the negative externality.',
        externalityStimulus()
      ),
      makeQuestion(
        'Consider the payoff matrix shown. Which statement is correct?',
        ['There is no Nash equilibrium.', 'Both firms have a dominant strategy to choose the first option.', 'Only the column firm has a dominant strategy.', 'The unique Nash equilibrium is for both firms to choose the second option.', 'The game must result in collusion.'],
        1,
        'In this prisoner’s-dilemma style matrix, both firms prefer the first option regardless of the rival’s action, creating a Nash equilibrium when both choose it.',
        payoffFigure(
          'Intensive Micro Graph 4. Oligopoly Game',
          ['Firm A: ' + actionPairs[0], 'Firm A: ' + actionPairs[1]],
          ['Firm B: ' + actionPairs[0], 'Firm B: ' + actionPairs[1]],
          [['14, 14', '22, 6'], ['6, 22', '18, 18']],
          'Each cell lists Firm A’s payoff first and Firm B’s payoff second.'
        )
      ),
      makeQuestion(
        'In the labor market shown, a minimum wage equal to Wmin is imposed on a monopsonist. Which outcome is most likely if Wmin is set at the competitive wage?',
        ['Employment falls below the monopsony quantity.', 'Employment rises to the competitive quantity because the firm faces a perfectly elastic wage up to that point.', 'Employment is unchanged because monopsonists ignore wage floors.', 'Marginal factor cost rises above the wage floor at all quantities.', 'Labor supply becomes perfectly inelastic.'],
        1,
        'A wage floor set near the competitive wage can raise employment in a monopsony because the firm faces a flat marginal factor cost up to the new supply intersection.',
        laborMarketFigure('Intensive Micro Graph 5. Monopsony and Minimum Wage', 'Wmin is set at the competitive wage, flattening the firm’s marginal factor cost over part of the range.')
      ),
      makeQuestion(
        'Based on the production table shown, which of the following terms of trade could both producers accept if they specialize according to comparative advantage?',
        ['1 pizza for 2 salads', '1 pizza for 1 salad', '1 pizza for 0.25 salad', '1 pizza for 4 salads', 'No mutually beneficial terms of trade exist'],
        1,
        'The mutually beneficial terms of trade must lie between the two producers’ opportunity costs. In this variant, a 1-for-1 trade falls between them.',
        compAdvTable('Intensive Micro Graph 6. Production Possibilities Table', compData)
      ),
      makeQuestion(
        'In the voucher graph shown, the government gives consumers a per-unit voucher. Which change is most likely at the new equilibrium?',
        ['Sellers receive a lower price and quantity falls.', 'Sellers receive a higher price and quantity rises.', 'The market price falls for both buyers and sellers.', 'Producer surplus falls because demand shifts right.', 'The subsidy only changes consumer surplus, not producer surplus.'],
        1,
        'A consumer voucher shifts effective demand right, typically raising the seller-received price and increasing market quantity.',
        voucherGraphFigure('Intensive Micro Graph 7. Consumer Voucher', 'Demand shifts right from D1 to D2 because consumers receive a per-unit voucher.')
      ),
      makeQuestion(
        'In the market shown, a binding price floor Pf is imposed above equilibrium. Which quantity determines the number of units actually sold?',
        ['Quantity supplied at Pf, because sellers choose output.', 'Quantity demanded at Pf, because buyers are on the short side of the market.', 'The average of quantity supplied and quantity demanded at Pf.', 'The original equilibrium quantity, because floors only affect price.', 'Zero, because any binding floor eliminates exchange.'],
        1,
        'With a binding price floor, the short side of the market is buyers, so the quantity actually exchanged equals quantity demanded at the floor price.',
        priceFloorFigure('Intensive Micro Graph 8. Binding Price Floor', 'Pf is above equilibrium, creating excess supply.')
      ),
      makeQuestion(
        'On the demand graph shown, the price falls from point A to point B. Which statement is most accurate about this change?',
        ['It is a rightward shift of demand caused by more buyers.', 'It is a movement along the demand curve and quantity demanded rises.', 'It is a decrease in demand because price fell.', 'It is a movement along supply because price changed.', 'It is an increase in demand caused by lower income.'],
        1,
        'A change in the good’s own price causes movement along the demand curve, not a shift in demand.',
        demandMovementStimulus()
      ),
      makeQuestion(
        'On the supply graph shown, the market price rises from $4 to $8. Which outcome is consistent with a movement along S1?',
        ['Quantity supplied rises from 8 units to 30 units.', 'Supply shifts right because price rises.', 'Quantity supplied falls because producers face higher opportunity cost.', 'Supply shifts left because fewer sellers enter.', 'No change occurs because price changes do not affect supply decisions.'],
        0,
        'A higher price leads to a movement along the supply curve, increasing quantity supplied from 8 to 30 in this figure.',
        supplyMovementStimulus()
      )
    ];
  }

  function macroTextQuestions(index) {
    const tradeCases = [
      ['Country A can produce either 12 tons of wheat or 6 tons of steel, while Country B can produce either 8 tons of wheat or 8 tons of steel.', 'Country A has comparative advantage in wheat and Country B in steel.'],
      ['Nation R can produce either 18 tablets or 9 routers, while Nation S can produce either 10 tablets or 10 routers.', 'Nation R has comparative advantage in tablets and Nation S in routers.'],
      ['Economy X can produce either 20 buses or 10 trains, while Economy Y can produce either 12 buses or 12 trains.', 'Economy X has comparative advantage in buses and Economy Y in trains.'],
      ['Country M can produce either 16 barrels of oil or 8 turbines, while Country N can produce either 10 barrels of oil or 10 turbines.', 'Country M has comparative advantage in oil and Country N in turbines.']
    ];
    const mpcCases = [
      ['0.8', '5'],
      ['0.75', '4'],
      ['0.6', '2.5'],
      ['0.9', '10']
    ];
    const inflationCases = [
      ['7 percent and nominal wages rise by 5 percent', 'falls by 2 percent'],
      ['4 percent and nominal wages rise by 1 percent', 'falls by 3 percent'],
      ['6 percent and nominal interest is 9 percent', 'is 3 percent'],
      ['3 percent and the nominal interest rate is 1 percent', 'is negative 2 percent']
    ];
    const accountCases = [
      'a foreign firm builds a new factory in the domestic economy',
      'a domestic pension fund purchases newly issued foreign government bonds',
      'a domestic company receives dividend income from foreign investments',
      'foreign tourists spend more money on domestic hotels'
    ];

    return [
      makeQuestion(
        tradeCases[index][0] + ' Which statement is correct?',
        [tradeCases[index][1], 'Both producers have comparative advantage in the same good.', 'Neither country should specialize because both have absolute advantage.', 'Terms of trade cannot make both countries better off.', 'Comparative advantage depends only on absolute productivity.'],
        0,
        'Comparative advantage depends on opportunity cost, not absolute productivity. The statement in choice A matches the opportunity-cost calculation for this variant.'
      ),
      makeQuestion(
        'If autonomous spending increases by $20 billion and the marginal propensity to consume is ' + mpcCases[index][0] + ', what is the maximum change in equilibrium real GDP?',
        ['$' + (20 * Number(mpcCases[index][1])) + ' billion', '$' + (20 + Number(mpcCases[index][1])) + ' billion', '$20 billion', '$' + (20 / Number(mpcCases[index][1])) + ' billion', '$' + ((Number(mpcCases[index][1]) - 1) * 20) + ' billion'],
        0,
        'The spending multiplier equals 1 / (1 - MPC), so the total change in equilibrium GDP equals the initial spending change multiplied by that multiplier.'
      ),
      makeQuestion(
        'A central bank raises the required reserve ratio while banks initially hold no excess reserves. Which of the following is most likely in the short run?',
        ['The money multiplier rises and the money supply expands.', 'The money multiplier falls and the money supply contracts.', 'The money multiplier is unchanged but bond prices rise.', 'The real interest rate must fall because reserves become scarce.', 'Open-market purchases are required for any effect on the money supply.'],
        1,
        'A higher required reserve ratio lowers the money multiplier and contracts the potential money supply when banks have no excess reserves.'
      ),
      makeQuestion(
        'Suppose expected inflation is 2 percent and the nominal interest rate is 6 percent. Which statement is correct?',
        ['The real interest rate is 8 percent.', 'The real interest rate is 4 percent.', 'The real interest rate is 2 percent.', 'The nominal rate must equal the real rate in the long run.', 'The real interest rate cannot be calculated without GDP data.'],
        1,
        'The approximate Fisher equation gives real interest rate = nominal interest rate minus expected inflation.'
      ),
      makeQuestion(
        'If the central bank unexpectedly sells bonds on the open market, which combination is most likely immediately after the sale?',
        ['Bond prices rise and market interest rates fall.', 'Bond prices fall and market interest rates rise.', 'Bond prices rise and reserves fall.', 'Bond prices fall and reserves rise.', 'Both bond prices and market interest rates rise.'],
        1,
        'When the central bank sells bonds, reserves are withdrawn from the banking system, bond prices fall, and market interest rates rise.'
      ),
      makeQuestion(
        'Which of the following is the clearest example of an automatic stabilizer?',
        ['Congress passes a new infrastructure bill during a recession.', 'The central bank lowers the policy rate during a recession.', 'Tax revenues fall automatically as household incomes decline.', 'The treasury sells bonds to finance a budget deficit.', 'Parliament votes to raise transfer payments next year.'],
        2,
        'Automatic stabilizers operate without new legislative action; falling tax collections during a downturn is the classic example.'
      ),
      makeQuestion(
        'In a large open economy with flexible exchange rates, expansionary fiscal policy is most likely to reduce net exports because it',
        ['raises domestic saving and causes currency depreciation', 'raises domestic interest rates and causes currency appreciation', 'lowers aggregate demand and reduces imports', 'lowers foreign demand for domestic exports', 'shifts short-run aggregate supply left'],
        1,
        'Expansionary fiscal policy can raise interest rates, attract foreign capital, appreciate the currency, and reduce net exports.'
      ),
      makeQuestion(
        'Which transaction is most likely recorded as a credit in the domestic financial account?',
        [accountCases[index], 'domestic households import more consumer electronics', 'the government pays interest on previously issued foreign-held bonds', 'a domestic resident buys a foreign mutual fund', 'a domestic importer buys oil from abroad'],
        0,
        'A financial-account credit occurs when foreign funds flow into domestic assets, such as a foreign firm building a factory domestically.'
      ),
      makeQuestion(
        'Which policy is most likely to increase long-run economic growth rather than merely increase short-run aggregate demand?',
        ['A one-time transfer payment to households', 'A temporary reduction in sales taxes', 'A permanent increase in spending on worker training and infrastructure', 'An emergency open-market purchase program during a recession', 'A temporary public-works payroll subsidy'],
        2,
        'Policies that raise human capital, infrastructure, or productivity shift long-run aggregate supply and support long-run growth.'
      ),
      makeQuestion(
        'If inflation is ' + inflationCases[index][0] + ', then the purchasing power of nominal income ' + inflationCases[index][1] + '. Which principle explains this outcome?',
        ['Nominal variables are always more relevant than real variables.', 'Real purchasing power depends on income adjusted for changes in the price level.', 'Inflation only affects borrowers and lenders.', 'Purchasing power changes only when the money supply changes.', 'Nominal wages fully determine real GDP.'],
        1,
        'Purchasing power depends on real, not nominal, income, so nominal gains smaller than inflation reduce real purchasing power.'
      )
    ];
  }

  function microTextQuestions(index) {
    const utilityCases = [
      ['MUx/Px = 12/4 and MUy/Py = 9/3', 'the consumer is already maximizing utility'],
      ['MUx/Px = 10/5 and MUy/Py = 12/3', 'the consumer should buy less X and more Y'],
      ['MUx/Px = 18/6 and MUy/Py = 8/4', 'the consumer should buy more X and less Y'],
      ['MUx/Px = 14/7 and MUy/Py = 15/5', 'the consumer should buy less X and more Y']
    ];
    const elasticityCases = [
      ['price falls by 10 percent and quantity demanded rises by 25 percent', 'total revenue rises'],
      ['price rises by 8 percent and quantity demanded falls by 20 percent', 'total revenue falls'],
      ['price falls by 5 percent and quantity demanded rises by 4 percent', 'total revenue falls'],
      ['price rises by 12 percent and quantity demanded falls by 6 percent', 'total revenue rises']
    ];

    return [
      makeQuestion(
        'Suppose ' + utilityCases[index][0] + '. At the current bundle, which statement is correct?',
        [utilityCases[index][1], 'The consumer must buy equal quantities of both goods.', 'The consumer is maximizing utility only if total spending is zero.', 'Marginal utility must be equal for both goods to maximize utility.', 'The budget constraint is irrelevant because utility per dollar is equalized by income alone.'],
        0,
        'Utility maximization requires equal marginal utility per dollar spent across goods. The stated comparison identifies the correct direction of substitution.'
      ),
      makeQuestion(
        'If a worker’s marginal product falls as more workers are hired while the output price stays constant, which statement is correct?',
        ['Marginal revenue product rises because total output is higher.', 'Marginal revenue product eventually falls because marginal product falls.', 'The wage must fall in a perfectly competitive labor market.', 'Average product must always fall before marginal product falls.', 'The firm should hire labor until marginal product is zero.'],
        1,
        'With a constant output price, marginal revenue product moves with marginal product, so diminishing marginal product lowers MRP.'
      ),
      makeQuestion(
        'Which relationship among short-run cost curves for a competitive firm is always true?',
        ['When MC is below ATC, ATC is rising.', 'When MC equals ATC, ATC is at its minimum.', 'AVC can never be below MC.', 'ATC equals AVC whenever fixed cost is positive.', 'MC intersects AVC at AVC’s maximum.'],
        1,
        'Marginal cost pulls averages toward it, so MC intersects ATC and AVC at each curve’s minimum point.'
      ),
      makeQuestion(
        'If firms in a perfectly competitive constant-cost industry are earning positive economic profit in the short run, what is most likely in the long run?',
        ['Industry supply shifts left and price rises further.', 'New firms enter, industry supply shifts right, and price falls toward minimum ATC.', 'Existing firms collude to preserve profit.', 'Demand shifts left until firms shut down permanently.', 'Marginal cost falls to zero for all firms.'],
        1,
        'Positive economic profit attracts entry in long-run perfect competition, shifting supply right and driving price toward minimum ATC.'
      ),
      makeQuestion(
        'A profit-maximizing single-price monopolist will never choose a quantity at which',
        ['demand is elastic', 'marginal revenue is positive', 'marginal cost exceeds average total cost', 'marginal revenue is negative', 'price exceeds marginal cost'],
        3,
        'A monopolist that produced where marginal revenue was negative could increase profit by reducing output, so the optimum never occurs there.'
      ),
      makeQuestion(
        'If the cross-price elasticity of demand between two goods is negative, the two goods are most likely',
        ['substitutes, so a price increase for one raises demand for the other', 'complements, so a price increase for one lowers demand for the other', 'normal goods consumed by high-income households only', 'inferior goods consumed together', 'public goods with nonrival consumption'],
        1,
        'A negative cross-price elasticity indicates complementary goods: when one becomes more expensive, demand for the other falls.'
      ),
      makeQuestion(
        'Which good is most likely to be underprovided in an unregulated private market because of the free-rider problem?',
        ['A private tutoring service', 'A public flood-control levee', 'A restaurant meal', 'A branded smartphone', 'An airline seat'],
        1,
        'Nonexcludable, nonrival goods like flood-control infrastructure are vulnerable to free riding and tend to be underprovided privately.'
      ),
      makeQuestion(
        'Which tax system is most likely progressive?',
        ['Everyone pays 8 percent of income.', 'Everyone pays a flat $500 fee.', 'Higher income brackets face higher marginal tax rates.', 'The tax rate falls as income rises.', 'Consumers pay the same per-unit excise tax on gasoline.'],
        2,
        'A progressive tax imposes a higher marginal rate on higher-income brackets.'
      ),
      makeQuestion(
        'If the price elasticity of demand for a good is highly elastic over the relevant range, then ' + elasticityCases[index][0] + '. Which statement is correct?',
        [elasticityCases[index][1], 'total revenue is unchanged because expenditure equals revenue', 'producer surplus must fall regardless of the market structure', 'consumer surplus must become negative', 'the law of demand is violated'],
        0,
        'With elastic demand, quantity responds proportionally more than price, so total revenue moves opposite the price change in the way described in choice A.'
      ),
      makeQuestion(
        'If a good is inferior and its price falls, which combination best describes the change in quantity demanded?',
        ['Income effect and substitution effect both reduce quantity demanded.', 'Substitution effect increases quantity demanded, while income effect reduces it.', 'Income effect increases quantity demanded, while substitution effect reduces it.', 'Both effects increase quantity demanded for any inferior good.', 'Only the income effect matters because the good is inferior.'],
        1,
        'For an inferior good, a lower price creates a positive substitution effect but a negative income effect; the net result depends on their relative strength.'
      )
    ];
  }

  function buildIntensiveSets() {
    const sets = [];
    for (let index = 0; index < 4; index += 1) {
      const macroGraph = macroGraphQuestions(index);
      const microGraph = microGraphQuestions(index);
      const macroText = macroTextQuestions(index);
      const microText = microTextQuestions(index);
      const mc = [];

      for (let i = 0; i < 10; i += 1) {
        mc.push(macroGraph[i], microGraph[i], macroText[i], microText[i]);
      }

      sets.push({
        id: `econ_i${index + 1}`,
        title: `AP Economics Intensive Set ${index + 1}`,
        cardLabel: `I${index + 1}`,
        badge: 'INTENSIVE MCQ',
        description: '40 original AP-style MCQs · all macro + micro units · 20 graph/figure items · hardest mix',
        mcTime: 50,
        frqTime: 0,
        mc,
        frq: []
      });
    }
    return sets;
  }

  window.EconStimuli = {
    decorateQuestion,
    decorateFrq
  };

  window.AP_ECON_INTENSIVE_SETS = buildIntensiveSets();

  if (typeof render === 'function') {
    render();
  }
})();
