// =========================================================
// BUDGET ONTARIO 2026 — DONNÉES FRANÇAISES
// À remplacer le 25 mars 2026 après le dépôt
// Ministre des Finances : Peter Bethlenfalvy
// =========================================================

const BUDGET_FR = {
  lang: "fr",
  annee: "2026-2027",
  titre: "Budget Ontario 2026",
  titre_complet: "Bâtir l'Ontario : Budget 2026",
  date_depot: "25 mars 2026",
  ministre: "Peter Bethlenfalvy",
  status: "upcoming",

  quote: {
    texte: "L'économie ontarienne est résiliente. Nous investirons dans les gens et les infrastructures qui font la force de cette province.",
    auteur: "Peter Bethlenfalvy",
    titre: "Ministre des Finances de l'Ontario",
  },

  chiffres: [
    { label: "Déficit prévu", valeur: "~18 G$", note: "Estimation — à confirmer le 25 mars", variation: "Analyse à venir le 25 mars", direction: "neutral" },
    { label: "Budget total", valeur: "~220 G$", note: "Estimation — le plus important de l'histoire", variation: "Analyse à venir", direction: "neutral" },
    { label: "Plan d'infrastructure", valeur: "À confirmer", note: "Des milliards attendus", variation: "Analyse à venir", direction: "neutral" },
    { label: "Croissance du PIB (2026)", valeur: "~1,0 %", note: "Impacté par les tarifs américains", variation: "Plus lent qu'en 2025", direction: "down" },
    { label: "Dépenses en santé", valeur: "À confirmer", note: "La plus grosse enveloppe", variation: "Analyse à venir", direction: "neutral" },
    { label: "Engagement logement", valeur: "À confirmer", note: "Objectif 1,5 M de logements — où en est-on?", variation: "Analyse à venir", direction: "neutral" },
  ],

  secteurs: [
    {
      id: "sante",
      titre: "Santé et soins de longue durée",
      depenses: "À confirmer — la plus grande enveloppe",
      variation: "Analyse le 25 mars",
      priorite: "haute",
      resume: "L'analyse indépendante sera publiée le 25 mars après le dépôt du budget. Attendez-vous à un accent sur les listes d'attente chirurgicales, la capacité hospitalière, le personnel des soins de longue durée et le financement de la santé mentale.",
      points: [
        "Réduction des listes d'attente — l'arriéré chirurgical de l'Ontario reste critique",
        "Normes de dotation en soins de longue durée et financement",
        "Santé mentale et dépendances — engagement post-2019",
        "Expansion des soins à domicile et en milieu communautaire",
        "RAMO et implications du régime national d'assurance médicaments",
      ],
      tags: ["santé", "hôpitaux", "soins-longue-durée", "santé-mentale", "RAMO"]
    },
    {
      id: "education",
      titre: "Éducation et services de garde",
      depenses: "À confirmer",
      variation: "Analyse le 25 mars",
      priorite: "haute",
      resume: "L'analyse indépendante sera publiée le 25 mars. Suivez le financement de la construction d'écoles, les mesures d'abordabilité des services de garde dans le cadre de l'accord fédéral à 10 $/jour, et les engagements pour les enseignants.",
      points: [
        "Services de garde à 10 $/jour — état de mise en œuvre de l'accord fédéral",
        "Construction de nouvelles écoles pour répondre aux pressions démographiques",
        "Financement de l'éducation spécialisée face à des besoins croissants",
        "Formule de financement des conseils scolaires",
        "Investissements en STIM et en formation professionnelle",
      ],
      tags: ["éducation", "services-de-garde", "écoles", "STIM", "métiers"]
    },
    {
      id: "infrastructure",
      titre: "Infrastructures et transport en commun",
      depenses: "À confirmer — plusieurs milliards attendus",
      variation: "Analyse le 25 mars",
      priorite: "haute",
      resume: "L'analyse indépendante sera publiée le 25 mars. Le plan d'infrastructure de l'Ontario confirmera probablement les expansions majeures du transport en commun, la construction d'autoroutes (401, 413, contournement de Bradford) et les nouvelles constructions hospitalières.",
      points: [
        "Autoroute 413 et contournement de Bradford — mise à jour des coûts",
        "Expansion du métro de Toronto (Ontario Line, Eglinton Crosstown)",
        "Électrification et expansion du réseau GO",
        "Construction de nouveaux hôpitaux dans la province",
        "Arriéré d'entretien — routes, ponts, infrastructure d'eau",
      ],
      tags: ["transport-en-commun", "autoroutes", "GO", "métro", "hôpitaux", "infrastructure"]
    },
    {
      id: "economie",
      titre: "Économie et compétitivité",
      depenses: "À confirmer",
      variation: "Analyse le 25 mars",
      priorite: "haute",
      resume: "L'analyse indépendante sera publiée le 25 mars. Le contexte des tarifs américains dominera cette section — attendez-vous à des mesures pour protéger les fabricants ontariens, des soutiens au secteur automobile et des investissements en compétitivité.",
      points: [
        "Réponse aux tarifs américains — secteur automobile et acier/aluminium",
        "Minéraux critiques et investissements dans la chaîne d'approvisionnement",
        "Compétitivité des entreprises et réforme réglementaire",
        "Soutien à l'innovation et à la R&D",
        "Diversification des marchés d'exportation au-delà des États-Unis",
      ],
      tags: ["économie", "tarifs", "automobile", "fabrication", "minéraux", "innovation"]
    },
    {
      id: "logement",
      titre: "Logement et itinérance",
      depenses: "À confirmer",
      variation: "Analyse le 25 mars",
      priorite: "haute",
      resume: "L'analyse indépendante sera publiée le 25 mars. La promesse de 1,5 million de logements de l'Ontario et la crise de l'itinérance dans les grands centres seront au cœur du débat.",
      points: [
        "1,5 million de logements d'ici 2031 — l'objectif tenu ou révisé?",
        "Financement du logement abordable et soutien aux OBNL",
        "Réponse à l'itinérance — campements, capacité d'hébergement",
        "Mise à jour des lois habilitantes pour les municipalités",
        "Incitatifs pour les premiers acheteurs et taxe de cession immobilière",
      ],
      tags: ["logement", "itinérance", "abordable", "locataires", "municipalités"]
    },
    {
      id: "environnement",
      titre: "Environnement et énergie propre",
      depenses: "À confirmer",
      variation: "Analyse le 25 mars",
      priorite: "moyenne",
      resume: "L'analyse indépendante sera publiée le 25 mars. L'Ontario a d'importants investissements en énergie propre prévus — remises à neuf nucléaires, infrastructure VÉ, modernisation du réseau.",
      points: [
        "Remise à neuf du nucléaire — Pickering et Bruce",
        "Déploiement de l'infrastructure de recharge VÉ",
        "Expansion du réseau électrique pour la demande d'électrification",
        "Investissements en résilience climatique et contre les inondations",
        "Réglementation de l'extraction des agrégats et des ressources",
      ],
      tags: ["environnement", "énergie", "nucléaire", "VÉ", "climat"]
    },
    {
      id: "nord-rural",
      titre: "Nord et régions rurales de l'Ontario",
      depenses: "À confirmer",
      variation: "Analyse le 25 mars",
      priorite: "moyenne",
      resume: "L'analyse indépendante sera publiée le 25 mars. Le Nord de l'Ontario fait face à des pressions uniques : crise forestière, soins de santé éloignés, lacunes infrastructurelles et services aux communautés autochtones.",
      points: [
        "Secteur forestier — réponse aux tarifs américains spécifique à l'Ontario",
        "Accès aux soins de santé à distance et télémédecine",
        "Entretien des routes et ponts du Nord",
        "Services aux communautés autochtones et infrastructure",
        "Exploitation minière et minéraux critiques dans la Ceinture de feu",
      ],
      tags: ["nord", "rural", "forêt", "autochtones", "ceinture-de-feu"]
    },
  ],

  audiences: [
    {
      id: "familles",
      titre: "Familles",
      priorite: "haute",
      resume: "Les familles ontariennes font face au coût de la vie le plus élevé au Canada. Le budget 2026 sera jugé sur l'abordabilité des services de garde, les coûts de logement et les conditions dans les écoles.",
      mesures: [
        { label: "Services de garde à 10 $/jour", valeur: "À confirmer", note: "État de l'accord fédéral" },
        { label: "Financement de la rentrée", valeur: "À confirmer", note: "Analyse par élève à venir" },
        { label: "Mesures d'abordabilité du logement", valeur: "À confirmer", note: "Premiers acheteurs" },
      ],
      tags: ["familles", "services-de-garde", "écoles", "logement"]
    },
    {
      id: "aines",
      titre: "Aînés",
      priorite: "haute",
      resume: "La réforme des soins de longue durée est l'enjeu déterminant pour les aînés en Ontario post-COVID. Le budget sera scruté sur les normes de dotation, la construction de nouvelles maisons SLD et l'expansion des soins à domicile.",
      mesures: [
        { label: "Engagement sur les heures de soins SLD", valeur: "À confirmer", note: "Progrès vers 4 h/jour" },
        { label: "Nouveaux lits SLD", valeur: "À confirmer", note: "Pipeline de construction" },
        { label: "Expansion des soins à domicile", valeur: "À confirmer", note: "Services successeurs aux CASC" },
      ],
      tags: ["aînés", "soins-longue-durée", "soins-domicile"]
    },
    {
      id: "travailleurs",
      titre: "Travailleurs et chercheurs d'emploi",
      priorite: "haute",
      resume: "Les tarifs américains menacent les emplois manufacturiers en Ontario — particulièrement dans le secteur automobile. Les travailleurs attendent des mesures de protection contre les mises à pied, des programmes de requalification et des engagements sur le salaire minimum.",
      mesures: [
        { label: "Protection du secteur automobile", valeur: "À confirmer", note: "Réponse aux tarifs" },
        { label: "Programmes de requalification", valeur: "À confirmer", note: "Pour les travailleurs déplacés" },
        { label: "Salaire minimum 2026", valeur: "À confirmer", note: "Hausse annuelle en attente" },
      ],
      tags: ["travailleurs", "automobile", "tarifs", "requalification", "salaire-minimum"]
    },
    {
      id: "locataires",
      titre: "Locataires et acheteurs",
      priorite: "haute",
      resume: "L'Ontario a le marché locatif le moins abordable au Canada. Les premiers acheteurs font face à des prix records. Le budget sera testé sur l'efficacité réelle des mesures d'offre.",
      mesures: [
        { label: "Logements abordables", valeur: "À confirmer", note: "Nouveaux engagements" },
        { label: "Programmes d'aide au loyer", valeur: "À confirmer", note: "Pour locataires à faible revenu" },
        { label: "Incitatifs premiers acheteurs", valeur: "À confirmer", note: "Allègement taxe de cession?" },
      ],
      tags: ["locataires", "logement", "abordable", "premiers-acheteurs"]
    },
    {
      id: "entreprises",
      titre: "Entreprises et employeurs",
      priorite: "haute",
      resume: "Les entreprises ontariennes naviguent dans un contexte de tarifs américains, pénuries de main-d'œuvre et hausse des coûts d'exploitation. Le budget déterminera si l'Ontario reste compétitif.",
      mesures: [
        { label: "Ensemble de mesures tarifaires", valeur: "À confirmer", note: "Soutien aux PME attendu" },
        { label: "Environnement fiscal", valeur: "À confirmer", note: "Analyse des taux à venir" },
        { label: "Attraction des investissements", valeur: "À confirmer", note: "Focus minéraux critiques" },
      ],
      tags: ["entreprises", "tarifs", "fiscal", "investissement", "PME"]
    },
    {
      id: "autochtones",
      titre: "Communautés autochtones",
      priorite: "haute",
      resume: "L'Ontario abrite la plus grande population autochtone urbaine au Canada et des territoires des Premières Nations sous traités importants. L'infrastructure, les services de santé et la participation économique sont les priorités.",
      mesures: [
        { label: "Infrastructure communautaire", valeur: "À confirmer", note: "Eau, logement, routes" },
        { label: "Services de santé", valeur: "À confirmer", note: "Accès à distance prioritaire" },
        { label: "Participation économique", valeur: "À confirmer", note: "Opportunité Ceinture de feu" },
      ],
      tags: ["autochtones", "premières-nations", "infrastructure", "ceinture-de-feu"]
    },
  ],

  parties_prenantes: [
    {
      id: "hopitaux",
      titre: "Hôpitaux et organisations de santé",
      priorite: "haute",
      resume: "Le secteur hospitalier ontarien est sous pression soutenue — infrastructure vieillissante, arriérés chirurgicaux et pénuries de main-d'œuvre. Le budget signalera si la province est sérieuse quant à une réforme structurelle.",
      enjeux: [
        "Financement de base des hôpitaux — suit-il l'inflation et le volume?",
        "Constructions capitales : quels hôpitaux reçoivent des annonces vs. de vraies pelletées?",
        "Financement des listes d'attente chirurgicales — nouvelles heures de bloc opératoire?",
        "Santé mentale et dépendances — enveloppe dédiée ou noyée dans la santé générale?",
        "Stratégie de main-d'œuvre — recrutement, rétention, professionnels formés à l'étranger",
      ],
      tags: ["hôpitaux", "santé", "chirurgie", "santé-mentale", "main-d'œuvre"]
    },
    {
      id: "municipalites",
      titre: "Municipalités et AMO",
      priorite: "haute",
      resume: "Les municipalités ontariennes sont en crise fiscale — téléchargement, coûts de l'itinérance, pressions liées au logement et déficits d'infrastructure. Le budget sera mis à l'épreuve sur le financement municipal.",
      enjeux: [
        "Financement opérationnel municipal — la contribution provinciale augmente-t-elle?",
        "Coûts de l'itinérance et des refuges — qui supporte le fardeau?",
        "Lois habilitantes sur le logement — carottes ou bâtons pour les municipalités?",
        "Formule de financement du transport en commun — GO, TTC, transit régional",
        "Transferts d'infrastructure — adéquats pour l'entretien?",
      ],
      tags: ["municipalités", "logement", "transport-en-commun", "infrastructure", "itinérance"]
    },
    {
      id: "construction",
      titre: "Construction et immobilier",
      priorite: "haute",
      resume: "Le secteur de la construction est le moteur des 1,5 million de logements de l'Ontario. Les pénuries de main-d'œuvre, les délais d'obtention de permis et les coûts des matériaux sont les trois obstacles. Le budget doit s'attaquer aux trois.",
      enjeux: [
        "Formation en métiers et apprentissage — 100 000+ travailleurs nécessaires",
        "Réforme des permis — vitesse vs. imputabilité",
        "Pipeline de contrats d'infrastructure — prévisibilité pour l'industrie",
        "Immigration en métiers spécialisés — filières spécifiques à l'Ontario",
        "Productivité dans la construction — investissement en innovation",
      ],
      tags: ["construction", "logement", "métiers", "permis", "infrastructure"]
    },
    {
      id: "secteur-auto",
      titre: "Secteur automobile et fabrication",
      priorite: "haute",
      resume: "Les tarifs américains ont mis le secteur automobile de l'Ontario — cœur de la fabrication canadienne — dans une position précaire. Le budget est un test direct de la capacité de l'Ontario à protéger 150 000+ emplois automobiles.",
      enjeux: [
        "Mesures d'atténuation des tarifs — financement-relais, soutien aux travailleurs",
        "Transition vers les VÉ — investissement dans les VÉ et batteries fabriqués en Ontario",
        "Résilience de la chaîne d'approvisionnement — rapatriement et approvisionnement domestique",
        "CAMI, Stellantis, Ford, GM — état des engagements des usines",
        "Chaîne d'approvisionnement en minéraux critiques pour les batteries VÉ",
      ],
      tags: ["automobile", "fabrication", "tarifs", "VÉ", "chaîne-approvisionnement"]
    },
    {
      id: "communautaire",
      titre: "Organismes communautaires et services sociaux",
      priorite: "haute",
      resume: "Le secteur communautaire ontarien supporte une part disproportionnée du filet de sécurité sociale. L'itinérance, la santé mentale, l'insécurité alimentaire et les services contre la violence conjugale sont chroniquement sous-financés.",
      enjeux: [
        "Stabilité du financement de base — pluriannuel vs. incertitude annuelle",
        "Réponse à l'itinérance — politique sur les campements et capacité d'hébergement",
        "Banques alimentaires et aide d'urgence — croissance de 1,3 G$ en Ontario",
        "Refuges pour femmes victimes de violence — listes d'attente record",
        "POSPH et OW — taux vs. coût de la vie",
      ],
      tags: ["communautaire", "itinérance", "banques-alimentaires", "violence-conjugale", "POSPH"]
    },
  ],

  glossaire: [
    { terme: "Déficit", def: "L'écart entre les revenus totaux et les dépenses totales de l'Ontario pour un exercice financier. Le déficit de l'Ontario a considérablement augmenté depuis la COVID. Le déficit prévu pour 2026-2027 devrait être d'environ 18 milliards de dollars avant les nouvelles mesures." },
    { terme: "Dette nette", def: "La dette accumulée totale de l'Ontario moins ses actifs financiers. L'Ontario porte une des dettes sous-nationales les plus importantes au monde — plus de 400 milliards de dollars. Exprimée en % du PIB pour les comparaisons interprovinciales." },
    { terme: "RAMO", def: "Régime d'assurance-maladie de l'Ontario — le programme d'assurance-santé financé par la province. Couvre la plupart des services médicaux et hospitaliers pour les résidents ontariens. Ne couvre pas les médicaments d'ordonnance pour la plupart des adultes en âge de travailler (contrairement au Québec)." },
    { terme: "Entretien courant", def: "Terme gouvernemental pour le coût du maintien des infrastructures existantes aux standards fonctionnels. L'Ontario fait face à un arriéré de plusieurs milliards de dollars en entretien courant des hôpitaux, des écoles, du transport en commun et des routes." },
    { terme: "POSPH / OT", def: "Programme ontarien de soutien aux personnes handicapées et Ontario au travail — les principaux programmes d'aide sociale de l'Ontario. Les taux sont chroniquement en dessous du seuil de pauvreté, créant une pression pour des augmentations significatives." },
    { terme: "Taxe de cession immobilière", def: "Taxe provinciale payée lors du transfert de propriété en Ontario. Toronto prélève une taxe de cession immobilière municipale supplémentaire. Souvent citée dans les discussions sur l'abordabilité du logement, notamment pour les premiers acheteurs." },
    { terme: "Ceinture de feu", def: "Zone riche en minéraux du Nord de l'Ontario contenant d'importants gisements de chromite, nickel, cuivre et métaux du groupe du platine. Nécessite des investissements majeurs en infrastructure routière pour y accéder. Stratégique pour les chaînes d'approvisionnement en minéraux critiques." },
    { terme: "AMO", def: "Association des municipalités de l'Ontario — le principal groupe de pression représentant les 444 municipalités de l'Ontario. Les soumissions pré-budgétaires de l'AMO orientent les priorités municipales dans les négociations budgétaires." },
    { terme: "Budget de base", def: "Dépenses de programme continues avant les nouveaux investissements. Quand les gouvernements annoncent de 'nouveaux fonds', c'est en plus du budget de base. Comprendre le budget de base est essentiel pour distinguer les vrais nouveaux investissements des dépenses existantes rebaptisées." },
    { terme: "Capital vs. opérationnel", def: "Les dépenses en capital construisent ou rénovent des actifs (hôpitaux, écoles, autoroutes). Les dépenses opérationnelles financent les services courants (salaires, programmes). Les gouvernements utilisent souvent les annonces en capital pour paraître généreux tout en comprimant les budgets opérationnels." },
  ],

  comparaison: {
    annee_precedente: "2025-2026",
    elements: [
      { label: "Déficit prévu", avant: "~14,6 G$", apres: "À confirmer (25 mars)", direction: "neutral" },
      { label: "Dépenses totales", avant: "~207 G$", apres: "À confirmer (25 mars)", direction: "neutral" },
      { label: "Dépenses en santé", avant: "~85 G$", apres: "À confirmer (25 mars)", direction: "neutral" },
      { label: "Dépenses en éducation", avant: "~35 G$", apres: "À confirmer (25 mars)", direction: "neutral" },
      { label: "Plan d'infrastructure", avant: "À confirmer", apres: "À confirmer (25 mars)", direction: "neutral" },
      { label: "Dette nette (% PIB)", avant: "~40 %", apres: "À confirmer (25 mars)", direction: "neutral" },
    ]
  },

  sources: {
    plan: "https://www.ontario.ca/fr/page/budget-de-lontario",
    bref: "https://www.ontario.ca/fr/page/budget-de-lontario",
  },

  notebook: {
    url: "",
    label: "Explorer le notebook du budget Ontario",
    note: "NotebookLM par Google · Gratuit · Compte Google requis",
  },
};
