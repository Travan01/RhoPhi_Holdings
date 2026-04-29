/**
 * ═══════════════════════════════════════════════════
 *  RHOPHI HOLDINGS — PORTFOLIO DATA
 *  Edit this file to update all company data on the site.
 *
 *  LOGO INSTRUCTIONS:
 *  Place each company logo in: assets/logos/
 *  Name the file exactly as specified in the `logo` field.
 *  Supported formats: .png, .jpg, .svg, .webp
 *
 *  RhoPhi logo: assets/logos/rhophi-logo.png
 * ═══════════════════════════════════════════════════
 */

const RHOPHI_PORTFOLIO = [
  {
    id: "rp-aero",
    name: "RhoPhi Aerospace",
    sector: "Aerospace & Defence",
    jurisdiction: "UK",
    logo: "assets/logos/rp-aero.png",
    accentColor: "#C9A84C",
    description: "Advanced UAV systems, propulsion R&D, and autonomous flight platforms. Core flagship of the RhoPhi engineering division, developing next-generation drone technology for civil and defence markets.",
    valuation: "£4.2M",
    sharesAvailable: "15,000,000",
    projectedGrowth: "+34% by 2027",
    performanceIndex: 87.4,
    performanceTrend: "up",
    // Profit/Loss: labels = years, data = £M (negative = loss)
    plData: {
      labels: ["2020", "2021", "2022", "2023", "2024"],
      data: [-0.8, -0.4, 0.2, 0.9, 1.6]
    },
    // Market growth projection: labels = years, data = % growth
    growthData: {
      labels: ["2024", "2025", "2026", "2027", "2028"],
      data: [12, 18, 25, 34, 42]
    }
  },
  {
    id: "hexameridian",
    name: "Hexameridian City",
    sector: "Real Estate & Urban Dev.",
    jurisdiction: "GH",
    logo: "assets/logos/hexameridian.png",
    accentColor: "#7B61FF",
    description: "A self-sustaining Afrofuturist mega-city planned for the banks of Volta Lake, Ghana. Incorporating smart infrastructure, renewable energy systems, and a new model for African urban living at civilisation scale.",
    valuation: "£850K",
    sharesAvailable: "50,000,000",
    projectedGrowth: "+120% by 2030",
    performanceIndex: 72.1,
    performanceTrend: "up",
    plData: {
      labels: ["2022", "2023", "2024", "2025", "2026"],
      data: [-1.2, -0.9, -0.3, 0.8, 2.4]
    },
    growthData: {
      labels: ["2025", "2026", "2027", "2028", "2030"],
      data: [20, 40, 65, 90, 120]
    }
  },
  {
    id: "ctn-tech",
    name: "CTN Technologies",
    sector: "UAV Consultancy & Tech",
    jurisdiction: "UK",
    logo: "assets/logos/ctn-tech.png",
    accentColor: "#00C9A7",
    description: "UAV consultancy services, drone operations, and bespoke technology solutions. Specialises in surveying, inspection, and autonomous mission planning for commercial clients across the UK.",
    valuation: "£1.1M",
    sharesAvailable: "8,000,000",
    projectedGrowth: "+28% by 2026",
    performanceIndex: 79.3,
    performanceTrend: "up",
    plData: {
      labels: ["2021", "2022", "2023", "2024", "2025"],
      data: [-0.2, 0.1, 0.3, 0.6, 0.9]
    },
    growthData: {
      labels: ["2024", "2025", "2026", "2027", "2028"],
      data: [10, 16, 28, 36, 44]
    }
  },
  {
    id: "travan-software",
    name: "Travan Software",
    sector: "Engineering Software",
    jurisdiction: "UK",
    logo: "assets/logos/travan-software.png",
    accentColor: "#FF6B6B",
    description: "Production-grade engineering software including Travan GCS (ground control station), Travan UAV Sim, Travan Electronics Lab, and RocketForge. Targeting professional aerospace and UAV engineering markets globally.",
    valuation: "£2.7M",
    sharesAvailable: "20,000,000",
    projectedGrowth: "+55% by 2027",
    performanceIndex: 91.0,
    performanceTrend: "up",
    plData: {
      labels: ["2022", "2023", "2024", "2025", "2026"],
      data: [-0.5, 0.0, 0.7, 1.4, 2.2]
    },
    growthData: {
      labels: ["2024", "2025", "2026", "2027", "2028"],
      data: [20, 32, 45, 55, 68]
    }
  },
  {
    id: "rp-energy",
    name: "RhoPhi Energy",
    sector: "Renewable Energy",
    jurisdiction: "GH",
    logo: "assets/logos/rp-energy.png",
    accentColor: "#F4A261",
    description: "Renewable energy solutions targeting sub-Saharan Africa. Solar micro-grids, battery storage systems, and off-grid electrification projects serving rural and peri-urban communities in Ghana and the wider region.",
    valuation: "£3.0M",
    sharesAvailable: "25,000,000",
    projectedGrowth: "+47% by 2028",
    performanceIndex: 68.5,
    performanceTrend: "up",
    plData: {
      labels: ["2021", "2022", "2023", "2024", "2025"],
      data: [-1.0, -0.6, 0.1, 0.5, 1.1]
    },
    growthData: {
      labels: ["2024", "2025", "2026", "2027", "2028"],
      data: [8, 18, 30, 40, 47]
    }
  },
  {
    id: "tree-marketplace",
    name: "TREE Marketplace",
    sector: "AgriTech & E-Commerce",
    jurisdiction: "GH",
    logo: "assets/logos/tree-marketplace.png",
    accentColor: "#52B788",
    description: "Farm-to-retail marketplace connecting farmers, retailers, and logistics across Nigeria and Africa. Role-specific dashboards for farmers, retailers, drivers, and admins. Built on React 18 + Firebase.",
    valuation: "£0.9M",
    sharesAvailable: "12,000,000",
    projectedGrowth: "+61% by 2027",
    performanceIndex: 64.2,
    performanceTrend: "up",
    plData: {
      labels: ["2023", "2024", "2025", "2026", "2027"],
      data: [-0.3, 0.1, 0.4, 0.8, 1.3]
    },
    growthData: {
      labels: ["2024", "2025", "2026", "2027", "2028"],
      data: [15, 28, 44, 61, 78]
    }
  },
  {
    id: "rp-realty",
    name: "RhoPhi Realty",
    sector: "Property & Real Estate",
    jurisdiction: "UK/GH",
    logo: "assets/logos/rp-realty.png",
    accentColor: "#E9C46A",
    description: "Dual-jurisdiction property holding and development arm. Acquiring strategic real estate assets in London and Accra, with a focus on mixed-use developments and long-term wealth preservation through the RhoPhi Trust structure.",
    valuation: "£5.5M",
    sharesAvailable: "30,000,000",
    projectedGrowth: "+22% by 2027",
    performanceIndex: 75.8,
    performanceTrend: "stable",
    plData: {
      labels: ["2020", "2021", "2022", "2023", "2024"],
      data: [0.4, 0.6, 0.8, 1.1, 1.4]
    },
    growthData: {
      labels: ["2024", "2025", "2026", "2027", "2028"],
      data: [5, 10, 15, 22, 28]
    }
  },
  {
    id: "rp-ai",
    name: "RhoPhi AI Labs",
    sector: "Artificial Intelligence",
    jurisdiction: "UK",
    logo: "assets/logos/rp-ai.png",
    accentColor: "#A8DADC",
    description: "Applied AI research and product development. Building intelligent systems for aerospace, logistics, and urban infrastructure. Long-term R&D pipeline feeding into all RhoPhi portfolio companies.",
    valuation: "£1.8M",
    sharesAvailable: "18,000,000",
    projectedGrowth: "+89% by 2028",
    performanceIndex: 82.6,
    performanceTrend: "up",
    plData: {
      labels: ["2023", "2024", "2025", "2026", "2027"],
      data: [-0.8, -0.2, 0.5, 1.3, 2.6]
    },
    growthData: {
      labels: ["2024", "2025", "2026", "2027", "2028"],
      data: [18, 34, 54, 72, 89]
    }
  },
  {
    id: "rp-logistics",
    name: "RhoPhi Logistics",
    sector: "Drone Delivery & Logistics",
    jurisdiction: "GH",
    logo: "assets/logos/rp-logistics.png",
    accentColor: "#E76F51",
    description: "Last-mile drone delivery and autonomous logistics solutions for West Africa. Targeting medical supply chains, e-commerce fulfilment, and humanitarian aid distribution in difficult-to-reach terrain.",
    valuation: "£2.1M",
    sharesAvailable: "22,000,000",
    projectedGrowth: "+73% by 2028",
    performanceIndex: 70.4,
    performanceTrend: "up",
    plData: {
      labels: ["2023", "2024", "2025", "2026", "2027"],
      data: [-0.6, -0.1, 0.4, 1.0, 1.9]
    },
    growthData: {
      labels: ["2024", "2025", "2026", "2027", "2028"],
      data: [12, 26, 44, 60, 73]
    }
  },
  {
    id: "rp-capital",
    name: "RhoPhi Capital",
    sector: "Investment & Finance",
    jurisdiction: "UK",
    logo: "assets/logos/rp-capital.png",
    accentColor: "#C9A84C",
    description: "The financial and investment arm of RhoPhi Holdings. Manages trust assets, equity stakes, and strategic investments across all portfolio companies and third-party opportunities. The backbone of the RhoPhi wealth structure.",
    valuation: "£7.3M",
    sharesAvailable: "40,000,000",
    projectedGrowth: "+31% by 2027",
    performanceIndex: 88.9,
    performanceTrend: "up",
    plData: {
      labels: ["2020", "2021", "2022", "2023", "2024"],
      data: [0.9, 1.2, 1.6, 2.1, 2.8]
    },
    growthData: {
      labels: ["2024", "2025", "2026", "2027", "2028"],
      data: [8, 14, 22, 31, 39]
    }
  }
];

// ── Site-wide config ──────────────────────────────────────────────────────────
const RHOPHI_CONFIG = {
  companyName: "RhoPhi Holdings",
  tagline: "Building civilisation-scale assets across aerospace, technology, real estate & innovation.",
  founded: "2024",
  jurisdictions: ["United Kingdom", "Republic of Ghana"],
  rhoPhiLogo: "assets/logos/rhophi-logo.png",
  currency: "£"
};
