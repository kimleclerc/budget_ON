// =========================================================
// ONTARIO BUDGET 2026 — ENGLISH DATA
// Replace this file on March 25, 2026 after tabling
// Minister of Finance: Peter Bethlenfalvy
// =========================================================

const BUDGET_EN = {
  lang: "en",
  annee: "2026-2027",
  titre: "Ontario Budget 2026",
  titre_complet: "Building Ontario: Budget 2026",
  date_depot: "March 25, 2026",
  ministre: "Peter Bethlenfalvy",
  status: "upcoming", // change to "live" on budget day

  quote: {
    texte: "Ontario's economy is resilient. We will invest in the people and infrastructure that make this province strong.",
    auteur: "Peter Bethlenfalvy",
    titre: "Minister of Finance, Ontario",
  },

  chiffres: [
    { label: "Projected deficit", valeur: "~$18 B", note: "Estimated — subject to confirmation", variation: "Analysis coming March 25", direction: "neutral" },
    { label: "Total budget", valeur: "~$220 B", note: "Estimated — Ontario's largest ever", variation: "Analysis coming March 25", direction: "neutral" },
    { label: "Infrastructure plan", valeur: "TBD", note: "To be confirmed March 25", variation: "Billions expected", direction: "neutral" },
    { label: "GDP growth (2026)", valeur: "~1.0%", note: "Impacted by US tariffs", variation: "Slower than 2025", direction: "down" },
    { label: "Health spending", valeur: "TBD", note: "Largest envelope — analysis pending", variation: "Coming March 25", direction: "neutral" },
    { label: "Housing commitments", valeur: "TBD", note: "1.5M homes target on track?", variation: "Coming March 25", direction: "neutral" },
  ],

  secteurs: [
    {
      id: "health",
      titre: "Health & Long-Term Care",
      depenses: "TBD — largest envelope",
      variation: "Analysis March 25",
      priorite: "high",
      resume: "Independent analysis will be published on March 25 after the budget is tabled. Expect focus on surgical wait times, hospital capacity, long-term care staffing, and mental health funding.",
      points: [
        "Wait time reduction — Ontario's surgical backlog remains a key pressure",
        "Long-term care staffing standards and funding",
        "Mental health and addictions — ongoing commitment post-2019",
        "Home and community care expansion",
        "OHIP+ and pharmacare implications",
      ],
      tags: ["health", "hospitals", "long-term-care", "mental-health", "OHIP"]
    },
    {
      id: "education",
      titre: "Education & Child Care",
      depenses: "TBD",
      variation: "Analysis March 25",
      priorite: "high",
      resume: "Independent analysis will be published on March 25. Watch for school construction funding, child care affordability measures following the federal $10/day agreement, and teacher complement commitments.",
      points: [
        "$10/day child care — federal agreement implementation status",
        "New school construction to address capacity pressures",
        "Special education funding amid rising needs",
        "School board operating funding formula",
        "STEM and trades education investment",
      ],
      tags: ["education", "childcare", "schools", "STEM", "trades"]
    },
    {
      id: "infrastructure",
      titre: "Infrastructure & Transit",
      depenses: "TBD — multi-billion expected",
      variation: "Analysis March 25",
      priorite: "high",
      resume: "Independent analysis will be published on March 25. Ontario's infrastructure plan will likely confirm major transit expansions, highway construction (401, 413, Bradford Bypass) and hospital builds.",
      points: [
        "Highway 413 and Bradford Bypass — status and cost update",
        "Toronto subway expansion (Ontario Line, Eglinton Crosstown)",
        "GO Transit electrification and expansion",
        "Hospital capital builds across the province",
        "State of good repair backlog — roads, bridges, water infrastructure",
      ],
      tags: ["transit", "highways", "GO", "subway", "hospitals", "infrastructure"]
    },
    {
      id: "economy",
      titre: "Economy & Competitiveness",
      depenses: "TBD",
      variation: "Analysis March 25",
      priorite: "high",
      resume: "Independent analysis will be published on March 25. The US tariff context will dominate this section — expect measures to protect Ontario manufacturers, auto sector supports, and business competitiveness investments.",
      points: [
        "US tariff response — auto sector and steel/aluminum",
        "Critical minerals and supply chain investments",
        "Business competitiveness and regulatory reform",
        "Innovation and R&D support",
        "Export market diversification beyond the US",
      ],
      tags: ["economy", "tariffs", "auto", "manufacturing", "minerals", "innovation"]
    },
    {
      id: "housing",
      titre: "Housing & Homelessness",
      depenses: "TBD",
      variation: "Analysis March 25",
      priorite: "high",
      resume: "Independent analysis will be published on March 25. Ontario's 1.5 million homes pledge and the homelessness crisis in major centres will be central. Watch for housing supply measures, rent support and encampment response.",
      points: [
        "1.5 million homes by 2031 — on track or revised?",
        "Affordable housing funding and non-profit support",
        "Homelessness response — encampments, shelter capacity",
        "Municipal housing-enabling legislation updates",
        "First-time buyer supports and land transfer tax",
      ],
      tags: ["housing", "homelessness", "affordable", "renters", "municipalities"]
    },
    {
      id: "environment",
      titre: "Environment & Clean Energy",
      depenses: "TBD",
      variation: "Analysis March 25",
      priorite: "medium",
      resume: "Independent analysis will be published on March 25. Ontario has significant clean energy investments planned — nuclear refurbishments, EV infrastructure, grid modernization and conservation programs.",
      points: [
        "Nuclear refurbishment — Pickering and Bruce",
        "EV charging infrastructure rollout",
        "Electricity grid expansion for electrification demand",
        "Flooding and climate resilience investments",
        "Aggregate and resource extraction regulation",
      ],
      tags: ["environment", "energy", "nuclear", "EV", "climate"]
    },
    {
      id: "justice",
      titre: "Justice & Public Safety",
      depenses: "TBD",
      variation: "Analysis March 25",
      priorite: "medium",
      resume: "Independent analysis will be published on March 25. Expect investments in courthouse modernization, corrections, police services and organized crime response.",
      points: [
        "Court backlog reduction — post-COVID pressure",
        "Correctional services capacity",
        "Police services and gun violence response",
        "Cybersecurity for government systems",
        "Legal aid funding",
      ],
      tags: ["justice", "courts", "police", "corrections", "safety"]
    },
    {
      id: "northern",
      titre: "Northern & Rural Ontario",
      depenses: "TBD",
      variation: "Analysis March 25",
      priorite: "medium",
      resume: "Independent analysis will be published on March 25. Northern Ontario faces unique pressures: forestry crisis, remote health care, infrastructure gaps and Indigenous community services.",
      points: [
        "Forestry sector — US tariff response specific to Ontario",
        "Remote health care access and telemedicine",
        "Northern highway and bridge maintenance",
        "Indigenous community services and infrastructure",
        "Mining and critical minerals in the Ring of Fire",
      ],
      tags: ["northern", "rural", "forestry", "indigenous", "ring-of-fire"]
    },
  ],

  audiences: [
    {
      id: "families",
      titre: "Families",
      priorite: "high",
      resume: "Ontario families are squeezed by the highest cost of living in Canada. The 2026 budget will be judged on child care affordability, housing costs and school conditions.",
      mesures: [
        { label: "$10/day child care progress", valeur: "TBD", note: "Federal agreement status" },
        { label: "Back-to-school funding", valeur: "TBD", note: "Per-student analysis pending" },
        { label: "Housing affordability measures", valeur: "TBD", note: "First-time buyers" },
      ],
      tags: ["families", "childcare", "schools", "housing"]
    },
    {
      id: "seniors",
      titre: "Seniors",
      priorite: "high",
      resume: "Long-term care reform is the defining seniors issue in Ontario post-COVID. The budget will be scrutinized for staffing standards, LTC home construction and home care expansion.",
      mesures: [
        { label: "LTC staffing hours commitment", valeur: "TBD", note: "4 hrs/day standard progress" },
        { label: "New LTC beds", valeur: "TBD", note: "Construction pipeline" },
        { label: "Home care expansion", valeur: "TBD", note: "CCAC successor services" },
      ],
      tags: ["seniors", "long-term-care", "home-care"]
    },
    {
      id: "workers",
      titre: "Workers & Job Seekers",
      priorite: "high",
      resume: "US tariffs are threatening Ontario manufacturing jobs — particularly in the auto sector. Workers will be watching for layoff protection, retraining programs and minimum wage commitments.",
      mesures: [
        { label: "Auto sector protection", valeur: "TBD", note: "Tariff response" },
        { label: "Skills retraining programs", valeur: "TBD", note: "For displaced workers" },
        { label: "Minimum wage 2026", valeur: "TBD", note: "Annual increase pending" },
      ],
      tags: ["workers", "auto", "tariffs", "retraining", "minimum-wage"]
    },
    {
      id: "renters",
      titre: "Renters & Homebuyers",
      priorite: "high",
      resume: "Ontario has the least affordable rental market in Canada. First-time buyers face record prices. The budget will be tested on whether supply measures actually move the needle.",
      mesures: [
        { label: "Affordable housing units", valeur: "TBD", note: "New commitments" },
        { label: "Rent support programs", valeur: "TBD", note: "For low-income renters" },
        { label: "First-time buyer incentives", valeur: "TBD", note: "Land transfer tax relief?" },
      ],
      tags: ["renters", "housing", "affordable", "first-time-buyer"]
    },
    {
      id: "business",
      titre: "Businesses & Employers",
      priorite: "high",
      resume: "Ontario businesses are navigating US tariffs, labour shortages and rising operating costs. The budget's economic package will determine whether Ontario stays competitive.",
      mesures: [
        { label: "Tariff response package", valeur: "TBD", note: "SME support expected" },
        { label: "Business tax environment", valeur: "TBD", note: "Rate analysis pending" },
        { label: "Investment attraction", valeur: "TBD", note: "Critical minerals focus" },
      ],
      tags: ["business", "tariffs", "tax", "investment", "SME"]
    },
    {
      id: "indigenous",
      titre: "Indigenous Communities",
      priorite: "high",
      resume: "Ontario is home to the largest urban Indigenous population in Canada and major First Nations treaty territories. Infrastructure, health services and economic participation are priority areas.",
      mesures: [
        { label: "Community infrastructure", valeur: "TBD", note: "Water, housing, roads" },
        { label: "Health services funding", valeur: "TBD", note: "Remote access priority" },
        { label: "Economic participation", valeur: "TBD", note: "Ring of Fire opportunity" },
      ],
      tags: ["indigenous", "first-nations", "infrastructure", "ring-of-fire"]
    },
  ],

  parties_prenantes: [
    {
      id: "healthcare-orgs",
      titre: "Hospitals & Health Organizations",
      priorite: "high",
      resume: "Ontario's hospital sector is under sustained pressure — aging infrastructure, surgical backlogs and workforce shortages. The budget will signal whether the province is serious about structural reform or continuing stopgap funding.",
      enjeux: [
        "Hospital base funding — is it keeping pace with inflation and volume?",
        "Capital builds: which hospitals get announcements vs. actual shovels?",
        "Surgical wait time funding — new operating room hours or just announcements?",
        "Mental health and addictions — dedicated envelope or folded into general health?",
        "Workforce strategy — recruitment, retention, internationally trained health workers",
      ],
      tags: ["hospitals", "health", "surgery", "mental-health", "workforce"]
    },
    {
      id: "municipalities",
      titre: "Municipalities & AMO",
      priorite: "high",
      resume: "Ontario municipalities are in fiscal crisis — downloading, homelessness costs, housing pressures and infrastructure deficits. The budget will be tested on whether the province materially addresses the municipal fiscal gap.",
      enjeux: [
        "Municipal operating funding — is the provincial contribution growing?",
        "Homelessness and shelter costs — who bears the burden?",
        "Housing-enabling legislation — carrots or sticks for municipalities?",
        "Transit funding formula — GO, TTC, regional transit",
        "Infrastructure transfer payments — adequate for state of good repair?",
      ],
      tags: ["municipalities", "housing", "transit", "infrastructure", "homelessness"]
    },
    {
      id: "construction-industry",
      titre: "Construction & Real Estate",
      priorite: "high",
      resume: "The construction sector is Ontario's 1.5 million homes engine. Labour shortages, permitting delays and material costs are the three blockers. The budget needs to address all three to meet housing targets.",
      enjeux: [
        "Trades training and apprenticeship funding — 100,000+ workers needed",
        "Permitting reform implementation — speed vs. accountability",
        "Infrastructure contracts pipeline — predictability for the industry",
        "Skilled trades immigration — Ontario-specific streams",
        "District of Innovation Construction equivalent — productivity investment",
      ],
      tags: ["construction", "housing", "trades", "permits", "infrastructure"]
    },
    {
      id: "education-sector",
      titre: "School Boards & Education Unions",
      priorite: "high",
      resume: "Ontario's education sector is navigating post-pandemic learning recovery, special education pressures and demographic shifts. The budget will reveal whether the Ford government is willing to invest in the classroom.",
      enjeux: [
        "Per-pupil funding formula — has it kept pace with costs?",
        "Special education — growing enrolment, inadequate staffing",
        "Capital repairs vs. new builds — aging school infrastructure",
        "$10/day child care — provincial contribution and operator viability",
        "Teacher complement — reductions or restoration?",
      ],
      tags: ["education", "schools", "special-education", "childcare", "teachers"]
    },
    {
      id: "auto-manufacturing",
      titre: "Auto Sector & Manufacturing",
      priorite: "high",
      resume: "US tariffs have put Ontario's auto sector — the heart of Canadian manufacturing — in a precarious position. The budget is a direct test of whether Ontario and Canada can protect 150,000+ auto jobs.",
      enjeux: [
        "Tariff mitigation package — bridge financing, worker support",
        "EV transition — investment in Ontario-made EVs and batteries",
        "Supply chain resilience — reshoring and domestic sourcing",
        "CAMI, Stellantis, Ford, GM — plant commitments status",
        "Critical minerals supply chain for EV batteries",
      ],
      tags: ["auto", "manufacturing", "tariffs", "EV", "supply-chain"]
    },
    {
      id: "community-organizations",
      titre: "Community & Social Services",
      priorite: "high",
      resume: "Ontario's community sector carries a disproportionate share of the social safety net. Homelessness, mental health, food insecurity and domestic violence services are chronically under-resourced.",
      enjeux: [
        "Core funding stability — multi-year vs. annual budget uncertainty",
        "Homelessness response — encampment policy and shelter capacity",
        "Food bank and emergency support — $1.3B Ontario Food Bank growth",
        "Domestic violence shelters — wait lists at record levels",
        "ODSP and OW — rates vs. cost of living",
      ],
      tags: ["community", "homelessness", "food-banks", "domestic-violence", "ODSP"]
    },
    {
      id: "indigenous-orgs",
      titre: "Indigenous Organizations & First Nations",
      priorite: "high",
      resume: "Ontario's Indigenous communities have distinct budget expectations — self-determination, infrastructure equity and Ring of Fire economic participation. The budget signals Ontario's commitment to reconciliation.",
      enjeux: [
        "Ring of Fire — infrastructure funding for road access",
        "Boil water advisories — capital investment in water systems",
        "Urban Indigenous services — Toronto and mid-size cities",
        "Housing on-reserve — condition and new construction",
        "Economic participation — equity in major resource projects",
      ],
      tags: ["indigenous", "ring-of-fire", "water", "housing", "reconciliation"]
    },
  ],

  glossaire: [
    { terme: "Deficit", def: "The gap between Ontario's total revenue and total expenditures in a fiscal year. Ontario's deficit has grown significantly since COVID. The 2026-27 deficit is expected to be around $18 billion before new measures." },
    { terme: "Net debt", def: "Ontario's total accumulated debt minus financial assets. Ontario carries one of the largest sub-national debts in the world — over $400 billion. Expressed as % of GDP for interprovincial comparison." },
    { terme: "OHIP", def: "Ontario Health Insurance Plan — the province's publicly funded health insurance program. Covers most physician and hospital services for Ontario residents. Does not cover prescription drugs for most working-age adults (unlike Quebec)." },
    { terme: "State of good repair", def: "Government term for the cost of maintaining existing infrastructure at functional standards. Ontario faces a multi-billion dollar state of good repair backlog across hospitals, schools, transit and roads." },
    { terme: "ODSP / OW", def: "Ontario Disability Support Program and Ontario Works — the province's primary social assistance programs. Rates have been chronically below the poverty line, creating pressure for significant increases." },
    { terme: "Land Transfer Tax", def: "A provincial tax paid when property changes ownership in Ontario. Toronto has an additional municipal land transfer tax. Often cited in housing affordability discussions, especially for first-time buyers." },
    { terme: "Ring of Fire", def: "A mineral-rich area in Northern Ontario containing significant deposits of chromite, nickel, copper and platinum group metals. Requires major road infrastructure investment to access. Strategic for critical minerals supply chains." },
    { terme: "AMO", def: "Association of Municipalities of Ontario — the main lobby group representing Ontario's 444 municipalities. AMO's pre-budget submission shapes the municipal priorities in budget negotiations." },
    { terme: "Base budget", def: "Ongoing program spending before new investments. When governments announce 'new money', it's on top of the base. Understanding the base is essential to distinguishing real new investments from rebranded existing spending." },
    { terme: "Capital vs. operating", def: "Capital spending builds or refurbishes assets (hospitals, schools, highways). Operating spending funds ongoing services (salaries, programs). Governments often use capital announcements to appear generous while squeezing operating budgets." },
  ],

  comparaison: {
    annee_precedente: "2025-2026",
    elements: [
      { label: "Projected deficit", avant: "~$14.6 B", apres: "TBD (March 25)", direction: "neutral" },
      { label: "Total spending", avant: "~$207 B", apres: "TBD (March 25)", direction: "neutral" },
      { label: "Health spending", avant: "~$85 B", apres: "TBD (March 25)", direction: "neutral" },
      { label: "Education spending", avant: "~$35 B", apres: "TBD (March 25)", direction: "neutral" },
      { label: "Infrastructure plan", avant: "TBD", apres: "TBD (March 25)", direction: "neutral" },
      { label: "Net debt (% GDP)", avant: "~40%", apres: "TBD (March 25)", direction: "neutral" },
    ]
  },

  sources: {
    plan: "https://www.ontario.ca/page/ontario-budget",
    bref: "https://www.ontario.ca/page/ontario-budget",
  },

  notebook: {
    url: "",
    label: "Explore the Ontario Budget Notebook",
    note: "NotebookLM by Google · Free · Google account required",
  },
};
