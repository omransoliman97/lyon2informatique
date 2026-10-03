const algoCm1P1Questions = [
  {
    "question": "D'après le cours, sous quelles formes concrètes un algorithme peut-il se présenter dans la vie courante ?",
    "options": [
      "Une recette de cuisine, une notice de montage de meuble, ou un itinéraire d'une ville A vers une ville B",
      "Uniquement sous forme de formule mathématique",
      "Un algorithme n'existe que dans un contexte informatique",
      "Uniquement sous forme de code informatique compilable"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours illustre qu'un algorithme « peut prendre de nombreuses formes » : « Recette de cuisine », « Notice de montage d'un meuble », « Itinéraire de ville A vers ville B », etc.",
    "part": "Qu'est-ce qu'un algorithme, et les variables"
  },
  {
    "question": "Comment le cours définit-il précisément un algorithme ?",
    "options": [
      "Un programme déjà compilé et prêt à être exécuté par une machine",
      "Une simple liste de variables utilisées dans un programme",
      "Un langage de programmation particulier, comme Python ou C",
      "La description d'un enchaînement d'actions destinées à être exécutées pour résoudre un problème de manière systématique, une description qui doit être claire, complète et sans ambiguïté"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours précise qu'un algorithme fait « la description d'un enchaînement d'actions destinées à être exécutées [...] pour résoudre un problème de manière systématique », et que « la description doit être claire, complète et sans ambiguïté ».",
    "part": "Qu'est-ce qu'un algorithme, et les variables"
  },
  {
    "question": "À quoi sert une variable dans un algorithme, d'après le cours ?",
    "options": [
      "Elle ne sert qu'à afficher du texte à l'écran",
      "Elle permet de stocker et de nommer une valeur qui peut changer au cours de l'exécution de l'algorithme",
      "Elle est réservée aux calculs mathématiques complexes uniquement",
      "Elle sert uniquement à définir le titre de l'algorithme"
    ],
    "correctAnswer": 1,
    "explanation": "Une variable est présentée comme un identificateur associé à une valeur qui peut être consultée et modifiée pendant le déroulement de l'algorithme, dans la continuité de la partie « Variables » du rappel de cours.",
    "part": "Qu'est-ce qu'un algorithme, et les variables"
  },
  {
    "question": "Parmi les types de variables élémentaires présentés en cours, lesquels retrouve-t-on ?",
    "options": [
      "HTML, CSS, JavaScript, Python",
      "public, privé, protégé, statique",
      "entier, réel, caractère, chaîne de caractères, booléen",
      "tableau, structure, pointeur, fonction"
    ],
    "correctAnswer": 2,
    "explanation": "Le rappel de cours sur les variables liste les types élémentaires : entier, réel, caractère, chaîne de caractères et booléen.",
    "part": "Qu'est-ce qu'un algorithme, et les variables"
  },
  {
    "question": "En Python, faut-il déclarer explicitement le type d'une variable avant de lui affecter une valeur ?",
    "options": [
      "Oui, avec le mot-clé var obligatoire",
      "Non, Python interdit toute notion de type",
      "Non, le typage est dynamique : une variable prend le type de la valeur qui lui est affectée, sans déclaration explicite préalable",
      "Oui, mais uniquement pour les booléens"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours illustre le typage dynamique de Python : une simple affectation comme x = 5 suffit à créer la variable avec son type, sans déclaration de type préalable comme dans un langage à typage statique.",
    "part": "Qu'est-ce qu'un algorithme, et les variables"
  },
  {
    "question": "Quelle fonction Python permet de connaître le type d'une variable à l'exécution ?",
    "options": [
      "class()",
      "type()",
      "typeof()",
      "kind()"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours illustre l'usage de la fonction native type() pour interroger dynamiquement le type d'une variable Python (par exemple type(x)).",
    "part": "Qu'est-ce qu'un algorithme, et les variables"
  },
  {
    "question": "Quel type Python est utilisé pour représenter une valeur de vérité (Vrai/Faux) ?",
    "options": [
      "bool",
      "bit",
      "flag",
      "binary"
    ],
    "correctAnswer": 0,
    "explanation": "Le type bool (avec les valeurs True et False) correspond au type booléen présenté dans le rappel algorithmique.",
    "part": "Qu'est-ce qu'un algorithme, et les variables"
  },
  {
    "question": "En algorithmique, quel symbole représente classiquement l'opération d'affectation d'une valeur à une variable ?",
    "options": [
      "::",
      "==",
      "=",
      "←"
    ],
    "correctAnswer": 3,
    "explanation": "Le rappel de cours utilise la flèche « ← » pour l'affectation en pseudocode (par exemple x ← 5), à distinguer du signe = utilisé en Python et de l'opérateur de comparaison ==.",
    "part": "Qu'est-ce qu'un algorithme, et les variables"
  },
  {
    "question": "Quelles fonctions Python permettent de convertir explicitement une valeur d'un type vers un autre (par exemple une chaîne vers un entier) ?",
    "options": [
      "convert(), cast(), transform()",
      "Il est impossible de convertir un type en Python",
      "int(), float(), str(), bool() — chacune convertit son argument vers le type correspondant",
      "to_int(), to_float() uniquement, sans équivalent pour les chaînes"
    ],
    "correctAnswer": 2,
    "explanation": "Les fonctions natives int(), float(), str() et bool() permettent de convertir explicitement une valeur vers le type entier, réel, chaîne de caractères ou booléen respectivement, par exemple int(input()) pour convertir une saisie texte en entier.",
    "part": "Qu'est-ce qu'un algorithme, et les variables"
  },
  {
    "question": "En pseudocode algorithmique, entre quels mots-clés le corps (les instructions) d'un algorithme est-il classiquement placé, après la déclaration de ses variables ?",
    "options": [
      "Entre Début et Fin",
      "Entre Open et Close",
      "Entre Start et Stop",
      "Entre Init et End"
    ],
    "correctAnswer": 0,
    "explanation": "Le squelette classique d'un algorithme place la liste des variables utilisées avant le corps de l'algorithme, ce dernier étant délimité par les mots-clés Début et Fin.",
    "part": "Qu'est-ce qu'un algorithme, et les variables"
  },
  {
    "question": "Quelles sont les trois instructions élémentaires de base présentées dans le rappel de cours, permettant de manipuler une variable ?",
    "options": [
      "L'affectation, la lecture (saisie) et l'écriture (affichage)",
      "La compilation, l'exécution et le débogage",
      "La déclaration, l'initialisation et la destruction",
      "L'importation, l'exportation et la suppression"
    ],
    "correctAnswer": 0,
    "explanation": "Le rappel de cours présente les instructions élémentaires : l'affectation (donner une valeur à une variable), la lecture (saisir une valeur depuis l'utilisateur) et l'écriture (afficher une valeur).",
    "part": "Instructions élémentaires et expressions numériques"
  },
  {
    "question": "En Python, quelle fonction permet de récupérer une saisie de l'utilisateur au clavier (équivalent de l'instruction « lire » en algorithmique) ?",
    "options": [
      "get()",
      "input()",
      "scan()",
      "read()"
    ],
    "correctAnswer": 1,
    "explanation": "En Python, la fonction input() correspond à l'instruction de lecture du pseudocode algorithmique, permettant de récupérer une saisie clavier.",
    "part": "Instructions élémentaires et expressions numériques"
  },
  {
    "question": "En Python, quelle fonction permet d'afficher une valeur à l'écran (équivalent de l'instruction « écrire » en algorithmique) ?",
    "options": [
      "echo()",
      "print()",
      "write()",
      "display()"
    ],
    "correctAnswer": 1,
    "explanation": "En Python, print() correspond à l'instruction d'écriture (affichage) du pseudocode algorithmique.",
    "part": "Instructions élémentaires et expressions numériques"
  },
  {
    "question": "Que retourne toujours la fonction Python input(), quel que soit ce que l'utilisateur a saisi au clavier ?",
    "options": [
      "Toujours un booléen",
      "Toujours une liste de caractères",
      "Toujours un entier (int)",
      "Toujours une chaîne de caractères (str), qu'il faut convertir explicitement si l'on veut un nombre"
    ],
    "correctAnswer": 3,
    "explanation": "input() renvoie systématiquement une chaîne de caractères ; pour obtenir un nombre, il faut convertir explicitement le résultat, par exemple avec int() ou float().",
    "part": "Instructions élémentaires et expressions numériques"
  },
  {
    "question": "Quels opérateurs arithmétiques de base retrouve-t-on à la fois en pseudocode algorithmique et en Python pour manipuler des expressions numériques ?",
    "options": [
      "AND, OR, NOT",
      "and, or, not in",
      "==, !=, <, >",
      "+, -, *, / (addition, soustraction, multiplication, division)"
    ],
    "correctAnswer": 3,
    "explanation": "Les expressions numériques reposent sur les opérateurs arithmétiques usuels : addition (+), soustraction (-), multiplication (*) et division (/).",
    "part": "Instructions élémentaires et expressions numériques"
  },
  {
    "question": "En Python, quelle est la différence entre l'opérateur / et l'opérateur // sur deux entiers ?",
    "options": [
      "/ effectue une division réelle (retourne un float) alors que // effectue une division entière, en ne gardant que la partie entière du quotient",
      "/ et // sont rigoureusement identiques en Python",
      "// n'existe pas en Python, seul / est valide",
      "/ est réservé aux booléens, // aux entiers"
    ],
    "correctAnswer": 0,
    "explanation": "En Python, / réalise une division réelle (le résultat est un float, ex. 7/2 = 3.5), tandis que // effectue une division entière en ne conservant que la partie entière du quotient (7//2 = 3).",
    "part": "Instructions élémentaires et expressions numériques"
  },
  {
    "question": "Quel opérateur Python permet d'obtenir le reste d'une division entière (modulo) ?",
    "options": [
      "//",
      "mod",
      "%",
      "rem"
    ],
    "correctAnswer": 2,
    "explanation": "L'opérateur % (modulo) retourne le reste de la division entière, par exemple 7 % 2 vaut 1.",
    "part": "Instructions élémentaires et expressions numériques"
  },
  {
    "question": "Quel opérateur Python permet de calculer une puissance, par exemple 2 à la puissance 3 ?",
    "options": [
      "pow[2,3]",
      "2^3",
      "2^^3",
      "2**3"
    ],
    "correctAnswer": 3,
    "explanation": "En Python, l'opérateur ** calcule une puissance : 2**3 vaut 8. Le symbole ^ n'est pas l'opérateur de puissance en Python (il correspond au OU exclusif bit à bit).",
    "part": "Instructions élémentaires et expressions numériques"
  },
  {
    "question": "Qu'appelle-t-on la « séquence » dans l'enchaînement d'instructions d'un algorithme ?",
    "options": [
      "Une suite de nombres premiers utilisée dans les tests",
      "Une boucle qui se répète indéfiniment",
      "L'exécution des instructions les unes après les autres, dans l'ordre où elles sont écrites",
      "Un synonyme d'une fonction récursive"
    ],
    "correctAnswer": 2,
    "explanation": "La séquence est la structure de contrôle la plus simple : elle consiste à exécuter des instructions les unes à la suite des autres, dans leur ordre d'écriture.",
    "part": "Instructions élémentaires et expressions numériques"
  },
  {
    "question": "Quelle est la priorité usuelle entre les opérateurs *, / d'une part et +, - d'autre part dans une expression numérique, en algorithmique comme en Python ?",
    "options": [
      "La priorité des opérateurs dépend uniquement de l'ordre alphabétique de leurs noms",
      "Tous les opérateurs ont exactement la même priorité et s'évaluent strictement de gauche à droite",
      "La multiplication et la division sont évaluées avant l'addition et la soustraction, sauf si des parenthèses imposent un autre ordre",
      "L'addition et la soustraction sont toujours évaluées avant la multiplication et la division"
    ],
    "correctAnswer": 2,
    "explanation": "Comme en mathématiques, la multiplication et la division sont prioritaires sur l'addition et la soustraction dans l'évaluation d'une expression numérique, sauf si des parenthèses explicites imposent un ordre d'évaluation différent.",
    "part": "Instructions élémentaires et expressions numériques"
  },
  {
    "question": "Que vaut l'expression Python 7 % 3, et à quoi cette opération correspond-elle ?",
    "options": [
      "Elle vaut 2.33, le résultat d'une division réelle",
      "Elle vaut 1, le reste de la division entière de 7 par 3 (puisque 7 = 2×3 + 1)",
      "Elle provoque une erreur car % n'existe pas en Python",
      "Elle vaut 2, le quotient de la division entière de 7 par 3"
    ],
    "correctAnswer": 1,
    "explanation": "L'opérateur modulo % renvoie le reste d'une division entière : 7 % 3 vaut 1, puisque 7 divisé par 3 donne un quotient de 2 et un reste de 1 (7 = 2×3 + 1).",
    "part": "Instructions élémentaires et expressions numériques"
  },
  {
    "question": "Quels sont les opérateurs de comparaison de base utilisés pour construire une expression booléenne ?",
    "options": [
      "if, elif, else",
      "and, or, not",
      "==, !=, <, >, <=, >= (égal, différent, inférieur, supérieur, inférieur ou égal, supérieur ou égal)",
      "+, -, *, /"
    ],
    "correctAnswer": 2,
    "explanation": "Les expressions booléennes reposent sur les comparateurs : égalité (==), différence (!=), et les comparaisons d'ordre (<, >, <=, >=).",
    "part": "Expressions booléennes et structures conditionnelles"
  },
  {
    "question": "En Python, quel piège classique concerne le symbole = par rapport au symbole == ?",
    "options": [
      "= est l'opérateur d'affectation (donner une valeur à une variable), alors que == est l'opérateur de comparaison d'égalité ; les confondre est une erreur fréquente",
      "Les deux symboles sont rigoureusement interchangeables en toute circonstance",
      "= et == sont tous deux réservés aux chaînes de caractères",
      "= sert à comparer deux valeurs, == sert à affecter une valeur"
    ],
    "correctAnswer": 0,
    "explanation": "Une confusion classique en programmation est d'utiliser = (affectation) là où l'on voulait comparer avec == (test d'égalité) ; ce sont deux opérateurs aux rôles très différents.",
    "part": "Expressions booléennes et structures conditionnelles"
  },
  {
    "question": "Quels sont les trois opérateurs logiques de base permettant de combiner des expressions booléennes ?",
    "options": [
      "ET (and), OU (or), NON (not)",
      "POUR, TANTQUE, RÉPÉTER",
      "SI, ALORS, SINON",
      "PLUS, MOINS, FOIS"
    ],
    "correctAnswer": 0,
    "explanation": "Les expressions booléennes se combinent avec les opérateurs logiques ET (and en Python), OU (or) et NON (not).",
    "part": "Expressions booléennes et structures conditionnelles"
  },
  {
    "question": "Comment s'écrit la structure conditionnelle Si...Alors...Sinon en pseudocode algorithmique, et quelle est sa syntaxe équivalente en Python ?",
    "options": [
      "switch condition case ... ; en Python : match condition: case ...",
      "si condition { ... } sinon { ... } ; en Python : if (condition) { ... } else { ... }",
      "Il n'existe pas de structure conditionnelle équivalente entre l'algorithmique et Python",
      "si condition alors ... sinon ... finsi ; en Python : if condition: ... else: ... (avec indentation, sans mot-clé de fin)"
    ],
    "correctAnswer": 3,
    "explanation": "La structure algorithmique si...alors...sinon...finsi se traduit en Python par if condition: ... else: ..., le bloc étant délimité par l'indentation plutôt que par un mot-clé de fin comme finsi.",
    "part": "Expressions booléennes et structures conditionnelles"
  },
  {
    "question": "Quel mot-clé Python permet d'enchaîner plusieurs conditions successives (équivalent de « sinon si » en algorithmique) ?",
    "options": [
      "orif",
      "elif",
      "else if",
      "elseif"
    ],
    "correctAnswer": 1,
    "explanation": "Python utilise le mot-clé contracté elif (et non elseif ni else if) pour enchaîner des conditions supplémentaires après un premier if.",
    "part": "Expressions booléennes et structures conditionnelles"
  },
  {
    "question": "En Python, comment le corps d'un bloc if est-il délimité, en l'absence de mots-clés comme finsi ou d'accolades { } ?",
    "options": [
      "Par des parenthèses englobantes",
      "Par l'indentation : les lignes appartenant au bloc doivent être indentées de façon cohérente sous le if",
      "Par des points-virgules en fin de ligne",
      "Python exige malgré tout des accolades comme en C ou en Java"
    ],
    "correctAnswer": 1,
    "explanation": "Contrairement à l'algorithmique (finsi) ou à des langages comme C/Java (accolades), Python délimite les blocs d'instructions, y compris ceux d'un if, par l'indentation du code.",
    "part": "Expressions booléennes et structures conditionnelles"
  },
  {
    "question": "Peut-on imbriquer une structure conditionnelle à l'intérieur d'une autre, en algorithmique comme en Python ?",
    "options": [
      "Oui, on peut imbriquer des conditions (un si à l'intérieur d'un autre si), aussi bien en pseudocode qu'en Python",
      "Non, une seule structure conditionnelle est autorisée par algorithme",
      "Oui, mais uniquement en algorithmique, jamais en Python",
      "Oui, mais seulement jusqu'à un niveau d'imbrication maximum de 2"
    ],
    "correctAnswer": 0,
    "explanation": "L'imbrication de structures conditionnelles (une condition à l'intérieur d'une autre) est une construction usuelle aussi bien en pseudocode algorithmique qu'en Python.",
    "part": "Expressions booléennes et structures conditionnelles"
  },
  {
    "question": "En pseudocode algorithmique, quelle structure permet de tester successivement plusieurs conditions, chacune associée à un bloc d'instructions différent, en n'exécutant que le premier bloc dont la condition est vraie ?",
    "options": [
      "si...alors...sinon si...alors...sinon...finsi (une chaîne de conditions)",
      "pour...faire...finpour",
      "tantque...faire...fintantque",
      "répéter...jusqu'à"
    ],
    "correctAnswer": 0,
    "explanation": "La structure conditionnelle en chaîne si...alors...sinon si...alors...sinon...finsi permet de tester plusieurs conditions à la suite, en n'exécutant que le bloc associé à la première condition évaluée comme vraie.",
    "part": "Expressions booléennes et structures conditionnelles"
  },
  {
    "question": "Que produit l'opérateur logique NON (not en Python) appliqué à une expression booléenne ?",
    "options": [
      "Il additionne deux expressions booléennes entre elles",
      "Il inverse la valeur de vérité de l'expression : NON Vrai devient Faux, et NON Faux devient Vrai",
      "Il retourne toujours Vrai, quelle que soit l'expression d'origine",
      "Il ne peut s'appliquer qu'à des nombres entiers, jamais à des booléens"
    ],
    "correctAnswer": 1,
    "explanation": "L'opérateur NON (not) est un opérateur unaire qui inverse une valeur de vérité : appliqué à une expression vraie il donne faux, et inversement.",
    "part": "Expressions booléennes et structures conditionnelles"
  }
];
