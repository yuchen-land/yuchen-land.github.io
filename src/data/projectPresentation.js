// Short, presentation-level copy shared by the portfolio cards and the project pages.
// Keyed by project id (see data.js).

export const categories = {1:"Product",11:"Product",10:"Product",3:"Systems",8:"Systems",2:"Creative",7:"Creative"};

export const summaries = {
  1:"AI image, audio and video tools, with product workflows, API integration and cross-team delivery at CyberLink.",
  11:"Creative tools for business, connecting subscription workflows and reusable product experiences.",
  10:"A multilingual costume rental platform, from catalog architecture to reliable releases and daily operations.",
  3:"A Python tool for serial-port throughput testing and data transmission verification on Linux.",
  2:"An artisanal pastry storefront bringing product presentation, ordering and a personal creative practice together.",
  8:"A C assembler that resolves symbols, encodes SIC/XE instructions and generates relocation records.",
  7:"A four-player tabletop learning game connecting physical cards with a bilingual Unity app.",
};

// At-a-glance flow: [stage, name] stops, read left to right.
export const flows = {
  1:[["Build","Editing UI"],["Integrate","AI model APIs"],["Verify","AI-assisted tests in CI/CD"],["Measure","BI reporting"]],
  11:[["Attract","Business landing & SEO"],["Use","AI creative suite"],["Convert","Subscription flow"],["Measure","Multi-source analytics"]],
  10:[["Storefront","Next.js, five languages"],["Catalog","Cached reads, snapshot fallback"],["Data","Neon PostgreSQL"],["Media","Workers & R2"]],
  3:[["Configure","CLI options"],["Control","Serial ports via pyserial"],["Transfer","Sender & receiver"],["Report","Throughput logs"]],
  2:[["Browse","Storefront"],["Order","Cart & checkout"],["Store","Supabase"],["Manage","Admin dashboard"]],
  8:[["Source","Read & parse"],["Pass 1","Assign addresses"],["Pass 2","Resolve & encode"],["Output","Object records"]],
  7:[["Play","Board & cards"],["Scan","QR codes"],["Answer","Unity app questions"],["Review","Scores & replay"]],
};

// One quiet line of evidence, taken from data.js.
export const outcomes = {1:"10M+ creators · delivery cycle 6 → 1 month",10:"Search clicks 42 → 511 in a 28-day comparison"};

export const titles = {10:"Holly World",2:"BonBunny Pastry Studio",3:"Linux Serial Port Test Tool",7:"Clchemy — Learn C++ through play"};


// Layered architecture diagrams for project pages that would otherwise be text only.
// layers read top to bottom; `via` labels the connector coming into that layer.
export const architectures = {
  2: {
    summary: "One Next.js application serves both the shop and its back office, with shared client state and a managed backend.",
    layers: [
      { label: "People", nodes: [["Customers", "Browse, save and order pastries"], ["Shop owner", "Runs the catalog and orders"]] },
      { label: "Interface", via: "Next.js · TypeScript", nodes: [["Storefront", "Glassmorphism UI with Framer Motion"], ["Admin dashboard", "Products, orders and customers"]] },
      { label: "Client logic", via: "Zustand state", nodes: [["Cart & wishlist", "Persistent across visits"], ["Coupons & checkout", "Discounts and a short order flow"], ["Sign-in", "JWT authentication"]] },
      { label: "Backend", via: "Authenticated requests", nodes: [["Supabase", "Data and backend services"]] },
    ],
    note: "Deployed on Vercel. A simplified view of the main parts; see the project journey below for implementation detail.",
  },
};

// A compact map of what was built, shown in the project journey in place of the long
// implementation list (the full notes stay available underneath). [area, one line]
export const buildMaps = {
  10: [
    ["Storefront", "Next.js 16 and React 19, localized in five languages with next-intl"],
    ["Discovery", "Categories, themed collections and search leading to LINE inquiries"],
    ["Data", "Neon PostgreSQL with Drizzle ORM and versioned migrations"],
    ["Media", "Cloudflare R2 storage with scripted WebP processing and validation"],
    ["Delivery", "AI agent harness, 7 CI validators, smoke tests and rollback"],
    ["Growth", "GA4 and Search Console data guiding SEO and AEO work"],
    ["Resilience", "Cached reads, static catalog fallback and a rate-limited media gateway"],
  ],
};

// Three things to take away from each project, shown at the top of its results.
// [figure or keyword, short label] — every figure comes from data.js / projectDocumentation.js.
export const highlights = {
  10: [["5", "languages on one storefront"], ["7", "CI validators guarding each release"], ["12×", "search clicks in a 28-day comparison"]],
  2: [["Shop", "cart, wishlist, coupons and checkout"], ["Admin", "products, orders and customers"], ["Sign-in", "JWT authentication"]],
  3: [["2", "architectures: ARM and x86"], ["3", "serial modes, RS232 to RS485"], ["3", "modules: control, transfer, commands"]],
  8: [["2", "passes: addresses, then encoding"], ["4", "instruction formats supported"], ["4", "object record types generated"]],
  7: [["4", "players around one board"], ["2", "languages in the app"], ["87", "survey responses behind the design"]],
};
