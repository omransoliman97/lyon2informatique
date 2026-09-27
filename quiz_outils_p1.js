const outilsP1Questions = [
  {
    "question": "Quelle est la philosophie de conception qui distingue fondamentalement LaTeX des logiciels de traitement de texte classiques (type WYSIWYG) ?",
    "options": [
      "L'obligation de rédiger le document uniquement en anglais",
      "La possibilité de dessiner librement avec la souris sur chaque page",
      "La suppression totale de toute forme de mise en page automatique",
      "La séparation fond/forme : l'auteur se concentre sur la structure logique du document (découpage et contenu) et laisse LaTeX gérer la mise en page"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours définit LaTeX par la « Séparation fond/forme : préoccupation de la structure logique du document (découpage et contenu) », l'utilisateur passant par des fichiers de style ou paquetages plutôt que par une manipulation visuelle directe.",
    "part": "LaTeX — Philosophie, avantages/inconvénients et compilation"
  },
  {
    "question": "D'après le cours, LaTeX est-il conçu pour que l'on ajuste la mise en page directement « à la main » ?",
    "options": [
      "Cela dépend uniquement du thème Beamer choisi",
      "Seulement pour la mise en page des tableaux",
      "Oui, c'est même sa fonction principale",
      "Non : le cours avertit explicitement que « LaTeX n'est pas fait pour qu'on manipule la mise en page à la main »"
    ],
    "correctAnswer": 3,
    "explanation": "Une diapositive entière est consacrée à cet avertissement : « Attention : LaTeX n'est pas fait pour qu'on manipule la mise en page 'à la main' ».",
    "part": "LaTeX — Philosophie, avantages/inconvénients et compilation"
  },
  {
    "question": "Parmi les propositions suivantes, laquelle regroupe uniquement des avantages de LaTeX réellement cités dans le cours ?",
    "options": [
      "Mise en page soignée, création directe d'un PDF, positionnement automatique des flottants et prise en charge de la bibliographie via BibTeX",
      "Compatibilité exclusive avec les fichiers .docx de Microsoft Word",
      "Correction automatique de l'orthographe dans 40 langues et vérificateur de plagiat intégré",
      "Modification instantanée de la charte graphique d'un clic de souris et absence totale de compilation"
    ],
    "correctAnswer": 0,
    "explanation": "Les avantages listés sont : « Mise en page soignée », « Création d'un pdf en sortie », « Positionnement automatique des éléments (flottants) », « Prise en charge de la bibliographie (BibTeX) » et un « Éditeur d'équations ».",
    "part": "LaTeX — Philosophie, avantages/inconvénients et compilation"
  },
  {
    "question": "Quels sont les deux inconvénients de LaTeX explicitement mentionnés dans la diapositive de préambule ?",
    "options": [
      "Le coût d'apprentissage (langage LaTeX, compilation) et le coût de codage (difficulté à modifier la mise en page)",
      "Le prix élevé de la licence logicielle et l'absence de mode mathématique",
      "L'absence de gestion des images et l'incompatibilité avec macOS",
      "L'obligation d'une connexion internet permanente et l'absence de gestion bibliographique"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours cite deux inconvénients : « Coût d'apprentissage (langage LaTeX, compilation) » et « Coût de codage : difficulté de modification de mise en page ».",
    "part": "LaTeX — Philosophie, avantages/inconvénients et compilation"
  },
  {
    "question": "Comment s'articule la « moulinette » (le processus de compilation) LaTeX présentée en cours ?",
    "options": [
      "Le code source est écrit dans un fichier .tex (et .bib pour les références), puis un compilateur produit un fichier .pdf, parfois en deux passages",
      "Le fichier .tex est d'abord converti en .docx puis imprimé",
      "Le fichier .tex est directement transformé en exécutable binaire",
      "Un interpréteur exécute le fichier .tex ligne par ligne en temps réel, comme du JavaScript"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours décrit LaTeX comme un « langage de programmation évolué » et un « langage de description de documents » : codage d'un fichier source .tex (et .bib), puis compilation « comme pour un langage de programmation », produisant un .pdf, ce qui « se fait parfois en deux passages ».",
    "part": "LaTeX — Philosophie, avantages/inconvénients et compilation"
  },
  {
    "question": "Quelle classe de document LaTeX est spécifiquement utilisée pour créer des diaporamas ou présentations exportés en PDF ?",
    "options": [
      "report",
      "letter",
      "beamer",
      "article"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours précise : « Beamer : classe de LaTeX pour réaliser des présentations ou diaporamas au format pdf, avec de nombreux thèmes de présentation ».",
    "part": "LaTeX — Philosophie, avantages/inconvénients et compilation"
  },
  {
    "question": "Dans un document de classe beamer, comment est structurée une diapositive et quelle commande permet de choisir un thème visuel ?",
    "options": [
      "Une diapositive correspond à une \\section, et il n'existe pas de thèmes prédéfinis",
      "1 slide = 1 frame, délimité par \\begin{frame}...\\end{frame}, et le thème s'active avec \\usetheme{NomDuThème}",
      "Une diapositive correspond à 1 chapitre, et le thème se choisit avec \\documentclass{theme}",
      "1 slide = 1 \\part, et le thème se choisit dans un fichier .docx externe"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours indique : « Slide : 1 slide = 1 frame » avec la syntaxe \\begin{frame} \\frametitle{Titre} ... \\end{frame}, et l'activation d'un thème via \\usetheme{Boadilla} après \\documentclass{beamer}.",
    "part": "LaTeX — Philosophie, avantages/inconvénients et compilation"
  },
  {
    "question": "Quelle commande est indispensable pour ouvrir le squelette d'un document LaTeX et en définir le type global ?",
    "options": [
      "\\documentclass[options]{type}",
      "\\maketitle",
      "\\begin{document}",
      "\\usepackage{babel}"
    ],
    "correctAnswer": 0,
    "explanation": "Le squelette d'un document commence obligatoirement par la déclaration de la classe : \\documentclass[options]{type}, suivie des \\usepackage, puis de \\begin{document} ... \\end{document}.",
    "part": "LaTeX — Structure d'un document et syntaxe de base"
  },
  {
    "question": "Entre quelles deux commandes doit se trouver l'ensemble du contenu textuel destiné à être imprimé dans le document final ?",
    "options": [
      "Entre \\title{} et \\author{}",
      "Entre \\usepackage{} et \\documentclass{}",
      "Entre \\begin{document} et \\end{document}",
      "Entre \\section{} et \\subsection{}"
    ],
    "correctAnswer": 2,
    "explanation": "Le squelette d'un document LaTeX montre que le contenu se place strictement « Entre \\begin{document} et \\end{document} ».",
    "part": "LaTeX — Structure d'un document et syntaxe de base"
  },
  {
    "question": "En syntaxe LaTeX, à quoi correspondent respectivement un antislash suivi d'un nom, les accolades {} et les crochets [] ?",
    "options": [
      "Antislash = espace insécable ; accolades = tableau ; crochets = référence croisée",
      "Ce sont trois notations strictement équivalentes pour écrire des commentaires",
      "Antislash = commentaire ; accolades = options facultatives ; crochets = paramètres obligatoires",
      "Antislash = commande LaTeX ; accolades = paramètres de la commande ; crochets = options facultatives"
    ],
    "correctAnswer": 3,
    "explanation": "La syntaxe LaTeX précise : « Le \\ suivi d'un nom indique une commande LaTeX : \\commande », « Les {} indiquent des paramètres de la commande » et « Les [] sont des options facultatives ».",
    "part": "LaTeX — Structure d'un document et syntaxe de base"
  },
  {
    "question": "Quel symbole introduit un commentaire en LaTeX, et quels raccourcis clavier permettent de commenter/décommenter rapidement une sélection (par exemple sous Overleaf) ?",
    "options": [
      "Le symbole //, avec Ctrl+K pour commenter",
      "Le symbole %, avec Ctrl+q pour commenter et Ctrl+w pour décommenter",
      "Le symbole $, avec Ctrl+M pour commenter",
      "Le symbole #, avec Ctrl+/ pour commenter"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours indique : « Pour commenter, précéder texte avec % » puis « Commenter : sélection puis Ctrl q » et « Décommenter : sélection puis Ctrl w ».",
    "part": "LaTeX — Structure d'un document et syntaxe de base"
  },
  {
    "question": "Quels sont, dans la liste des packages LaTeX présentés, les rôles respectifs de fontenc[T1] et de babel ?",
    "options": [
      "fontenc[T1] compile le document ; babel le convertit en PDF",
      "fontenc[T1] et babel servent tous deux uniquement à la mise en page des tableaux",
      "fontenc[T1] gère la bibliographie ; babel inclut des images",
      "fontenc[T1] permet l'usage correct des accents dans le .tex ; babel adapte les commandes automatiques (sections, date, sommaire...) à la langue choisie"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours précise que « [T1]{fontenc} [...] indique l'encodage et permet surtout l'usage des accents dans le .tex », tandis que « babel : renomme les commandes automatiques [...] dans la langue choisie, en appliquant la bonne typographie ».",
    "part": "LaTeX — Structure d'un document et syntaxe de base"
  },
  {
    "question": "Comment définit-on le titre, l'auteur et la date d'un document, et quelle commande faut-il ensuite appeler pour générer l'affichage du titre ?",
    "options": [
      "Il n'existe aucune commande dédiée : le titre doit être écrit en texte brut",
      "\\title{}, \\author{}, \\date{}, puis \\maketitle (après \\begin{document})",
      "\\heading{}, \\writer{}, \\when{}, puis \\showtitle",
      "\\name{}, \\by{}, \\on{}, puis \\printtitle"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours indique la « Définition des éléments » via \\title{}, \\author{} (auteurs séparés par \\and) et \\date{}, puis la « Génération du titre » par \\maketitle après \\begin{document}.",
    "part": "LaTeX — Structure d'un document et syntaxe de base"
  },
  {
    "question": "Quels sont, du plus général au plus spécifique, les différents niveaux de structuration autorisés dans un document LaTeX de classe book ou report ?",
    "options": [
      "\\title, \\author, \\date, \\section",
      "\\chapter, \\part, \\paragraph, \\section",
      "\\part, \\chapter, \\section, \\subsection, \\subsubsection, \\paragraph, \\subparagraph",
      "\\subsection, \\section, \\chapter, \\part"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours liste les « Différents niveaux autorisés » dans cet ordre : \\part{titre} et \\chapter{titre} (réservés à book et report), puis \\section, \\subsection, \\subsubsection, \\paragraph et \\subparagraph.",
    "part": "LaTeX — Structure d'un document et syntaxe de base"
  },
  {
    "question": "Comment génère-t-on un sommaire automatique reprenant la structure numérotée du document, et comment exclut-on un titre de cette numérotation et du sommaire ?",
    "options": [
      "Avec \\tableofcontents, et en faisant suivre la commande de structure d'une étoile, par exemple \\section*{Introduction}",
      "Avec \\summary{}, et en mettant le titre entre parenthèses",
      "Le sommaire ne peut être généré qu'en le recopiant manuellement",
      "Avec \\index{}, et en précédant le titre du symbole #"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours précise que la structure est « numérotée et utilisée pour faire le sommaire (avec commande \\tableofcontents) sauf si commande de structure suivie de * », comme \\section*{Introduction}.",
    "part": "LaTeX — Structure d'un document et syntaxe de base"
  },
  {
    "question": "Parmi les classes de document LaTeX suivantes, laquelle N'est PAS citée comme exemple de classe dans le cours ?",
    "options": [
      "webpage, spreadsheet",
      "article, report, book",
      "nom_fichier.cls (fichier de style fourni)",
      "letter, slides, beamer"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours cite comme classes de document : « article, report, book, letter, slides, beamer, ..., ou nom_fichier.cls si fichier style fourni ». « webpage » et « spreadsheet » n'existent pas comme classes LaTeX standard citées ici.",
    "part": "LaTeX — Structure d'un document et syntaxe de base"
  },
  {
    "question": "Parmi les options de \\documentclass présentées, laquelle sert à préciser l'utilisation des règles typographiques françaises ?",
    "options": [
      "french",
      "twosides",
      "a4paper",
      "twocolumn"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours détaille les principales options : « french : précision de l'utilisation des règles typographiques françaises », en plus de 10pt/11pt/12pt (taille de police), a4paper/letter (taille du papier), twocolumn (mise en colonnes) et twosides (recto/verso).",
    "part": "LaTeX — Structure d'un document et syntaxe de base"
  },
  {
    "question": "Comment le compilateur LaTeX traite-t-il les espaces simples et les lignes vides consécutives dans le fichier source .tex ?",
    "options": [
      "Chaque ligne vide supplémentaire crée un grand espace blanc proportionnel dans le PDF final",
      "Une ligne vide provoque une erreur de compilation qui interrompt la génération du PDF",
      "Les espaces séparent les mots et les lignes vides séparent les paragraphes ; plusieurs lignes vides consécutives ne créent qu'une seule séparation de paragraphe (pas de saut multiple)",
      "Tout espace ou ligne vide est ignoré, le texte s'imprime en continu sans espace"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours précise : « Espaces séparent les mots », « Lignes vides séparent les paragraphes », mais « Attention : plusieurs lignes vides à la suite ne permettent pas de sauter plusieurs lignes, simplement de séparer les paragraphes ».",
    "part": "LaTeX — Mise en forme du texte, listes et notes"
  },
  {
    "question": "Quelles commandes permettent d'insérer un véritable saut de ligne forcé (sans changer de paragraphe) dans un document LaTeX ?",
    "options": [
      "La balise HTML <br> insérée dans le préambule",
      "\\paragraph{} uniquement",
      "\\skip{} ou \\vertical{}",
      "\\\\ (double antislash), \\newline, ou \\vspace{taille}"
    ],
    "correctAnswer": 3,
    "explanation": "Pour sauter des lignes, le cours indique « \\\\ ou \\vspace{taille} », ainsi que \\newline dans la liste des commandes d'espace et d'alignement.",
    "part": "LaTeX — Mise en forme du texte, listes et notes"
  },
  {
    "question": "Quel caractère doit précéder un symbole spécial réservé (comme #, $, %, &, _, {, }) pour l'afficher tel quel dans le document final ?",
    "options": [
      "Un antislash \\ (protection par antislash)",
      "Un symbole dollar $",
      "Un tilde ~",
      "Un pourcentage %"
    ],
    "correctAnswer": 0,
    "explanation": "Pour écrire ces symboles réservés, le cours indique : « Écriture de ces symboles : protection par \\ ».",
    "part": "LaTeX — Mise en forme du texte, listes et notes"
  },
  {
    "question": "Parmi les caractères spéciaux listés en cours, lequel est utilisé pour insérer une espace insécable ?",
    "options": [
      "Le symbole & (séparateur de tableau)",
      "Le symbole ^ (exposant)",
      "Le symbole _ (indice)",
      "Le symbole ~ (espace insécable)"
    ],
    "correctAnswer": 3,
    "explanation": "La liste des caractères spéciaux du cours associe : # macro, $ mode maths, % commentaires, \\ commande, ~ espace insécable, & séparateur de tableau, ^ exposant, _ indice, { } groupe.",
    "part": "LaTeX — Mise en forme du texte, listes et notes"
  },
  {
    "question": "Quelle est la distinction conceptuelle entre une commande et un environnement en LaTeX ?",
    "options": [
      "Les commandes ne concernent que les formules mathématiques, les environnements que les sections",
      "Il n'existe aucune différence : ce sont deux synonymes interchangeables",
      "Les commandes s'écrivent uniquement dans le préambule, les environnements après compilation",
      "Les commandes s'appliquent à ce qu'elles reçoivent en paramètres (ex. \\textbf{texte}) ; les environnements ont un \\begin{nom} et un \\end{nom}, et tout ce qui est au milieu subit leur effet"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours précise de « ne pas confondre commande et environnement » : « Les commandes s'appliquent à ce qu'elles reçoivent en paramètres » (exemple \\textbf{texte}) tandis que « Les environnements ont un début (\\begin{nom}) et une fin (\\end{nom}) : tout ce qui est au milieu subit l'effet de l'environnement ».",
    "part": "LaTeX — Mise en forme du texte, listes et notes"
  },
  {
    "question": "Quelle commande LaTeX met un texte en petites majuscules, et laquelle le souligne ?",
    "options": [
      "\\textbf{texte} pour les petites majuscules ; \\textit{texte} pour le soulignement",
      "\\Large{texte} pour les petites majuscules ; \\tiny{texte} pour le soulignement",
      "\\emph{texte} pour les petites majuscules ; \\textsc{texte} pour le soulignement",
      "\\textsc{texte} pour les petites majuscules ; \\underline{texte} pour le soulignement"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours liste : « \\textbf{texte gras}, \\textit{texte italique}, \\emph{texte italique}, \\underline{texte souligné}, \\textsc{texte à mettre en majuscules} ».",
    "part": "LaTeX — Mise en forme du texte, listes et notes"
  },
  {
    "question": "Parmi les commandes de taille de police suivantes, laquelle correspond bien à un ordre croissant, de la plus petite à la plus grande ?",
    "options": [
      "\\Huge, \\huge, \\large, \\normalsize, \\small, \\tiny",
      "\\small, \\normalsize, \\large, \\huge, \\tiny, \\Huge",
      "\\normalsize, \\small, \\large, \\huge",
      "\\tiny, \\scriptsize, \\footnotesize, \\small, \\normalsize, \\large, \\Large, \\LARGE, \\huge, \\Huge"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours liste précisément, dans cet ordre croissant : \\tiny, \\scriptsize, \\footnotesize, \\small, \\normalsize, \\large, \\Large, \\LARGE, \\huge, \\Huge.",
    "part": "LaTeX — Mise en forme du texte, listes et notes"
  },
  {
    "question": "Quelle commande insère une note de bas de page numérotée automatiquement, et où doit-elle être placée dans le texte ?",
    "options": [
      "\\note{contenu}, obligatoirement à la toute fin du document",
      "\\footnote{contenu} dans le préambule du document uniquement",
      "\\footnote{contenu de la note}, insérée à l'endroit exact de l'appel à la note",
      "\\bottom{note}, uniquement à l'intérieur d'un tableau"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours indique : « Note de bas de page : \\footnote{contenu de la note} », « Commande incluse à l'endroit exact de l'appel à la note », les notes étant « numérotées automatiquement dans l'ordre de leur utilisation ».",
    "part": "LaTeX — Mise en forme du texte, listes et notes"
  },
  {
    "question": "Quel package et quelle commande permettent de regrouper toutes les notes à la toute fin du document plutôt qu'en bas de chaque page ?",
    "options": [
      "Le package endnotes avec la commande \\endnote{contenu de la note}",
      "Le package verbatim avec la commande \\footnote{}",
      "Le package babel avec la commande \\footnote{}",
      "Le package graphicx avec la commande \\endnote{}"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours précise : « Commande \\endnote{contenu de la note} (package endnotes) [...] Toutes les notes à la fin du document plutôt qu'en fin de page ».",
    "part": "LaTeX — Mise en forme du texte, listes et notes"
  },
  {
    "question": "Quels sont les trois types d'environnements de liste présentés dans le cours, et à quoi sert chacun ?",
    "options": [
      "tabular, array, verbatim",
      "list, sublist, subsublist",
      "bullet, number, glossary",
      "itemize (liste à puces), enumerate (liste numérotée), description (liste de définitions)"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours présente : « itemize : liste à puces », « enumerate : liste numérotée » et « description : liste de définitions, [mot clé] après item ».",
    "part": "LaTeX — Mise en forme du texte, listes et notes"
  },
  {
    "question": "Dans une liste de type description, comment indique-t-on le mot-clé défini par chaque élément ?",
    "options": [
      "Entre crochets, immédiatement après la commande \\item : \\item [mot clé]",
      "Entre symboles dollars : \\item $mot clé$",
      "Entre accolades après l'item : \\item{mot clé}",
      "En ouvrant un environnement de paragraphe séparé pour chaque définition"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours précise que dans une liste description, on place le « [mot clé] » facultatif directement après la commande \\item.",
    "part": "LaTeX — Mise en forme du texte, listes et notes"
  },
  {
    "question": "Comment insère-t-on une formule mathématique simple à l'intérieur d'un paragraphe de texte courant ?",
    "options": [
      "En insérant un package equation dédié au milieu de la ligne",
      "En ouvrant l'environnement \\begin{math}...\\end{math}",
      "En encadrant l'expression de deux symboles dollars : $texte math$",
      "En utilisant directement les balises \\[ ... \\]"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours indique : « Inclusion dans un paragraphe : $texte math$ » comme première forme du mode mathématique.",
    "part": "LaTeX — Mode mathématique"
  },
  {
    "question": "Quelle syntaxe permet d'afficher une expression mathématique isolée, centrée sur sa propre ligne (sans numéro d'équation) ?",
    "options": [
      "\\[expression\\]",
      "{expression}",
      "\\\\expression\\\\",
      "\\inline{expression}"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours précise : « Expression isolée : \\[expression\\] », à distinguer de l'équation numérotée qui utilise \\begin{equation}...\\end{equation}.",
    "part": "LaTeX — Mode mathématique"
  }
];
