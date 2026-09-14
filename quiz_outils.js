const outilsQuestions = [
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
  },
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
  },
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
  },
  {
    "question": "En 1946, quel institut historique de calcul a été fondé par le CNRS pour concevoir les puissantes machines nécessaires aux calculs scientifiques d'après-guerre ?",
    "options": [
      "L'Agence nationale de la recherche",
      "L'institut Blaise Pascal",
      "Le laboratoire ERIC",
      "L'IRIA"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours mentionne : « 1946 : création par le CNRS de l'institut Blaise Pascal pour concevoir les puissantes machines à calculer dont les scientifiques ont besoin ».",
    "part": "La recherche en informatique en France : institutions, statistiques et financement"
  },
  {
    "question": "D'après les chiffres 2020 cités en cours pour la section CNU 27 (informatique), quelle était la répartition et la part de femmes parmi les 3360 enseignants-chercheurs recensés ?",
    "options": [
      "Moins de 2% de femmes sur l'ensemble de la section, tous grades confondus",
      "980 maîtres de conférences et 2380 professeurs, sans données de genre disponibles",
      "Une parité parfaite de 50% à tous les niveaux",
      "2380 maîtres de conférences (dont 26,4% de femmes) et 980 professeurs des universités (dont 19,7% de femmes)"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours précise : en 2020, la section 27 comptait « 3360 enseignants-chercheurs (EC) en informatique dont 2380 maitres de conférences dont 26,4% de femmes [et] 980 professeurs des universités dont 19,7% de femmes ».",
    "part": "La recherche en informatique en France : institutions, statistiques et financement"
  },
  {
    "question": "Quel institut du CNRS coordonne, depuis 2009, les recherches menées en informatique, automatique, traitement du signal, robotique et conception de systèmes sur puce ?",
    "options": [
      "L'INRIA-Lyon",
      "L'INS2I (Institut des sciences de l'information et de leurs interactions)",
      "L'ERIC",
      "L'ANR"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours indique : « Depuis 2009, l'institut des sciences de l'information et de leurs interactions (INS2I) coordonne les recherches menées au CNRS en informatique, automatique, traitement du signal et des images, robotique et conception de systèmes sur puce ».",
    "part": "La recherche en informatique en France : institutions, statistiques et financement"
  },
  {
    "question": "Quel était l'ordre de grandeur des effectifs de recherche en informatique (équivalents temps plein) dans le secteur privé français en 2017 ?",
    "options": [
      "Environ 500 équivalents temps plein",
      "Plus d'un million de chercheurs permanents",
      "Les entreprises privées françaises n'emploient légalement aucun chercheur",
      "Environ 20 000 équivalents temps plein recherche en informatique"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours indique : « En 2017, environ 20 000 équivalents temps plein recherche en informatique » dans le secteur privé, sur un total de 265 500 ETP recherche toutes disciplines confondues.",
    "part": "La recherche en informatique en France : institutions, statistiques et financement"
  },
  {
    "question": "Par quels canaux la recherche publique en informatique est-elle financée en France, d'après le cours ?",
    "options": [
      "Uniquement par des dons individuels de particuliers",
      "Par un impôt spécial prélevé sur les connexions internet des ménages",
      "Uniquement par la vente de licences logicielles par les universités",
      "Par de l'argent public (État via le MESR, le CNRS, l'ANR, les collectivités territoriales, l'Europe via Horizon Europe) et par de l'argent privé (R&D d'entreprises, partenariats public-privé, mécénat)"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours détaille un financement public (État/MESR, CNRS, ANR, collectivités, Europe Horizon) complété par un financement privé (R&D d'entreprises, partenariats public-privé comme les chaires, mécénat) et des financements publics indirects comme le crédit impôt recherche.",
    "part": "La recherche en informatique en France : institutions, statistiques et financement"
  },
  {
    "question": "Qu'est-ce que le « Crédit Impôt Recherche » (CIR), cité parmi les mécanismes de financement de la recherche en France ?",
    "options": [
      "Un système de notation des articles scientifiques par les banques",
      "Un prêt bancaire à taux zéro réservé aux étudiants de licence informatique",
      "Une subvention fiscale indirecte de l'État aux entreprises pour soutenir leurs activités de R&D",
      "Une taxe sur les serveurs informatiques les plus polluants"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours cite le CIR parmi les « financements publics indirects sous forme de subventions aux entreprises (crédit impôt recherche) ».",
    "part": "La recherche en informatique en France : institutions, statistiques et financement"
  },
  {
    "question": "Qui évalue la recherche en informatique en France, et à travers quels types de critères les chercheurs eux-mêmes sont-ils évalués (pour un poste, une promotion, une prime) ?",
    "options": [
      "Uniquement par un vote populaire en ligne",
      "Les chercheurs publics ne sont jamais évalués une fois titularisés",
      "Notamment par le Hcéres et les organismes financeurs pour les structures, et pour les chercheurs via le nombre de publications, l'encadrement doctoral, la direction de projets, l'expertise scientifique et le rayonnement national/international",
      "Uniquement par un examen écrit national commun à toutes les disciplines"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours mentionne l'évaluation des structures « Par l'Etat et le Hcéres » et par les organismes financeurs, et l'évaluation individuelle des chercheurs « à travers » le nombre de publications selon la notoriété des revues, l'encadrement doctoral, la direction de projets, l'expertise/évaluation de la recherche, et le rayonnement national et international.",
    "part": "La recherche en informatique en France : institutions, statistiques et financement"
  },
  {
    "question": "Par quels moyens les travaux et résultats scientifiques des chercheurs sont-ils reconnus par leurs pairs, d'après le cours ?",
    "options": [
      "Uniquement par le nombre de vues sur les réseaux sociaux",
      "Par un classement basé sur le salaire du chercheur",
      "Uniquement par la couverture médiatique grand public",
      "Par des publications scientifiques dans des conférences ou revues à comité de lecture, ou par des prix et distinctions comme le prix Nobel, la médaille Fields ou le prix Turing"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours indique une reconnaissance « Par les pairs : publications scientifiques dans des conférences ou revues (à comité de lecture) » et « Par des prix ou distinctions scientifiques : prix Nobel, médaille Fields, prix Turing ; médailles du CNRS, etc. ».",
    "part": "La recherche en informatique en France : institutions, statistiques et financement"
  },
  {
    "question": "Quels grands types de postes un.e chercheur.se en informatique peut-il/elle occuper, d'après le cours ?",
    "options": [
      "Le métier de chercheur en informatique n'existe que dans le secteur privé",
      "Enseignant-chercheur dans le supérieur (MCF, PU), chercheur dans un institut public (CNRS : IR, CR, DR), chercheur en entreprise (R&D) ou en start-up",
      "Uniquement des postes dans des start-ups",
      "Uniquement des postes de fonctionnaire d'État sans lien avec l'enseignement"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours liste : « L'enseignant-chercheur dans l'enseignement supérieur (MCF, PU) [...] Le chercheur dans un institut de recherche publique (CNRS : IR, CR, DR) [...] Le chercheur dans un service R&D d'une grande entreprise [...] Le chercheur dans une start-up ».",
    "part": "Devenir chercheur·se et la recherche à l'Université Lyon 2"
  },
  {
    "question": "Quel diplôme est requis (en principe) pour occuper un poste de chercheur ou d'enseignant-chercheur titulaire, d'après le cours ?",
    "options": [
      "Un master professionnel",
      "Un doctorat (bac+8)",
      "Aucun diplôme spécifique n'est requis",
      "Un diplôme d'ingénieur uniquement"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours précise : « Mais ils et elles ont (en principe) tous et toutes un doctorat (bac +8) ».",
    "part": "Devenir chercheur·se et la recherche à l'Université Lyon 2"
  },
  {
    "question": "Quel diplôme supplémentaire, obtenu après le doctorat, est requis pour pouvoir encadrer des thèses et postuler au grade de Professeur des universités (PU) ?",
    "options": [
      "Un brevet international de chercheur senior",
      "L'Habilitation à Diriger des Recherches (HDR)",
      "Un second doctorat",
      "Un Master de recherche avancée"
    ],
    "correctAnswer": 1,
    "explanation": "Le schéma de carrière du cours situe, après le doctorat et le poste de maître de conférences (MCF), l'obtention de l'« Habilitation à diriger des recherches (HDR) » avant l'accès au poste de Professeur des universités (PU).",
    "part": "Devenir chercheur·se et la recherche à l'Université Lyon 2"
  },
  {
    "question": "Quelles qualités et compétences le cours associe-t-il au métier de chercheur.se en informatique ?",
    "options": [
      "Uniquement d'excellentes compétences en mathématiques pures",
      "Être curieux, créatif, rigoureux, autonome et organisé ; savoir communiquer à l'oral et à l'écrit, et parler/lire/écrire l'anglais",
      "Uniquement la maîtrise d'un langage de programmation",
      "Aucune qualité particulière n'est requise au-delà du diplôme"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours indique : « Il/elle doit être Curieux, créatif, apte à sortir des sentiers battus, Rigoureux, Autonome et organisé [...] doit savoir Communiquer à l'oral et à l'écrit, Parler, lire et écrire l'anglais ».",
    "part": "Devenir chercheur·se et la recherche à l'Université Lyon 2"
  },
  {
    "question": "Au-delà de la recherche elle-même, quelles autres activités un.e enseignant.e-chercheur.se expérimenté.e peut-il/elle exercer, d'après le cours ?",
    "options": [
      "Exclusivement de la gestion administrative sans lien avec la recherche",
      "Encadrer de jeunes chercheurs, monter et animer des projets de recherche, organiser des conférences, diriger un laboratoire, évaluer les recherches de ses pairs",
      "Aucune activité au-delà de la publication d'articles",
      "Uniquement de l'enseignement, sans aucune activité de direction"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours liste, « avec l'expérience » : « Encadrer les jeunes chercheurs [...] Monter et animer des projets de recherche, Organiser des conférences, Faire de la médiation scientifique, Diriger un laboratoire [...] Evaluer les recherches de ses pairs ».",
    "part": "Devenir chercheur·se et la recherche à l'Université Lyon 2"
  },
  {
    "question": "Dans quelles composantes l'enseignement de l'informatique et de la statistique est-il dispensé à l'Université Lyon 2, d'après le cours ?",
    "options": [
      "Exclusivement au sein du département de philosophie",
      "Uniquement à la faculté de médecine",
      "Dans un centre de formation privé hors campus universitaire",
      "Dans un IUT (Statistique et Informatique Décisionnelle) et dans deux UFR : l'Institut de la communication, et Anthropologie, Sociologie et Sciences Politiques"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours précise que Lyon 2 compte, en enseignement, « Un BUT : Statistique et Informatique Décisionnelle (IUT) [...] Dans un IUT et deux UFR (facultés) : Institut de la communication ; Anthropologie, Sociologie et Sciences Politiques », avec deux licences et trois masters liés à l'informatique.",
    "part": "Devenir chercheur·se et la recherche à l'Université Lyon 2"
  },
  {
    "question": "Quels sont les trois laboratoires de recherche en informatique et génie industriel partenaires de l'Université Lyon 2 ?",
    "options": [
      "ERIC, LIRIS et DISP",
      "OpenAI, DeepMind et Microsoft Research",
      "Institut Blaise Pascal, INS2I et LIRIS",
      "Inria, CNRS et ANR"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours indique qu'à Lyon 2, la recherche en informatique s'organise autour de « Trois laboratoires : ERIC, LIRIS, DISP », rassemblant 40 enseignants-chercheurs.",
    "part": "Devenir chercheur·se et la recherche à l'Université Lyon 2"
  },
  {
    "question": "Sur quelles thématiques principales le laboratoire ERIC concentre-t-il ses recherches ?",
    "options": [
      "La conception physique de cartes graphiques",
      "La science des données (IA, machine learning), l'informatique décisionnelle (entrepôts de données, Big Data) et les humanités numériques (informatique et genre)",
      "Le développement de jeux vidéo et la réalité virtuelle",
      "La bioinformatique moléculaire et l'astrophysique"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours détaille les thèmes du laboratoire ERIC : « Science des données : intelligence artificielle (machine learning) [...] Informatique décisionnelle : lacs et entrepôts de données [...] Humanités numériques : [...] informatique et genre ».",
    "part": "Devenir chercheur·se et la recherche à l'Université Lyon 2"
  },
  {
    "question": "À quel laboratoire lyonnais l'équipe GOAL (Algorithmique et Combinatoire) est-elle rattachée ?",
    "options": [
      "INRIA-Lyon",
      "LIRIS",
      "ERIC",
      "DISP"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours indique que le LIRIS (Lyon 1, INSA, Lyon 2, Centrale Lyon) inclut notamment l'axe « Algorithmique et Combinatoire (équipe GOAL) », aux côtés de thèmes comme Données/Système/Sécurité ou Images/Vision/Apprentissage.",
    "part": "Devenir chercheur·se et la recherche à l'Université Lyon 2"
  },
  {
    "question": "Sur quels aspects le laboratoire DISP concentre-t-il ses recherches ?",
    "options": [
      "Le décryptage de signaux radio",
      "L'analyse de l'histoire du genre au cinéma",
      "La gestion et l'optimisation des opérations (aide à la décision, recherche opérationnelle, métaheuristiques) et les systèmes d'information d'entreprise (connaissances, ontologies, PLM)",
      "La fabrication de bras robotiques chirurgicaux"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours précise que le DISP (génie industriel, informatique et système d'information d'entreprise) travaille sur la « Gestion et optimisation des opérations » et les « Systèmes d'information et données » (ingénierie, PLM, ontologie, interopérabilité, génie logiciel).",
    "part": "Devenir chercheur·se et la recherche à l'Université Lyon 2"
  },
  {
    "question": "Comment la CNIL définit-elle la nature de l'intelligence artificielle (IA) ?",
    "options": [
      "Comme un robot humanoïde doté d'une conscience propre",
      "Comme « un domaine scientifique dans lequel des outils peuvent être classés lorsqu'ils respectent certains critères », plutôt qu'une technologie à proprement parler",
      "Comme une marque commerciale protégée",
      "Comme un logiciel unique fondé sur des règles immuables"
    ],
    "correctAnswer": 1,
    "explanation": "Selon la CNIL citée en cours : « L'intelligence artificielle n'est pas une technologie à proprement parler mais plutôt un domaine scientifique dans lequel des outils peuvent être classés lorsqu'ils respectent certains critères ».",
    "part": "Intelligence artificielle : définitions, histoire et concepts clés"
  },
  {
    "question": "D'après la définition de Wikipédia reprise en cours, quelles capacités l'intelligence artificielle vise-t-elle à permettre aux machines ?",
    "options": [
      "Effectuer des tâches typiquement associées à l'intelligence humaine : apprentissage, raisonnement, résolution de problème, perception ou prise de décision",
      "Stocker des données sans aucun traitement",
      "Exécuter uniquement des calculs arithmétiques simples",
      "Reproduire exclusivement des mouvements mécaniques"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours cite Wikipédia : l'IA est « l'ensemble des programmes ou algorithmes permettant aux machines d'effectuer des tâches typiquement associées à l'intelligence humaine, comme l'apprentissage, le raisonnement, la résolution de problème, la perception ou la prise de décision ».",
    "part": "Intelligence artificielle : définitions, histoire et concepts clés"
  },
  {
    "question": "En plus de l'informatique et des mathématiques (dont l'algèbre linéaire), sur quelles autres disciplines l'IA prend-elle appui, d'après le cours ?",
    "options": [
      "Les langues anciennes uniquement",
      "La statistique et la biologie, avec en complément des recherches en Sciences Humaines et Sociales abordant l'IA sous un angle critique, sociétal, éthique et historique",
      "Uniquement la chimie organique",
      "L'architecture civile uniquement"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours précise : « L'IA s'appuie sur plusieurs disciplines : informatique, mathématiques (dont l'algèbre linéaire), statistique, biologie [...] aussi de la recherche en Sciences Humaines et Sociales qui aborde l'IA sous un angle critique, sociétal, éthique, historique et culturel ».",
    "part": "Intelligence artificielle : définitions, histoire et concepts clés"
  },
  {
    "question": "Dans le diagramme du cours sur les termes de l'IA à ne pas confondre, où se situe l' « IA symbolique » (basée sur des règles) par rapport à l'apprentissage automatique (Machine Learning) ?",
    "options": [
      "L'IA symbolique est une sous-catégorie de l'apprentissage profond",
      "L'IA symbolique englobe entièrement le Machine Learning",
      "L'IA symbolique et le Machine Learning sont rigoureusement le même concept",
      "L'IA symbolique constitue une branche distincte, à côté de l'apprentissage automatique, toutes deux placées directement sous l'intelligence artificielle générale"
    ],
    "correctAnswer": 3,
    "explanation": "Le schéma du cours place « IA symbolique, basée sur des règles » comme une branche séparée, à côté de « Apprentissage automatique (Machine Learning) », les deux étant directement rattachées à l'ensemble « Intelligence Artificielle (IA) ».",
    "part": "Intelligence artificielle : définitions, histoire et concepts clés"
  },
  {
    "question": "Dans ce même diagramme, quelles catégories de modèles se trouvent à l'intérieur de l'« Apprentissage profond » (Deep Learning), aux côtés des Transformers ?",
    "options": [
      "Multi Layer Perceptron, CNN, RNN et LSTM",
      "Les arbres de décision et les forêts aléatoires",
      "kNN, SVM et régression logistique",
      "K-means, CAH et DBScan"
    ],
    "correctAnswer": 0,
    "explanation": "Le schéma place, à l'intérieur de l'Apprentissage profond (réseaux de neurones à nombreuses couches) : « Multi Layer Perceptron, CNN, RNN, LSTM » d'une part, et les « Transformers (encodeur/décodeur) » d'autre part — ces derniers contenant notamment les grands modèles de langue (LLM).",
    "part": "Intelligence artificielle : définitions, histoire et concepts clés"
  },
  {
    "question": "D'après ce diagramme, quels exemples de modèles sont cités comme grands modèles de langue (LLM), et lesquels comme modèles vision-langage (VLM/MLLM) ?",
    "options": [
      "LLM : kNN et SVM ; VLM/MLLM : arbre de décision et forêt aléatoire",
      "LLM : CNN et RNN ; VLM/MLLM : LSTM et Multi Layer Perceptron",
      "LLM et VLM/MLLM désignent exactement la même catégorie de modèles",
      "LLM : BERT, GPT/Claude, Llama/Mistral ; VLM/MLLM : ViT, Clip2, Bip, Qwen, Flamingo"
    ],
    "correctAnswer": 3,
    "explanation": "Le schéma cite comme LLM : « BERT, GPT, Claude, Llama, Mistral », et comme VLM/MLLM : « ViT, Clip2, Bip, Qwen, Flamingo ».",
    "part": "Intelligence artificielle : définitions, histoire et concepts clés"
  },
  {
    "question": "Sur quelle architecture de réseau de neurones profonds, à la base des LLMs actuels, le cours insiste-t-il particulièrement ?",
    "options": [
      "Les machines de Turing mécaniques",
      "Les arbres de décision classiques",
      "L'architecture Transformer, et plus particulièrement sa partie décodeur pour l'IA générative",
      "L'architecture des réseaux de neurones convolutionnels (CNN) exclusivement"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours précise que les LLMs et l'IA générative reposent « principalement sur l'architecture Transformer », avec « des modèles avec la partie décodeur de l'architecture de type Transformers ».",
    "part": "Intelligence artificielle : définitions, histoire et concepts clés"
  },
  {
    "question": "Parmi les noms cités dans la brève histoire de l'intelligence artificielle depuis 1950 présentée en cours, lequel y figure ?",
    "options": [
      "Marie Curie",
      "Ada Lovelace",
      "Yann LeCun",
      "Steve Jobs"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours liste, parmi les noms marquants de l'histoire de l'IA depuis 1950 : « Alan TURING, John McCARTHY, Marvin MINSKY, Claude SHANNON, Frank ROSENBLAT, Noam CHOMSKY, Yann LeCUN, Jacques PITRAT ».",
    "part": "Intelligence artificielle : définitions, histoire et concepts clés"
  },
  {
    "question": "Comment le cours définit-il l'intelligence artificielle générative (IAG) ?",
    "options": [
      "Un algorithme de tri de données sans lien avec l'apprentissage automatique",
      "Un sous-domaine de l'IA qui se concentre sur la création autonome de contenus (textes, images, vidéos, sons) ressemblant à des créations humaines, grâce à l'apprentissage automatique et surtout profond",
      "Un synonyme strict de la robotique industrielle",
      "Une technique réservée exclusivement à la génération d'images"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours définit l'IAG comme « un sous domaine de l'IA [...] se concentre sur la création autonome de contenu qui peuvent ressembler à ce qui est créé par les êtres humains, tels que des textes, des images, des vidéos, des sons [...] grâce à des modèles d'apprentissage automatique [...] et plus particulièrement d'apprentissage profond ».",
    "part": "IA générative, LLMs, agents conversationnels et usage responsable"
  },
  {
    "question": "Comment le cours définit-il un grand modèle de langue (Large Language Model, LLM) ?",
    "options": [
      "Un simple dictionnaire numérique consultable hors-ligne",
      "Un moteur de recherche classique sans apprentissage automatique",
      "Un réseau de neurones profond entraîné sur d'immenses quantités de textes, qui apprend les probabilités entre les mots et séquences de mots, basé principalement sur l'architecture Transformer",
      "Un programme qui traduit uniquement de l'anglais vers le français"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours précise qu'un LLM est « un réseau de neurones profond entraîné sur d'immenses quantités de textes [...] qui apprend les probabilités entre les mots et séquences de mots [...] basé principalement sur l'architecture Transformer ».",
    "part": "IA générative, LLMs, agents conversationnels et usage responsable"
  },
  {
    "question": "Qu'appelle-t-on « hallucination » chez un LLM, et quelle technique le cours mentionne-t-il pour tenter d'atténuer ce phénomène ?",
    "options": [
      "Une erreur de compilation LaTeX ; la solution est le package amsmath",
      "Une panne électrique du data center ; la solution est un onduleur",
      "La production d'informations inventées ou incorrectes présentées avec assurance ; la Génération Augmentée de Récupération (RAG) est mentionnée comme piste d'atténuation",
      "Un bug d'affichage graphique ; la solution consiste à redémarrer le serveur"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours avertit : « Attention aux hallucinations, Les LLMs hallucinent régulièrement », et évoque « La Génération Augmentée de Récupération (RAG) » comme réponse à ce problème.",
    "part": "IA générative, LLMs, agents conversationnels et usage responsable"
  },
  {
    "question": "En quelle année le tout premier agent conversationnel (chatbot), fondé sur des règles et des scénarios préprogrammés, est-il apparu selon le cours ?",
    "options": [
      "2020",
      "1997",
      "1950",
      "1966"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours indique : « Le premier [agent conversationnel] apparait en 1966 et [est] basé sur des règles (scénarios préprogrammés) », avant « une explosion depuis 2020 » avec les chatbots basés sur des LLM.",
    "part": "IA générative, LLMs, agents conversationnels et usage responsable"
  },
  {
    "question": "Parmi les agents conversationnels basés sur un LLM cités en cours avec leur date de sortie, laquelle des associations suivantes est correcte ?",
    "options": [
      "Claude (OpenAI, 2022) et ChatGPT (Anthropic, 2023)",
      "ChatGPT (OpenAI, 2022) et Claude (Anthropic, 2023)",
      "Gemini (OpenAI, 2022) et Copilot (Anthropic, 2023)",
      "ChatGPT (Google, 2016) et Claude (Microsoft, 2019)"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours liste : « ChatGPT (OpenAI, 2022), Claude (Anthropic, 2023), Gemini (Google DeepMind, ex-Bard, 2023-2024), Copilot (Microsoft, 2023), Mistral Chat (Mistral AI, France, 2024) ».",
    "part": "IA générative, LLMs, agents conversationnels et usage responsable"
  },
  {
    "question": "Quels risques liés à l'usage des chatbots sont explicitement listés en cours ?",
    "options": [
      "Aggravation de la dette écologique, non-confidentialité, fausseté des réponses et des sources citées, biais et inégalités",
      "Uniquement un risque de dépendance électrique du réseau national",
      "Aucun risque significatif n'est mentionné",
      "Uniquement un risque financier pour les entreprises qui les développent"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours liste comme risques : « Aggravation de la dette écologique », « Non-confidentialité », « Fausseté ou inexactitude des réponses », « Fausseté ou inexactitude des sources mentionnées » et « Biais et inégalités ».",
    "part": "IA générative, LLMs, agents conversationnels et usage responsable"
  },
  {
    "question": "D'après les controverses documentées sur ChatGPT citées en cours, quelle proportion de références académiques générées par l'outil s'est avérée fabriquée ou incorrecte ?",
    "options": [
      "47% des références étaient fabriquées, et 46% citaient des sources réelles de manière incorrecte",
      "Moins de 1% des citations générées",
      "Toutes les références générées étaient valides et vérifiables",
      "ChatGPT refuse par principe de citer la moindre source"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours rapporte : « 47% des références données étaient fabriquées, et 46% citaient des sources réelles mais de manière incorrecte ».",
    "part": "IA générative, LLMs, agents conversationnels et usage responsable"
  },
  {
    "question": "Quel pays européen a engagé une procédure contre OpenAI pour de possibles violations du RGPD, selon les controverses évoquées en cours ?",
    "options": [
      "L'Italie",
      "L'Espagne",
      "La France",
      "L'Allemagne"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours indique : « L'Italie a engagé une procédure pour possibles violations du RGPD, dénonçant l'absence de transparence sur le traitement des données personnelles et l'absence de vérification d'âge des utilisateurs ».",
    "part": "IA générative, LLMs, agents conversationnels et usage responsable"
  },
  {
    "question": "Pourquoi le cours évoque-t-il des « inégalités linguistiques » à propos des grands modèles d'IA conversationnelle ?",
    "options": [
      "Parce que la loi française interdit d'interroger une IA en anglais",
      "Parce que l'utilisation de ces modèles dans des langues autres que l'anglais est souvent plus lente et plus coûteuse, créant un déséquilibre d'accès et d'efficacité",
      "Parce que ces modèles ne comprennent aucune langue autre que l'anglais",
      "Parce que les serveurs français consomment plus d'énergie que les serveurs américains"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours souligne : « l'utilisation de modèles en langues autres que l'anglais est souvent plus lente et chère, créant un déséquilibre en termes d'accès et d'efficacité ».",
    "part": "IA générative, LLMs, agents conversationnels et usage responsable"
  },
  {
    "question": "Parmi les tâches suivantes, lesquelles le cours mentionne-t-il comme des usages possibles de l'IA générative pendant ses études ?",
    "options": [
      "Remplacer entièrement les enseignants dans la correction des examens",
      "Générer de fausses références bibliographiques pour étoffer un dossier",
      "Rechercher des informations et des sources, reformuler ou résumer un texte, corriger l'orthographe, traduire, réviser des leçons, écrire ou corriger du code",
      "Rédiger l'intégralité d'un mémoire à la place de l'étudiant, sans le mentionner"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours liste comme tâches possibles : « Rechercher des informations et des sources sur un sujet, Rédiger ou reformuler un texte, Corriger l'orthographe et la grammaire, Résumer un texte, Traduire un texte, Transformer un document [...] Réviser des leçons, Ecrire ou corriger du code ».",
    "part": "IA générative, LLMs, agents conversationnels et usage responsable"
  },
  {
    "question": "Quelles règles d'usage intègre et responsable de l'IA générative le cours recommande-t-il aux étudiants dans le cadre de la rédaction d'un article ou d'un travail universitaire ?",
    "options": [
      "Faire relire son travail uniquement par une IA générative, sans relecture humaine",
      "Ne pas faire rédiger le travail par une IA générative, et citer ou préciser explicitement les passages générés ou l'usage fait de l'outil",
      "Utiliser l'IA générative sans aucune restriction ni mention",
      "Interdire toute utilisation d'internet, y compris pour la documentation"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours insiste : « Ne pas faire rédiger l'article par une IA générative » et « Citer les passages écrits par une IA générative ou préciser l'utilisation d'une IA générative », en s'appuyant notamment sur les lignes directrices éthiques de l'Union Européenne et des guides universitaires.",
    "part": "IA générative, LLMs, agents conversationnels et usage responsable"
  },
  {
    "question": "Quelles sont les quatre étapes de la démarche scientifique théorisées par le philosophe Francis Bacon (1561-1626) ?",
    "options": [
      "Hypothèse, modélisation, évaluation, brevet",
      "Abduction, déduction, induction, publication",
      "Idée, codage, test, déploiement",
      "Observation/expérimentation/vérification, théorisation, reproduction/prévision, résultat"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours indique que Francis Bacon pose comme étapes : « Observation, expérimentation et vérification ; Théorisation ; Reproduction et prévision ; Résultat ».",
    "part": "Démarche scientifique et méthodologie de la recherche"
  },
  {
    "question": "Quels sont les trois temps logiques de la démarche scientifique formalisés par Charles Sanders Peirce (1839-1914) ?",
    "options": [
      "Théorie, démonstration, QCM",
      "Idée, implémentation, commercialisation",
      "Abduction (création de conjectures et d'hypothèses), déduction (recherche des conséquences), et induction (mise à l'épreuve des faits par l'expérimentation)",
      "Observation, évaluation par les pairs, indexation bibliographique"
    ],
    "correctAnswer": 2,
    "explanation": "Peirce définit : « Abduction : création de conjectures et d'hypothèses ; Déduction : recherche de ce que seraient les conséquences si les résultats de l'abduction étaient vérifiés ; Induction : mise à l'épreuve des faits ; expérimentation ».",
    "part": "Démarche scientifique et méthodologie de la recherche"
  },
  {
    "question": "Selon le cours, quel risque une hypothèse scientifique doit-elle nécessairement accepter de courir ?",
    "options": [
      "Le risque de ne jamais pouvoir être formulée en français",
      "Le risque d'être automatiquement publiée sans relecture",
      "Le risque d'être réfutée par l'expérience",
      "Le risque d'être immédiatement financée par l'ANR"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours conclut sur la démarche scientifique : « Une hypothèse scientifique prend le risque d'être réfutée », en écho direct au critère de falsifiabilité de Popper.",
    "part": "Démarche scientifique et méthodologie de la recherche"
  },
  {
    "question": "Parmi les exemples de « problèmes de recherche » cités en cours, lequel correspond bien à un type mentionné ?",
    "options": [
      "« L'algorithme X est-il meilleur que l'algorithme Y ? »",
      "« Quel est le film préféré des chercheurs en informatique ? »",
      "« Quel est le salaire moyen d'un chercheur au CNRS ? »",
      "« Combien de conférences existe-t-il dans le monde ? »"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours donne comme exemples de problèmes de recherche : une démonstration mathématique d'une propriété d'un algorithme, « L'algorithme X est-il meilleur que l'algorithme Y ? », quel modèle permettrait de comprendre/prévoir/simuler un phénomène, ou quel outil permettrait de résoudre une tâche non résolue par l'existant.",
    "part": "Démarche scientifique et méthodologie de la recherche"
  },
  {
    "question": "Quelles sont, dans l'ordre présenté en cours, les grandes étapes de la méthodologie de la recherche en informatique ?",
    "options": [
      "Uniquement la présentation orale, sans étape préalable de recherche documentaire",
      "Rédaction de l'article, puis choix du sujet, puis relecture par les pairs uniquement",
      "Dépôt de brevet, puis recherche bibliographique, puis abandon du sujet",
      "Choix et définition du sujet, revue de littérature, questionnement et positionnement scientifique, proposition, expérimentation et évaluation, conclusion, communication (avec éthique et intégrité en toile de fond)"
    ],
    "correctAnswer": 3,
    "explanation": "Le schéma de « Méthodologie de la recherche en informatique » enchaîne : choix et définition du sujet, revue de littérature, questionnement et positionnement scientifique, proposition d'un modèle/algorithme/méthode/outil, expérimentation et évaluation, conclusion, puis communication de la contribution — avec l'éthique et l'intégrité comme fil conducteur.",
    "part": "Démarche scientifique et méthodologie de la recherche"
  },
  {
    "question": "À quoi sert la « revue de littérature » (état de l'art) dans une démarche de recherche, d'après le cours ?",
    "options": [
      "Uniquement à allonger artificiellement la bibliographie finale",
      "À choisir la police de caractères du document final",
      "À remplacer entièrement l'expérimentation",
      "À rassembler les concepts et connaissances sur un sujet, identifier le cadre théorique, repérer les informations les plus récentes et pertinentes, et s'assurer que le sujet n'a pas déjà été traité"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours détaille les objectifs de l'état de l'art : « rassembler les concepts et les connaissances sur un sujet [...] identifier le cadre théorique [...] identifier les informations/connaissances les plus récentes et pertinentes [...] s'assurer que le sujet n'a pas déjà été traité ou le problème déjà résolu ».",
    "part": "Démarche scientifique et méthodologie de la recherche"
  },
  {
    "question": "Quels portails d'archives ouvertes françaises sont recommandés respectivement pour rechercher des articles scientifiques et des thèses de doctorat ?",
    "options": [
      "ResearchGate pour les articles, et LinkedIn pour les thèses",
      "Google Scholar pour les articles, et Wikipédia pour les thèses",
      "arXiv pour les articles, et Isidore pour les thèses uniquement",
      "HAL (hal.archives-ouvertes.fr) pour les articles, et TEL (tel.archives-ouvertes.fr) pour les thèses"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours cite « Pour les articles https://hal.archives-ouvertes.fr/ [...] Pour les thèses https://tel.archives-ouvertes.fr/ », en plus du portail SHS Isidore.",
    "part": "Démarche scientifique et méthodologie de la recherche"
  },
  {
    "question": "Quelles bases de données ou archives internationales spécialisées en informatique le cours recommande-t-il pour la revue de littérature ?",
    "options": [
      "DBLP, ACM Digital Library, IEEE Xplore, Google Scholar et arXiv",
      "Uniquement Wikipédia et Larousse",
      "Uniquement les réseaux sociaux comme Instagram et TikTok",
      "Uniquement des blogs personnels de chercheurs"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours liste, pour l'informatique à l'international : « DBLP [...] ACM Digital Library [...] IEEE Xplore digital library [...] Google scholar [...] Archive ouverte arxiv », ainsi que le réseau social ResearchGate.",
    "part": "Démarche scientifique et méthodologie de la recherche"
  },
  {
    "question": "Quels outils de gestion de références bibliographiques le cours recommande-t-il pour organiser sa veille documentaire ?",
    "options": [
      "Microsoft Excel, Paint, Notepad",
      "Zotero, Mendeley Desktop, JabRef",
      "Photoshop, Illustrator, InDesign",
      "Slack, Discord, Zoom"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours indique : « Utiliser des outils de gestion de références bibliographiques (Zotero, mendeley desktop, JabRef) », en complément de la mise en place d'une veille documentaire.",
    "part": "Démarche scientifique et méthodologie de la recherche"
  },
  {
    "question": "Quels sont les trois niveaux de lecture d'un article scientifique recommandés en cours pour analyser efficacement la littérature ?",
    "options": [
      "Une lecture rapide en diagonale, une lecture orale à voix haute, et une relecture orthographique",
      "Une 1re lecture (titre, mots-clés, résumé) pour évaluer la pertinence ; une 2e lecture pour comprendre la question de recherche et résumer l'article ; une 3e lecture approfondie pour les articles de référence à comparer",
      "Une lecture de l'introduction, une lecture de la conclusion, puis la mémorisation de la bibliographie",
      "Une lecture de la première page, une lecture des figures, puis une lecture des remerciements"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours détaille : « 1re lecture avec le titre, les mots-clés, le résumé [...] évaluer la pertinence [...] 2e lecture [...] pour comprendre la question de recherche traitée [...] Résumer l'article [...] 3e lecture approfondie si c'est un article de référence ».",
    "part": "Démarche scientifique et méthodologie de la recherche"
  },
  {
    "question": "Pourquoi le cours recommande-t-il parfois de refaire les expériences d'autres chercheurs ?",
    "options": [
      "Cette pratique n'est jamais recommandée en recherche",
      "Uniquement pour remplir des heures de travaux pratiques obligatoires",
      "Pour les comprendre et les vérifier, et acquérir un savoir-faire expérimental dans le domaine concerné",
      "Pour prouver que ces chercheurs ont menti dans tous les cas"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours indique : « Refaire les expériences des autres chercheurs pour [...] Les comprendre, les vérifier [...] Acquérir un savoir faire expérimental dans le domaine concerné ».",
    "part": "Démarche scientifique et méthodologie de la recherche"
  },
  {
    "question": "Pour qu'une simple « proposition » scientifique (modèle, algorithme, méthode, outil) devienne une véritable « contribution » reconnue, que doit-elle nécessairement subir, d'après le cours ?",
    "options": [
      "Elle doit être évaluée et validée, notamment par comparaison de performances sur des jeux de données (benchmarks) et vérification de sa reproductibilité",
      "Elle doit faire l'objet d'une campagne de vulgarisation sur les réseaux sociaux",
      "Elle doit être entièrement rédigée par une IA générative",
      "Elle doit être immédiatement déposée comme brevet privé"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours affirme : « Pour qu'une proposition devienne une contribution elle doit être évaluée et validée », via la « Comparaison des méthodes/algorithmes/modèles/outils : définition de critères de performances [...] jeux de données (benchmark) » et la « Reproductibilité de la proposition et de l'évaluation ».",
    "part": "Rédaction, structure et communication d'un article scientifique"
  },
  {
    "question": "Que dit le cours à propos de la publication de résultats dits « négatifs » en recherche ?",
    "options": [
      "Ils ne peuvent techniquement pas être rédigés en LaTeX",
      "Ils doivent systématiquement être dissimulés des rapports de recherche",
      "Un résultat négatif peut être tout aussi intéressant qu'un résultat positif pour faire avancer collectivement la science",
      "Ils entraînent automatiquement le retrait des financements publics"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours affirme : « Un résultat négatif peut être tout aussi intéressant qu'un résultat positif », dans une logique de partage ouvert des connaissances et de reproductibilité de la recherche.",
    "part": "Rédaction, structure et communication d'un article scientifique"
  },
  {
    "question": "Quelles sont les principales étapes de méthode recommandées pour rédiger un article scientifique, d'après le cours ?",
    "options": [
      "Définir l'objectif de l'article (un seul objectif par article), écrire librement, construire le plan, rédiger le résumé, puis le corps du texte, puis l'introduction et enfin la conclusion, et trouver un titre",
      "Commencer systématiquement par la bibliographie avant tout le reste",
      "Écrire le titre en tout premier et ne plus jamais le modifier ensuite",
      "Rédiger uniquement la conclusion puis laisser une IA générative compléter le reste"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours détaille la méthode : « Définir l'objectif de l'article (un seul objectif par article) [...] Construire le plan [...] Rédiger le résumé [...] Rédiger le corps du texte [...] Rédiger l'introduction, puis la conclusion [...] Trouver un titre ».",
    "part": "Rédaction, structure et communication d'un article scientifique"
  },
  {
    "question": "Quels éléments un résumé (abstract) d'article scientifique doit-il impérativement contenir, selon le cours ?",
    "options": [
      "Le code source complet du programme utilisé",
      "Uniquement le nom des auteurs et leur affiliation",
      "Une liste exhaustive de tous les articles déjà lus par le chercheur",
      "L'objectif et la portée de l'article, la méthodologie utilisée, un résumé des résultats, la principale conclusion, ainsi que des mots-clés pour l'indexation"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours précise que le résumé « Doit contenir : objectif et portée de l'article ; méthodologie utilisée ; Résumé des résultats ; principale conclusion » ainsi que des « Mots clés pour l'indexation de l'article ».",
    "part": "Rédaction, structure et communication d'un article scientifique"
  },
  {
    "question": "Quelle proportion de la longueur totale d'un article scientifique l'introduction doit-elle représenter, d'après les conseils de rédaction du cours ?",
    "options": [
      "Moins de 1% de l'article",
      "Entre 5% et 10% de l'article",
      "La même taille que la bibliographie, sans proportion précise",
      "Exactement 50% de l'article"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours conseille d'« Eviter une introduction trop courte (entre 5% et 10% de l'article) ».",
    "part": "Rédaction, structure et communication d'un article scientifique"
  },
  {
    "question": "Que recommande le cours à propos de l'usage d'une IA générative pour rédiger le corps d'un article scientifique ?",
    "options": [
      "Ne pas faire rédiger l'article par une IA générative, et citer ou préciser explicitement les passages qui en sont issus",
      "Ne jamais mentionner l'usage éventuel d'une IA, pour ne pas alourdir le texte",
      "Utiliser exclusivement une IA générative pour rédiger l'intégralité du corps du texte",
      "Interdire toute forme de relecture humaine du texte généré"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours est explicite : « Ne pas faire rédiger l'article par une IA générative » et « Citer les passages écrits par une IA générative ou préciser l'utilisation d'une IA générative », en plus de proscrire le plagiat et d'exiger de citer ses sources.",
    "part": "Rédaction, structure et communication d'un article scientifique"
  },
  {
    "question": "Quelle règle stricte régit le contenu de la bibliographie d'un article de recherche, selon le cours ?",
    "options": [
      "Elle doit prioritairement contenir des références inventées pour paraître plus étoffée",
      "Elle ne doit contenir aucune date de publication, par souci de concision",
      "Elle doit recenser l'ensemble des lectures du chercheur sur le sujet, citées ou non",
      "Elle se limite aux références effectivement citées dans le corps de l'article, et réciproquement toute référence citée dans le texte doit y figurer"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours précise : « Elle ne regroupe pas l'ensemble des lectures que le chercheur a fait sur le sujet [...] Elle se limite aux références utilisées pour la rédaction de l'article [...] Toutes les références citées dans le corps de l'article doivent être présentes dans la bibliographie ».",
    "part": "Rédaction, structure et communication d'un article scientifique"
  },
  {
    "question": "Pourquoi les figures et tableaux sont-ils considérés comme très importants dans un article scientifique, d'après le cours ?",
    "options": [
      "Parce qu'ils remplacent entièrement le texte de l'article",
      "Parce qu'ils sont perçus en premier par l'œil et appuient une idée (sans toutefois la démontrer), et doivent être référencés, titrés et correctement construits",
      "Parce qu'ils ne nécessitent aucune légende ni référence dans le texte",
      "Parce qu'ils sont toujours facultatifs et rarement lus par le comité de lecture"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours indique que les figures et tableaux « Sont très importants car perçus en premier par l'œil ; Appuient une idée mais ne la démontrent pas ; Sont référencés et expliqués dans le texte ; Ont un titre et une légende explicative ; Doivent être correctement construits, non trompeurs et lisibles ».",
    "part": "Rédaction, structure et communication d'un article scientifique"
  },
  {
    "question": "Quels types de communication scientifique le cours mentionne-t-il, au-delà de la simple publication d'article ?",
    "options": [
      "Uniquement des vidéos YouTube non réutilisables en recherche",
      "Revues spécialisées, conférences/colloques (papier court/long, poster, démo), mémoires et soutenances (master, doctorat, HDR), rapports de recherche techniques ou internes",
      "Uniquement des publications sur les réseaux sociaux personnels",
      "Uniquement des communiqués de presse rédigés par le service marketing"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours liste : « Revues spécialisées [...] Conférences, colloques, congrès spécialisés : papier court ou long, présentation orale, poster, démo [...] Mémoires et soutenances : master, doctorat, HDR [...] Rapports de recherche techniques, internes [...] Projets scientifiques ».",
    "part": "Rédaction, structure et communication d'un article scientifique"
  },
  {
    "question": "Lors de la préparation d'une présentation orale de travaux scientifiques, quels facteurs le cours juge-t-il essentiels pour convaincre son auditoire ?",
    "options": [
      "Éviter toute forme d'entraînement pour privilégier la spontanéité",
      "Lire mot à mot ses diapositives sans jamais regarder la salle",
      "Identifier précisément son audience et ses prérequis, définir l'objectif de la présentation, respecter le temps imparti, s'entraîner et se préparer aux questions",
      "Remplir chaque diapositive d'un maximum de texte en très petite police"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours conseille : « Identification de l'audience [...] Que savent les lecteurs ou l'auditoire ? (prérequis) [...] Respecter le temps imparti, S'entrainer, Ne pas avoir peur des questions mais s'y préparer ! ».",
    "part": "Rédaction, structure et communication d'un article scientifique"
  },
  {
    "question": "Quels engagements éthiques le cours attribue-t-il à tout chercheur ou chercheuse rigoureux.se ?",
    "options": [
      "Produire uniquement des brevets à but lucratif, en refusant tout accès ouvert",
      "Respecter les règles et valeurs de sa communauté, s'engager à ne pas tricher, être honnête intellectuellement, et adopter une démarche scientifique vérifiable",
      "Publier un article par semaine quel que soit son niveau de validation",
      "Utiliser systématiquement une IA générative pour rédiger l'ensemble de ses travaux"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours conclut : le chercheur « Doit respecter des règles et des valeurs, S'engage à ne pas tricher, S'engage à être honnête intellectuellement [et] Adopte une démarche scientifique ».",
    "part": "Rédaction, structure et communication d'un article scientifique"
  }
];
