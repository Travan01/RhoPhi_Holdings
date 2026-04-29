# RhoPhi Holdings — Website

## File Structure

```
rhophi/
├── index.html              ← Main site (open this in your browser)
├── css/
│   └── style.css           ← All styling (dark luxury gold theme)
├── js/
│   ├── index.js            ← ★ YOUR DATA FILE — edit this
│   └── charts.js           ← SVG chart renderer (do not edit)
└── assets/
    └── logos/
        ├── rhophi.png      ← RhoPhi Holdings logo
        ├── ctn.png         ← CTN Technologies
        ├── hexameridian.png
        ├── rp-aerospace.png
        ├── rp-energy.png
        ├── rp-capital.png
        ├── tree.png
        ├── rp-realty.png
        ├── rp-labs.png
        ├── rp-defence.png
        └── rp-aviation.png
```

---

## How to Use

### 1. Add Logos
Place your logo files in `assets/logos/`. The filename must match the `logo:` field in `js/index.js`.

- Supported formats: `.png`, `.jpg`, `.svg`, `.webp`
- Recommended size: 200×200px minimum, square crop
- If a logo is missing, the site automatically shows letter initials instead

### 2. Edit Company Data (`js/index.js`)

Open `js/index.js` and find `window.RHOPHI_CONFIG`. You can update:

**Holding company info:**
```js
holding: {
  name: "RhoPhi Holdings",
  tagline: "Your tagline here",
  totalAUM: 142.7,   // £M — your total assets under management
  ...
}
```

**Each portfolio company:**
```js
{
  name: "Company Name",
  sector: "Sector",
  description: "One paragraph about this company.",
  logo: "assets/logos/filename.png",
  valuation: 10.0,                    // £M
  shares: { total: 10000000, available: 2500000 },
  profitLoss: [-0.5, 0.1, 0.4, 0.8, 1.2, 1.8],  // £M, last 6 quarters
  marketGrowthRate: 22.5,             // % annual projected
  tags: ["Tag1", "Tag2"],
}
```

### 3. Open the Site

Just double-click `index.html` to open in any browser. No server needed.

---

## Features

- **10 company cards** with P&L sparkline graphs, growth bars, share donut charts
- **Click any card** to open a detailed modal with full chart
- **Trust Structure section** based on your handwritten notes (4-cell grid)
- **Team section** showing 4 roles needed (with filled/open status)
- **Responsive** — works on mobile
- **Logo fallback** — shows initials if no logo is placed yet
- **Dark luxury aesthetic** — Cinzel serif + DM Sans + gold palette

---

## Customisation Tips

- **Add/remove companies**: Copy/paste a company block in `js/index.js`. The grid auto-adjusts.
- **Change dividend rate**: `cfg.structure.generalAssets.dividendRate` (displayed in both KPI and structure section)
- **Team roles**: Edit the `team:` array — set `filled: true` to show gold indicator
- **Colour palette**: All colours are CSS variables at the top of `css/style.css`
