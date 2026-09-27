const outilsP2Questions = [
  {
    "question": "Comment génère-t-on une équation centrée et numérotée automatiquement par LaTeX, afin de pouvoir y faire référence plus tard ?",
    "options": [
      "En plaçant la formule dans un environnement tabular",
      "Avec l'environnement \\begin{equation}...\\end{equation}",
      "En l'insérant dans un bloc de commentaire précédé de %",
      "En écrivant $expression$ suivi de la commande \\number"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours indique qu'une « Équation numérotée » se déclare avec \\begin{equation}...\\end{equation}, ce qui permet ensuite d'y faire référence avec \\label et \\ref.",
    "part": "LaTeX — Mode mathématique"
  },
  {
    "question": "Quelle commande de police mathématique produit des lettres à double barre verticale (utilisées par exemple pour noter l'ensemble des réels R ou des entiers Z) ?",
    "options": [
      "\\mathnormal{}",
      "\\mathrm{}",
      "\\mathcal{}",
      "\\mathbb{}"
    ],
    "correctAnswer": 3,
    "explanation": "Le mémento des polices mathématiques du cours indique : « \\mathbb{...} : police avec double barre », par opposition à \\mathnormal (police normale), \\mathcal (police calligraphiée), \\mathrm (police romaine) et \\mathbf (police en gras).",
    "part": "LaTeX — Mode mathématique"
  },
  {
    "question": "D'après le mémento des symboles mathématiques du cours, quelles commandes produisent respectivement le symbole d'appartenance ∈ et le symbole d'infini ∞ ?",
    "options": [
      "\\in pour ∈, et \\infty pour ∞",
      "\\cap pour ∈, et \\infty pour ∞",
      "\\in pour ∈, et \\forall pour ∞",
      "\\exists pour ∈, et \\emptyset pour ∞"
    ],
    "correctAnswer": 0,
    "explanation": "Le mémento des symboles présenté en cours associe explicitement : « ∈ : \\in » et « ∞ : \\infty », aux côtés d'autres symboles comme \\leq (≤), \\geq (≥), \\neq (≠), \\forall (∀) ou \\exists (∃).",
    "part": "LaTeX — Mode mathématique"
  },
  {
    "question": "Comment fait-on en sorte que la taille de parenthèses ou de crochets s'adapte automatiquement à la hauteur d'une fraction ou d'une expression complexe qu'ils entourent ?",
    "options": [
      "En déclarant la formule dans un environnement array dédié",
      "En mettant les parenthèses en gras avec \\mathbf{}",
      "En utilisant les commandes \\left( et \\right) autour de l'expression",
      "En utilisant uniquement les indices _{...} et exposants ^{...}"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours indique : « Adaptation de la taille des parenthèses avec \\left( et \\right) », permettant aux délimiteurs d'épouser la hauteur du contenu (par exemple une fraction ou une somme).",
    "part": "LaTeX — Mode mathématique"
  },
  {
    "question": "Comment écrit-on un indice et un exposant en mode mathématique LaTeX, et quelles commandes désignent des symboles « à taille variable » qui s'adaptent à ce qui suit (comme une somme ou une intégrale) ?",
    "options": [
      "Indices avec ^{...}, exposants avec _{...} ; symboles à taille variable : \\textbf, \\textit, \\emph",
      "Indices et exposants s'écrivent tous deux avec {...} ; il n'existe pas de symboles à taille variable",
      "Indices avec _{...}, exposants avec ^{...} ; symboles à taille variable : \\sum, \\prod, \\int, \\bigcap, \\bigcup",
      "Indices avec [...], exposants avec (...) ; symboles à taille variable : \\tiny, \\Huge"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours précise : « Utilisation d'indices avec _{…} » et « Utilisation d'exposants avec ^{…} », et présente parmi les « fonctions mathématiques à taille variable » qui adaptent leur taille à ce qui suit : \\sum, \\prod, \\int, \\iint, \\bigcap, \\bigcup.",
    "part": "LaTeX — Mode mathématique"
  },
  {
    "question": "Pour écrire une fonction mathématique usuelle comme le sinus, le logarithme ou une limite, quelle convention le cours recommande-t-il ?",
    "options": [
      "Donner le nom de la fonction comme une commande LaTeX, par exemple \\sin, \\log, \\ln ou \\lim",
      "Toujours utiliser le package graphicx pour dessiner la fonction",
      "Utiliser exclusivement des lettres grecques pour désigner les fonctions",
      "Écrire le nom de la fonction en mode texte normal, hors du mode mathématique"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours indique : « Les fonctions mathématiques [...] Donner le nom de la fonction comme commande », avec des exemples tels que \\sin, \\cos, \\tan, \\exp, \\ln, \\log, \\lim, \\sup, \\max, \\det.",
    "part": "LaTeX — Mode mathématique"
  },
  {
    "question": "Dans la déclaration \\begin{tabular}{descripteurs}, que signifient respectivement les descripteurs de colonne l, c et r ?",
    "options": [
      "Alignement à gauche (left), centré (center), et à droite (right)",
      "Ligne, colonne, renvoi",
      "Largeur fixe, cadre centré, bordure renforcée",
      "Longueur de ligne, coupure automatique, cellule vide"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours précise pour la forme de chaque colonne : « l, c, r : aligné à gauche, centré, aligné à droite ».",
    "part": "LaTeX — Tableaux"
  },
  {
    "question": "Si l'on souhaite fixer la largeur d'une colonne tout en centrant verticalement son contenu, quel descripteur de colonne doit-on utiliser ?",
    "options": [
      "p{taille} (aligné en haut de la cellule)",
      "b{taille} (aligné en bas de la cellule)",
      "m{taille} (aligné au centre de la cellule)",
      "c{taille} (ce descripteur n'existe pas avec une taille)"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours distingue trois descripteurs à taille fixe : « p{taille} : aligné en haut de la cellule », « m{taille} : aligné au centre de la cellule », « b{taille} : aligné en bas de la cellule ».",
    "part": "LaTeX — Tableaux"
  },
  {
    "question": "En syntaxe de tableau LaTeX, à quoi servent respectivement les caractères & et \\\\\\\\ ?",
    "options": [
      "& permet de passer d'une cellule à une autre sur la même ligne ; \\\\\\\\ permet de passer à la ligne suivante",
      "& insère un espace insécable ; \\\\\\\\ trace une bordure",
      "& insère une note de bas de page ; \\\\\\\\ insère une formule mathématique",
      "& fusionne deux colonnes ; \\\\\\\\ annule la mise en forme du tableau"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours précise : « & : pour passer d'une cellule à une autre » et « \\\\\\\\ : pour passer à la ligne suivante », en complément de \\hline pour tracer un trait horizontal.",
    "part": "LaTeX — Tableaux"
  },
  {
    "question": "Quelle commande permet de tracer un trait horizontal qui ne s'étend que sur certaines colonnes d'un tableau (et non sur toute sa largeur) ?",
    "options": [
      "\\multicolumn",
      "\\cline{col_debut-col_fin}",
      "\\vline",
      "\\hline"
    ],
    "correctAnswer": 1,
    "explanation": "La commande \\cline permet de tracer une ligne horizontale partielle « en précisant les numéros de colonne de départ et d'arrivée », par exemple \\cline{2-3}.",
    "part": "LaTeX — Tableaux"
  },
  {
    "question": "À quoi servent respectivement les commandes \\multirow et \\multicolumn dans un tableau LaTeX ?",
    "options": [
      "\\multirow insère une image ; \\multicolumn insère une note de bas de page",
      "\\multirow et \\multicolumn servent tous deux uniquement à changer la couleur du texte",
      "\\multirow fusionne plusieurs lignes en une seule cellule ; \\multicolumn fusionne plusieurs colonnes en une seule cellule",
      "\\multirow numérote les lignes ; \\multicolumn numérote les colonnes"
    ],
    "correctAnswer": 2,
    "explanation": "L'exemple du cours illustre \\multirow{3}{5mm}{$a_1$} pour fusionner trois lignes verticalement, et \\multicolumn{2}{c|}{...} pour fusionner deux colonnes horizontalement dans un même tableau.",
    "part": "LaTeX — Tableaux"
  },
  {
    "question": "Que signifie le symbole | placé entre deux descripteurs de colonnes dans \\begin{tabular}{l|c|r} ?",
    "options": [
      "Il fusionne automatiquement les deux colonnes adjacentes",
      "Il indique qu'il faut séparer les colonnes par un trait vertical",
      "Il indique une opération logique « ou » entre les colonnes",
      "Il indique la fin du tableau"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours précise, parmi la forme de chaque colonne : « | : indique qu'il faut séparer les colonnes par un trait vertical ».",
    "part": "LaTeX — Tableaux"
  },
  {
    "question": "Quel package LaTeX est indispensable pour importer et dimensionner des images externes dans un document ?",
    "options": [
      "array",
      "graphicx",
      "amsmath",
      "babel"
    ],
    "correctAnswer": 1,
    "explanation": "L'inclusion d'images repose sur le « Package graphicx » et sa commande \\includegraphics[options]{fichier}.",
    "part": "LaTeX — Figures, flottants, labels et références"
  },
  {
    "question": "Quelle option de la commande \\includegraphics permet d'ajuster la largeur d'une image pour qu'elle occupe exactement 70% de la largeur de texte disponible ?",
    "options": [
      "[angle=0.7]",
      "[height=70cm]",
      "[scale=70]",
      "[width=0.7\\textwidth]"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours donne l'exemple : « [width=0.7\\textwidth] → image prenant 70% de la largeur du texte », la largeur pouvant s'exprimer en pourcentage de la largeur disponible sur la page.",
    "part": "LaTeX — Figures, flottants, labels et références"
  },
  {
    "question": "Quel format d'image le cours recommande-t-il de privilégier pour garantir un rendu de qualité, notamment lors d'un redimensionnement ?",
    "options": [
      "Les images vectorielles (comme .eps), ou des images png/bitmap à la taille exacte voulue, car un redimensionnement ne donne pas un bon rendu",
      "Les captures d'écran brutes en .bmp haute résolution uniquement",
      "Le format .sty recompilé en image",
      "Exclusivement le format .gif pour limiter la taille du fichier"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours conseille de « Privilégier les images vectorielles (eps), ou images png ou bitmap qui font exactement la taille voulue (re-dimensionnement ne donne pas un bon rendu) ».",
    "part": "LaTeX — Figures, flottants, labels et références"
  },
  {
    "question": "Qu'est-ce qu'un « flottant » (float) en terminologie de mise en page LaTeX ?",
    "options": [
      "Une formule mathématique alignée automatiquement à droite",
      "Un texte en italique qui déborde des marges de la page",
      "Une erreur de compilation qui produit des pages blanches",
      "Un objet, comme un tableau ou une figure, qui n'appartient pas directement au texte et que LaTeX déplace automatiquement selon les besoins de la mise en page"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours définit les flottants comme des « Objets n'appartenant pas directement au texte (exemple : tableaux, figures) » qui se déplacent « en fonction des besoins de la mise en page : LaTeX les place au mieux », avec possibilité de légende et de référence.",
    "part": "LaTeX — Figures, flottants, labels et références"
  },
  {
    "question": "Comment attribue-t-on une étiquette (label) à un flottant ou à un titre de section, et quelle commande permet ensuite d'afficher le numéro correspondant dans le texte ?",
    "options": [
      "Le label se place en option de \\documentclass, puis \\pageref{label} affiche son numéro",
      "\\tag{nom}, puis \\link{label}",
      "%label%, puis \\cite{label}",
      "\\label{nom} dans le flottant ou après le titre, puis \\ref{label} pour afficher le numéro correspondant"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours indique : « Mettre un label [...] \\label{nom du label} », puis « Pour y faire référence : \\ref{label} : fait référence au numéro correspondant à l'objet (tableau, figure, section…) ».",
    "part": "LaTeX — Figures, flottants, labels et références"
  },
  {
    "question": "Quelle commande permet de renvoyer le lecteur au numéro de la page physique contenant un certain label, plutôt qu'au numéro de l'objet lui-même ?",
    "options": [
      "\\pageref{label}",
      "\\footnote{label}",
      "\\ref{label}",
      "\\cite{label}"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours distingue \\ref{label} (numéro de l'objet, ex. « le tableau 4 ») de \\pageref{label}, qui « fait référence à la page contenant le label » (ex. « le tableau de la page 5 »).",
    "part": "LaTeX — Figures, flottants, labels et références"
  },
  {
    "question": "Quels sont les deux types de flottants standards présentés dans le cours, et à quoi sert chacun ?",
    "options": [
      "page et section, qui ne concernent pas les images",
      "figure (pour les figures, graphiques, images) et table (pour les tableaux et données numériques ou textuelles)",
      "tabular et array, tous deux réservés aux données numériques",
      "graphic et float, sans distinction d'usage"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours indique deux types de flottant : « figure : utilisé pour les figures, graphiques, images » et « table : utilisé pour les tableaux, tables, données numériques et/ou textuelles ».",
    "part": "LaTeX — Figures, flottants, labels et références"
  },
  {
    "question": "Quelles commandes génèrent respectivement le sommaire général du document, la liste des figures et la liste des tableaux ?",
    "options": [
      "\\summary, \\indexfigures et \\indextables",
      "\\maketitle, \\tableofcontents et \\listofalgorithms",
      "\\contents, \\figures et \\tables",
      "\\tableofcontents, \\listoffigures et \\listoftables"
    ],
    "correctAnswer": 3,
    "explanation": "LaTeX permet de générer « 3 sommaires différents » : \\tableofcontents (sommaire général), \\listoffigures (flottants de type figure) et \\listoftables (flottants de type table).",
    "part": "LaTeX — Figures, flottants, labels et références"
  },
  {
    "question": "Dans la déclaration d'un flottant \\begin{table}[position], que signifient précisément les lettres h et b du paramètre de position ?",
    "options": [
      "Ce sont des paramètres réservés à la largeur de colonne, sans lien avec la position",
      "h signifie « here » (à l'endroit exact où il est inscrit dans le fichier source) et b signifie « bottom » (en bas de page)",
      "h signifie « header » (haut de la première page) et b signifie « bold » (en gras)",
      "h signifie « horizontal » et b signifie « bordure »"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours détaille les lettres de position : « h : here, à l'endroit où il est inscrit dans le fichier source », « t : top, en haut d'une page », « b : bottom, en bas d'une page » et « p : page, sur une page ne contenant que des flottants ».",
    "part": "LaTeX — Figures, flottants, labels et références"
  },
  {
    "question": "Quelle convention de nommage des labels le cours recommande-t-il pour s'y retrouver dans le référencement d'un document ?",
    "options": [
      "Préfixer le label par le type de l'objet en question et lui donner un nom explicite, par exemple \\label{tab:res-experimentations} ou \\label{fig:framework}",
      "Ne jamais préfixer les labels afin de garder un nom court",
      "Utiliser exclusivement le nom de l'auteur du document comme label",
      "Utiliser des numéros aléatoires uniquement, sans texte"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours conseille : « Préfixer le label par le type de l'objet en question », « Donner un nom explicite », avec des exemples comme \\label{tab:res-experimentations}, \\label{fig:framework} ou \\label{section:introduction}.",
    "part": "LaTeX — Figures, flottants, labels et références"
  },
  {
    "question": "Quels sont les deux packages complémentaires couramment utilisés pour rédiger des algorithmes en LaTeX, et quel est le rôle de chacun ?",
    "options": [
      "algorithmic (décrire les instructions pas à pas) et algorithm (traiter les algorithmes comme des flottants, avec légende et numérotation)",
      "graphicx (dessiner) et beamer (projeter)",
      "array (structurer une grille) et verbatim (bloquer l'interprétation)",
      "babel (traduire) et amsmath (les équations)"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours précise l'usage courant de : « algorithmic : décrire les algorithmes » et « algorithm : traiter les algorithmes comme des flottants », ce dernier permettant \\caption, \\label et \\listofalgorithms.",
    "part": "LaTeX — Algorithmes"
  },
  {
    "question": "Sous le package algorithmic, par quelle commande obligatoire commence une instruction simple ?",
    "options": [
      "\\instruction",
      "\\BEGIN",
      "\\DO",
      "\\STATE"
    ],
    "correctAnswer": 3,
    "explanation": "La syntaxe du package algorithmic impose pour une instruction simple : \\STATE <text>.",
    "part": "LaTeX — Algorithmes"
  },
  {
    "question": "Comment traduit-on une structure conditionnelle Si-Alors-Sinon-Sinon si sous le package algorithmic ?",
    "options": [
      "\\WHEN{cond} ... \\OTHERWISE ... \\DONE",
      "\\IF{cond1} <text1> \\ELSIF{cond2} <text2> \\ELSE <text3> \\ENDIF",
      "\\IF{cond} ... \\THEN ... \\END",
      "\\CASE ... \\OF ... \\ENDCASE"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours donne la syntaxe : \\IF{<condition>} <text> \\ENDIF, ou avec alternative \\IF{<condition>} <text1> \\ELSE <text2> \\ENDIF, ou avec plusieurs branches \\IF{<condition1>} <text1> \\ELSIF{<condition2>} \\ELSE <text3> \\ENDIF.",
    "part": "LaTeX — Algorithmes"
  },
  {
    "question": "Quelles commandes du package algorithmic servent respectivement à formaliser les préconditions (entrées) et les postconditions (sorties) d'un algorithme ?",
    "options": [
      "\\INPUT et \\OUTPUT",
      "\\BEGIN et \\END",
      "\\REQUIRE (préconditions) et \\ENSURE (postconditions)",
      "\\PRE et \\POST"
    ],
    "correctAnswer": 2,
    "explanation": "Les pré-conditions et post-conditions se déclarent respectivement via \\REQUIRE <text> (input) et \\ENSURE <text> (output), par exemple \\REQUIRE $x \\neq 0$ et $n \\geq 0$.",
    "part": "LaTeX — Algorithmes"
  },
  {
    "question": "Comment un chercheur peut-il franciser les mots-clés par défaut d'un algorithme (par exemple transformer « Require » en « Entrée » et « While » en « Tant que ») ?",
    "options": [
      "En réécrivant entièrement le compilateur LaTeX en français",
      "En redéfinissant les macros d'origine avec \\renewcommand, par exemple \\renewcommand{\\algorithmicrequire}{\\textbf{Entrée:}}",
      "En activant uniquement le package babel, sans autre modification",
      "Ce changement est impossible sans modifier le code source du package"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours illustre la personnalisation du nommage des commandes via \\renewcommand, par exemple \\renewcommand{\\algorithmicrequire}{\\textbf{Entrée:}} ou \\renewcommand{\\algorithmicwhile}{\\textbf{tant que}}.",
    "part": "LaTeX — Algorithmes"
  },
  {
    "question": "Quelles boucles de contrôle le package algorithmic permet-il de décrire, parmi les suivantes ?",
    "options": [
      "Boucle POUR (\\FOR / \\FORALL), boucle TANT QUE (\\WHILE) et boucle REPETER JUSQU'À (\\REPEAT ... \\UNTIL)",
      "Uniquement des boucles infinies sans condition de sortie",
      "Boucle POUR et boucle SI, mais aucune boucle TANT QUE",
      "Uniquement une boucle POUR (\\FOR)"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours détaille successivement \\FOR{<condition>} <text> \\ENDFOR (et \\FORALL), \\WHILE{<condition>} <text> \\ENDWHILE, et \\REPEAT <text> \\UNTIL{<condition>}.",
    "part": "LaTeX — Algorithmes"
  },
  {
    "question": "Quelle commande du package algorithmic permet d'insérer un commentaire explicatif directement dans une ligne de pseudo-code ?",
    "options": [
      "% <text>",
      "\\ANNOTATE{<text>}",
      "\\NOTE{<text>}",
      "\\COMMENT{<text>}"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours illustre l'usage de \\COMMENT{<text>}, par exemple : \\STATE do something \\COMMENT{this is a comment}.",
    "part": "LaTeX — Algorithmes"
  },
  {
    "question": "Quelle commande génère la liste récapitulative de tous les algorithmes d'un document, de façon analogue à \\listoffigures pour les figures ?",
    "options": [
      "\\indexalgo",
      "\\listofalgorithms",
      "\\tableofalgorithms",
      "\\summaryalgo"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours indique, pour le package algorithm traitant les algorithmes comme des flottants : « Génération de la liste des algorithmes : \\listofalgorithms ».",
    "part": "LaTeX — Algorithmes"
  }
];
