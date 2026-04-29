/**
 * ============================================================
 *  RHOPHI HOLDINGS — PORTFOLIO DATA INDEX
 *  Edit this file to configure your portfolio companies.
 *  Place logo files in: assets/logos/
 * ============================================================
 */

window.RHOPHI_CONFIG = {

  // ── HOLDING COMPANY ─────────────────────────────────────
  holding: {
    name: "RhoPhi Holdings",
    tagline: "Engineering Tomorrow's Legacy",
    description: "A dual-jurisdiction trust-holding structure spanning the UK and Ghana, architecting long-term value across aerospace, technology, energy, and real estate sectors.",
    logo: "assets/logos/rhophi.png",   // ← place your logo here
    founded: "2024",
    jurisdictions: ["United Kingdom", "Ghana"],
    totalAUM: 142.7,   // £M — update as needed
    totalCompanies: 10,
  },

  // ── STRUCTURE (from your notes) ──────────────────────────
  structure: {
    generalAssets: {
      dividendRate: 20,  // % to founders
      managedBy: "Main RhoPhi Trust",
    },
    customerAssets: {
      managedBy: "Individual Customer Trusts",
    },
  },

  // ── PORTFOLIO COMPANIES ──────────────────────────────────
  // Each entry: fill in your real data. Profit/loss history = last 6 quarters.
  companies: [
    {
      id: "ctn",
      name: "CTN Technologies",
      sector: "UAV & Drone Engineering",
      description: "Specialist UAV consultancy and drone systems integrator, delivering bespoke autonomous aerial platforms for commercial and industrial applications across West Africa and the UK.",
      logo: "assets/logos/ctn.png",           // ← place logo here
      valuation: 3.2,                          // £M
      shares: { total: 10000000, available: 2500000 },
      profitLoss: [-0.1, 0.2, 0.4, 0.6, 0.9, 1.2 ],  // £M, last 6 quarters
      marketGrowthRate: 18.4,                  // % annual projected
      trend: "up",
      tags: ["Aerospace", "AI", "Hardware"],
    },
    {
      id: "hexameridian",
      name: "Hexameridian City Corp",
      sector: "Urban Development & Infrastructure",
      description: "Afrofuturist mega-city development initiative planned for the banks of Volta Lake, Ghana — a self-sustaining smart city integrating renewable energy, digital governance, and advanced logistics.",
      logo: "assets/logos/hexameridian.png",
      valuation: 50.0,
      shares: { total: 50000000, available: 10000000 },
      profitLoss: [0, 0, -0.5, -1.0, -0.8, 0.5 ],
      marketGrowthRate: 32.1,
      trend: "up",
      tags: ["Real Estate", "Smart City", "Energy"],
    },
    {
      id: "rp-aerospace",
      name: "RhoPhi Aerospace",
      sector: "Aerospace Engineering",
      description: "Engineering consultancy and IP holding company focused on propulsion systems, digital twins, and aerospace simulation tooling — bridging academia and civil aviation.",
      logo: "assets/logos/rp-aerospace.png",
      valuation: 8.5,
      shares: { total: 8000000, available: 2000000 },
      profitLoss: [0.1, 0.3, 0.5, 0.7, 1.1, 1.6 ],
      marketGrowthRate: 14.2,
      trend: "up",
      tags: ["Aerospace", "IP", "R&D"],
    },
    {
      id: "rp-energy",
      name: "RhoPhi Energy",
      sector: "Renewable Energy",
      description: "Renewable energy project developer targeting solar micro-grids and hydroelectric generation across sub-Saharan Africa, with a focus on rural electrification and carbon credit generation.",
      logo: "assets/logos/rp-energy.png",
      valuation: 12.4,
      shares: { total: 15000000, available: 4000000 },
      profitLoss: [-0.3, -0.1, 0.2, 0.6, 1.0, 1.8 ],
      marketGrowthRate: 25.6,
      trend: "up",
      tags: ["Energy", "ESG", "Africa"],
    },
    {
      id: "rp-capital",
      name: "RhoPhi Capital",
      sector: "Investment & Asset Management",
      description: "Private equity and venture arm of RhoPhi Holdings, deploying capital into high-growth technology, aerospace, and infrastructure opportunities across UK and African markets.",
      logo: "assets/logos/rp-capital.png",
      valuation: 22.0,
      shares: { total: 20000000, available: 5000000 },
      profitLoss: [0.5, 0.8, 1.2, 1.5, 2.0, 2.8 ],
      marketGrowthRate: 11.3,
      trend: "up",
      tags: ["Finance", "Venture", "PE"],
    },
    {
      id: "tree-platform",
      name: "TREE Marketplace",
      sector: "AgriTech & E-Commerce",
      description: "Farm-to-retail digital marketplace connecting smallholder farmers, retailers, and logistics drivers across Nigeria and West Africa — reducing food waste and improving farmer income.",
      logo: "assets/logos/tree.png",
      valuation: 4.1,
      shares: { total: 12000000, available: 3500000 },
      profitLoss: [-0.4, -0.2, 0.1, 0.3, 0.5, 0.9 ],
      marketGrowthRate: 29.8,
      trend: "up",
      tags: ["AgriTech", "Marketplace", "Africa"],
    },
    {
      id: "rp-realty",
      name: "RhoPhi Realty",
      sector: "Real Estate",
      description: "Property acquisition and development vehicle targeting premium residential and commercial real estate in London and Accra, building a pan-African and UK property portfolio.",
      logo: "assets/logos/rp-realty.png",
      valuation: 18.5,
      shares: { total: 10000000, available: 2000000 },
      profitLoss: [0.3, 0.6, 0.9, 1.2, 1.6, 2.1 ],
      marketGrowthRate: 8.7,
      trend: "up",
      tags: ["Real Estate", "London", "Accra"],
    },
    {
      id: "rp-labs",
      name: "RhoPhi Labs",
      sector: "Deep Tech & AI",
      description: "R&D and software product studio building production-grade engineering software — from ground control systems and UAV simulators to PCB design IDEs and AI-powered automation tools.",
      logo: "assets/logos/rp-labs.png",
      valuation: 6.8,
      shares: { total: 9000000, available: 2500000 },
      profitLoss: [-0.2, 0.0, 0.3, 0.6, 1.0, 1.5 ],
      marketGrowthRate: 41.0,
      trend: "up",
      tags: ["AI", "Software", "Engineering Tools"],
    },
    {
      id: "rp-defence",
      name: "RhoPhi Defence Systems",
      sector: "Defence & Security Technology",
      description: "Dual-use autonomous systems and defence technology company, developing AI-enabled surveillance drones, counter-UAS solutions, and command-and-control software for security agencies.",
      logo: "assets/logos/rp-defence.png",
      valuation: 9.2,
      shares: { total: 8000000, available: 1500000 },
      profitLoss: [0.0, 0.2, 0.5, 0.8, 1.3, 1.9 ],
      marketGrowthRate: 22.5,
      trend: "up",
      tags: ["Defence", "UAV", "AI"],
    },
    {
      id: "rp-aviation",
      name: "RhoPhi Aviation Services",
      sector: "MRO & Aviation Services",
      description: "Maintenance, repair, and overhaul (MRO) services and aviation consultancy targeting regional airlines and operators in West Africa, leveraging deep technical expertise and regulatory know-how.",
      logo: "assets/logos/rp-aviation.png",
      valuation: 7.0,
      shares: { total: 7000000, available: 1800000 },
      profitLoss: [0.1, 0.2, 0.4, 0.7, 1.0, 1.4 ],
      marketGrowthRate: 13.6,
      trend: "up",
      tags: ["Aviation", "MRO", "Africa"],
    },
  ],

  // ── PEOPLE NEEDED (from your notes) ─────────────────────
  team: [
    { role: "Business Analyst & Marketer", filled: false },
    { role: "CEO & Face of Company",       filled: true  },
    { role: "Solicitors for Trusts",       filled: false },
    { role: "Investment Strategists",      filled: false },
  ],
};
