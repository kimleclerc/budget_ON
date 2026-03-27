// =========================================================
// ONTARIO BUDGET 2026 — ENGLISH DATA
// “A Plan to Protect Ontario”
// Minister of Finance: Peter Bethlenfalvy
// Tabled: March 25, 2026
// =========================================================

const BUDGET_EN = {
lang: “en”,
annee: “2026-2027”,
titre: “Ontario Budget 2026”,
titre_complet: “A Plan to Protect Ontario”,
date_depot: “March 25, 2026”,
ministre: “Peter Bethlenfalvy”,
status: “live”,

quote: {
texte: “Navigating these challenges requires a pragmatic approach — our prudent fiscal plan is more important than ever. We are delivering on our plan to build the most competitive, resilient and self-reliant economy in the G7.”,
auteur: “Peter Bethlenfalvy”,
titre: “Minister of Finance, Ontario — Budget 2026”,
},

chiffres: [
{ label: “Deficit 2026-27”, valeur: “-$13.8 B”, note: “Driven by infrastructure, tariff response and services”, variation: “Improves from -$12.3 B in 2025-26”, direction: “down” },
{ label: “Path to balance”, valeur: “2028-29”, note: “Projected surplus of $0.6 B including reserve”, variation: “Deficit -$6.1 B in 2027-28”, direction: “up” },
{ label: “Capital plan (10 yr)”, valeur: “$210 B+”, note: “Most ambitious provincial capital plan in Canadian history”, variation: “$37 B in 2026-27 alone”, direction: “up” },
{ label: “Net debt-to-GDP”, valeur: “~40%”, note: “2026-27 projection — at the government’s target ceiling”, variation: “Fiscal discipline maintained”, direction: “neutral” },
{ label: “Tariff response (cumulative)”, valeur: “~$30 B”, note: “Relief and support since April 2025”, variation: “Includes $9 B tax deferrals + new measures”, direction: “neutral” },
{ label: “GDP growth (2025 actual)”, valeur: “1.2%”, note: “Better than the 0.8% forecast in 2025 Budget”, variation: “1.0% projected for 2026”, direction: “up” },
],

secteurs: [
{
id: “tariffs-economy”,
titre: “Tariff Response & Economic Competitiveness”,
depenses: “~$30 B cumulative since Apr 2025 · $4 B Protect Ontario Account Investment Fund”,
variation: “Continuity from 2025 — new Investment Fund added”,
priorite: “high”,
resume: “Budget 2026 doubles down on the tariff response framework established last year. The new Protect Ontario Account Investment Fund ($4 B) shifts from defensive support to offensive investment — AI, defence, advanced manufacturing, life sciences and critical minerals. This is the budget that says Ontario is done playing defence and is now building for the next economy.”,
points: [
“$4 B Protect Ontario Account Investment Fund — AI, defence, advanced manufacturing, life sciences, critical minerals R&D”,
“Fund designed to crowd in pension fund and private capital for long-term strategic priorities”,
“Protect Ontario Financing Program continued — working capital for tariff-impacted SMEs”,
“POWER Centres helped nearly 15,000 workers with transition assistance in 2025”,
“$100 M additional to Ontario Together Trade Fund (OTTF) — new interprovincial and export markets”,
“Small business corporate income tax rate cut by more than 30% — up to $5,000 annual relief”,
“Accelerated depreciation for capital equipment — $3.5 B in Ontario income tax relief over 4 years”,
“One Project, One Process framework: Frontier Lithium, Canada Nickel Crawford, Kinross Great Bear fast-tracked”,
“Ring of Fire roads accelerated — construction starts June 2026, roads open November 2030 (5 years early)”,
],
tags: [“tariffs”, “economy”, “investment”, “AI”, “defence”, “critical-minerals”, “ring-of-fire”]
},
{
id: “tax-competitiveness”,
titre: “Tax Action Plan & Competitiveness”,
depenses: “$3.5 B depreciation relief (4 yr) · Small business tax cut >30%”,
variation: “New multi-year Tax Action Plan introduced”,
priorite: “high”,
resume: “The multi-year Tax Action Plan is Budget 2026’s signature economic policy. Cutting the small business corporate income tax rate by more than 30% is a real signal — not a one-time credit but a structural rate change. The accelerated capital depreciation aligns Ontario with federal measures and directly addresses the productivity gap. The goal: most competitive jurisdiction in the G7.”,
points: [
“Small business corporate income tax rate cut by more than 30% — up to $5,000 annual relief per business”,
“Accelerated income tax deduction for capital equipment — $3.5 B in relief over 4 years”,
“Builds on $10 B in cumulative cost savings and supports for businesses since 2018”,
“Prototype to full ‘As of Right’ labour mobility rules — first in Canada”,
“Ontario first province to remove all Party-Specific Exemptions under Canadian Free Trade Agreement”,
“Red tape reduction and permitting streamlining for job-creating investments”,
“Historic labour mobility regulation in force since January 2026 — breaks down interprovincial barriers”,
],
tags: [“tax”, “competitiveness”, “small-business”, “depreciation”, “trade”, “labour-mobility”]
},
{
id: “infrastructure-transit”,
titre: “Infrastructure & Transit”,
depenses: “$210 B+ over 10 years · Highways $31 B · $37 B in 2026-27”,
variation: “Capital plan grows to $210 B — shovels in ground on major projects”,
priorite: “high”,
resume: “Construction has started on Highway 413 and Bradford Bypass. Two new transit lines opened in Toronto. The Ontario Line excavation at Queen Station is underway. The Ring of Fire roads have been accelerated by 5 years. This is a budget that can point to actual construction, not just announcements — a meaningful shift from the planning phase.”,
points: [
“Highway 413 construction started — saves drivers up to 30 min each way, serves GGH growth”,
“Bradford Bypass construction started — saves drivers 35 min, connects Hwy 400 to Hwy 404”,
“Hwy 401 tunnel expressway feasibility — fieldwork starting spring 2026”,
“Ring of Fire all-season roads: construction June 2026, roads open November 2030 (5 years early)”,
“Ontario Line: excavation underway at Queen Station”,
“Scarborough Subway Extension: breaking ground on first of three stations”,
“Yonge North Subway Extension: shovels in ground steps being taken”,
“GO Transit: Kitchener weekend service first-ever, more frequent Niagara service, Woodbine Station construction”,
“QEW Garden City Skyway Bridge twinning, new Hwy 7 expansion Kitchener-Guelph”,
“Two new transit lines already opened in Toronto”,
],
tags: [“transit”, “highways”, “Hwy-413”, “Bradford-Bypass”, “Ontario-Line”, “Scarborough”, “GO”, “ring-of-fire”]
},
{
id: “health”,
titre: “Health Care”,
depenses: “$64 B plan · $50 B hospital capital · $3.4 B Primary Care Action Plan (4 yr)”,
variation: “4th consecutive year of historic hospital investment”,
priorite: “high”,
resume: “For the fourth consecutive year, Ontario is making a historic investment in hospitals — over $1.1 B in additional funding. The $3.4 B Primary Care Action Plan continues. New medical schools are being built and expanded. LTC homes get $139.4 M additional. The scale is real but the delivery system — staffing, wait times — remains under pressure.”,
points: [
“Over $1.1 B in additional hospital funding in 2026-27 — 4th consecutive year of record investment”,
“$50 B in capital grants for hospitals and health infrastructure (within $64 B plan)”,
“$3.4 B Primary Care Action Plan over 4 years — new doctors and primary care providers”,
“Building and expanding medical schools to train new doctors”,
“$139.4 M additional for long-term care homes in 2026-27”,
“$965 M including $186 M new funding for Ontario Autism Program in 2026-27”,
“Darlington Unit 4 nuclear refurbishment completed — ahead of schedule, $150 M under budget”,
],
tags: [“health”, “hospitals”, “primary-care”, “LTC”, “autism”, “medical-schools”]
},
{
id: “education”,
titre: “Education & Postsecondary”,
depenses: “$6.4 B new postsecondary funding · $66 M Classroom Supplies Fund”,
variation: “Transformative postsecondary announcement — $6.4 B new funding”,
priorite: “high”,
resume: “The $6.4 B in new postsecondary funding is the headline education announcement — a direct response to the financial crisis facing Ontario’s colleges and universities. The Classroom Supplies Fund ($750 per elementary homeroom teacher) is smaller but tangible. The government’s emphasis is on producing competitive graduates for the G7 economy, not just funding institutions.”,
points: [
“$6.4 B in new funding for postsecondary sector — colleges, universities and Indigenous Institutes”,
“Ensures sustainability of institutions and prepares graduates for competitive careers”,
“$66 M Classroom Supplies Fund — $750 per elementary homeroom teacher per year”,
“$20 M Liam Riazati Memorial Fund — concrete barriers for child care centres”,
“Continued investment in building more schools and child care spaces within the $210 B capital plan”,
“Student achievement framed as the top priority in Ontario’s education system”,
],
tags: [“education”, “postsecondary”, “colleges”, “universities”, “childcare”, “classroom”]
},
{
id: “housing-affordability”,
titre: “Housing & Affordability”,
depenses: “HST rebate on new homes up to $1 M (full 8% removed) · extended to $1.5 M”,
variation: “Major new HST rebate — removes full provincial portion on new homes”,
priorite: “high”,
resume: “The removal of the full 8% provincial HST on new homes up to $1 M (maintained to $1.5 M) is the most significant housing affordability measure in this budget. The government projects it could stimulate thousands of housing starts, support 14,000 construction jobs and add 0.2 percentage points to GDP growth. The question is federal matching — Ontario is pressing Ottawa to match.”,
points: [
“Full 8% provincial HST removed on new homes up to $1 M — up to $80,000 in relief”,
“Relief maintained for homes up to $1.5 M”,
“Could stimulate thousands of housing starts and support 14,000 construction jobs”,
“Eligible for buyers who purchased on or after March 20, 2025 — retroactive”,
“Ontario pressing federal government to match the HST rebate”,
“Gas/fuel tax cuts permanent — $2.1 B saved since July 2022”,
“407 East tolls permanently removed — saves commuters estimated $7,200 annually”,
“One Fare extended 2 more years — saves daily users up to $1,600/year, $233 M saved since 2024”,
“Ontario Electricity Rebate — reduces typical residential bill by ~$36/month”,
],
tags: [“housing”, “HST”, “new-homes”, “affordability”, “gas-tax”, “tolls”, “one-fare”, “electricity”]
},
{
id: “energy-nuclear”,
titre: “Energy & Nuclear”,
depenses: “$800 B+ contribution to Canada’s economy (nuclear plan lifespan)”,
variation: “Nuclear expansion accelerating — Wesleyville agreement signed”,
priorite: “high”,
resume: “Ontario’s nuclear bet is getting bigger. Darlington Unit 4 refurbishment complete, ahead of schedule and under budget. Ontario Power Generation signed the Wesleyville agreement — 10,500 jobs, $235 B to Ontario GDP over its lifespan. Four SMRs at Darlington are being built (first in G7). The government frames nuclear as Ontario’s strategic economic advantage globally, not just a power source.”,
points: [
“Darlington Unit 4 refurbishment complete — ahead of schedule, $150 M under budget”,
“Ontario Power Generation signed Wesleyville nuclear project agreement — 10,500 jobs, $235 B GDP impact”,
“Four SMRs at Darlington — first in G7, enough electricity for 1.2 M homes when complete”,
“Nuclear expansion plan expected to create 150,000 job opportunities”,
“Add over $800 B to Canada’s economy over nuclear plan lifespan”,
“Ontario positioning nuclear advantage for global export opportunities”,
“Record investments in energy infrastructure to power economic growth”,
],
tags: [“nuclear”, “energy”, “SMR”, “Darlington”, “Wesleyville”, “jobs”, “clean-energy”]
},
{
id: “justice-safety”,
titre: “Public Safety & Justice”,
depenses: “$32.5 M Operation Deterrence 2.0 (2026-27)”,
variation: “Operation Deterrence 2.0 — enhanced border security”,
priorite: “medium”,
resume: “Operation Deterrence launched in January 2025 has delivered concrete results: 550+ illegal firearms traced, 4,152 kg cocaine seized, 192 kg fentanyl seized, 641 charges laid. Operation Deterrence 2.0 expands this with $32.5 M in two new border security grant programs. New bail legislation targets violent and repeat offenders.”,
points: [
“Operation Deterrence results: 550+ illegal firearms traced, 4,152 kg cocaine, 192 kg fentanyl, 641 charges”,
“$32.5 M in 2026-27 for two new border security grant programs — Operation Deterrence 2.0”,
“New legislation to strengthen Ontario’s bail system for violent and repeat offenders”,
“Expanding specialized bail prosecution teams”,
“Exploring making part of Ontario Sex Offender and Trafficker Registry publicly available”,
“Historic investments in correctional capacity for high-risk offenders”,
],
tags: [“safety”, “border”, “bail”, “firearms”, “corrections”, “Operation-Deterrence”]
},
],

audiences: [
{
id: “homebuyers”,
titre: “Home Buyers”,
priorite: “high”,
resume: “The biggest direct benefit in Budget 2026 for most Ontarians. The removal of the full 8% provincial HST on new homes up to $1 M means up to $80,000 in relief. Retroactive to March 20, 2025 — if you bought recently, you may qualify. The government is pressing Ottawa to match.”,
mesures: [
{ label: “Provincial HST removed on new homes (up to $1 M)”, valeur: “Up to $80,000”, note: “Maintained for homes up to $1.5 M” },
{ label: “Retroactive to”, valeur: “Mar 20, 2025”, note: “Earlier purchases may qualify” },
{ label: “407 East toll savings (annual)”, valeur: “$7,200”, note: “Permanently removed” },
],
tags: [“housing”, “HST”, “new-homes”, “first-time-buyers”]
},
{
id: “families”,
titre: “Families”,
priorite: “high”,
resume: “Families benefit from permanent gas tax savings ($2.1 B since 2022), the extended One Fare program, stable electricity bills via the OER, and the HST rebate on new homes. The autism program gets $965 M. Child care centres get $20 M in safety upgrades.”,
mesures: [
{ label: “Gas/fuel tax savings (since 2022)”, valeur: “$2.1 B”, note: “Permanent — ongoing savings” },
{ label: “One Fare (extended 2 yr)”, valeur: “$1,600/yr”, note: “Daily GTA transit users — $233 M saved since 2024” },
{ label: “Ontario Electricity Rebate”, valeur: “~$36/mo”, note: “Typical residential reduction” },
{ label: “Ontario Autism Program”, valeur: “$965 M”, note: “$186 M new in 2026-27” },
],
tags: [“families”, “gas-tax”, “one-fare”, “electricity”, “autism”, “child-care”]
},
{
id: “businesses”,
titre: “Businesses & Employers”,
priorite: “high”,
resume: “The multi-year Tax Action Plan is the defining business measure — small business tax cut over 30%, accelerated capital depreciation ($3.5 B relief over 4 years). The $4 B Protect Ontario Account Investment Fund opens new investment opportunities. Combined with $10 B in cumulative cost savings since 2018, Ontario is positioning itself as the most competitive G7 jurisdiction.”,
mesures: [
{ label: “Small business corporate tax rate cut”, valeur: “>30%”, note: “Up to $5,000 annual relief per business” },
{ label: “Accelerated capital depreciation”, valeur: “$3.5 B (4 yr)”, note: “Ontario income tax relief for qualifying businesses” },
{ label: “Protect Ontario Account Investment Fund”, valeur: “$4 B”, note: “AI, defence, advanced manufacturing, life sciences” },
{ label: “Cumulative business cost savings since 2018”, valeur: “~$10 B”, note: “Annual run rate” },
],
tags: [“business”, “tax”, “investment”, “competitiveness”, “SME”]
},
{
id: “workers”,
titre: “Workers & Job Seekers”,
priorite: “high”,
resume: “POWER Centres helped nearly 15,000 workers in 2025. The Ring of Fire acceleration and nuclear expansion will create tens of thousands of jobs. The ‘As of Right’ labour mobility rules let qualified workers practice their trade across Canada without re-certification. The $6.4 B postsecondary investment prepares the next generation workforce.”,
mesures: [
{ label: “POWER Centres (tariff-impacted workers)”, valeur: “15,000 helped”, note: “Transition assistance and employment referrals” },
{ label: “Nuclear expansion jobs”, valeur: “150,000+”, note: “New job opportunities over plan lifespan” },
{ label: “Ring of Fire jobs”, valeur: “Thousands”, note: “Construction starting June 2026” },
{ label: “Labour mobility (‘As of Right’)”, valeur: “First in Canada”, note: “Work across provinces without re-certification” },
],
tags: [“workers”, “jobs”, “nuclear”, “ring-of-fire”, “labour-mobility”, “postsecondary”]
},
{
id: “seniors”,
titre: “Seniors”,
priorite: “high”,
resume: “LTC homes get $139.4 M additional in 2026-27 — the fourth consecutive year of record health investment. The primary care expansion ($3.4 B over 4 years) benefits seniors disproportionately. Electricity and gas cost relief also directly helps seniors on fixed incomes.”,
mesures: [
{ label: “Additional LTC home funding”, valeur: “$139.4 M”, note: “2026-27 — ongoing record investment” },
{ label: “Primary Care Action Plan”, valeur: “$3.4 B (4 yr)”, note: “More doctors, expanded access” },
{ label: “Electricity Rebate (OER)”, valeur: “~$36/mo”, note: “Stable, predictable bills” },
{ label: “Gas tax savings”, valeur: “Permanent”, note: “$2.1 B saved by Ontarians since 2022” },
],
tags: [“seniors”, “LTC”, “primary-care”, “electricity”, “health”]
},
{
id: “indigenous”,
titre: “Indigenous Communities”,
priorite: “high”,
resume: “The Ring of Fire acceleration is the biggest Indigenous economic development story in this budget — roads opening November 2030, supported by agreements with three First Nations and a federal co-operation agreement. Ontario calls on Ottawa to match the $1 B provincial commitment. The $6.4 B postsecondary funding includes Indigenous Institutes.”,
mesures: [
{ label: “Ring of Fire roads — construction start”, valeur: “June 2026”, note: “5 years early — agreements with 3 First Nations” },
{ label: “Ring of Fire roads — opening”, valeur: “Nov 2030”, note: “Federal co-operation agreement signed” },
{ label: “Ontario’s Ring of Fire commitment”, valeur: “$1 B”, note: “Calling on federal government to match” },
{ label: “Indigenous Institutes funding”, valeur: “Included in $6.4 B”, note: “Postsecondary sustainability package” },
],
tags: [“indigenous”, “ring-of-fire”, “first-nations”, “postsecondary”, “infrastructure”]
},
],

parties_prenantes: [
{
id: “auto-manufacturing”,
titre: “Auto Sector & Manufacturing”,
priorite: “high”,
resume: “The $4 B Protect Ontario Account Investment Fund is the new tool — it specifically targets advanced manufacturing alongside AI, defence and life sciences. The accelerated capital depreciation ($3.5 B over 4 years) directly rewards capital investment in manufacturing. The small business tax cut and labour mobility rules address structural competitiveness.”,
enjeux: [
“Protect Ontario Account Investment Fund ($4 B): advanced manufacturing is explicitly named — engage early on eligibility”,
“Accelerated depreciation ($3.5 B/4 yr): model the impact on your capital investment decisions now”,
“Small business tax rate cut (>30%): significant for SME suppliers in the auto supply chain”,
“Labour mobility (‘As of Right’): hiring qualified workers from other provinces now much faster”,
“OTTF ($100 M additional): if you are diversifying away from US markets, apply now”,
“One Project, One Process: if you have a major project pending approvals, engage with the framework”,
],
tags: [“manufacturing”, “auto”, “tax”, “capital”, “labour-mobility”, “investment”]
},
{
id: “hospitals”,
titre: “Hospitals & Health Organizations”,
priorite: “high”,
resume: “Over $1.1 B in additional hospital funding for the 4th consecutive year. The $50 B capital grants program for hospital infrastructure continues. Primary care expansion ($3.4 B) will change patient flow patterns. The $139.4 M additional for LTC is welcome but the staffing gap remains the binding constraint on delivery.”,
enjeux: [
“Additional hospital funding ($1.1 B+): confirm your share and what operating commitments accompany it”,
“Primary Care Action Plan ($3.4 B/4 yr): more patients connected to family doctors means different ED patterns”,
“Medical school expansion: long-term physician supply — plan for the 5-10 year pipeline”,
“LTC additional funding ($139.4 M): staffing remains the key constraint, not capital”,
“Capital grants ($50 B): confirm where your project sits in the priority queue”,
“Nuclear Wesleyville: 10,500 jobs — watch for health services infrastructure requirements in the Port Hope area”,
],
tags: [“hospitals”, “capital”, “primary-care”, “LTC”, “staffing”]
},
{
id: “construction”,
titre: “Construction & Real Estate Industry”,
priorite: “high”,
resume: “$37 B in 2026-27 alone. Construction is now actually underway on 413, Bradford Bypass, Ontario Line and Scarborough Subway. The HST rebate on new homes could stimulate thousands of housing starts and 14,000 construction jobs. The Ring of Fire roads start in June 2026. The pipeline is real and large.”,
enjeux: [
“Ring of Fire roads (starting June 2026): specialized northern construction — position now”,
“HST rebate on new homes: 14,000 construction jobs projected — residential sector surge expected”,
“Hwy 413 and Bradford Bypass: active construction — sub-trade and materials opportunities”,
“Ontario Line and subway extensions: active excavation and construction — ongoing procurement”,
“Darlington SMRs and Wesleyville nuclear: specialized nuclear construction pipeline”,
“Accelerated depreciation: apply to your own equipment purchases for tax relief”,
],
tags: [“construction”, “housing”, “transit”, “highways”, “nuclear”, “ring-of-fire”]
},
{
id: “municipalities”,
titre: “Municipalities & AMO”,
priorite: “high”,
resume: “The HST rebate on new homes stimulates supply — municipalities benefit from more housing completions. Ring of Fire road access creates new economic zones in Northern Ontario. The One Fare extension keeps transit ridership numbers strong. But the fundamental provincial-municipal fiscal gap on operating budgets remains unaddressed.”,
enjeux: [
“HST rebate on new homes: development charge implications — model your revenue forecasts”,
“Ring of Fire acceleration: northern First Nations communities economic development opportunity”,
“Transit capital: GO extensions and subway milestones — confirm operating cost implications”,
“Operation Deterrence 2.0 ($32.5 M): border community municipalities benefit directly”,
“Postsecondary ($6.4 B): university/college cities — workforce and economic development signal”,
“Operating funding gap: still unresolved — priority advocacy for 2027 budget”,
],
tags: [“municipalities”, “housing”, “transit”, “northern-ontario”, “operating-funding”]
},
{
id: “postsecondary”,
titre: “Colleges, Universities & Indigenous Institutes”,
priorite: “high”,
resume: “The $6.4 B in new postsecondary funding is transformative — it directly addresses the financial crisis that has seen program cuts, layoffs and near-insolvencies at several institutions. The framing is economic — producing competitive graduates for the G7 economy. The details of allocation across institutions will determine who benefits most.”,
enjeux: [
“$6.4 B new funding: confirm allocation formula — how much goes to your institution?”,
“Sustainability focus: is this operating or capital? Multi-year or one-time? Details critical”,
“Indigenous Institutes explicitly included: confirm dedicated envelope vs. general allocation”,
“G7 competitiveness framing: expect strings attached around program mix and graduate outcomes”,
“Postsecondary + Ring of Fire link: resource development programs aligned with Ring of Fire opportunity”,
“Labour mobility (‘As of Right’): credential recognition changes will affect your programs”,
],
tags: [“postsecondary”, “colleges”, “universities”, “indigenous-institutes”, “sustainability”]
},
{
id: “energy-nuclear-industry”,
titre: “Energy Sector & Nuclear Industry”,
priorite: “high”,
resume: “Wesleyville is the headline — a new nuclear project agreement signed, 10,500 jobs, $235 B GDP impact. Darlington Unit 4 refurbishment is complete, ahead of schedule and under budget — a strong proof of concept. Four SMRs at Darlington are first in G7. Ontario is actively pursuing global export of its nuclear expertise.”,
enjeux: [
“Wesleyville nuclear project: 10,500 jobs — supply chain opportunities across Ontario and Canada”,
“Four SMRs at Darlington: first in G7 — global proof of concept with export implications”,
“Nuclear export strategy: global opportunity — engage with Ontario’s international positioning”,
“Darlington refurbishment ($150 M under budget): strong cost management record for investors”,
“Ring of Fire energy corridor: energy infrastructure required for road and mining development”,
“Electricity Rebate (OER): government committed to stable, predictable electricity costs — pricing signal”,
],
tags: [“nuclear”, “energy”, “SMR”, “Wesleyville”, “Darlington”, “export”]
},
{
id: “tech-ai-defence”,
titre: “Technology, AI & Defence Industry”,
priorite: “high”,
resume: “The Protect Ontario Account Investment Fund ($4 B) explicitly targets AI, defence and advanced manufacturing — and is designed to crowd in pension and private capital. Ontario is actively bidding to host the federal Defence, Security and Resilience Bank in Toronto. The global defence spending surge creates a generational opportunity for Ontario’s aerospace and tech clusters.”,
enjeux: [
“Protect Ontario Account Investment Fund ($4 B): AI and defence explicitly included — engage early on eligibility”,
“Defence, Security and Resilience Bank: Toronto bid — 3,500 direct + thousands indirect jobs if successful”,
“Federal defence spending surge: Ontario positioned as key supplier — align product/service roadmap”,
“One Project, One Process framework: if your project involves AI infrastructure or defence tech facilities, engage”,
“Postsecondary $6.4 B: talent pipeline for AI and defence companies — engage with institutions now”,
“Nuclear/SMR tech: global export opportunity — dual-use technology applications”,
],
tags: [“AI”, “defence”, “tech”, “investment-fund”, “DSRB”, “nuclear”]
},
],

glossaire: [
{ terme: “Protect Ontario Account Investment Fund”, def: “New $4 B fund announced in Budget 2026 to invest in high-growth industries including AI, defence, advanced manufacturing, life sciences, biotechnology and critical minerals R&D. Designed to crowd in pension fund and private capital alongside provincial investment.” },
{ terme: “One Project, One Process”, def: “Ontario’s framework to speed up approvals for major resource projects — advanced exploration, mine development and expansion. Removes duplication between provincial and federal processes. Three projects already fast-tracked: Frontier Lithium, Canada Nickel Crawford, and Kinross Great Bear.” },
{ terme: “HST rebate (new homes)”, def: “Budget 2026’s signature housing measure: removes the full 8% provincial HST on new homes valued up to $1 million, with relief maintained for homes valued up to $1.5 million. Up to $80,000 in savings. Retroactive to March 20, 2025. Ontario pressing Ottawa to match.” },
{ terme: “POWER Centres”, def: “Protect Ontario Workers Employment Response Centres — provincial support hubs providing transition assistance, referrals and access to Employment Ontario programs for workers affected by tariff-related layoffs. Helped nearly 15,000 workers in 2025.” },
{ terme: “Ring of Fire”, def: “Mineral-rich area in Northern Ontario’s Far North. Budget 2026 accelerates all-season road construction by 5 years: construction starts June 2026, roads open November 2030. Supported by agreements with three First Nations and a federal co-operation agreement eliminating duplication in environmental assessments.” },
{ terme: “Small Modular Reactor (SMR)”, def: “Compact nuclear reactors being built at Ontario’s Darlington site — the first in the G7. Four SMRs planned, which will produce enough electricity to power approximately 1.2 million homes when complete. Part of Ontario’s nuclear expansion strategy that is expected to create 150,000 jobs.” },
{ terme: “Ontario Electricity Rebate (OER)”, def: “Provincial program that reduces electricity bills for residential and eligible non-residential consumers. The OER decreases monthly bills for a typical residential consumer by approximately $36, providing stable and predictable electricity costs.” },
{ terme: “One Fare”, def: “Ontario’s transit fare integration program allowing GTA commuters to travel on GO Transit, TTC and participating local transit systems on a single fare. Extended for two more years in Budget 2026. Saves daily users up to $1,600 per year — $233 million saved since launch in 2024.” },
{ terme: “Tax Action Plan”, def: “Ontario’s multi-year plan to make the province the most competitive jurisdiction in the G7. Budget 2026 measures include: small business corporate income tax rate cut by more than 30%, accelerated capital depreciation ($3.5 B relief over 4 years), and elimination of interprovincial trade barriers.” },
{ terme: “As of Right labour mobility”, def: “First-in-Canada regulation in force since January 2026 that allows qualified workers to practice their regulated trade or profession in Ontario without requiring additional registration or re-certification from their home province. Directly addresses skilled labour shortages.” },
],

comparaison: {
annee_precedente: “2025-2026”,
elements: [
{ label: “Deficit”, avant: “-$14.6 B (2025 Budget forecast)”, apres: “-$13.8 B”, direction: “up” },
{ label: “2025-26 actual deficit (revised)”, avant: “-$14.6 B (forecast)”, apres: “-$12.3 B (interim)”, direction: “up” },
{ label: “Capital plan (annual)”, avant: “$33 B”, apres: “$37 B”, direction: “up” },
{ label: “Capital plan (10-yr total)”, avant: “$200 B+”, apres: “$210 B+”, direction: “up” },
{ label: “GDP growth 2025 (actual)”, avant: “0.8% (forecast)”, apres: “1.2% (actual)”, direction: “up” },
{ label: “Path to balance”, avant: “2027-28”, apres: “2028-29”, direction: “down” },
{ label: “Small business tax rate”, avant: “Standard rate”, apres: “Cut by >30%”, direction: “up” },
{ label: “HST on new homes”, avant: “8% provincial portion”, apres: “Removed (up to $1 M)”, direction: “up” },
]
},

sources: {
plan: “https://www.ontario.ca/document/2026-ontario-budget”,
bref: “https://www.ontario.ca/page/ontario-budget”,
},

notebook: {
url: “”,
label: “Explore the Ontario Budget Notebook”,
note: “NotebookLM by Google · Free · Google account required”,
},
};