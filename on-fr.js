// =========================================================
// BUDGET ONTARIO 2025 — DONNÉES FRANÇAISES
// « Un plan pour protéger l'Ontario »
// Ministre des Finances : Peter Bethlenfalvy
// Déposé : avril 2025
// =========================================================

const BUDGET_FR = {
  lang: "fr",
  annee: "2025-2026",
  titre: "Budget Ontario 2025",
  titre_complet: "Un plan pour protéger l'Ontario",
  date_depot: "Avril 2025",
  ministre: "Peter Bethlenfalvy",
  status: "live",

  quote: {
    texte: "Nous devons opérer au sein de notre économie un changement audacieux et durable qui fera de l'Ontario l'endroit le plus concurrentiel où investir, créer des emplois et faire des affaires au sein du G7. Nous devons agir maintenant.",
    auteur: "Peter Bethlenfalvy",
    titre: "Ministre des Finances de l'Ontario — Budget 2025",
  },

  chiffres: [
    { label: "Déficit 2025-2026", valeur: "-14,6 G$", note: "Réponse aux tarifs, infrastructure et services", variation: "En hausse vs -6,0 G$ en 2024-2025", direction: "down" },
    { label: "Retour à l'équilibre", valeur: "2027-2028", note: "Excédent prévu de 0,2 G$", variation: "Déficit de -7,8 G$ en 2026-2027", direction: "up" },
    { label: "Plan d'infrastructure (10 ans)", valeur: "200 G$+", note: "Routes, transports, hôpitaux, écoles", variation: "Plus de 33 G$ en 2025-2026", direction: "up" },
    { label: "Dette nette/PIB", valeur: "37,9 %", note: "Prévision 2025-2026 — cible sous 40 %", variation: "En baisse vs 39,2 % (budget 2024)", direction: "up" },
    { label: "Soutien immédiat aux entreprises", valeur: "11 G$", note: "Réponse tarifaire : reports + remboursements CSPAAT", variation: "Nouveau — le plus grand plan de l'histoire de l'Ontario", direction: "neutral" },
    { label: "Croissance du PIB réel (2025)", valeur: "0,8 %", note: "Impact des tarifs — en baisse vs 1,5 % en 2024", variation: "Reprise prévue à 1,0 % (2026), 1,9 % (2027)", direction: "down" },
  ],

  secteurs: [
    {
      id: "tarifs-economie",
      titre: "Réponse aux tarifs et protection économique",
      depenses: "11 G$ immédiatement + 5 G$ Compte pour protéger l'Ontario",
      variation: "Nouveau — thème central du budget 2025",
      priorite: "haute",
      resume: "Le thème central du budget 2025. Les tarifs américains exercent une pression aiguë sur l'économie de l'Ontario, notamment sur le secteur automobile. La réponse du gouvernement est le plus grand plan de protection économique de l'histoire de l'Ontario. Les reports d'impôt donnent du temps. Le Compte pour protéger l'Ontario est le filet de sécurité stratégique. Le vrai pari à long terme : la réforme réglementaire, les minéraux critiques et la diversification loin de la dépendance aux États-Unis.",
      points: [
        "9 G$ en reports d'impôts provinciaux pour 80 000 entreprises — liquidités, pas d'annulation",
        "2 G$ en remboursements aux employeurs de la CSPAAT (4 G$ au total sur l'année) pour maintenir les emplois",
        "5 G$ Compte pour protéger l'Ontario — fonds stratégique pour les entreprises touchées par les tarifs",
        "1 G$ en liquidités immédiates pour les entreprises ayant épuisé les autres sources de financement",
        "40 M$ Programme pour les collectivités touchées par les échanges commerciaux (PCEC)",
        "Crédit d'impôt pour la fabrication en Ontario bonifiée — 1,3 G$ additionnels sur 3 ans",
        "50 M$ Fonds Ontario ensemble commercial — pour se reconvertir et trouver de nouveaux marchés",
        "Démantèlement des barrières au commerce intérieur — coût estimé à 200 G$ par an pour l'économie canadienne",
      ],
      tags: ["tarifs", "automobile", "économie", "fabrication", "CSPAAT", "commerce"]
    },
    {
      id: "infrastructure-transport",
      titre: "Infrastructures et transport en commun",
      depenses: "200 G$+ sur 10 ans · Transport en commun 61 G$ · Routes 30 G$",
      variation: "Le plus grand plan d'infrastructure de l'histoire de l'Ontario",
      priorite: "haute",
      resume: "L'envergure est historique — 200 G$+ sur 10 ans. Le transport en commun (61 G$) est le plus grand secteur. Projets clés : Ontario Line, prolongement du métro de Scarborough, prolongement vers l'ouest de la Croix de Lumière, prolongement Yonge Nord. Routes : autoroutes 413, contournement de Bradford, faisabilité du tunnel sous la 401. La vraie question est toujours la vitesse de livraison versus le volume des annonces.",
      points: [
        "Transport en commun : 61 G$ sur 10 ans — Ontario Line, Scarborough, Croix de Lumière Ouest, Yonge Nord",
        "GO 2.0 : nouvelles lignes de train de passagers via le centre-ville de Toronto, Etobicoke, York Region vers Bolton",
        "Routes : près de 30 G$ — autoroute 413, contournement de Bradford, faisabilité du tunnel sous la 401",
        "758 M$ pour 55 nouvelles rames de métro de la ligne 2 du TTC",
        "850 M$ pour remettre à neuf les voitures du réseau GO",
        "Rétablissement du Northlander — service ferroviaire Nord de l'Ontario — Toronto",
        "Élargissement des routes 11/17 et 17 dans le Nord de l'Ontario",
        "Jumelage du pont Garden City Skyway sur le canal Welland (route QEW)",
      ],
      tags: ["transport-en-commun", "routes", "GO", "Ontario-Line", "autoroute-413", "contournement-Bradford"]
    },
    {
      id: "sante",
      titre: "Soins de santé",
      depenses: "2,1 G$ soins primaires · 56 G$ hôpitaux (10 ans) · 6,4 G$ SLD (depuis 2019)",
      variation: "Les soins primaires sont l'investissement phare",
      priorite: "haute",
      resume: "Les soins primaires sont l'investissement phare — 2,1 G$ pour connecter chaque Ontarien à un médecin de famille ou une équipe de soins primaires, sous la direction de la Dre Jane Philpott. C'est une réforme structurelle, pas seulement des dollars. L'infrastructure hospitalière est massive (56 G$ sur 10 ans) mais échelonnée sur une décennie. Les lits de SLD sont un engagement clé avec des données de suivi réelles.",
      points: [
        "2,1 G$ pour connecter chaque personne en Ontario à un médecin de famille ou une équipe de soins primaires",
        "300 M$ pour de nouvelles cliniques d'enseignement avec les facultés de médecine de l'Ontario",
        "56 G$ en capital hospitalier sur 10 ans — 50+ hôpitaux nouveaux ou améliorés, ~3 000 lits",
        "Hôpitaux clés : Grand River/St. Mary's, Brant Community, Southlake, Royal Victoria, Lake of the Woods",
        "SLD : 58 000 lits nouveaux ou modernisés d'ici 2028 — 23 977 approuvés ou en construction en avril 2025",
        "Nouveau crédit d'impôt pour les traitements de fertilité en Ontario — jusqu'à 20 000 $ en dépenses admissibles",
        "Programme de soutien aux résidences pour personnes âgées prolongé",
      ],
      tags: ["santé", "soins-primaires", "hôpitaux", "SLD", "fertilité", "médecin-famille"]
    },
    {
      id: "education",
      titre: "Éducation et services de garde",
      depenses: "30 G$ sur 10 ans (capital) · 2,5 G$ Fonds de développement des compétences",
      variation: "Accent sur les constructions et les places de garde",
      priorite: "haute",
      resume: "L'investissement en éducation est dominé par le capital — 30 G$ sur 10 ans pour la construction d'écoles et de places de garde. Le gouvernement continue de livrer les services de garde à 10 $/jour. La formation professionnelle obtient un coup de pouce majeur — 2,5 G$ au total dans le Fonds de développement des compétences, témoignant de la vision de l'éducation comme infrastructure économique.",
      points: [
        "30 G$ sur 10 ans dont ~23 G$ en subventions capital pour les écoles et services de garde",
        "Nouvelles écoles : Sudbury, Windsor, Ottawa, Newcastle, Oshawa, Stouffville",
        "Fonds de développement des compétences : 2,5 G$ au total (+1 G$ nouveau) — métiers, fabrication, construction",
        "Services de garde à 10 $/jour : livraison continue dans le cadre de l'accord fédéral",
        "10 M$ en bourses pour étudiants des Premières Nations en développement des ressources",
        "Formation en STIM et en métiers spécialisés dans le cadre de la stratégie de compétitivité économique",
        "Postsecondaire : 5 G$+ sur 10 ans dont 2 G$+ en subventions capital",
      ],
      tags: ["éducation", "écoles", "services-de-garde", "compétences", "métiers", "postsecondaire"]
    },
    {
      id: "mineraux-critiques",
      titre: "Minéraux critiques et Ceinture de feu",
      depenses: "Plusieurs milliards — dans l'ensemble de l'économie",
      variation: "La réforme des permis est le changement clé",
      priorite: "haute",
      resume: "La réforme des permis est le fait saillant : réduire les délais d'approbation de 15+ ans à moins de 5. Cette promesse réglementaire est plus déterminante que tout montant en dollars. Le triplement de la garantie de participation autochtone (de 1 G$ à 3 G$) crée de véritables occasions de partenariat. L'accès routier à la Ceinture de feu est l'habilitateur physique d'un actif économique potentiellement générateur de richesse pour des générations.",
      points: [
        "Réforme des permis : réduire les délais d'approbation de 15+ ans à moins de 5 ans",
        "Nouvelle Stratégie ontarienne autonome pour les minéraux critiques",
        "Garanties de participation aux capitaux propres autochtones : plafond relevé de 1 G$ à 3 G$",
        "Fonds de participation des Autochtones élargi de 70 M$",
        "10 M$ pour les bourses des étudiants des Premières Nations en développement des ressources",
        "Accès routier à la Ceinture de feu — donne accès aux gisements de chromite, nickel, cuivre",
        "Minéraux critiques positionnés comme la réponse de l'Ontario à la dépendance aux tarifs américains",
      ],
      tags: ["ceinture-de-feu", "minéraux-critiques", "mines", "autochtones", "VÉ", "permis"]
    },
    {
      id: "logement",
      titre: "Logement et itinérance",
      depenses: "400 M$ FISEEH supplémentaires · 5 G$ Fonds pour bâtir l'Ontario",
      variation: "Accent sur l'offre et la gestion des campements",
      priorite: "haute",
      resume: "La politique du logement porte sur l'infrastructure habilitante (eau, égouts) plutôt que sur des programmes directs d'abordabilité. L'objectif de 1,5 million de logements d'ici 2031 est maintenu. L'itinérance est recadrée autour des carrefours de rétablissement en cas de dépendance — un changement majeur de politique. De nouveaux outils pour les municipalités en matière de campements signalent une ligne plus dure sur les espaces publics.",
      points: [
        "400 M$ supplémentaires au Fonds pour l'infrastructure des systèmes d'eau habilitant le logement (total 2 G$+)",
        "5 G$ supplémentaires au Fonds pour bâtir l'Ontario — logements abordables, SLD, énergie",
        "Sites d'injection de drogues près des écoles convertis en carrefours de rétablissement en cas de dépendance et d'itinérance",
        "75,5 M$ supplémentaires pour la gestion des campements et l'application de la loi",
        "Objectif de 1,5 million de logements d'ici 2031 maintenu",
        "Réforme du zonage et des permis pour accélérer les approbations de logements",
      ],
      tags: ["logement", "itinérance", "eau", "campements", "dépendance", "1,5M-logements"]
    },
    {
      id: "abordabilite",
      titre: "Abordabilité et coût de la vie",
      depenses: "1,7 G$ d'économies sur la taxe sur l'essence depuis 2022 · Remboursement de 200 $ versé",
      variation: "Maintien des mesures existantes",
      priorite: "haute",
      resume: "L'abordabilité dans le budget 2025 consiste à pérenniser les mesures existantes plutôt qu'à lancer de nouveaux grands programmes. Les réductions de la taxe sur l'essence sont permanentes. Les péages sur l'autoroute 407 Est sont supprimés. Le programme Une seule tarification permet d'économiser 1 600 $/an. Le remboursement de 200 $ a déjà été versé.",
      points: [
        "Remboursement de 200 $ versé à chaque adulte et enfant admissible en Ontario",
        "Réductions de la taxe sur l'essence et les carburants rendues permanentes — 1,7 G$ économisés depuis 2022",
        "Péages sur l'autoroute 407 Est éliminés — loi interdisant leur réintroduction sur les autoroutes publiques",
        "Programme Une seule tarification : économies moyennes de 1 600 $/an pour les navetteurs quotidiens",
        "Vignettes de plaques d'immatriculation et péages sur les autoroutes 412 et 418 déjà éliminés",
        "Taxe sur le propane éliminée pour les véhicules routiers immatriculés",
        "Démantèlement des barrières au commerce intérieur — réduit les coûts des biens et services",
      ],
      tags: ["abordabilité", "taxe-essence", "péages", "une-seule-tarification", "remboursement"]
    },
    {
      id: "justice-securite",
      titre: "Sécurité publique et justice",
      depenses: "Dans l'enveloppe globale de la sécurité des collectivités",
      variation: "Opération Dissuasion lancée — sécurité frontalière et criminalité",
      priorite: "moyenne",
      resume: "La sécurité publique est une priorité phare du gouvernement Ford. L'Opération Dissuasion (lancée en janvier 2025) cible la sécurité aux frontières et les passages illégaux. Investissement important dans la formation policière, la réponse aux crimes armés et la capacité correctionnelle. La conversion des sites de consommation est autant une décision de sécurité publique que de santé.",
      points: [
        "Opération Dissuasion : sécurité aux frontières, drogues illégales et interdiction des armes à feu",
        "Unité d'appui aérien conjointe élargie pour la lutte contre la criminalité",
        "Armes à feu et gangs : nouveau financement pour les unités spécialisées",
        "Davantage de contrevenants violents récidivistes incarcérés — pression pour une réforme du cautionnement",
        "Formation d'un plus grand nombre de policiers dans toute la province",
        "Services de police des Premières Nations financés",
        "Nouvelle capacité dans les prisons provinciales",
        "Programmes de soutien pour les survivantes de la traite des personnes",
      ],
      tags: ["justice", "police", "frontière", "armes-gangs", "corrections", "traite-personnes"]
    },
  ],

  audiences: [
    {
      id: "travailleurs",
      titre: "Travailleurs et chercheurs d'emploi",
      priorite: "haute",
      resume: "Le budget 2025 est fondamentalement un budget pour les travailleurs — la menace tarifaire pesant sur les emplois manufacturiers de l'Ontario est la logique organisatrice de presque toutes les grandes mesures. La requalification professionnelle reçoit 2,5 G$ au total dans le Fonds de développement des compétences.",
      mesures: [
        { label: "Remboursements aux employeurs de la CSPAAT", valeur: "2 G$", note: "4 G$ au total sur l'année passée" },
        { label: "Fonds de développement des compétences (total)", valeur: "2,5 G$", note: "+1 G$ nouveau" },
        { label: "Centres de formation pour les travailleurs licenciés", valeur: "20 M$", note: "Nouveaux centres de soutien" },
        { label: "Soutien pour collectivités touchées par le commerce", valeur: "40 M$", note: "Pour les économies locales les plus durement touchées" },
      ],
      tags: ["travailleurs", "fabrication", "tarifs", "compétences", "requalification"]
    },
    {
      id: "familles",
      titre: "Familles",
      priorite: "haute",
      resume: "Les familles bénéficient du remboursement de 200 $ (déjà versé), des réductions permanentes de la taxe sur l'essence, de la suppression des péages et des économies sur le transport en commun. Les services de garde se poursuivent dans le cadre de l'accord fédéral à 10 $/jour. Le crédit d'impôt pour les traitements de fertilité est une nouvelle mesure ciblée.",
      mesures: [
        { label: "Remboursement de 200 $ par adulte et enfant admissible", valeur: "Versé", note: "Payé en début 2025" },
        { label: "Économies sur la taxe sur l'essence (depuis 2022)", valeur: "1,7 G$", note: "Maintenant permanentes" },
        { label: "Économies Une seule tarification (annuelles)", valeur: "1 600 $", note: "Navetteur quotidien moyen" },
        { label: "Crédit d'impôt pour les traitements de fertilité", valeur: "Nouveau", note: "Jusqu'à 20 000 $ en dépenses admissibles" },
      ],
      tags: ["familles", "abordabilité", "services-de-garde", "transport-en-commun", "fertilité"]
    },
    {
      id: "aines",
      titre: "Aînés",
      priorite: "haute",
      resume: "Les soins de longue durée sont l'enjeu déterminant pour les aînés — 58 000 lits nouveaux ou modernisés d'ici 2028, avec 23 977 déjà approuvés ou en construction. L'accès aux soins primaires (2,1 G$) bénéficie de manière disproportionnée aux aînés. Le programme de soutien aux résidences pour personnes âgées est prolongé.",
      mesures: [
        { label: "Lits SLD cibles d'ici 2028", valeur: "58 000", note: "6,4 G$ investis depuis 2019" },
        { label: "Lits SLD approuvés ou en construction", valeur: "23 977", note: "En avril 2025" },
        { label: "Connexion aux soins primaires", valeur: "2,1 G$", note: "Connecter chaque Ontarien à un médecin" },
        { label: "Programme résidences pour personnes âgées", valeur: "Prolongé", note: "Soutien pour les résidents" },
      ],
      tags: ["aînés", "SLD", "soins-primaires", "résidences-personnes-âgées"]
    },
    {
      id: "entreprises",
      titre: "Entreprises et employeurs",
      priorite: "haute",
      resume: "Le budget provincial le plus favorable aux entreprises depuis des années. Reports d'impôt, remboursements CSPAAT, bonification du crédit d'impôt manufacturier et le Compte de 5 G$ pour protéger l'Ontario — tous ciblés pour maintenir la viabilité des entreprises ontariennes face aux tarifs.",
      mesures: [
        { label: "Reports d'impôt pour 80 000 entreprises", valeur: "9 G$", note: "Soutien en liquidités — pas d'annulation" },
        { label: "Compte pour protéger l'Ontario", valeur: "5 G$", note: "Fonds stratégique pour la réponse aux tarifs" },
        { label: "Crédit d'impôt pour la fabrication en Ontario (additionnel)", valeur: "1,3 G$ / 3 ans", note: "Bonifié et élargi" },
        { label: "Fonds Ontario ensemble commercial", valeur: "50 M$", note: "Pour se reconvertir et trouver de nouveaux marchés" },
      ],
      tags: ["entreprises", "tarifs", "crédit-impôt", "fabrication", "commerce"]
    },
    {
      id: "navetteurs",
      titre: "Navetteurs et usagers du transport en commun",
      priorite: "haute",
      resume: "Deux grandes victoires pour les navetteurs : Une seule tarification (1 600 $/an d'économies) et la suppression des péages sur la 407 Est. Le plan capital de 61 G$ sur 10 ans pour le transport en commun est transformateur dans son envergure. Les embouteillages coûtent 56 G$/an à l'Ontario — justification pour les deux types d'investissements.",
      mesures: [
        { label: "Économies Une seule tarification (navetteur quotidien moyen)", valeur: "1 600 $/an", note: "Systèmes de transport participants" },
        { label: "Péages autoroute 407 Est éliminés", valeur: "Permanents", note: "Loi interdisant tout rétablissement" },
        { label: "Capital transport en commun (10 ans)", valeur: "61 G$", note: "Ontario Line, Eglinton, Yonge Nord" },
        { label: "Faisabilité GO 2.0", valeur: "En cours", note: "Nouvelles lignes incluant le centre-ville de Toronto" },
      ],
      tags: ["navetteurs", "transport-en-commun", "péages", "GO", "une-seule-tarification"]
    },
    {
      id: "autochtones",
      titre: "Communautés autochtones",
      priorite: "haute",
      resume: "Un budget significatif pour la participation économique autochtone. La garantie de participation aux capitaux propres est triplée (de 1 G$ à 3 G$). L'infrastructure routière de la Ceinture de feu et la stratégie sur les minéraux critiques créent de véritables opportunités économiques. Les services de police et les bourses des Premières Nations sont aussi financés.",
      mesures: [
        { label: "Plafond de la garantie de participation autochtone", valeur: "3 G$", note: "Triplé depuis 1 G$ — projets énergétiques" },
        { label: "Fonds de participation des Autochtones", valeur: "+70 M$", note: "Programme élargi" },
        { label: "Bourses pour étudiants des Premières Nations", valeur: "10 M$", note: "Carrières en développement des ressources" },
        { label: "Services de police des Premières Nations", valeur: "Financés", note: "Nouvel investissement" },
      ],
      tags: ["autochtones", "ceinture-de-feu", "capitaux-propres", "police", "bourses"]
    },
  ],

  parties_prenantes: [
    {
      id: "secteur-automobile",
      titre: "Secteur automobile et fabrication",
      priorite: "haute",
      resume: "Le budget 2025 est une réponse directe à la menace existentielle que les tarifs américains font peser sur le secteur automobile de l'Ontario. Les 9 G$ en reports d'impôt et le Compte de 5 G$ pour protéger l'Ontario sont des outils réels et immédiats. La confirmation par le gouvernement de l'engagement de 46 G$ en investissements VÉ/batteries envoie un signal critique aux constructeurs qui planifient leur prochain cycle.",
      enjeux: [
        "Reports d'impôt (9 G$) : répit pour les liquidités maintenant, mais planifiez pour l'échéance des reports",
        "Compte pour protéger l'Ontario (5 G$) : évaluez les critères d'admissibilité pour votre secteur",
        "Protection des investissements VÉ/batteries : le gouvernement réaffirme les 46 G$ (CAMI, Stellantis, Ford, GM)",
        "Crédit d'impôt pour la fabrication en Ontario : grande occasion pour les investissements en capital admissibles",
        "Reconversion de la chaîne d'approvisionnement : Fonds Ontario ensemble commercial (50 M$)",
        "Fonds de développement des compétences (2,5 G$) : programmes de requalification manufacturière",
      ],
      tags: ["automobile", "tarifs", "VÉ", "crédit-impôt", "chaîne-approvisionnement"]
    },
    {
      id: "hopitaux",
      titre: "Hôpitaux et organisations de santé",
      priorite: "haute",
      resume: "Le plan de capital hospitalier de 56 G$ est le plus grand chiffre en santé — mais réparti sur 10 ans. La réforme des soins primaires (2,1 G$) va remodeler les flux de patients. Question clé pour les administrateurs : l'adéquation du budget opérationnel. Les plans de capital ne signifient rien si vous ne pouvez pas embaucher du personnel pour les nouveaux lits.",
      enjeux: [
        "Subventions capital vs. opérationnel : confirmez que votre projet a les DEUX approbations",
        "50+ grands projets hospitaliers — ils n'avanceront pas tous au même rythme",
        "Réforme des soins primaires : plus de patients connectés à un médecin change les pressions aux urgences",
        "Personnel : les cliniques d'enseignement (300 M$) prennent des années — la pénurie à court terme persiste",
        "Intégration SLD : les 58 000 lits ne fonctionneront qu'avec des parcours hôpital-SLD financés",
        "Santé mentale : implications opérationnelles des nouveaux carrefours de rétablissement",
      ],
      tags: ["hôpitaux", "capital", "soins-primaires", "SLD", "dotation-en-personnel"]
    },
    {
      id: "municipalites",
      titre: "Municipalités et AMO",
      priorite: "haute",
      resume: "Les municipalités obtiennent des outils utiles — financement FISEEH, pouvoirs d'application relatifs aux campements et occasions de co-investissement. Mais l'écart fiscal fondamental entre ce que les municipalités doivent fournir et ce que la province transfère demeure non résolu.",
      enjeux: [
        "FISEEH + 400 M$ : priorisez les projets d'eau/égouts qui débloquent les approbations de logements",
        "Gestion des campements (75,5 M$) : nouveaux outils mais demande accrue pour les refuges",
        "Fonds pour bâtir l'Ontario (5 G$ élargi) : occasions de co-investissement en SLD et logements abordables",
        "Objectif 1,5 M de logements : conséquences provinciales pour les municipalités en retard",
        "Transport en commun : l'avancement de GO 2.0 crée des occasions de connectivité régionale",
        "Déficit de financement opérationnel : toujours non résolu — priorité de plaidoyer pour le budget 2026",
      ],
      tags: ["municipalités", "logement", "eau", "campements", "transport-en-commun"]
    },
    {
      id: "construction",
      titre: "Secteur de la construction et de l'immobilier",
      priorite: "haute",
      resume: "200 G$+ en capital sur 10 ans, c'est du travail pour une génération. Les défis de l'industrie : disponibilité de la main-d'œuvre, coûts des matériaux, vitesse d'obtention des permis. Le Fonds de développement des compétences (2,5 G$) cible directement la formation en métiers. La réforme réglementaire pour accélérer les permis est l'habilitateur structurel.",
      enjeux: [
        "Pipeline capital de 200 G$ : positionnez-vous maintenant pour les contrats hospitaliers, de transport, scolaires et routiers",
        "Fonds de développement des compétences (2,5 G$) : programmes de formation pour les travailleurs de la construction",
        "Réforme des permis : utilisez le précédent de la Ceinture de feu pour accélérer les permis de construction",
        "1,5 M de logements : nécessite la capacité de l'industrie — plaidez pour l'immigration en métiers spécialisés",
        "Crédit d'impôt pour la fabrication en Ontario : applicable aux investissements en équipement de construction",
        "Fonds pour bâtir l'Ontario : occasions de co-investissement en logements abordables et SLD",
      ],
      tags: ["construction", "capital", "métiers", "permis", "logement", "compétences"]
    },
    {
      id: "education-secteur",
      titre: "Conseils scolaires et secteur de l'éducation",
      priorite: "haute",
      resume: "Les 30 G$ sur 10 ans en capital éducatif s'attaquent à l'important arriéré d'infrastructure scolaire vieillissante. L'expansion des services de garde dans le cadre de l'accord fédéral est un engagement opérationnel clé. Le Fonds de développement des compétences signale la vision gouvernementale de l'éducation comme infrastructure économique.",
      enjeux: [
        "Subventions capital (23 G$ sur 10 ans) : plaidez tôt et spécifiquement pour les projets prioritaires de votre conseil",
        "Services de garde à 10 $/jour : le recrutement d'éducatrices reste le principal défi d'implantation",
        "Fonds de développement des compétences (2,5 G$) : les programmes de métiers au secondaire et au collégial sont prioritaires",
        "Conseils en croissance : pression démographique dans la couronne crée des demandes concurrentes en capital",
        "Conseils en déclin d'effectifs : tension entre consolidation et maintien des écoles rurales",
        "Investissement en STIM : alignement curriculaire et installation nécessaire",
      ],
      tags: ["éducation", "écoles", "services-de-garde", "capital", "métiers", "démographie"]
    },
    {
      id: "services-communautaires",
      titre: "Organismes communautaires et services sociaux",
      priorite: "haute",
      resume: "La conversion des sites d'injection de drogues en carrefours de rétablissement est le changement de politique déterminant. Les 75,5 M$ pour la gestion des campements crée une pression accrue sur la capacité d'hébergement. Les taux du POSPH et de l'OT n'ont pas été augmentés de manière significative — un besoin majeur non comblé.",
      enjeux: [
        "Carrefours de rétablissement : comprenez les échéanciers de conversion et les attentes de modèle de service",
        "Réponse aux campements : 75,5 M$ crée une demande accrue pour les refuges et services d'accompagnement",
        "POSPH et OT : pas d'augmentation significative des taux — occasion de plaidoyer pour le budget 2026",
        "Sécurité alimentaire : non abordée spécifiquement — pression continue sur les banques alimentaires",
        "Refuges pour femmes victimes de violence : surveillance des détails de financement dans les documents supplémentaires",
        "Stabilité du financement de base : accords pluriannuels vs. incertitude annuelle",
      ],
      tags: ["communautaire", "itinérance", "dépendance", "POSPH", "refuges", "sécurité-alimentaire"]
    },
    {
      id: "mines-mineraux",
      titre: "Industrie minière et minéraux critiques",
      priorite: "haute",
      resume: "Potentiellement le budget le plus décisif pour le secteur minier ontarien depuis des décennies. La réforme des permis (15+ ans à moins de 5), le triplement des garanties de participation autochtone et une nouvelle Stratégie pour les minéraux critiques créent une véritable occasion de développement. L'accès routier à la Ceinture de feu est l'habilitateur physique.",
      enjeux: [
        "Réforme des permis : suivez les changements législatifs/réglementaires mettant en œuvre l'engagement 15→5 ans",
        "Accès routier à la Ceinture de feu : confirmez la portée, les échéanciers et les engagements de construction",
        "Garantie de capitaux propres autochtones (plafond 3 G$) : structurez les partenariats maintenant",
        "Nouvelle Stratégie pour les minéraux critiques : participez aux consultations — l'engagement précoce façonne les programmes",
        "Fonds de participation des Autochtones (70 M$ élargi) : occasions de co-investissement pour les Premières Nations",
        "Lien avec la chaîne d'approvisionnement VÉ : positionnez les minéraux critiques ontariens dans ce récit",
      ],
      tags: ["mines", "ceinture-de-feu", "permis", "autochtones", "VÉ", "minéraux-critiques"]
    },
  ],

  glossaire: [
    { terme: "Déficit", def: "L'écart entre les revenus et les dépenses totales de l'Ontario. Le déficit 2025-2026 est prévu à 14,6 G$, entraîné par la réponse aux tarifs et les investissements en infrastructure. L'Ontario prévoit un retour à un excédent de 0,2 G$ en 2027-2028 — conditionnel à la réalisation de la croissance économique projetée." },
    { terme: "Dette nette/PIB", def: "La dette nette accumulée de l'Ontario en pourcentage de la production économique annuelle. Prévue à 37,9 % en 2025-2026 — sous le plafond cible gouvernemental de 40 %. Un indicateur clé pour les agences de notation et les comparaisons interprovinciales." },
    { terme: "Compte pour protéger l'Ontario", def: "Un nouveau fonds stratégique de 5 G$ créé dans le budget 2025 pour soutenir les entreprises faisant face à une perturbation significative due aux tarifs américains. Fonctionne en complément des programmes fédéraux comme filet de sécurité pour les entreprises ayant épuisé les autres soutiens disponibles." },
    { terme: "Crédit d'impôt pour la fabrication en Ontario (CIPO)", def: "Un crédit d'impôt remboursable pour les fabricants ontariens investissant dans des bâtiments, machines et équipements utilisés pour la fabrication ou la transformation en Ontario. Bonifié dans le budget 2025 avec 1,3 G$ additionnels sur 3 ans et élargi pour couvrir plus de types d'investissements." },
    { terme: "Ceinture de feu", def: "Une zone riche en minéraux dans le Grand Nord de l'Ontario contenant des gisements importants de chromite, nickel, cuivre et métaux du groupe du platine. Le budget 2025 s'engage à réduire les délais de développement de 15+ ans à moins de 5 ans grâce à la réforme réglementaire." },
    { terme: "Programme Une seule tarification", def: "Programme d'intégration tarifaire du transport en commun de l'Ontario. Les navetteurs peuvent voyager sur plusieurs systèmes (GO, TTC, et transports locaux participants) avec une seule tarification — économisant en moyenne 1 600 $/an pour l'utilisateur quotidien." },
    { terme: "Fonds pour bâtir l'Ontario", def: "Un véhicule de co-investissement provincial combinant capital gouvernemental et privé pour des projets prioritaires. Élargi de 5 G$ dans le budget 2025 pour les SLD, l'infrastructure énergétique et le logement abordable." },
    { terme: "CSPAAT (Commission de la sécurité professionnelle et de l'assurance contre les accidents du travail)", def: "L'assureur d'indemnisation des travailleurs de l'Ontario. Les 2 G$ en remboursements aux employeurs (4 G$ au total sur l'année) retournent des surplus aux employeurs sécuritaires pour les aider à maintenir l'emploi pendant la perturbation tarifaire." },
    { terme: "Carrefours de rétablissement en cas de dépendance et d'itinérance", def: "Nouvelles installations remplaçant les sites de consommation supervisés de drogues près des écoles et garderies. Représentent un changement fondamental de la politique de réduction des méfaits vers des services axés sur le rétablissement. L'emplacement, la capacité et le modèle de service sont des détails critiques." },
    { terme: "Capital vs. opérationnel", def: "Les dépenses en capital construisent — hôpitaux, écoles, lignes de transport en commun. Les dépenses opérationnelles paient le personnel et les programmes. Les gouvernements peuvent annoncer des plans de capital impressionnants tout en comprimant les budgets opérationnels. Un nouvel hôpital nécessite à la fois la construction ET le budget opérationnel pour fonctionner." },
  ],

  comparaison: {
    annee_precedente: "2024-2025",
    elements: [
      { label: "Déficit", avant: "-6,0 G$ (intérimaire 2024-2025)", apres: "-14,6 G$", direction: "down" },
      { label: "Dette nette/PIB", avant: "36,3 % (prévision 2024-2025)", apres: "37,9 %", direction: "down" },
      { label: "Plan capital (annuel)", avant: "~25 G$", apres: "33 G$+", direction: "up" },
      { label: "Capital hospitalier (annuel)", avant: "3,5 G$", apres: "4,5 G$", direction: "up" },
      { label: "Croissance PIB réel", avant: "1,5 % (2024 réel)", apres: "0,8 % (prévision 2025)", direction: "down" },
      { label: "Retour à l'équilibre", avant: "Aucun engagement ferme", apres: "Excédent 2027-2028 (0,2 G$)", direction: "up" },
      { label: "Soutien aux entreprises", avant: "Aucun comparable", apres: "11 G$ réponse tarifaire", direction: "neutral" },
    ]
  },

  sources: {
    plan: "https://www.ontario.ca/fr/document/budget-de-lontario-2025",
    bref: "https://www.ontario.ca/fr/page/budget-de-lontario",
  },

  notebook: {
    url: "",
    label: "Explorer le notebook du budget Ontario",
    note: "NotebookLM par Google · Gratuit · Compte Google requis",
  },
};
