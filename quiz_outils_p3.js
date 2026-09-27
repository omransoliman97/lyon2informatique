const outilsP3Questions = [
  {
    "question": "Comment s'organise le système de gestion bibliographique BibTeX ?",
    "options": [
      "Toutes les références sont stockées dans un fichier .bib, puis citées dans le document .tex à l'aide de leur clé via la commande \\cite{clé}",
      "LaTeX interroge une base de données en ligne en temps réel lors de la compilation",
      "Les références sont importées automatiquement depuis un document Word externe",
      "L'utilisateur saisit et met en forme chaque référence manuellement dans le corps du texte"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours indique : « BibTeX pour simplifier la mise en place d'une bibliographie [...] Toutes les références sont stockées dans un fichier .bib » et « Citation d'une référence dans le texte en donnant sa clé dans le .tex ».",
    "part": "LaTeX — Bibliographie avec BibTeX"
  },
  {
    "question": "Dans une entrée BibTeX du type @INPROCEEDINGS{ismis05fb, ...}, que représente l'identifiant ismis05fb placé juste après l'accolade ouvrante ?",
    "options": [
      "Le nombre de pages de l'article",
      "La clé de la référence, utilisée pour l'appeler avec la commande \\cite{} dans le texte",
      "Le nom de la revue scientifique",
      "L'année de publication codée"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours précise : « La clé de la référence : mise juste après le type, utilisée pour la citation dans le document .tex ».",
    "part": "LaTeX — Bibliographie avec BibTeX"
  },
  {
    "question": "Combien de types d'entrées différents existent en BibTeX, et pouvez-vous citer des exemples parmi ceux mentionnés en cours ?",
    "options": [
      "14 types différents, par exemple article, book, inproceedings, phdthesis, techreport ou unpublished, chacun avec ses champs obligatoires propres",
      "7 types, réservés uniquement aux articles de conférence",
      "3 types seulement : article, book, misc",
      "Un nombre illimité de types, définis librement par l'utilisateur"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours énumère : « 14 types d'entrées différents, chacun possédant des champs obligatoires différents : article, book, booklet, conference, inbook, incollection, inproceedings, manual, masterthesis, misc, phdthesis, proceedings, techreport, unpublished ».",
    "part": "LaTeX — Bibliographie avec BibTeX"
  },
  {
    "question": "Quelles commandes doit-on insérer dans le document LaTeX pour appliquer un style bibliographique donné et afficher la liste des références issues d'un fichier de type biblio.bib ?",
    "options": [
      "\\style{plain} et \\bibliography{biblio.bib} (avec l'extension)",
      "\\bibliographystyle{style} et \\bibliography{fichier}, sans préciser l'extension .bib dans le nom du fichier",
      "\\cite{plain} et \\bib{biblio}",
      "\\setup{plain} et \\printbibliography"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours indique : « \\bibliographystyle{style} » puis « \\bibliography{fichier} (sans préciser l'extension .bib) », le style pouvant être plain, alpha, unsrt, abbrv, siam, ou un fichier .bst fourni.",
    "part": "LaTeX — Bibliographie avec BibTeX"
  },
  {
    "question": "Que contient précisément la bibliographie finale imprimée après compilation par BibTeX ?",
    "options": [
      "Les 14 types d'entrées obligatoires, un exemplaire de chacun",
      "L'intégralité des entrées présentes dans le fichier .bib, citées ou non",
      "Les suggestions automatiques de l'éditeur LaTeX en ligne",
      "Uniquement les entrées effectivement citées dans le corps du texte via la commande \\cite{}, mises en forme et numérotées automatiquement selon le style choisi"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours précise qu'« à la compilation, en fonction du style choisi, LaTeX mettra la bonne référence [...] références présentes dans la section biblio à partir des entrées effectivement citées ».",
    "part": "LaTeX — Bibliographie avec BibTeX"
  },
  {
    "question": "D'après le cours, quels outils peut-on utiliser pour récupérer facilement des entrées bibliographiques prêtes à l'emploi au format BibTeX (par exemple depuis le site DBLP) ?",
    "options": [
      "Un simple copier-coller depuis Microsoft Excel",
      "Des outils comme Zotero, qui permettent de récupérer une entrée BibTeX directement depuis le Web",
      "Uniquement la copie manuelle depuis un livre papier",
      "Un scanner OCR, seule méthode reconnue par BibTeX"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours indique, à propos de l'exemple d'entrée .bib : « possibilité de récupération sur le Web, site DBLP par exemple – usage de Zotero également par exemple ».",
    "part": "LaTeX — Bibliographie avec BibTeX"
  },
  {
    "question": "Quel savant du IXe siècle a donné son nom (latinisé) au mot « algorithme », d'après la liste des personnalités marquantes citée en cours ?",
    "options": [
      "Muḥammad ibn Mūsā al-Khwārizmī (latinisé en Algoritmi ou Algorizmi)",
      "Ibn Sina (Avicenne)",
      "Muhammad al-Idrissi",
      "Alhazen (Ibn al-Haytham)"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours cite parmi les grandes personnalités : « Muḥammad ibn Mūsā al-Khwārizmī (latinisé en Algoritmi ou Algorizmi) ».",
    "part": "Histoire de l'informatique et figures marquantes"
  },
  {
    "question": "Parmi les listes de personnalités ayant marqué l'histoire de l'informatique présentées en cours, laquelle regroupe des noms effectivement cités ensemble ?",
    "options": [
      "Wolfgang Amadeus Mozart, Léonard de Vinci",
      "Marie Curie, Albert Einstein, Isaac Newton",
      "Bill Gates, Larry Page, Sergey Brin, Jeff Bezos",
      "Ada Lovelace, Charles Babbage, Joseph-Marie Jacquard"
    ],
    "correctAnswer": 3,
    "explanation": "La diapositive « Une brève histoire de l'informatique » cite dans une même puce : « Ada Lovelace, Charles Babbage, Joseph-Marie Jacquard ».",
    "part": "Histoire de l'informatique et figures marquantes"
  },
  {
    "question": "Parmi les pionniers de l'informatique suivants, lesquels sont cités ensemble dans la même puce du cours, aux côtés de Grace Hopper ?",
    "options": [
      "John Von Neumann et Alan Turing",
      "Linus Torvalds et Richard Stallman",
      "Steve Jobs et Bill Gates",
      "Tim Berners-Lee et Rose Dieng-Kuntz"
    ],
    "correctAnswer": 0,
    "explanation": "La liste du cours regroupe : « John Von Neumann, Alan Turing, Grace Hopper », suivis d'une autre puce « Claude Shannon, Frances Allen ».",
    "part": "Histoire de l'informatique et figures marquantes"
  },
  {
    "question": "Quels noms sont associés au logiciel libre dans la liste des personnalités marquantes de l'informatique présentée en cours ?",
    "options": [
      "Steve Jobs et Stephen Wozniak",
      "Linus Torvalds et Richard Stallman",
      "Tim Berners-Lee et Rose Dieng-Kuntz",
      "Bill Gates et Paul Allen"
    ],
    "correctAnswer": 1,
    "explanation": "La liste du cours cite ensemble : « Linus Torvalds et Richard Stallman », figures associées respectivement au noyau Linux et au mouvement du logiciel libre (GNU).",
    "part": "Histoire de l'informatique et figures marquantes"
  },
  {
    "question": "Que désigne historiquement l'expression « ordinateurs humains » (human computers), évoquée à travers un article de la NASA cité en cours ?",
    "options": [
      "Des puces de silicium intégrant des cellules biologiques",
      "Des personnes, très majoritairement des femmes, chargées d'effectuer de complexes calculs mathématiques et astronomiques à la main, avant l'électronique",
      "Un projet secret d'Alan Turing durant la Seconde Guerre mondiale",
      "Des robots humanoïdes construits dans les années 1950"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours renvoie vers l'article de la NASA intitulé « Quand les ordinateurs étaient humains » (« When computers were human »), qui documente ce travail de calcul manuel.",
    "part": "Histoire de l'informatique et figures marquantes"
  },
  {
    "question": "Quel film sorti en 2016, réalisé par Theodore Melfi, est mentionné en cours à propos des figures féminines longtemps restées dans l'ombre de l'histoire de l'informatique et du calcul ?",
    "options": [
      "Les Figures de l'ombre (Hidden Figures)",
      "Interstellar",
      "The Imitation Game",
      "The Social Network"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours mentionne l'hommage rendu par la NASA à ces mathématiciennes (« Hidden Figures ») ainsi que « le film de Theodore Melfi (2016) ».",
    "part": "Histoire de l'informatique et figures marquantes"
  },
  {
    "question": "Après avoir présenté ces figures historiques, quelles questions ouvertes le cours pose-t-il explicitement aux étudiants ?",
    "options": [
      "Quel est le salaire moyen d'un informaticien en France ?",
      "Quel langage de programmation est le plus utilisé aujourd'hui ?",
      "Combien de brevets ont été déposés en informatique depuis 1950 ?",
      "Et ces 20 dernières années ? Y a-t-il eu beaucoup de femmes qui ont marqué le développement de l'informatique ?"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours conclut cette diapositive par deux questions ouvertes : « Et ces 20 dernières années ? » et « Y a-t-il eu beaucoup de femmes qui ont marqué le développement de l'informatique ? ».",
    "part": "Histoire de l'informatique et figures marquantes"
  },
  {
    "question": "Qu'affirme la chercheuse Rita Bencivenga (2017) à propos de « la construction sociale de l'image de l'informatique » ?",
    "options": [
      "Que les stéréotypes liés à l'informatique ont totalement disparu depuis les années 1990",
      "Que l'informatique s'est développée indépendamment de tout contexte social ou politique",
      "Que le codage informatique est une activité purement biologique",
      "Que « l'évolution des technologies est étroitement liée à la période historique, à la société et aux modèles culturels en vogue au moment où elles sont produites »"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours cite Rita Bencivenga (2017) : « l'évolution des technologies est étroitement liée à la période historique, à la société et aux modèles culturels en vogue au moment où elles sont produites ».",
    "part": "Représentations sociales, métiers et épistémologie de l'informatique"
  },
  {
    "question": "Sur quel thème portent les travaux d'Isabelle Collet, professeure en sciences de l'éducation et études de genre à l'Université de Genève, cités en cours ?",
    "options": [
      "« Les pionniers du silicium »",
      "« Effet de genre : le paradoxe des études d'informatique » (2011)",
      "« La fin des geeks au cinéma »",
      "« L'informatique sans les mathématiques »"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours s'appuie sur « les travaux d'Isabelle Collet [...] Extrait de 'Effet de genre : le paradoxe des études d'informatique', Isabelle Collet (2011) ».",
    "part": "Représentations sociales, métiers et épistémologie de l'informatique"
  },
  {
    "question": "Que dit le cours à propos de l'évolution des stéréotypes du « geek » et du « hacker » au cinéma ?",
    "options": [
      "Le cinéma n'a jamais représenté ces figures",
      "Ces stéréotypes sont désormais exclusivement féminins au cinéma",
      "Ces stéréotypes évoluent, mais restent encore majoritairement représentés dans une version masculine",
      "Ces stéréotypes ont disparu du cinéma depuis les années 2000"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours indique : « Les stéréotypes du geek et du hacker évoluent [...] Mais toujours pas dans une version féminine ! », tout en notant que leur image « évolue aussi au cinéma ».",
    "part": "Représentations sociales, métiers et épistémologie de l'informatique"
  },
  {
    "question": "Que rappelle le cours à propos de la variété des métiers de l'informatique, au-delà des postes de développeur ou programmeur ?",
    "options": [
      "Travailler dans l'informatique ne veut pas forcément dire être développeur ou programmeur : il existe une très grande variété de métiers, à différents niveaux, y compris celui de chercheur ou chercheuse — souvent absent des listes de métiers courantes",
      "Le métier de chercheur en informatique est le métier le plus représenté sur le marché du travail",
      "Seuls les titulaires d'un bac+5 peuvent exercer un métier de l'informatique",
      "Tous les métiers de l'informatique se résument à la programmation"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours souligne : « Mais travailler dans l'informatique ne veut pas forcément dire être développeur ou programmeur [...] il manque un métier dans ces listes : celui de chercheur ou chercheure en informatique ! Mais ce métier n'est pas accessible à bac+5 ».",
    "part": "Représentations sociales, métiers et épistémologie de l'informatique"
  },
  {
    "question": "Comment le cours définit-il une « discipline », par opposition à une « science » ?",
    "options": [
      "Une discipline est une science strictement expérimentale, alors que la science est purement théorique",
      "Discipline et science sont des synonymes parfaits sans aucune différence",
      "Une discipline concerne uniquement l'enseignement, la science uniquement la recherche industrielle",
      "Une discipline est une branche du savoir développée par une communauté de spécialistes adhérant aux mêmes pratiques de recherche, alors que la science se concentre uniquement sur les connaissances scientifiques (vérifiables), la discipline incluant aussi des connaissances non scientifiques"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours précise : « Une discipline désigne une branche du savoir développée par une communauté de spécialistes adhérant aux mêmes pratiques de recherche », alors que « la science se concentre uniquement sur les connaissances scientifiques, tandis que la discipline comprend également les connaissances non scientifiques ».",
    "part": "Représentations sociales, métiers et épistémologie de l'informatique"
  },
  {
    "question": "Quel critère de scientificité le philosophe des sciences Karl Popper (1902-1994) propose-t-il pour distinguer une démarche scientifique d'une pseudoscience ?",
    "options": [
      "L'approbation unanime de la théorie par la société civile",
      "Le fait que la théorie génère des gains économiques substantiels",
      "La réfutabilité (falsifiabilité) : une théorie doit permettre de déduire des conséquences testables, susceptibles d'être réfutées par l'expérience",
      "L'impossibilité absolue de prouver qu'une théorie est fausse"
    ],
    "correctAnswer": 2,
    "explanation": "Selon Popper cité en cours, la science doit fonctionner « de manière déductive [...] théorie, déduction de conséquences, expérience pouvant réfuter la théorie » : une hypothèse qui ne prend pas le risque d'être contredite par l'expérience n'est pas scientifique.",
    "part": "Représentations sociales, métiers et épistémologie de l'informatique"
  },
  {
    "question": "Comment la classification « possible » des sciences présentée en cours répartit-elle les disciplines scientifiques fondamentales ?",
    "options": [
      "En techniques informatiques et théories philosophiques",
      "En sciences de l'ingénieur et sciences médicales uniquement",
      "En sciences déductives universelles et sciences technologiques privées",
      "En sciences formelles ou exactes (mathématiques pures, logique, informatique théorique) d'une part, et sciences empiriques ou expérimentales (sciences naturelles, sciences humaines et sociales) d'autre part"
    ],
    "correctAnswer": 3,
    "explanation": "Le schéma du cours distingue la « science fondamentale » entre « Sciences formelles (ou exactes) » et « Sciences empiriques ou expérimentales » (elles-mêmes divisées en sciences naturelles, sciences de la vie, de la terre, physique, et sciences humaines et sociales).",
    "part": "Représentations sociales, métiers et épistémologie de l'informatique"
  },
  {
    "question": "Quelle opinion célèbre (et débattue) Louis Pasteur (1822-1895) défendait-il à propos du concept de « sciences appliquées » ?",
    "options": [
      "Que l'informatique est la seule véritable science appliquée",
      "Que les sciences appliquées sont supérieures aux sciences fondamentales",
      "Que la recherche fondamentale ne mène jamais à des applications concrètes",
      "Qu'« il n'existe pas de sciences appliquées, mais seulement des applications de la science », l'application relevant de la technologie et non de la science elle-même"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours cite Pasteur : « Souvenez-vous qu'il n'existe pas de sciences appliquées, mais seulement des applications de la science », l'application des sciences relevant selon lui de la technologie et non de la science.",
    "part": "Représentations sociales, métiers et épistémologie de l'informatique"
  },
  {
    "question": "Selon le chercheur Gilles Dowek cité en cours, pourquoi le mot « informatique » ressemble-t-il structurellement au mot « chimie » plutôt qu'au mot « physique » ?",
    "options": [
      "Parce que la chimie utilise des ordinateurs pour simuler des réactions",
      "Parce que l'informatique n'étudie aucun objet du monde physique",
      "Parce qu'à l'image de « chimie », le mot « informatique » désigne à la fois une science (qui vise à savoir) et une technique (qui vise à construire)",
      "Parce que les processeurs sont fabriqués à partir de composants chimiques"
    ],
    "correctAnswer": 2,
    "explanation": "Gilles Dowek explique : « Comme le mot 'chimie', et contrairement au mot 'physique', le mot 'informatique' désigne à la fois une science et une technique, c'est-à-dire une activité qui vise à savoir et une autre qui vise à construire ».",
    "part": "Représentations sociales, métiers et épistémologie de l'informatique"
  },
  {
    "question": "En quelle année et dans quel pays le mot « informatique » est-il apparu, et de quels mots est-il la contraction ?",
    "options": [
      "En 1980 aux États-Unis, contraction de « information » et « technology »",
      "En 1970 en Allemagne, contraction de « internet » et « pratique »",
      "En 1962 en France (ou 1957 en Allemagne), contraction de « information » et « automatique »",
      "En 1950 en Angleterre, contraction de « informal » et « mathematics »"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours indique : « informatique [...] Qui apparait en 1962 en France (ou en 1957 en Allemagne) comme une contraction des mots 'information' et 'automatique' », traduit par « computer science » en anglais.",
    "part": "Représentations sociales, métiers et épistémologie de l'informatique"
  },
  {
    "question": "D'après le Larousse cité en cours, quelle différence sépare le système « numérique » du système « analogique » ?",
    "options": [
      "L'analogique n'existe qu'en France, le numérique est un concept international",
      "Il n'existe aucune différence technique, seul le prix du matériel change",
      "Le numérique utilise des bandes magnétiques, l'analogique du code binaire",
      "« Le système analogique correspond à la variation continue d'une grandeur physique concrète », tandis que « dans le système numérique, l'information est représentée par des valeurs numériques discrètes, sous forme binaire »"
    ],
    "correctAnswer": 3,
    "explanation": "Le Larousse, cité en cours, oppose la variation continue d'une grandeur physique concrète (analogique) à la représentation par des valeurs discrètes sous forme binaire (numérique).",
    "part": "Représentations sociales, métiers et épistémologie de l'informatique"
  },
  {
    "question": "D'après le cours, quelle est la différence entre l'adjectif « numérique » et l'anglicisme « digital » en français, et que précise un arrêté de 2020 à ce sujet ?",
    "options": [
      "« Numérique » est un anglicisme récent, alors que « digital » est le terme français d'origine",
      "L'arrêté de 2020 impose au contraire l'usage exclusif du mot « digital » en France",
      "« Digital », en français, se rapporte étymologiquement aux doigts (ex. empreintes digitales) et n'est qu'un synonyme fautif de « numérique » ; un arrêté de 2020 impose de remplacer « digital » par « numérique »",
      "« Digital » et « numérique » sont deux termes officiels totalement distincts, sans lien entre eux"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours précise que « digital » en français se rapporte « aux doigts (ex : empreintes digitales) » et n'est qu'un « anglicisme et souvent synonyme (à tort) de numérique », d'où « un arrêté de 2020 pour remplacer le mot 'digital' par le mot 'numérique' ».",
    "part": "Représentations sociales, métiers et épistémologie de l'informatique"
  },
  {
    "question": "Comment le cours définit-il la « recherche scientifique », et depuis quand se professionnalise-t-elle avec l'apparition du métier de chercheur ?",
    "options": [
      "Une activité purement administrative apparue au XXe siècle",
      "Une pratique strictement religieuse jusqu'au XIXe siècle",
      "Un ensemble d'actions entreprises pour inventer, produire et développer les connaissances scientifiques (partie créative de la science), qui se professionnalise au XIXe siècle",
      "Un ensemble de règles commerciales encadrant les brevets, apparu au XVIIIe siècle"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours définit la recherche scientifique comme l'« Ensemble des actions entreprises pour inventer, produire et développer les connaissances scientifiques. Partie créative de la science », qui « se professionnalise au XIXe siècle avec l'apparition du métier de chercheur ».",
    "part": "La recherche en informatique en France : institutions, statistiques et financement"
  },
  {
    "question": "Selon la distinction reprise de l'économiste Joseph Schumpeter, en quoi une « invention » diffère-t-elle d'une « innovation » ?",
    "options": [
      "L'invention concerne uniquement le matériel (hardware), l'innovation uniquement le logiciel (software)",
      "L'invention est une découverte scientifique ou technique qui ne répond pas forcément à un besoin (ex. un prototype de laboratoire) ; l'innovation est la diffusion ou la commercialisation de cette invention auprès du public, parfois des années plus tard",
      "L'invention est toujours brevetée, l'innovation est toujours gratuite et libre de droits",
      "L'invention est réalisée par des entreprises privées, l'innovation exclusivement par des chercheurs universitaires"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours distingue : « Invention [...] Mise au point de quelque chose qui n'existait pas auparavant [...] Ne devient pas forcément une innovation » et « Innovation : [...] Diffusion ou commercialisation d'une invention auprès du public [...] Parfois plusieurs années après l'invention ».",
    "part": "La recherche en informatique en France : institutions, statistiques et financement"
  },
  {
    "question": "D'après le tableau chronologique du cours, laquelle des dates suivantes correspond bien à l'INVENTION du microprocesseur (et non à sa commercialisation) ?",
    "options": [
      "1971",
      "1981",
      "1976",
      "1969"
    ],
    "correctAnswer": 3,
    "explanation": "Le tableau du cours situe l'invention du microprocesseur en « 1969 : microprocesseur », tandis que « 1971 : Intel commercialise le premier microprocesseur » relève de la colonne Innovation.",
    "part": "La recherche en informatique en France : institutions, statistiques et financement"
  },
  {
    "question": "D'après le tableau chronologique du cours, quelle innovation grand public est associée à l'année 2022 ?",
    "options": [
      "La commercialisation du Macintosh d'Apple",
      "Le lancement du premier PC IBM",
      "La naissance du web (WWW) au CERN",
      "L'agent conversationnel ChatGPT (OpenAI)"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours situe dans la colonne Innovation : « 2022 : Agent conversationnel ChatGPT (OpenAI) », face à « 2020 : modèle de langue GPT3 (OpenAI) » côté Invention.",
    "part": "La recherche en informatique en France : institutions, statistiques et financement"
  },
  {
    "question": "Quel institut public de recherche français, dédié à l'informatique et à l'automatique, a été créé en 1967 sous l'acronyme IRIA avant de devenir l'INRIA en 1980 ?",
    "options": [
      "L'ANR (Agence nationale de la recherche)",
      "Le CNRS",
      "Le Hcéres",
      "L'IRIA, devenu l'Institut national de recherche en informatique et en automatique (INRIA)"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours indique : « 1967 : l'État confie la recherche en informatique à l'IRIA [...] qui deviendra l'INRIA en 1980 ».",
    "part": "La recherche en informatique en France : institutions, statistiques et financement"
  }
];
