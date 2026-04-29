/**
 * RhoPhi Holdings — Charts Module
 * Lightweight SVG-based chart renderer (no external deps)
 */

window.RhoPhiCharts = {

  // Profit/Loss sparkline SVG
  sparkline(data, opts = {}) {
    const w = opts.width || 200;
    const h = opts.height || 60;
    const pad = 6;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;

    const xs = data.map((_, i) => pad + (i / (data.length - 1)) * (w - pad * 2));
    const ys = data.map(v => h - pad - ((v - min) / range) * (h - pad * 2));

    const polyline = xs.map((x, i) => `${x},${ys[i]}`).join(' ');
    const areaPath = `M${xs[0]},${h - pad} ` +
      xs.map((x, i) => `L${x},${ys[i]}`).join(' ') +
      ` L${xs[xs.length - 1]},${h - pad} Z`;

    const lastVal = data[data.length - 1];
    const firstVal = data[0];
    const isUp = lastVal >= firstVal;
    const color = isUp ? '#c9a84c' : '#e05252';
    const areaColor = isUp ? 'rgba(201,168,76,0.15)' : 'rgba(224,82,82,0.12)';

    // Zero line
    const zeroY = h - pad - ((0 - min) / range) * (h - pad * 2);
    const zeroLine = (min < 0 && max > 0)
      ? `<line x1="${pad}" y1="${zeroY}" x2="${w - pad}" y2="${zeroY}" stroke="rgba(255,255,255,0.15)" stroke-width="1" stroke-dasharray="3,3"/>`
      : '';

    return `
      <svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="overflow:visible">
        <defs>
          <linearGradient id="sg-${opts.id}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="${color}" stop-opacity="0.3"/>
            <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
          </linearGradient>
        </defs>
        ${zeroLine}
        <path d="${areaPath}" fill="url(#sg-${opts.id})"/>
        <polyline points="${polyline}" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
        <circle cx="${xs[xs.length - 1]}" cy="${ys[ys.length - 1]}" r="3" fill="${color}"/>
      </svg>`;
  },

  // Bar chart for market growth comparison
  growthBar(value, max, opts = {}) {
    const w = opts.width || 160;
    const h = 8;
    const pct = Math.min(value / max, 1);
    const filled = pct * w;
    return `
      <svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="${w}" height="${h}" rx="4" fill="rgba(255,255,255,0.07)"/>
        <rect x="0" y="0" width="${filled}" height="${h}" rx="4" fill="url(#growthGrad)"/>
        <defs>
          <linearGradient id="growthGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#8b6914"/>
            <stop offset="100%" stop-color="#f0c040"/>
          </linearGradient>
        </defs>
      </svg>`;
  },

  // Donut for share availability
  donut(available, total, opts = {}) {
    const r = 28;
    const cx = 36;
    const cy = 36;
    const circ = 2 * Math.PI * r;
    const pct = available / total;
    const dash = pct * circ;
    const id = opts.id || 'donut';
    return `
      <svg viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="dg-${id}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#c9a84c"/>
            <stop offset="100%" stop-color="#f0e080"/>
          </linearGradient>
        </defs>
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="8"/>
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="none"
          stroke="url(#dg-${id})" stroke-width="8"
          stroke-dasharray="${dash} ${circ - dash}"
          stroke-dashoffset="${circ * 0.25}"
          stroke-linecap="round"/>
        <text x="${cx}" y="${cy + 5}" text-anchor="middle" fill="#c9a84c"
          font-family="'Cinzel',serif" font-size="11" font-weight="600">
          ${Math.round(pct * 100)}%
        </text>
      </svg>`;
  },

  // Total AUM gauge arc
  gauge(value, max) {
    const r = 70;
    const cx = 90;
    const cy = 90;
    const startAngle = -210;
    const endAngle = 30;
    const totalArc = endAngle - startAngle;
    const pct = Math.min(value / max, 1);
    const fillAngle = startAngle + pct * totalArc;

    function polarToXY(angleDeg, radius) {
      const rad = (angleDeg * Math.PI) / 180;
      return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
    }

    function arcPath(a1, a2, r) {
      const s = polarToXY(a1, r);
      const e = polarToXY(a2, r);
      const large = (a2 - a1 > 180) ? 1 : 0;
      return `M${s.x},${s.y} A${r},${r} 0 ${large} 1 ${e.x},${e.y}`;
    }

    return `
      <svg viewBox="0 0 180 110" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#6b4c10"/>
            <stop offset="50%" stop-color="#c9a84c"/>
            <stop offset="100%" stop-color="#f0e080"/>
          </linearGradient>
        </defs>
        <path d="${arcPath(startAngle, endAngle, r)}" fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="12" stroke-linecap="round"/>
        <path d="${arcPath(startAngle, fillAngle, r)}" fill="none" stroke="url(#gaugeGrad)" stroke-width="12" stroke-linecap="round"/>
        <text x="${cx}" y="${cy - 10}" text-anchor="middle" fill="#c9a84c"
          font-family="'Cinzel',serif" font-size="22" font-weight="700">£${value}M</text>
        <text x="${cx}" y="${cy + 12}" text-anchor="middle" fill="rgba(255,255,255,0.45)"
          font-family="'DM Sans',sans-serif" font-size="10" letter-spacing="2">TOTAL AUM</text>
      </svg>`;
  }
};
