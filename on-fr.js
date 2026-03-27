// =========================================================
// BUDGET ONTARIO 2026 — DONNÉES FRANÇAISES
// « Un plan pour protéger l’Ontario »
// Ministre des Finances : Peter Bethlenfalvy
// Déposé : 25 mars 2026
// =========================================================

const BUDGET_FR = {
lang: “fr”,
annee: “2026-2027”,
titre: “Budget Ontario 2026”,
titre_complet: “Un plan pour protéger l’Ontario”,
date_depot: “25 mars 2026”,
ministre: “Peter Bethlenfalvy”,
status: “live”,

quote: {
texte: “Naviguer à travers ces défis exige une approche pragmatique — notre plan financier prudent est plus important que jamais. Nous mettons en oeuvre notre plan pour bâtir l’économie la plus concurrentielle, la plus résiliente et la plus autosuffisante du G7.”,
auteur: “Peter Bethlenfalvy”,
titre: “Ministre des Finances de l’Ontario — Budget 2026”,
},

chiffres: [
{ label: “Déficit 2026-2027”, valeur: “-13,8 G$”, note: “Infrastructure, réponse tarifaire et services publics”, variation: “S’améliore vs -12,3 G$ en 2025-2026”, direction: “down” },
{ label: “Retour à l’équilibre”, valeur: “2028-2029”, note: “Excédent prévu de 0,6 G$ incluant la réserve”, variation: “Déficit de -6,1 G$ en 2027-2028”, direction: “up” },
{ label: “Plan capital (10 ans)”, valeur: “210 G$+”, note: “Le plan de construction provincial le plus ambitieux de l’histoire du Canada”, variation: “37 G$ en 2026-2027 seulement”, direction: “up” },
{ label: “Dette nette/PIB”, valeur: “~40 %”, note: “Prévision 2026-2027 — au plafond cible du gouvernement”, variation: “Discipline fiscale maintenue”, direction: “neutral” },
{ label: “Réponse tarifaire (cumul)”, valeur: “~30 G$”, note: “Aide et soutien depuis avril 2025”, variation: “Inclut 9 G$ en reports d’impôt + nouvelles mesures”, direction: “neutral” },
{ label: “Croissance du PIB (2025 réel)”, valeur: “1,2 %”, note: “Meilleur que la prévision de 0,8 % du budget 2025”, variation: “1,0 % prévu pour 2026”, direction: “up” },
],

secteurs: [
{
id: “tarifs-economie”,
titre: “Réponse aux tarifs et compétitivité économique”,
depenses: “~30 G$ cumulatif depuis avril 2025 · 4 G$ Fonds d’investissement Compte pour protéger l’Ontario”,
variation: “Continuité depuis 2025 — nouveau Fonds d’investissement ajouté”,
priorite: “haute”,
resume: “Le budget 2026 renforce la stratégie de réponse aux tarifs établie l’an dernier. Le nouveau Fonds d’investissement Compte pour protéger l’Ontario (4 G$) fait passer la stratégie de la défensive à l’offensive — IA, défense, fabrication avancée, sciences de la vie et minéraux critiques. C’est le budget qui signale que l’Ontario a fini de jouer en défense et qu’il bâtit maintenant pour la prochaine économie.”,
points: [
“4 G$ Fonds d’investissement Compte pour protéger l’Ontario — IA, défense, fabrication avancée, sciences de la vie, R-D en minéraux critiques”,
“Fonds conçu pour attirer des capitaux de fonds de pension et du secteur privé”,
“Programme de financement Protéger l’Ontario poursuivi — fonds de roulement pour les PME touchées par les tarifs”,
“Centres POUVOIR — ont aidé près de 15 000 travailleurs en 2025”,
“100 M$ additionnels au Fonds Ontario ensemble commercial (FOEC) — nouveaux marchés interprovinciaaux et d’exportation”,
“Taux d’imposition des petites entreprises réduit de plus de 30 % — jusqu’à 5 000 $ par an”,
“Amortissement accéléré des immobilisations — 3,5 G$ en allègements fiscaux provinciaux sur 4 ans”,
“Cadre Un projet, un processus : Frontier Lithium, Canada Nickel Crawford, Kinross Great Bear en voie rapide”,
“Routes tout-temps vers la Ceinture de feu accélérées — construction juin 2026, ouverture novembre 2030 (5 ans en avance)”,
],
tags: [“tarifs”, “économie”, “investissement”, “IA”, “défense”, “minéraux-critiques”, “ceinture-de-feu”]
},
{
id: “plan-action-fiscal”,
titre: “Plan d’action fiscal et compétitivité”,
depenses: “3,5 G$ allègement amortissement (4 ans) · Réduction >30 % taux petites entreprises”,
variation: “Nouveau plan d’action fiscal pluriannuel introduit”,
priorite: “haute”,
resume: “Le plan d’action fiscal pluriannuel est la politique économique phare du budget 2026. La réduction du taux d’imposition des petites entreprises de plus de 30 % est un vrai signal — pas un crédit ponctuel, mais un changement de taux structurel. L’amortissement accéléré aligne l’Ontario avec les mesures fédérales. L’objectif : la compétitivité la plus élevée du G7.”,
points: [
“Taux d’imposition des petites entreprises réduit de plus de 30 % — jusqu’à 5 000 $ d’allègement annuel”,
“Déduction pour amortissement accélérée des équipements — 3,5 G$ sur 4 ans”,
“S’appuie sur ~10 G$ d’économies cumulatives pour les entreprises depuis 2018”,
“Règles de mobilité de la main-d’oeuvre ‘De plein droit’ — premières au Canada”,
“Ontario : première province à supprimer toutes ses exemptions spécifiques dans l’Accord de libre-échange canadien”,
“Réduction du fardeau réglementaire et accélération des processus d’autorisation”,
“Règlement historique sur la mobilité de la main-d’oeuvre en vigueur depuis janvier 2026”,
],
tags: [“fiscal”, “compétitivité”, “petites-entreprises”, “amortissement”, “commerce”, “mobilité-main-oeuvre”]
},
{
id: “infrastructure-transport”,
titre: “Infrastructures et transport en commun”,
depenses: “210 G$+ sur 10 ans · Routes 31 G$ · 37 G$ en 2026-2027”,
variation: “Plan capital à 210 G$ — vraie construction sur les grands projets”,
priorite: “haute”,
resume: “La construction a commencé sur l’autoroute 413 et le contournement de Bradford. Deux nouvelles lignes de transport en commun ont ouvert à Toronto. Les travaux d’excavation de la ligne Ontario à la station Queen sont en cours. Les routes vers la Ceinture de feu ont été accélérées de 5 ans. C’est un budget qui peut montrer une vraie construction, pas seulement des annonces.”,
points: [
“Autoroute 413 : construction commencée — économise jusqu’à 30 min par trajet”,
“Contournement de Bradford : construction commencée — économise 35 min, relie les autoroutes 400 et 404”,
“Faisabilité tunnel autoroute 401 — travaux de terrain au printemps 2026”,
“Routes tout-temps Ceinture de feu : construction juin 2026, ouverture novembre 2030 (5 ans en avance)”,
“Ligne Ontario : excavation en cours à la station Queen”,
“Prolongement du métro de Scarborough : mise en chantier de la première des trois stations”,
“Prolongement Yonge Nord : démarches pour les premières pelletées de terre”,
“GO Transit : premier service de fin de semaine vers Kitchener, service plus fréquent vers Niagara, construction station Woodbine”,
“Deux nouvelles lignes de transport en commun déjà ouvertes à Toronto”,
],
tags: [“transport-en-commun”, “autoroutes”, “autoroute-413”, “contournement-Bradford”, “ligne-Ontario”, “Scarborough”, “GO”]
},
{
id: “sante”,
titre: “Soins de santé”,
depenses: “Plan de 64 G$ · 50 G$ capital hospitalier · 3,4 G$ Plan d’action soins primaires (4 ans)”,
variation: “4e année consécutive d’investissement hospitalier record”,
priorite: “haute”,
resume: “Pour la quatrième année consécutive, l’Ontario réalise un investissement historique dans les hôpitaux — plus de 1,1 G$ en financement additionnel. Le Plan d’action pour les soins primaires de 3,4 G$ se poursuit. De nouvelles facultés de médecine sont construites et agrandies. Les SLD reçoivent 139,4 M$ additionnels.”,
points: [
“Plus de 1,1 G$ de financement hospitalier additionnel en 2026-2027 — 4e année consécutive record”,
“50 G$ en subventions capital pour hôpitaux et infrastructure de santé (dans le plan de 64 G$)”,
“Plan d’action pour les soins primaires de 3,4 G$ sur 4 ans — nouveaux médecins et fournisseurs de soins”,
“Construction et agrandissement des facultés de médecine pour former plus de médecins”,
“139,4 M$ additionnels pour les foyers de soins de longue durée en 2026-2027”,
“965 M$ dont 186 M$ de nouveaux fonds pour le Programme ontarien des services en matière d’autisme”,
“Remise en état de l’unité 4 de Darlington complétée — en avance sur l’horaire, 150 M$ sous le budget”,
],
tags: [“santé”, “hôpitaux”, “soins-primaires”, “SLD”, “autisme”, “facultés-médecine”]
},
{
id: “education”,
titre: “Éducation et enseignement supérieur”,
depenses: “6,4 G$ nouveaux fonds postsecondaires · 66 M$ Fonds fournitures scolaires”,
variation: “Annonce transformatrice pour l’enseignement supérieur — 6,4 G$ en nouveaux fonds”,
priorite: “haute”,
resume: “Les 6,4 G$ en nouveaux fonds pour l’enseignement supérieur constituent l’annonce phare en éducation — une réponse directe à la crise financière des collèges et universités de l’Ontario. Le Fonds de fournitures scolaires (750 $ par enseignant de classe à l’élémentaire) est modeste mais concret. L’accent est mis sur la formation de diplômés compétitifs pour l’économie du G7.”,
points: [
“6,4 G$ en nouveaux fonds pour le secteur postsecondaire — collèges, universités et Instituts autochtones”,
“Assure la durabilité des établissements et prépare les diplômés à des carrières compétitives”,
“66 M$ Fonds de fournitures scolaires — 750 $ par titulaire de classe à l’élémentaire par année scolaire”,
“20 M$ Fonds commémoratif Liam Riazati — barrières de béton préventives pour les centres de garde”,
“Poursuite des investissements dans la construction d’écoles et de places de garde (dans le plan de 210 G$)”,
],
tags: [“éducation”, “postsecondaire”, “collèges”, “universités”, “garde-enfants”, “salle-de-classe”]
},
{
id: “logement-abordabilite”,
titre: “Logement et abordabilité”,
depenses: “Remboursement TVH sur les nouvelles maisons jusqu’à 1 M$ (8 % provincial entier supprimé)”,
variation: “Nouveau remboursement TVH majeur — suppression de la totalité de la portion provinciale”,
priorite: “haute”,
resume: “La suppression de la totalité des 8 % de TVH provinciale sur les nouvelles maisons jusqu’à 1 M$ est la mesure d’abordabilité du logement la plus significative de ce budget. Le gouvernement prévoit que cela pourrait stimuler des milliers de mises en chantier, soutenir 14 000 emplois en construction et ajouter 0,2 point de pourcentage à la croissance du PIB. La question reste l’arrimage fédéral.”,
points: [
“Suppression de la totalité des 8 % de TVH provinciale sur les nouvelles maisons jusqu’à 1 M$ — jusqu’à 80 000 $ d’allègement”,
“Allègement maintenu pour les maisons jusqu’à 1,5 M$”,
“Pourrait stimuler des milliers de mises en chantier et soutenir 14 000 emplois en construction”,
“Admissible pour les acheteurs ayant acheté à compter du 20 mars 2025 — rétroactif”,
“Ontario presse le gouvernement fédéral de s’aligner sur la mesure”,
“Réduction permanente de la taxe sur l’essence — 2,1 G$ économisés depuis juillet 2022”,
“Péages sur la partie provinciale de l’autoroute 407 Est supprimés — économies estimées à 7 200 $ par an”,
“Programme Une seule tarification prolongé de 2 ans — économies allant jusqu’à 1 600 $/an, 233 M$ économisés depuis 2024”,
“Remise sur l’électricité (REO) — réduit la facture résidentielle type d’environ 36 $/mois”,
],
tags: [“logement”, “TVH”, “nouvelles-maisons”, “abordabilité”, “taxe-essence”, “péages”, “une-seule-tarification”]
},
{
id: “energie-nucleaire”,
titre: “Énergie et nucléaire”,
depenses: “800 G$+ de contribution à l’économie canadienne (durée de vie du plan nucléaire)”,
variation: “Expansion nucléaire accélérée — entente de Wesleyville signée”,
priorite: “haute”,
resume: “Le pari nucléaire de l’Ontario s’amplifie. La remise en état de l’unité 4 de Darlington est terminée, en avance sur l’horaire et 150 M$ sous le budget. Ontario Power Generation a signé l’entente pour le projet nucléaire de Wesleyville — 10 500 emplois, 235 G$ d’impact sur le PIB de l’Ontario. Quatre RPM à Darlington sont en construction (les premiers du G7).”,
points: [
“Remise en état unité 4 de Darlington complétée — en avance, 150 M$ sous le budget”,
“Ontario Power Generation signe l’entente du projet nucléaire de Wesleyville — 10 500 emplois, 235 G$ de PIB”,
“Quatre RPM à Darlington — premiers du G7, assez d’électricité pour 1,2 M de foyers”,
“Plan d’expansion nucléaire : 150 000 occasions d’emplois attendues”,
“Contribution de plus de 800 G$ à l’économie canadienne sur la durée de vie du plan nucléaire”,
“Positionnement de l’avantage nucléaire de l’Ontario pour l’exportation mondiale”,
],
tags: [“nucléaire”, “énergie”, “RPM”, “Darlington”, “Wesleyville”, “emplois”, “énergie-propre”]
},
{
id: “justice-securite”,
titre: “Sécurité publique et justice”,
depenses: “32,5 M$ Opération Dissuasion 2.0 (2026-2027)”,
variation: “Opération Dissuasion 2.0 — renforcement de la sécurité aux frontières”,
priorite: “moyenne”,
resume: “L’Opération Dissuasion lancée en janvier 2025 a livré des résultats concrets : plus de 550 armes à feu illégales retracées, 4 152 kg de cocaïne saisis, 192 kg de fentanyl, 641 accusations portées. L’Opération Dissuasion 2.0 élargit cette capacité avec 32,5 M$ en deux nouveaux programmes de subventions pour la sécurité aux frontières.”,
points: [
“Résultats Opération Dissuasion : 550+ armes illégales, 4 152 kg cocaïne, 192 kg fentanyl, 641 accusations”,
“32,5 M$ en 2026-2027 pour deux nouveaux programmes de subventions pour la sécurité aux frontières”,
“Nouvelles lois pour renforcer le système de mise en liberté sous caution pour les récidivistes violents”,
“Élargissement des équipes spécialisées de poursuites en matière de cautionnement”,
“Exploration de rendre une partie du registre des délinquants sexuels accessible au public”,
“Investissements historiques en capacité carcérale pour les détenus à risque élevé”,
],
tags: [“sécurité”, “frontières”, “cautionnement”, “armes-à-feu”, “corrections”, “Opération-Dissuasion”]
},
],

audiences: [
{
id: “acheteurs-maison”,
titre: “Acheteurs de maison”,
priorite: “haute”,
resume: “L’avantage direct le plus important du budget 2026 pour la plupart des Ontariens. La suppression de la totalité des 8 % de TVH provinciale sur les nouvelles maisons jusqu’à 1 M$ représente jusqu’à 80 000 $ d’allègement. Rétroactif au 20 mars 2025 — si vous avez acheté récemment, vous pourriez être admissible.”,
mesures: [
{ label: “TVH provinciale supprimée (nouvelles maisons jusqu’à 1 M$)”, valeur: “Jusqu’à 80 000 $”, note: “Maintenu pour les maisons jusqu’à 1,5 M$” },
{ label: “Rétroactif au”, valeur: “20 mars 2025”, note: “Les achats antérieurs pourraient être admissibles” },
{ label: “Économies sur les péages de l’autoroute 407 Est (annuelles)”, valeur: “7 200 $”, note: “Supprimés de façon permanente” },
],
tags: [“logement”, “TVH”, “nouvelles-maisons”, “premiers-acheteurs”]
},
{
id: “familles”,
titre: “Familles”,
priorite: “haute”,
resume: “Les familles bénéficient des économies permanentes sur la taxe sur l’essence (2,1 G$ depuis 2022), du programme Une seule tarification prolongé, de la stabilité des factures d’électricité via la REO, et du remboursement de TVH sur les nouvelles maisons. Le programme d’autisme reçoit 965 M$. Les centres de garde reçoivent 20 M$ en mises à niveau de sécurité.”,
mesures: [
{ label: “Économies taxe sur l’essence (depuis 2022)”, valeur: “2,1 G$”, note: “Permanentes — économies continues” },
{ label: “Une seule tarification (prolongée 2 ans)”, valeur: “1 600 $/an”, note: “Navetteurs quotidiens GTO — 233 M$ économisés depuis 2024” },
{ label: “Remise sur l’électricité (REO)”, valeur: “~36 $/mois”, note: “Réduction résidentielle typique” },
{ label: “Programme ontarien services autisme”, valeur: “965 M$”, note: “186 M$ de nouveaux fonds en 2026-2027” },
],
tags: [“familles”, “taxe-essence”, “une-seule-tarification”, “électricité”, “autisme”, “garde-enfants”]
},
{
id: “entreprises”,
titre: “Entreprises et employeurs”,
priorite: “haute”,
resume: “Le plan d’action fiscal pluriannuel est la mesure déterminante pour les entreprises — réduction du taux d’imposition des petites entreprises de plus de 30 %, amortissement accéléré du capital (3,5 G$ d’allègement sur 4 ans). Le Fonds d’investissement de 4 G$ ouvre de nouvelles occasions. Combiné à ~10 G$ d’économies cumulatives depuis 2018, l’Ontario vise à être la juridiction la plus compétitive du G7.”,
mesures: [
{ label: “Réduction taux imposition petites entreprises”, valeur: “>30 %”, note: “Jusqu’à 5 000 $ d’allègement annuel par entreprise” },
{ label: “Amortissement accéléré des immobilisations”, valeur: “3,5 G$ (4 ans)”, note: “Allègement fiscal provincial pour les entreprises admissibles” },
{ label: “Fonds d’investissement Compte pour protéger l’Ontario”, valeur: “4 G$”, note: “IA, défense, fabrication avancée, sciences de la vie” },
{ label: “Économies cumulatives pour les entreprises depuis 2018”, valeur: “~10 G$”, note: “Taux annuel” },
],
tags: [“entreprises”, “impôt”, “investissement”, “compétitivité”, “PME”]
},
{
id: “travailleurs”,
titre: “Travailleurs et chercheurs d’emploi”,
priorite: “haute”,
resume: “Les Centres POUVOIR ont aidé près de 15 000 travailleurs en 2025. L’accélération de la Ceinture de feu et l’expansion nucléaire créeront des dizaines de milliers d’emplois. Les règles de mobilité ‘De plein droit’ permettent aux travailleurs qualifiés d’exercer leur métier partout au Canada. Les 6,4 G$ pour l’enseignement supérieur préparent la prochaine génération.”,
mesures: [
{ label: “Centres POUVOIR (travailleurs touchés par les tarifs)”, valeur: “15 000 aidés”, note: “Aide à la transition et orientation vers l’emploi” },
{ label: “Emplois expansion nucléaire”, valeur: “150 000+”, note: “Nouvelles occasions sur la durée du plan” },
{ label: “Emplois Ceinture de feu”, valeur: “Des milliers”, note: “Construction commençant en juin 2026” },
{ label: “Mobilité main-d’oeuvre (‘De plein droit’)”, valeur: “Premières au Canada”, note: “Travailler dans d’autres provinces sans recertification” },
],
tags: [“travailleurs”, “emplois”, “nucléaire”, “ceinture-de-feu”, “mobilité-main-oeuvre”, “postsecondaire”]
},
{
id: “aines”,
titre: “Aînés”,
priorite: “haute”,
resume: “Les SLD reçoivent 139,4 M$ additionnels en 2026-2027 — quatrième année consécutive d’investissement record en santé. L’expansion des soins primaires (3,4 G$ sur 4 ans) bénéficie de manière disproportionnée aux aînés. La REO et les économies sur la taxe sur l’essence aident aussi les aînés à revenu fixe.”,
mesures: [
{ label: “Financement additionnel foyers SLD”, valeur: “139,4 M$”, note: “2026-2027 — investissement record en cours” },
{ label: “Plan d’action pour les soins primaires”, valeur: “3,4 G$ (4 ans)”, note: “Plus de médecins, accès élargi” },
{ label: “Remise sur l’électricité (REO)”, valeur: “~36 $/mois”, note: “Factures stables et prévisibles” },
{ label: “Taxe sur l’essence”, valeur: “Permanente”, note: “2,1 G$ économisés par les Ontariens depuis 2022” },
],
tags: [“aînés”, “SLD”, “soins-primaires”, “électricité”, “santé”]
},
{
id: “autochtones”,
titre: “Communautés autochtones”,
priorite: “haute”,
resume: “L’accélération de la Ceinture de feu est la grande histoire de développement économique autochtone de ce budget — routes ouvertes en novembre 2030, soutenues par des ententes avec trois Premières Nations et une entente de coopération fédérale. Les 6,4 G$ pour l’enseignement supérieur incluent les Instituts autochtones.”,
mesures: [
{ label: “Routes Ceinture de feu — début de la construction”, valeur: “Juin 2026”, note: “5 ans en avance — ententes avec 3 Premières Nations” },
{ label: “Routes Ceinture de feu — ouverture”, valeur: “Nov 2030”, note: “Entente de coopération fédérale signée” },
{ label: “Engagement de l’Ontario pour la Ceinture de feu”, valeur: “1 G$”, note: “Demande au fédéral de s’aligner” },
{ label: “Instituts autochtones”, valeur: “Inclus dans 6,4 G$”, note: “Paquet de durabilité postsecondaire” },
],
tags: [“autochtones”, “ceinture-de-feu”, “premières-nations”, “postsecondaire”, “infrastructure”]
},
],

parties_prenantes: [
{
id: “fabrication-automobile”,
titre: “Fabrication et secteur automobile”,
priorite: “haute”,
resume: “Le Fonds d’investissement Compte pour protéger l’Ontario (4 G$) est le nouvel outil — il cible spécifiquement la fabrication avancée aux côtés de l’IA, de la défense et des sciences de la vie. L’amortissement accéléré (3,5 G$ sur 4 ans) récompense directement l’investissement en capital manufacturier. La réduction du taux d’imposition des petites entreprises et les règles de mobilité de la main-d’oeuvre améliorent la compétitivité structurelle.”,
enjeux: [
“Fonds d’investissement (4 G$) : la fabrication avancée est nommément incluse — engagez-vous tôt sur les critères d’admissibilité”,
“Amortissement accéléré (3,5 G$/4 ans) : modélisez l’impact sur vos décisions d’investissement maintenant”,
“Réduction taux petites entreprises (>30 %) : significative pour les fournisseurs PME de la chaîne d’approvisionnement automobile”,
“Mobilité main-d’oeuvre ‘De plein droit’ : embauche de travailleurs qualifiés d’autres provinces beaucoup plus rapide”,
“FOEC (100 M$ additionnels) : si vous diversifiez hors des marchés américains, postulez maintenant”,
“Un projet, un processus : si vous avez un grand projet en attente d’approbation, engagez-vous avec le cadre”,
],
tags: [“fabrication”, “automobile”, “impôt”, “capital”, “mobilité-main-oeuvre”, “investissement”]
},
{
id: “hopitaux”,
titre: “Hôpitaux et organisations de santé”,
priorite: “haute”,
resume: “Plus de 1,1 G$ en financement hospitalier additionnel pour la 4e année consécutive. Le programme de subventions capital de 50 G$ pour l’infrastructure hospitalière continue. L’expansion des soins primaires (3,4 G$) modifiera les flux de patients. Les 139,4 M$ additionnels pour les SLD sont bienvenus mais la pénurie de main-d’oeuvre reste la contrainte liant la livraison.”,
enjeux: [
“Financement hospitalier additionnel (1,1 G$+) : confirmer votre part et les engagements opérationnels qui l’accompagnent”,
“Plan soins primaires (3,4 G$/4 ans) : plus de patients connectés à un médecin de famille change les patterns aux urgences”,
“Expansion des facultés de médecine : approvisionnement en médecins à long terme — planifier pour le pipeline de 5 à 10 ans”,
“Financement additionnel SLD (139,4 M$) : la main-d’oeuvre reste la contrainte principale, pas le capital”,
“Subventions capital (50 G$) : confirmer où votre projet se situe dans la file de priorité”,
“Wesleyville (10 500 emplois) : surveiller les besoins en infrastructure de services de santé dans la région de Port Hope”,
],
tags: [“hôpitaux”, “capital”, “soins-primaires”, “SLD”, “dotation-personnel”]
},
{
id: “construction”,
titre: “Secteur de la construction et de l’immobilier”,
priorite: “haute”,
resume: “37 G$ en 2026-2027 seulement. La construction est maintenant réellement en cours sur la 413, le contournement de Bradford, la ligne Ontario et le prolongement du métro de Scarborough. Le remboursement de TVH sur les nouvelles maisons pourrait stimuler des milliers de mises en chantier et 14 000 emplois. Les routes de la Ceinture de feu commencent en juin 2026.”,
enjeux: [
“Routes Ceinture de feu (départ juin 2026) : construction nordique spécialisée — positionnez-vous maintenant”,
“Remboursement TVH nouvelles maisons : 14 000 emplois projetés — hausse prévue dans le secteur résidentiel”,
“Autoroute 413 et contournement Bradford : construction active — occasions pour sous-traitants et matériaux”,
“Ligne Ontario et prolongements de métro : excavation et construction actives — approvisionnement en cours”,
“RPM Darlington et nucléaire Wesleyville : pipeline de construction nucléaire spécialisée”,
“Amortissement accéléré : appliquez à vos propres achats d’équipement pour l’allègement fiscal”,
],
tags: [“construction”, “logement”, “transport-en-commun”, “autoroutes”, “nucléaire”, “ceinture-de-feu”]
},
{
id: “municipalites”,
titre: “Municipalités et AMO”,
priorite: “haute”,
resume: “Le remboursement de TVH sur les nouvelles maisons stimule l’offre — les municipalités bénéficient de plus de mises en chantier. L’accélération des routes de la Ceinture de feu crée de nouvelles zones économiques dans le Nord. La prolongation d’Une seule tarification maintient les chiffres de fréquentation du transport en commun. Le déficit fiscal provincial-municipal sur les budgets opérationnels demeure toutefois non résolu.”,
enjeux: [
“Remboursement TVH nouvelles maisons : implications sur les redevances de développement — modélisez vos prévisions de revenus”,
“Accélération Ceinture de feu : développement économique des communautés des Premières Nations du Nord”,
“Jalons transit capital : confirmer les implications opérationnelles des extensions GO et du métro”,
“Opération Dissuasion 2.0 (32,5 M$) : les municipalités de régions frontalières bénéficient directement”,
“Postsecondaire (6,4 G$) : signal de développement économique pour les villes universitaires et collégiales”,
“Déficit de financement opérationnel : toujours non résolu — priorité de plaidoyer pour le budget 2027”,
],
tags: [“municipalités”, “logement”, “transport-en-commun”, “nord-ontario”, “financement-opérationnel”]
},
{
id: “postsecondaire”,
titre: “Collèges, universités et Instituts autochtones”,
priorite: “haute”,
resume: “Les 6,4 G$ en nouveaux fonds pour l’enseignement supérieur sont transformateurs — ils répondent directement à la crise financière qui a vu des compressions de programmes, des mises à pied et des quasi-insolvabilités dans plusieurs établissements. Le cadrage est économique — former des diplômés compétitifs pour l’économie du G7.”,
enjeux: [
“6,4 G$ nouveaux fonds : confirmer la formule d’allocation — quelle part revient à votre établissement?”,
“Axe durabilité : s’agit-il de fonds opérationnels ou en capital? Pluriannuels ou ponctuels? Les détails sont essentiels”,
“Instituts autochtones explicitement inclus : confirmer enveloppe dédiée vs allocation générale”,
“Cadrage compétitivité G7 : attendre des conditions sur la composition des programmes et les résultats des diplômés”,
“Lien postsecondaire + Ceinture de feu : programmes de développement des ressources alignés sur les opportunités”,
“Mobilité main-d’oeuvre ‘De plein droit’ : les changements de reconnaissance des titres de compétences affecteront vos programmes”,
],
tags: [“postsecondaire”, “collèges”, “universités”, “instituts-autochtones”, “durabilité”]
},
{
id: “energie-nucleaire-industrie”,
titre: “Secteur de l’énergie et industrie nucléaire”,
priorite: “haute”,
resume: “Wesleyville est le titre — un nouvel accord de projet nucléaire signé, 10 500 emplois, 235 G$ d’impact sur le PIB. La remise en état de l’unité 4 de Darlington est terminée, en avance et sous budget — une preuve de concept solide. Quatre RPM à Darlington sont les premiers du G7. L’Ontario recherche activement l’exportation mondiale de son expertise nucléaire.”,
enjeux: [
“Projet nucléaire Wesleyville : 10 500 emplois — occasions dans la chaîne d’approvisionnement partout en Ontario”,
“Quatre RPM à Darlington : premiers du G7 — preuve de concept mondiale avec implications d’exportation”,
“Stratégie d’exportation nucléaire : occasion mondiale — s’engager dans le positionnement international de l’Ontario”,
“Remise en état Darlington (150 M$ sous budget) : bilan solide de gestion des coûts pour les investisseurs”,
“Corridor énergétique Ceinture de feu : infrastructure énergétique requise pour le développement routier et minier”,
“REO : gouvernement engagé à maintenir des coûts d’électricité stables et prévisibles — signal de tarification”,
],
tags: [“nucléaire”, “énergie”, “RPM”, “Wesleyville”, “Darlington”, “exportation”]
},
{
id: “tech-ia-defense”,
titre: “Technologies, IA et industrie de la défense”,
priorite: “haute”,
resume: “Le Fonds d’investissement (4 G$) cible explicitement l’IA, la défense et la fabrication avancée — conçu pour attirer des capitaux de fonds de pension et du secteur privé. L’Ontario mise activement sur l’accueil de la Banque de défense, de sécurité et de résilience à Toronto. La flambée des dépenses mondiales de défense crée une occasion générationnelle pour les grappes aérospatiales et technologiques de l’Ontario.”,
enjeux: [
“Fonds d’investissement (4 G$) : IA et défense explicitement inclus — engagez-vous tôt sur les critères”,
“Banque de défense, sécurité et résilience : candidature de Toronto — 3 500 emplois directs + des milliers indirects si Toronto est sélectionnée”,
“Hausse des dépenses fédérales de défense : Ontario positionné comme fournisseur clé — alignez votre feuille de route”,
“Cadre Un projet, un processus : si votre projet implique de l’infrastructure d’IA ou des installations de technologie de défense, engagez-vous”,
“Postsecondaire 6,4 G$ : pipeline de talents pour les entreprises d’IA et de défense — engagez-vous avec les établissements”,
“Tech nucléaire/RPM : occasion d’exportation mondiale — applications technologiques à double usage”,
],
tags: [“IA”, “défense”, “tech”, “fonds-investissement”, “BDSRB”, “nucléaire”]
},
],

glossaire: [
{ terme: “Fonds d’investissement Compte pour protéger l’Ontario”, def: “Nouveau fonds de 4 G$ annoncé dans le budget 2026 pour investir dans des industries à forte croissance incluant l’IA, la défense, la fabrication avancée, les sciences de la vie, la biotechnologie et la R-D en minéraux critiques. Conçu pour attirer des capitaux de fonds de pension et du secteur privé.” },
{ terme: “Un projet, un processus”, def: “Cadre de l’Ontario pour accélérer les approbations des grands projets de ressources — exploration avancée, développement et expansion miniers. Élimine le dédoublement entre les processus provinciaux et fédéraux. Trois projets déjà en voie rapide : Frontier Lithium, Canada Nickel Crawford, Kinross Great Bear.” },
{ terme: “Remboursement TVH (nouvelles maisons)”, def: “Mesure phare d’abordabilité du logement du budget 2026 : supprime la totalité des 8 % de TVH provinciale sur les nouvelles maisons jusqu’à 1 million de dollars, avec l’allègement maintenu pour les maisons jusqu’à 1,5 million de dollars. Jusqu’à 80 000 $ d’économies. Rétroactif au 20 mars 2025.” },
{ terme: “Centres POUVOIR”, def: “Centres de réponse en matière d’emploi pour la protection des travailleurs ontariens — centres d’aide provinciaux offrant une aide à la transition, des références et l’accès aux programmes d’Emploi Ontario pour les travailleurs touchés par les mises à pied liées aux tarifs. Ont aidé près de 15 000 travailleurs en 2025.” },
{ terme: “Ceinture de feu”, def: “Zone riche en minéraux dans le Grand Nord de l’Ontario. Le budget 2026 accélère la construction de routes tout-temps de 5 ans : construction commence en juin 2026, routes ouvertes en novembre 2030. Soutenu par des ententes avec trois Premières Nations et une entente de coopération fédérale.” },
{ terme: “Réacteur de petite puissance modulaire (RPM)”, def: “Réacteurs nucléaires compacts construits sur le site de Darlington en Ontario — les premiers du G7. Quatre RPM prévus, qui produiront assez d’électricité pour alimenter environ 1,2 million de foyers. Partie de la stratégie d’expansion nucléaire qui devrait créer 150 000 emplois.” },
{ terme: “Remise sur l’électricité de l’Ontario (REO)”, def: “Programme provincial qui réduit les factures d’électricité des consommateurs résidentiels et non résidentiels admissibles. La REO réduit la facture mensuelle d’un consommateur résidentiel typique d’environ 36 $, assurant des coûts d’électricité stables et prévisibles.” },
{ terme: “Une seule tarification”, def: “Programme d’intégration tarifaire du transport en commun de l’Ontario permettant aux navetteurs du GTO de voyager sur GO Transit, le TTC et les systèmes de transport en commun locaux participants avec une seule tarification. Prolongé de deux ans dans le budget 2026. Économise jusqu’à 1 600 $/an — 233 millions d’économies depuis le lancement en 2024.” },
{ terme: “Plan d’action fiscal”, def: “Plan pluriannuel de l’Ontario pour faire de la province la juridiction la plus compétitive du G7. Mesures du budget 2026 : réduction du taux d’imposition des petites entreprises de plus de 30 %, amortissement accéléré du capital (3,5 G$ sur 4 ans), et élimination des barrières au commerce interprovincial.” },
{ terme: “Mobilité de la main-d’oeuvre ‘De plein droit’”, def: “Règlement en vigueur depuis janvier 2026 — le premier au Canada — qui permet aux travailleurs qualifiés d’exercer leur métier ou profession réglementé en Ontario sans inscription supplémentaire ni recertification de leur province d’origine. Répond directement aux pénuries de main-d’oeuvre spécialisée.” },
],

comparaison: {
annee_precedente: “2025-2026”,
elements: [
{ label: “Déficit”, avant: “-14,6 G$ (prévision budget 2025)”, apres: “-13,8 G$”, direction: “up” },
{ label: “Déficit 2025-2026 révisé”, avant: “-14,6 G$ (prévu)”, apres: “-12,3 G$ (intérimaire)”, direction: “up” },
{ label: “Plan capital (annuel)”, avant: “33 G$”, apres: “37 G$”, direction: “up” },
{ label: “Plan capital (total 10 ans)”, avant: “200 G$+”, apres: “210 G$+”, direction: “up” },
{ label: “PIB 2025 (réel)”, avant: “0,8 % (prévision)”, apres: “1,2 % (réel)”, direction: “up” },
{ label: “Retour à l’équilibre”, avant: “2027-2028”, apres: “2028-2029”, direction: “down” },
{ label: “Taux imposition petites entreprises”, avant: “Taux standard”, apres: “Réduit de >30 %”, direction: “up” },
{ label: “TVH sur les nouvelles maisons”, avant: “8 % portion provinciale”, apres: “Supprimée (jusqu’à 1 M$)”, direction: “up” },
]
},

sources: {
plan: “https://www.ontario.ca/fr/document/budget-de-lontario-2026”,
bref: “https://www.ontario.ca/fr/page/budget-de-lontario”,
},

notebook: {
url: “”,
label: “Explorer le notebook du budget Ontario”,
note: “NotebookLM par Google · Gratuit · Compte Google requis”,
},
};