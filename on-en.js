// =========================================================
// ONTARIO BUDGET 2025 — ENGLISH DATA
// "A Plan to Protect Ontario"
// Minister of Finance: Peter Bethlenfalvy
// Tabled: April 2025
// =========================================================

const BUDGET_EN = {
  lang: "en",
  annee: "2025-2026",
  titre: "Ontario Budget 2025",
  titre_complet: "A Plan to Protect Ontario",
  date_depot: "April 2025",
  ministre: "Peter Bethlenfalvy",
  status: "live",

  quote: {
    texte: "We need to make bold, lasting change that makes Ontario the most competitive economy in the G7 to invest, create jobs and do business. We need to do it now.",
    auteur: "Peter Bethlenfalvy",
    titre: "Minister of Finance, Ontario — 2025 Budget",
  },

  chiffres: [
    { label: "Deficit 2025-26", valeur: "-$14.6 B", note: "Tariff response, infrastructure and services", variation: "Up from -$6.0 B in 2024-25", direction: "down" },
    { label: "Path to balance", valeur: "2027-28", note: "Projected surplus of $0.2 B", variation: "Deficit -$7.8 B in 2026-27", direction: "up" },
    { label: "Capital plan (10 yr)", valeur: "$200 B+", note: "Highways, transit, hospitals, schools", variation: "Over $33 B in 2025-26 alone", direction: "up" },
    { label: "Net debt-to-GDP", valeur: "37.9%", note: "2025-26 — target below 40%", variation: "Down from 39.2% (2024 Budget forecast)", direction: "up" },
    { label: "Business support (immediate)", valeur: "$11 B", note: "Tariff response: deferrals + WSIB rebates", variation: "New — largest package in Ontario history", direction: "neutral" },
    { label: "GDP growth (2025)", valeur: "0.8%", note: "Tariff-impacted — down from 1.5% in 2024", variation: "Recovering to 1.0% (2026), 1.9% (2027)", direction: "down" },
  ],

  secteurs: [
    {
      id: "tariffs-economy",
      titre: "Tariff Response & Economic Protection",
      depenses: "$11 B immediate + $5 B Protecting Ontario Account",
      variation: "New — central theme of 2025 budget",
      priorite: "high",
      resume: "The defining theme of Budget 2025. US tariffs have put Ontario's economy under acute pressure. The government's response is the largest economic protection package in Ontario history. Tax deferrals buy time. The Protecting Ontario Account is the strategic backstop. The real long-term bet is on regulatory reform, critical minerals and diversification away from US dependence.",
      points: [
        "$9 B in deferred provincial taxes for 80,000 businesses — liquidity, not forgiveness",
        "$2 B in WSIB employer rebates ($4 B total over past year) to keep workers employed",
        "$5 B Protecting Ontario Account — strategic fund for tariff-disrupted businesses",
        "$1 B in immediate liquidity relief for businesses that have exhausted other funding",
        "$40 M Trade-Impacted Communities Program for hardest-hit local economies",
        "Ontario Made Manufacturing Investment Tax Credit enhanced — +$1.3 B over 3 years",
        "$50 M Ontario Together Trade Fund to help businesses retool and find new markets",
        "Internal trade barriers eliminated — estimated $200 B annual cost to Canada's economy",
      ],
      tags: ["tariffs", "auto", "economy", "manufacturing", "WSIB", "trade"]
    },
    {
      id: "infrastructure-transit",
      titre: "Infrastructure & Transit",
      depenses: "$200 B+ over 10 years · Transit $61 B · Highways $30 B",
      variation: "Largest capital plan in Ontario history",
      priorite: "high",
      resume: "The scale is historic — $200 B+ over 10 years. Transit ($61 B) is the largest single sector. Key projects: Ontario Line, Scarborough Subway Extension, Eglinton Crosstown West, Yonge North Extension. Highways: Hwy 413, Bradford Bypass, Hwy 401 tunnel expressway feasibility. The question is always delivery speed vs. announcement volume.",
      points: [
        "Transit: $61 B over 10 yr — Ontario Line, Scarborough, Eglinton Crosstown West, Yonge North",
        "GO 2.0: new passenger train lines through midtown Toronto, Etobicoke, York Region to Bolton",
        "Highways: nearly $30 B — Hwy 413, Bradford Bypass, Hwy 401 tunnel feasibility",
        "$758 M for 55 new TTC Line 2 subway trains",
        "$850 M to refurbish GO Transit rail cars",
        "Northlander reinstated — Northern Ontario to Toronto rail service",
        "Highway 11/17 and Highway 17 widening in Northern Ontario",
        "QEW Garden City Skyway Bridge twinning over Welland Canal",
      ],
      tags: ["transit", "highways", "GO", "Ontario-Line", "Hwy-413", "Bradford-Bypass"]
    },
    {
      id: "health",
      titre: "Health Care",
      depenses: "$2.1 B primary care · $56 B hospitals (10 yr) · $6.4 B LTC (since 2019)",
      variation: "Primary care is the signature new investment",
      priorite: "high",
      resume: "Primary care is the signature health investment — $2.1 B to connect every Ontarian to a family doctor or primary care team, led by Dr. Jane Philpott. This is structural reform, not just dollars. Hospital infrastructure is massive ($56 B over 10 yr) but spread over a decade. LTC beds are a key commitment with real tracking data.",
      points: [
        "$2.1 B to connect every person in Ontario to a family doctor or primary care team",
        "$300 M for new teaching clinics with Ontario medical schools to train more family doctors",
        "$56 B in hospital capital over 10 years — 50+ new/upgraded hospitals, ~3,000 beds",
        "Key hospitals: Grand River/St. Mary's, Brant Community, Southlake, Royal Victoria, Lake of the Woods",
        "LTC: 58,000 new/upgraded beds by 2028 — 23,977 approved or under construction as of April 2025",
        "New Ontario Fertility Treatment Tax Credit — up to $20,000 in eligible expenses",
        "Retirement Home program support extended",
      ],
      tags: ["health", "primary-care", "hospitals", "LTC", "fertility", "family-doctor"]
    },
    {
      id: "education",
      titre: "Education & Child Care",
      depenses: "$30 B over 10 years capital · $2.5 B Skills Development Fund",
      variation: "Capital focus — new schools and child care spaces",
      priorite: "high",
      resume: "Education investment is dominated by capital — $30 B over 10 years for school construction and child care spaces. The government is continuing $10/day child care delivery. Skills training gets a major boost — $2.5 B total in the Skills Development Fund, reflecting the view of education as economic infrastructure for the tariff era.",
      points: [
        "$30 B over 10 years including ~$23 B in capital grants for schools and child care",
        "New schools: Sudbury, Windsor, Ottawa, Newcastle, Oshawa, Stouffville",
        "Skills Development Fund: $2.5 B total (+$1 B new) — trades, manufacturing, construction",
        "$10/day child care delivery continuing under federal agreement",
        "$10 M First Nation student scholarships for resource development careers",
        "STEM and trades education emphasized as economic competitiveness strategy",
        "Postsecondary: $5 B+ over 10 years including $2 B+ in capital grants",
      ],
      tags: ["education", "schools", "childcare", "skills", "trades", "postsecondary"]
    },
    {
      id: "critical-minerals",
      titre: "Critical Minerals & Ring of Fire",
      depenses: "Multi-billion — within broader economic package",
      variation: "Permitting reform is the key policy shift",
      priorite: "high",
      resume: "Permitting reform is the headline: cut approval timelines from 15+ years to under 5. That regulatory promise is more consequential than any specific dollar amount. The tripled Indigenous equity guarantee ($1 B to $3 B) creates genuine partnership opportunities. Ring of Fire road access is the physical enabler for what could be a generational economic asset.",
      points: [
        "Permitting reform: cut approval timelines from 15+ years to under 5 years",
        "New standalone Ontario Critical Minerals Strategy",
        "Indigenous equity partnership guarantees: ceiling raised from $1 B to $3 B",
        "Indigenous Participation Fund expanded by $70 M",
        "$10 M for First Nation student scholarships in resource development",
        "Ring of Fire road access infrastructure — enables access to chromite, nickel, copper deposits",
        "Critical minerals positioned as Ontario's answer to US tariff dependence",
      ],
      tags: ["ring-of-fire", "critical-minerals", "mining", "indigenous", "EV", "permitting"]
    },
    {
      id: "housing",
      titre: "Housing & Homelessness",
      depenses: "$400 M HEWSF additional · $5 B Building Ontario Fund expansion",
      variation: "Supply-side and encampment focus",
      priorite: "high",
      resume: "Housing policy is about enabling infrastructure (water, sewer systems) rather than direct affordability. The 1.5 M homes by 2031 target is maintained. Homelessness is reframed around addiction recovery hubs — a major policy shift away from harm reduction. New tools for municipalities to address encampments signal a harder line on public spaces.",
      points: [
        "$400 M additional to Housing-Enabling Water Systems Fund (total $2 B+ to date)",
        "$5 B additional to Building Ontario Fund — affordable housing, LTC, energy",
        "Drug injection sites near schools converted to Homelessness and Addiction Recovery Treatment Hubs",
        "$75.5 M additional for encampment management and public drug use enforcement",
        "1.5 million homes by 2031 target maintained",
        "Zoning and permitting reform to accelerate housing approvals",
      ],
      tags: ["housing", "homelessness", "water-systems", "encampments", "addiction", "1.5M-homes"]
    },
    {
      id: "affordability",
      titre: "Affordability & Cost of Living",
      depenses: "$1.7 B gas tax savings since 2022 · $200 rebate delivered",
      variation: "Existing measures made permanent",
      priorite: "high",
      resume: "Affordability in Budget 2025 is about locking in existing measures rather than new large programs. Gas tax cuts are permanent. Highway 407 East tolls are gone. One Fare saves commuters $1,600/year. The $200 rebate was already delivered. Tariff-related cost pressures may prompt more affordability measures through the year.",
      points: [
        "$200 rebate already delivered to every eligible adult and child in Ontario",
        "Gas and fuel tax cuts made permanent — $1.7 B saved since 2022",
        "Highway 407 East tolls eliminated — legislated ban on toll reinstatement on public highways",
        "One Fare: average $1,600/year saved for daily transit commuters",
        "Licence plate sticker fees and Hwy 412/418 tolls already eliminated",
        "Propane tax eliminated for licensed road vehicles",
        "Internal trade barriers dismantled — reduces costs on goods and services",
      ],
      tags: ["affordability", "gas-tax", "tolls", "one-fare", "rebate", "cost-of-living"]
    },
    {
      id: "justice-safety",
      titre: "Public Safety & Justice",
      depenses: "Within broader community safety envelope",
      variation: "Operation Deterrence launched — border and crime focus",
      priorite: "medium",
      resume: "Public safety is a signature Ford government priority. Operation Deterrence (launched January 2025) targets border security and illegal crossings. Major investment in police training, gun/gang violence response and corrections capacity. The conversion of drug consumption sites is as much a public safety decision as a health one.",
      points: [
        "Operation Deterrence: border security, illegal drugs and gun interdiction framework",
        "Expanded Joint Air Support Unit for crime-fighting",
        "Gun and gang violence: new specialized unit funding",
        "More repeat violent offenders incarcerated — bail reform push at federal level",
        "Training more police officers province-wide",
        "First Nation policing services funded",
        "New provincial jail capacity",
        "Human trafficking survivor support programs",
      ],
      tags: ["justice", "police", "border", "guns-gangs", "corrections", "trafficking"]
    },
  ],

  audiences: [
    {
      id: "workers",
      titre: "Workers & Job Seekers",
      priorite: "high",
      resume: "Budget 2025 is fundamentally a workers' budget — the tariff threat to Ontario's manufacturing jobs is the organizing logic of almost every major measure. Skills retraining gets $2.5 B total in the Skills Development Fund. Laid-off workers get new training and support centres.",
      mesures: [
        { label: "WSIB employer rebates (keep workers employed)", valeur: "$2 B", note: "$4 B total over past year" },
        { label: "Skills Development Fund (total)", valeur: "$2.5 B", note: "+$1 B new investment" },
        { label: "Training centres for laid-off workers", valeur: "$20 M", note: "New support centres" },
        { label: "Trade-Impacted Communities support", valeur: "$40 M", note: "For hardest-hit local economies" },
      ],
      tags: ["workers", "manufacturing", "tariffs", "skills", "retraining"]
    },
    {
      id: "families",
      titre: "Families",
      priorite: "high",
      resume: "Families benefit from the $200 rebate (already paid), permanent gas tax cuts, toll elimination and transit savings. Child care continues under the federal $10/day agreement. The fertility tax credit is a new targeted measure for families facing fertility challenges.",
      mesures: [
        { label: "$200 rebate per eligible adult & child", valeur: "Delivered", note: "Already paid out in early 2025" },
        { label: "Gas tax savings (since 2022)", valeur: "$1.7 B", note: "Now permanent" },
        { label: "One Fare transit savings (annual)", valeur: "$1,600", note: "Average daily commuter" },
        { label: "Ontario Fertility Treatment Tax Credit", valeur: "New", note: "Up to $20,000 in eligible expenses" },
      ],
      tags: ["families", "affordability", "childcare", "transit", "fertility"]
    },
    {
      id: "seniors",
      titre: "Seniors",
      priorite: "high",
      resume: "Long-term care is the defining seniors issue — 58,000 new/upgraded beds by 2028, with 23,977 already approved or under construction. Primary care access ($2.1 B) benefits seniors disproportionately. Retirement Home support is extended.",
      mesures: [
        { label: "LTC beds target by 2028", valeur: "58,000", note: "$6.4 B invested since 2019" },
        { label: "LTC beds approved/under construction", valeur: "23,977", note: "As of April 2025" },
        { label: "Primary care connection", valeur: "$2.1 B", note: "Connect every Ontarian to a doctor" },
        { label: "Retirement Home program", valeur: "Extended", note: "Support for residents" },
      ],
      tags: ["seniors", "LTC", "primary-care", "retirement-homes"]
    },
    {
      id: "businesses",
      titre: "Businesses & Employers",
      priorite: "high",
      resume: "The most business-friendly Ontario budget in years. Tax deferrals, WSIB rebates, manufacturing tax credit enhancement and the $5 B Protecting Ontario Account are all targeted at keeping Ontario businesses viable through tariff disruption.",
      mesures: [
        { label: "Tax deferrals for 80,000 businesses", valeur: "$9 B", note: "Liquidity support — not forgiveness" },
        { label: "Protecting Ontario Account", valeur: "$5 B", note: "Strategic fund for tariff response" },
        { label: "Ontario Made MFG Tax Credit (additional)", valeur: "$1.3 B / 3 yr", note: "Enhanced and expanded" },
        { label: "Ontario Together Trade Fund", valeur: "$50 M", note: "Retool for new markets" },
      ],
      tags: ["business", "tariffs", "tax-credit", "manufacturing", "trade"]
    },
    {
      id: "commuters",
      titre: "Commuters & Transit Users",
      priorite: "high",
      resume: "Big wins for commuters: One Fare ($1,600/year savings) and 407 East toll removal. The $61 B transit capital plan over 10 years is transformative in scope. Gridlock costs Ontario $56 B/year — the justification for both transit and highway investments.",
      mesures: [
        { label: "One Fare savings (avg daily commuter)", valeur: "$1,600/yr", note: "Participating transit systems" },
        { label: "407 East tolls eliminated", valeur: "Permanent", note: "Legislated — no government can reinstate" },
        { label: "Transit capital over 10 years", valeur: "$61 B", note: "Ontario Line, Eglinton, Yonge North" },
        { label: "GO 2.0 feasibility", valeur: "Advancing", note: "New lines including midtown Toronto" },
      ],
      tags: ["commuters", "transit", "tolls", "GO", "one-fare"]
    },
    {
      id: "indigenous",
      titre: "Indigenous Communities",
      priorite: "high",
      resume: "A significant budget for Indigenous economic participation. The equity participation guarantee is tripled ($1 B to $3 B). Ring of Fire road infrastructure and critical minerals create real economic opportunity. First Nation policing and student scholarships also funded.",
      mesures: [
        { label: "Indigenous equity guarantee ceiling", valeur: "$3 B", note: "Tripled from $1 B — energy projects" },
        { label: "Indigenous Participation Fund", valeur: "+$70 M", note: "Expanded program" },
        { label: "First Nation student scholarships", valeur: "$10 M", note: "Resource development careers" },
        { label: "First Nation policing services", valeur: "Funded", note: "New investment" },
      ],
      tags: ["indigenous", "ring-of-fire", "equity", "policing", "scholarships"]
    },
  ],

  parties_prenantes: [
    {
      id: "auto-sector",
      titre: "Auto Sector & Manufacturing",
      priorite: "high",
      resume: "Budget 2025 is a direct response to the existential threat US tariffs pose to Ontario's auto sector. The $9 B in tax deferrals and the $5 B Protecting Ontario Account are real, immediate tools. The government's reaffirmation of its $46 B EV/battery investment commitment sends a critical signal to automakers planning their next cycle.",
      enjeux: [
        "Tax deferrals ($9 B): cashflow relief now, but plan for when deferrals expire",
        "Protecting Ontario Account ($5 B): assess eligibility criteria for your sector",
        "EV/battery investment protection: government reaffirmed the $46 B (CAMI, Stellantis, Ford, GM)",
        "Ontario Made Manufacturing Investment Tax Credit: major opportunity for eligible capital investments",
        "Supply chain retooling: Ontario Together Trade Fund ($50 M) for market diversification",
        "Skills Development Fund ($2.5 B): relevant retraining programs for manufacturing workforce",
      ],
      tags: ["auto", "tariffs", "EV", "tax-credit", "supply-chain", "skills"]
    },
    {
      id: "hospitals",
      titre: "Hospitals & Health Organizations",
      priorite: "high",
      resume: "The $56 B hospital capital plan is the largest number in health — but spread over 10 years. Primary care reform ($2.1 B) will reshape patient flow. Key question for hospital administrators: operating budget adequacy alongside capital commitments. Capital plans mean nothing if you can't staff the new beds.",
      enjeux: [
        "Capital grants vs. operating: confirm your project has both capital approval AND operating commitment",
        "50+ major hospital projects — not all will move at the same pace",
        "Primary care reform: more patients connected to family doctors changes ED and specialist patterns",
        "Staffing: teaching clinic investment ($300 M) takes years — short-term shortage remains",
        "LTC integration: 58,000 beds succeed only with funded hospital-to-LTC pathways",
        "Mental health: operating implications of new Homelessness and Addiction Recovery Hubs",
      ],
      tags: ["hospitals", "capital", "primary-care", "LTC", "staffing"]
    },
    {
      id: "municipalities",
      titre: "Municipalities & AMO",
      priorite: "high",
      resume: "Municipalities get useful tools — HEWSF funding, encampment enforcement powers and co-investment opportunities. But the fundamental provincial-municipal fiscal gap remains unaddressed. The housing enabling legislation carries both new tools and new obligations.",
      enjeux: [
        "HEWSF additional $400 M: prioritize water/sewer projects that unlock housing approvals",
        "Encampment enforcement ($75.5 M): new tools but surge demand for shelter capacity",
        "Building Ontario Fund ($5 B expanded): LTC and affordable housing co-investment opportunities",
        "1.5 M homes target: provincial consequences for municipalities not meeting housing commitments",
        "Transit: GO 2.0 advancement creates regional connectivity investment opportunities",
        "Operating funding gap: still unresolved — advocacy focus for 2026 budget cycle",
      ],
      tags: ["municipalities", "housing", "water", "encampments", "transit", "fiscal-gap"]
    },
    {
      id: "construction",
      titre: "Construction & Real Estate Industry",
      priorite: "high",
      resume: "$200 B+ in capital over 10 years is generational work. Industry challenges: labour availability, materials costs, permitting speed. The Skills Development Fund ($2.5 B) directly targets trades training. Regulatory reform to accelerate permitting timelines is the structural enabler.",
      enjeux: [
        "$200 B capital pipeline: position now for hospital, transit, school and highway contracts",
        "Skills Development Fund ($2.5 B): trades training programs for construction workforce",
        "Permitting reform: Ring of Fire precedent — press for broader construction permit acceleration",
        "1.5 M homes: requires industry capacity — advocate for skilled trades immigration streams",
        "Ontario Made Manufacturing Investment Tax Credit: applicable to construction equipment",
        "Building Ontario Fund expansion: affordable housing and LTC co-investment opportunities",
      ],
      tags: ["construction", "capital", "trades", "permitting", "housing", "skills"]
    },
    {
      id: "education-sector",
      titre: "School Boards & Education Sector",
      priorite: "high",
      resume: "The $30 B in education capital addresses significant aging school infrastructure backlog. Child care expansion under the federal agreement is a key operational commitment. Skills Development Fund signals government's view of education as economic infrastructure.",
      enjeux: [
        "Capital grants ($23 B over 10 yr): advocate early for your board's priority projects",
        "$10/day child care: educator recruitment and retention remain implementation challenges",
        "Skills Development Fund ($2.5 B): secondary school and college trades programs are priority",
        "Growing boards: 905-area demographic pressure creates competing capital demands",
        "Declining enrolment boards: consolidation vs. rural school maintenance tension",
        "STEM investment: curriculum and facility alignment needed",
      ],
      tags: ["education", "schools", "childcare", "capital", "trades", "demographics"]
    },
    {
      id: "community-services",
      titre: "Community & Social Services",
      priorite: "high",
      resume: "The conversion of drug injection sites to Homelessness and Addiction Recovery Treatment Hubs is the defining policy shift. The $75.5 M for encampment management creates pressure on shelter and supportive housing capacity. ODSP and OW rates were not significantly increased — a major unaddressed need.",
      enjeux: [
        "Addiction Recovery Treatment Hubs: understand conversion timelines and service model expectations",
        "Encampment response: $75.5 M creates surge demand for shelter, housing and wraparound services",
        "ODSP and OW: no significant rate increase — advocacy opportunity for 2026 budget",
        "Food security: not specifically addressed in budget — pressure on food banks continues",
        "Domestic violence shelters: monitor supplementary materials for funding details",
        "Core funding stability: multi-year agreements vs. annual uncertainty",
      ],
      tags: ["community", "homelessness", "addiction", "ODSP", "shelter", "food-security"]
    },
    {
      id: "critical-minerals-org",
      titre: "Mining & Critical Minerals Organizations",
      priorite: "high",
      resume: "Potentially the most consequential budget for Ontario's mining sector in decades. Permitting reform (15+ years to under 5), tripled Indigenous equity guarantees, and a new Critical Minerals Strategy create genuine development opportunity. Ring of Fire road access is the physical enabler.",
      enjeux: [
        "Permitting reform: track legislative/regulatory changes implementing the 15→5 year timeline commitment",
        "Ring of Fire road access: confirm project scope, timelines and construction start commitments",
        "Indigenous equity guarantee ($3 B ceiling): structure partnerships early — this is the enabling tool",
        "New Critical Minerals Strategy: participate in consultation — early engagement shapes programs",
        "Indigenous Participation Fund ($70 M expanded): co-investment opportunities for First Nations",
        "EV supply chain link: position Ontario critical minerals in EV/battery value chain narrative",
      ],
      tags: ["mining", "ring-of-fire", "permitting", "indigenous", "EV", "critical-minerals"]
    },
  ],

  glossaire: [
    { terme: "Deficit", def: "The gap between Ontario's total revenue and total expenditures. The 2025-26 deficit is projected at $14.6 B, driven by the tariff response and infrastructure investment. Ontario projects a return to a $0.2 B surplus in 2027-28 — contingent on economic growth materializing." },
    { terme: "Net debt-to-GDP", def: "Ontario's accumulated net debt as a percentage of annual economic output. Projected at 37.9% in 2025-26 — below the government's 40% target ceiling. A key measure for credit rating agencies and interprovincial comparisons." },
    { terme: "Protecting Ontario Account", def: "A new $5 B strategic fund created in Budget 2025 to support businesses facing significant disruption from US tariffs. Works alongside federal programs as a backstop for businesses that have exhausted other available support." },
    { terme: "Ontario Made Manufacturing Investment Tax Credit (OMMITC)", def: "A refundable tax credit for Ontario manufacturers investing in buildings, machinery and equipment used in Ontario manufacturing. Enhanced in Budget 2025 with +$1.3 B over 3 years and expanded to cover more investment types." },
    { terme: "Ring of Fire", def: "A mineral-rich area in Northern Ontario's Far North containing significant chromite, nickel, copper and platinum group metals. Budget 2025 commits to cut development timelines from 15+ years to under 5 through regulatory reform." },
    { terme: "One Fare", def: "Ontario's transit fare integration program. Commuters can travel across multiple systems (GO, TTC, and participating local transit) on a single fare — saving the average daily user approximately $1,600 per year." },
    { terme: "Building Ontario Fund", def: "A provincial co-investment vehicle pairing government capital with private sector investment for priority projects. Expanded by $5 B in Budget 2025 for LTC, energy infrastructure and affordable housing." },
    { terme: "WSIB (Workplace Safety and Insurance Board)", def: "Ontario's workers' compensation insurer. The $2 B in employer rebates (part of $4 B total over the past year) returns surplus funds to safe employers to help them maintain employment during tariff disruption." },
    { terme: "Homelessness and Addiction Recovery Treatment Hubs", def: "New facilities replacing supervised drug consumption sites near schools and daycares. A fundamental policy shift from harm reduction toward recovery-oriented services. Location, capacity and service model are critical implementation details." },
    { terme: "Capital vs. operating funding", def: "Capital funds build — hospitals, schools, transit lines. Operating funds pay for staff and programs. Governments can announce impressive capital plans while squeezing operating budgets. A new hospital needs both capital construction AND operating budget to function." },
  ],

  comparaison: {
    annee_precedente: "2024-2025",
    elements: [
      { label: "Deficit", avant: "-$6.0 B (2024-25 interim)", apres: "-$14.6 B", direction: "down" },
      { label: "Net debt-to-GDP", avant: "36.3% (2024-25 forecast)", apres: "37.9%", direction: "down" },
      { label: "Capital plan (annual)", avant: "~$25 B", apres: "$33+ B", direction: "up" },
      { label: "Hospital capital (annual)", avant: "$3.5 B", apres: "$4.5 B", direction: "up" },
      { label: "Real GDP growth", avant: "1.5% (2024 actual)", apres: "0.8% (2025 projected)", direction: "down" },
      { label: "Path to balance", avant: "No firm commitment", apres: "Surplus 2027-28 ($0.2 B)", direction: "up" },
      { label: "Business support package", avant: "None comparable", apres: "$11 B tariff response", direction: "neutral" },
    ]
  },

  sources: {
    plan: "https://www.ontario.ca/document/2025-ontario-budget",
    bref: "https://www.ontario.ca/page/ontario-budget",
  },

  notebook: {
    url: "",
    label: "Explore the Ontario Budget Notebook",
    note: "NotebookLM by Google · Free · Google account required",
  },
};
