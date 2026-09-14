const algoQuestions = [
  {
    "question": "Quel est l'objectif pédagogique principal de ce cours d'algorithmique ?",
    "options": [
      "Apprendre la syntaxe spécifique du langage C++.",
      "Apprendre à raisonner pour résoudre des problèmes informatiques indépendamment de tout langage.",
      "Maîtriser l'administration des systèmes Linux.",
      "Créer des applications web interactives."
    ],
    "correctAnswer": 1,
    "explanation": "L'objectif pédagogique principal est d'apprendre à raisonner à la résolution des problèmes informatiques indépendamment de tout langage de programmation [1]."
  },
  {
    "question": "Quelles structures de données dynamiques le cours vise-t-il à enseigner ?",
    "options": [
      "Les tableaux statiques, les entiers et les réels.",
      "Les fichiers textes et les bases de données relationnelles.",
      "Les listes chaînées, les piles, les files et les arbres.",
      "Les dictionnaires globaux et les tuples figés."
    ],
    "correctAnswer": 2,
    "explanation": "Le cours vise à apprendre à manipuler des structures de données dynamiques telles que les listes chaînées, les piles, les files et les arbres [1]."
  },
  {
    "question": "Quel est l'objectif technique principal mentionné pour le cours ?",
    "options": [
      "Compiler du code assembleur sur architecture x86.",
      "Développer des programmes en Python manipulant des structures de données dynamiques.",
      "Configurer des routeurs réseau.",
      "Réaliser des calculs statistiques sous R."
    ],
    "correctAnswer": 1,
    "explanation": "L'objectif technique est de développer des programmes en Python qui manipulent des structures de données dynamiques [1, 2]."
  },
  {
    "question": "Pourquoi est-il important d'identifier et d'implémenter séparément les opérations élémentaires d'une structure de données ?",
    "options": [
      "Cela permet de se passer de l'étape de programmation.",
      "C'est le seul moyen d'exécuter du code sans ordinateur.",
      "C'est une manière efficace de décomposer un problème global en sous-problèmes.",
      "Cela évite d'utiliser de la mémoire vive."
    ],
    "correctAnswer": 2,
    "explanation": "L'identification et l'implémentation séparée des opérations élémentaires permet de décomposer un problème complexe en sous-problèmes plus simples [2]."
  },
  {
    "question": "Quel est l'impact du choix d'une structure de données sur les algorithmes qui l'utilisent ?",
    "options": [
      "Aucun impact, seul le processeur physique détermine la vitesse d'exécution.",
      "Un impact déterminant sur l'efficacité globale des algorithmes.",
      "Uniquement un impact esthétique sur le code source.",
      "Un impact sur le nombre de variables globales requises."
    ],
    "correctAnswer": 1,
    "explanation": "Le choix d'une structure de données et l'implémentation de ses opérations peuvent avoir un impact déterminant sur l'efficacité des algorithmes qui les utilisent [2]."
  },
  {
    "question": "Comment est structuré l'enseignement de ce module ?",
    "options": [
      "15 séances de cours magistraux de 3h.",
      "10 Cours Magistraux de 2h et 10 Travaux Dirigés de 2h.",
      "Uniquement des séances de travaux pratiques en autonomie.",
      "20 Cours Magistraux d'une heure et aucun TD."
    ],
    "correctAnswer": 1,
    "explanation": "L'organisation du cours se compose de 10 Cours Magistraux de 2h et de 10 Travaux Dirigés de 2h [3]."
  },
  {
    "question": "Comment est organisé le contrôle des connaissances dans ce cours ?",
    "options": [
      "Un unique examen écrit final de 3h.",
      "3 épreuves pendant les TDs (QCM 1, QCM 2 et une Épreuve pratique).",
      "Une évaluation continue basée uniquement sur la présence.",
      "Un projet de groupe à rendre en fin de semestre."
    ],
    "correctAnswer": 1,
    "explanation": "Le contrôle comprend 3 épreuves planifiées pendant les séances de TD : le QCM 1, le QCM 2, et une épreuve pratique [3]."
  },
  {
    "question": "Quel est le format et la planification du QCM 1 ?",
    "options": [
      "Durée d'une heure, planifié lors du TD2.",
      "Durée de 30 minutes, portant sur les parties algorithmique et pratique, planifié pendant le TD4.",
      "Durée de 1h20, portant uniquement sur Python, planifié au TD5.",
      "Durée de 30 minutes, planifié en ligne avant le premier cours."
    ],
    "correctAnswer": 1,
    "explanation": "Le QCM 1 dure 30 minutes, évalue l'algorithmique et la pratique, et est planifié lors du TD4 (semaine du 05/10/26) [3, 4]."
  },
  {
    "question": "Quel est le format et la planification du QCM 2 ?",
    "options": [
      "Durée de 45 minutes lors du TD9.",
      "Durée de 30 minutes, portant sur l'algorithmique et la pratique, planifié pendant le TD8.",
      "Uniquement pratique sur ordinateur lors du TD6.",
      "Un test à choix multiples en visioconférence."
    ],
    "correctAnswer": 1,
    "explanation": "Le QCM 2 dure 30 minutes (algorithmique et pratique) et est planifié lors du TD8 (semaine du 09/11/26) [3, 4]."
  },
  {
    "question": "Quelles sont les modalités de l'épreuve pratique finale de ce cours ?",
    "options": [
      "Épreuve de 2h pendant le TD9.",
      "Épreuve pratique de 1h20 constituée d'exercices de programmation, planifiée au TD10.",
      "Un oral individuel de 20 minutes.",
      "Un questionnaire papier à faire à la maison."
    ],
    "correctAnswer": 1,
    "explanation": "L'épreuve finale est une épreuve pratique de 1h20 contenant des exercices de programmation, planifiée au TD10 (semaine du 23/11/26) [3, 4]."
  },
  {
    "question": "Quelles formes concrètes un algorithme peut-il prendre dans la vie quotidienne ?",
    "options": [
      "Uniquement du code source compilé par une machine.",
      "Une recette de cuisine, une notice de montage d'un meuble ou un itinéraire routier.",
      "Uniquement un système d'équations différentielles.",
      "Une base de données relationnelle indexée."
    ],
    "correctAnswer": 1,
    "explanation": "Un algorithme peut prendre de nombreuses formes courantes comme une recette de cuisine, une notice de montage, ou un itinéraire [5]."
  },
  {
    "question": "Comment définit-on la relation entre l'émetteur A et le récepteur B d'un algorithme ?",
    "options": [
      "A et B s'échangent des valeurs binaires de manière bidirectionnelle.",
      "A fait la description d'un enchaînement d'actions destinées à être exécutées par B pour résoudre un problème de manière systématique.",
      "B donne des instructions à A pour écrire un programme informatique.",
      "A compile l'algorithme pour que B puisse s'exécuter sans instructions."
    ],
    "correctAnswer": 1,
    "explanation": "L'algorithme consiste en la description par un acteur A d'actions destinées à être exécutées par un récepteur B pour résoudre un problème de manière systématique [5, 6]."
  },
  {
    "question": "Quelles caractéristiques essentielles la description d'un algorithme doit-elle présenter ?",
    "options": [
      "Être complexe, exhaustive et cryptée.",
      "Être rédigée uniquement en anglais technique.",
      "Être claire, complète et sans ambiguïté.",
      "Faire au moins 100 lignes de pseudo-code."
    ],
    "correctAnswer": 2,
    "explanation": "La description d'un enchaînement d'actions dans un algorithme doit impérativement être claire, complète et sans ambiguïté [5]."
  },
  {
    "question": "Que devient un algorithme lorsque le récepteur B est un ordinateur ?",
    "options": [
      "Un système physique auto-régulé.",
      "Un programme rédigé dans un langage de programmation interprétable par l'ordinateur.",
      "Un pseudo-code universel exécuté directement par la carte graphique.",
      "Une simple spécification fonctionnelle non interprétable."
    ],
    "correctAnswer": 1,
    "explanation": "Lorsque le récepteur est un ordinateur, les consignes doivent être données dans un langage interprétable par la machine. Ces consignes écrites s'appellent un programme [6, 7]."
  },
  {
    "question": "Que signifie « formaliser » un problème selon le cours ?",
    "options": [
      "Traduire directement le problème en langage binaire.",
      "Exprimer la solution de manière rigoureuse et structurée (ex. l'équation 9 + x = 17) plutôt qu'en langage naturel.",
      "Déclarer l'ensemble des variables système en majuscules.",
      "Faire valider le pseudo-code par un enseignant."
    ],
    "correctAnswer": 1,
    "explanation": "Les algorithmes sont des expressions formalisées de solutions. Par exemple, la question textuelle 'Quel nombre ajouter à 9 pour avoir 17 ?' se formalise par l'équation mathématique 9 + x = 17 [7]."
  },
  {
    "question": "Quelle est la première propriété caractérisant un algorithme ou code « bien écrit » ?",
    "options": [
      "Être le plus court possible en omettant les commentaires.",
      "Être facile à lire, par soi-même mais aussi par les autres.",
      "Utiliser des noms de variables formés d'une seule lettre.",
      "Ne jamais utiliser d'appels de fonctions externes."
    ],
    "correctAnswer": 1,
    "explanation": "Un code bien écrit doit avant tout être facile à lire, par soi-même ainsi que par les autres [9]."
  },
  {
    "question": "Quelle propriété d'organisation caractérise un code bien écrit ?",
    "options": [
      "Avoir une organisation logique et évidente.",
      "Utiliser une disposition aléatoire pour dérouter le compilateur.",
      "Présenter toutes les instructions sur une seule et unique ligne de code.",
      "Importer l'ensemble des bibliothèques de façon redondante."
    ],
    "correctAnswer": 0,
    "explanation": "Le cours précise qu'un algorithme ou code bien écrit doit avoir une organisation logique et évidente [9]."
  },
  {
    "question": "Que signifie la propriété d'être « explicite » pour un code bien écrit ?",
    "options": [
      "Avoir des commentaires écrits uniquement sous forme d'équations.",
      "Montrer clairement les intentions du développeur.",
      "Rendre toutes les variables publiques et accessibles partout.",
      "Afficher la valeur de toutes les variables à chaque ligne d'exécution."
    ],
    "correctAnswer": 1,
    "explanation": "Un algorithme ou un code bien écrit doit être explicite et montrer clairement les intentions du développeur [10]."
  },
  {
    "question": "Comment doit être le code face au passage du temps selon les critères de qualité ?",
    "options": [
      "Dépendre strictement de la version courante de l'interpréteur.",
      "Être soigné et robuste au temps qui passe.",
      "Être réécrit intégralement chaque année.",
      "Être hébergé sur un serveur cloud."
    ],
    "correctAnswer": 1,
    "explanation": "Un code bien écrit doit être soigné et robuste au temps qui passe [10]."
  },
  {
    "question": "Qu'est-ce qu'une variable ?",
    "options": [
      "Un bloc d'instructions de conditionnement logique.",
      "Une association stable entre un nom de variable et une valeur.",
      "Une constante système immuable.",
      "Une fonction retournant une valeur aléatoire."
    ],
    "correctAnswer": 1,
    "explanation": "Une variable est définie comme une association entre un nom de variable et une valeur [10]."
  },
  {
    "question": "Où se situe la zone mémoire associée à une variable dans un algorithme par rapport à un ordinateur ?",
    "options": [
      "Elle est physique dans l'algorithme et virtuelle dans l'ordinateur.",
      "Elle est virtuelle dans l'algorithme et physique dans un ordinateur.",
      "Elle est purement logique et n'utilise pas de ressources physiques réelles.",
      "Elle est stockée sur un disque dur externe dans les deux cas."
    ],
    "correctAnswer": 1,
    "explanation": "La zone de mémoire associée à une variable est virtuelle dans un algorithme, mais physique dans un ordinateur [10]."
  },
  {
    "question": "Quelle est la particularité de la valeur d'une variable au cours de l'exécution d'un algorithme ?",
    "options": [
      "Elle reste absolument constante et ne peut être modifiée.",
      "Sa valeur peut changer au cours d'exécution de l'algorithme.",
      "Elle s'efface automatiquement toutes les deux instructions.",
      "Son type change automatiquement à chaque affectation de manière aléatoire."
    ],
    "correctAnswer": 1,
    "explanation": "Par définition, la valeur d'une variable peut changer au cours d'exécution de l'algorithme [10]."
  },
  {
    "question": "Quelles sont les règles de composition d'un identificateur (nom) de variable en algorithmique ?",
    "options": [
      "Commencer par un chiffre, suivi de lettres majuscules.",
      "Commencer par une lettre ou le tiret souligné, et se composer de lettres, de chiffres et/ou du tiret souligné.",
      "Contenir uniquement des caractères spéciaux comme $, %, @.",
      "Ne pas faire plus de 5 caractères au total."
    ],
    "correctAnswer": 1,
    "explanation": "Un identificateur doit débuter par une lettre ou un tiret souligné (_), et se composer uniquement de lettres, de chiffres et de tirets soulignés [11]."
  },
  {
    "question": "Qu'est-ce que le type d'une variable ?",
    "options": [
      "L'adresse physique de la variable en mémoire vive.",
      "Une contrainte sur les valeurs qu'elle peut prendre.",
      "Le nom sous lequel la variable est déclarée.",
      "Une fonction permettant d'afficher la variable à l'écran."
    ],
    "correctAnswer": 1,
    "explanation": "Le type d'une variable correspond à une contrainte sur les valeurs que cette variable est autorisée à prendre [11]."
  },
  {
    "question": "En algorithmique, que se passe-t-il si l'on tente d'affecter un réel ou un caractère à une variable déclarée de type entier ?",
    "options": [
      "La variable change automatiquement son type.",
      "La valeur est arrondie à l'entier supérieur automatiquement sans erreur.",
      "On ne pourra pas le faire, car la contrainte de type l'interdit.",
      "La valeur est convertie en code ASCII."
    ],
    "correctAnswer": 2,
    "explanation": "Si on déclare une variable de type entier, on ne pourra pas y affecter un réel ou un caractère, à cause de la contrainte stricte de typage [11]."
  },
  {
    "question": "Quelle est la différence entre l'ensemble des valeurs du type 'entier' en algorithmique et en machine ?",
    "options": [
      "En algorithmique c'est un sous-ensemble fini, alors qu'en machine c'est l'ensemble infini Z.",
      "En algorithmique, les entiers sont des éléments de Z (infini), alors qu'en machine ils appartiennent à un sous-ensemble fini de Z.",
      "Il n'existe aucune différence, la machine pouvant stocker un entier de taille infinie.",
      "En machine, les entiers ne peuvent être que positifs."
    ],
    "correctAnswer": 1,
    "explanation": "En algorithmique, un entier est un élément de Z (sans limite théorique), tandis qu'en machine il est restreint à un sous-ensemble représentable de Z [11]."
  },
  {
    "question": "Comment le type 'réel' est-il représenté en algorithmique par rapport à sa représentation en machine ?",
    "options": [
      "Un réel algorithmique est un élément de R, tandis qu'en machine c'est un élément d'un sous-ensemble de Q (les nombres rationnels de précision finie).",
      "Un réel machine peut représenter exactement n'importe quel élément de R.",
      "En algorithmique c'est un entier positif, en machine c'est un flottant négatif.",
      "Il est représenté par des chaînes de caractères."
    ],
    "correctAnswer": 0,
    "explanation": "Le réel théorique est un élément de l'ensemble R, tandis qu'en machine, il s'agit d'un élément d'un sous-ensemble de Q en raison de la précision finie [11]."
  },
  {
    "question": "En algorithmique, quel délimiteur doit-on utiliser pour entourer les valeurs de type 'caractère' ?",
    "options": [
      "Des guillemets doubles (ex. \"c\").",
      "Des apostrophes simples (ex. 'c').",
      "Des crochets (ex. [c]).",
      "Des parenthèses (ex. (c))."
    ],
    "correctAnswer": 1,
    "explanation": "Le cours précise que les caractères ont pour délimiteur l'apostrophe simple (ex. ' ) [12]."
  },
  {
    "question": "Quel délimiteur utilise-t-on pour les valeurs de type 'chaîne de caractères' en algorithmique ?",
    "options": [
      "L'apostrophe simple uniquement.",
      "L'apostrophe double (les guillemets, ex. \"chaine\").",
      "Le symbole dièse (#).",
      "Des barres obliques (/)."
    ],
    "correctAnswer": 1,
    "explanation": "Les valeurs de type chaîne de caractères doivent être entourées par des guillemets (délimiteur : \") [12]."
  },
  {
    "question": "Quelles sont les valeurs équivalentes pour un booléen en algorithmique et en représentation machine ?",
    "options": [
      "Vrai / Faux en algorithmique et True (1) / False (0) en machine.",
      "Oui / Non en algorithmique et O / N en machine.",
      "1 / -1 en algorithmique et V / F en machine.",
      "True / False dans l'algorithme et Vrai / Faux sur machine."
    ],
    "correctAnswer": 0,
    "explanation": "Un booléen vaut Vrai ou Faux en algorithmique, ce qui correspond à True (1) ou False (0) en machine [12]."
  },
  {
    "question": "Quelle est l'action d'une 'instruction' sur les variables ?",
    "options": [
      "Elle détruit toutes les variables en fin d'exécution.",
      "Elle prend les variables dans un certain état et les met dans un autre état.",
      "Elle déclare de nouvelles constantes physiques en mémoire.",
      "Elle convertit les expressions réelles en variables booléennes."
    ],
    "correctAnswer": 1,
    "explanation": "Une instruction prend les variables dans un certain état (valeurs courantes) et les modifie pour les mettre dans un autre état [12]."
  },
  {
    "question": "Quelle est la différence entre une instruction simple et une instruction structurée ?",
    "options": [
      "L'instruction simple ne contient pas de chiffres, la structurée oui.",
      "Les instructions simples s'écrivent sur une seule ligne, tandis que les structurées renferment d'autres instructions.",
      "L'instruction simple est exécutée par l'algorithme, la structurée par l'ordinateur.",
      "L'instruction simple ne manipule que des booléens."
    ],
    "correctAnswer": 1,
    "explanation": "Les instructions peuvent être simples (écrites sur une seule ligne) ou structurées (elles renferment d'autres instructions en leur sein) [13]."
  },
  {
    "question": "Quelles sont les trois instructions élémentaires identifiées dans le cours ?",
    "options": [
      "Déclaration, Initialisation, Destruction.",
      "Affectation, Lecture, Écriture.",
      "Si, Tant que, Pour.",
      "Fonction, Argument, Retour."
    ],
    "correctAnswer": 1,
    "explanation": "Le cours classe parmi les instructions élémentaires l'Affectation, la Lecture et l'Écriture [13]."
  },
  {
    "question": "Qu'est-ce que l'affectation ?",
    "options": [
      "Une instruction d'entrée pour récupérer une valeur saisie au clavier.",
      "Une instruction qui modifie la valeur d'une variable à partir d'une expression calculée.",
      "Un moyen d'afficher un message d'avertissement à l'écran.",
      "Une fonction permettant de trier une liste."
    ],
    "correctAnswer": 1,
    "explanation": "L'affectation est une instruction modifiant la valeur d'une variable en lui attribuant le résultat d'une expression calculée [13]."
  },
  {
    "question": "Quelle est la syntaxe d'une affectation en algorithmique ?",
    "options": [
      "< variable > = < expression >",
      "< identificateur de variable > ← < expression >",
      "< expression > → < variable >",
      "affecter(< variable >, < expression >)"
    ],
    "correctAnswer": 1,
    "explanation": "La syntaxe algorithmique standard d'une affectation utilise la flèche gauche : < identificateur de variable > ← < expression > [14]."
  },
  {
    "question": "Que se passe-t-il lors de l'exécution de l'instruction de lecture 'lire(variable)' ?",
    "options": [
      "La valeur courante est conservée et la nouvelle est ignorée.",
      "La valeur précédente de la variable est écrasée par la nouvelle valeur entrée par l'utilisateur.",
      "La valeur entrée s'ajoute à la suite de la valeur précédente.",
      "Elle provoque une erreur si la variable contenait déjà une valeur."
    ],
    "correctAnswer": 1,
    "explanation": "L'instruction de lecture écrase la valeur précédente stockée dans la variable par la nouvelle valeur fournie par l'utilisateur [14]."
  },
  {
    "question": "Quelle contrainte s'applique lors d'une instruction de lecture concernant les types ?",
    "options": [
      "Le type saisi doit obligatoirement être une chaîne de caractères.",
      "Le type de la valeur entrée doit être le même ou compatible avec le type de la variable réceptrice.",
      "La saisie utilisateur doit être castée manuellement en entier à chaque ligne.",
      "Il n'y a aucune contrainte sur le type de la valeur saisie."
    ],
    "correctAnswer": 1,
    "explanation": "La valeur entrée lors d'une lecture doit impérativement avoir un type identique ou compatible avec le type de la variable qui l'accueille [14]."
  },
  {
    "question": "Quel est le rôle de l'instruction d'écriture ?",
    "options": [
      "Sauvegarder des variables dans un fichier physique permanent.",
      "Permettre l'interactivité en envoyant le résultat d'une ou plusieurs expressions à l'écran.",
      "Demander la saisie d'informations au clavier.",
      "Déclarer des variables locales dynamiques."
    ],
    "correctAnswer": 1,
    "explanation": "L'écriture est une instruction de sortie qui permet l'interactivité en affichant des résultats à l'écran [14, 15]."
  },
  {
    "question": "Qu'est-ce qu'une expression simple ?",
    "options": [
      "Une suite d'au moins trois opérations arithmétiques imbriquées.",
      "Une valeur constante (ex. 10, 't') ou l'identificateur d'une variable qui donne accès à sa valeur.",
      "Un bloc conditionnel ne contenant aucune instruction.",
      "Une fonction retournant une valeur booléenne univoque."
    ],
    "correctAnswer": 1,
    "explanation": "Une expression simple est soit une valeur constante (comme 10,"
  },
  {
    "question": "1 ou 't'), soit un identificateur de variable (comme nb ou g) [15].\n\n### 40. Qu'est-ce qu'une expression complexe ?",
    "options": [
      "Une expression contenant uniquement des variables non déclarées.",
      "Une expression dont les opérandes peuvent être eux-mêmes des expressions.",
      "Une expression qui ne peut pas être compilée par Python.",
      "Une expression arithmétique mélangeant des caractères et des booléens sans opérateurs."
    ],
    "correctAnswer": 1,
    "explanation": "Dans une expression complexe, les opérandes sont eux-mêmes composés d'autres expressions combinant valeurs, identificateurs et opérateurs [15]."
  },
  {
    "question": "Quel est le type de l'expression algorithmique 'nb + 10' si la variable 'nb' a pour valeur entière 158 ?",
    "options": [
      "Réel.",
      "Entier.",
      "Caractère.",
      "Booléen."
    ],
    "correctAnswer": 1,
    "explanation": "L'addition d'un entier ('nb' valant 158) et d'une constante entière (10) donne un résultat de type entier [16]."
  },
  {
    "question": "Quel est le type de l'expression '(nb + 10) * g' si 'nb' est un entier (158) et 'g' est un réel (9.81) ?",
    "options": [
      "Entier.",
      "Réel.",
      "Chaîne de caractères.",
      "Indéfini."
    ],
    "correctAnswer": 1,
    "explanation": "La multiplication d'une expression entière par un réel ('g' valant"
  },
  {
    "question": "81) produit un résultat de type réel [16].\n\n### 43. Quel est le type de l'expression algorithmique '‘h’' ?",
    "options": [
      "Chaîne.",
      "Caractère.",
      "Entier.",
      "Booléen."
    ],
    "correctAnswer": 1,
    "explanation": "La valeur 'h' entourée d'apostrophes simples est de type caractère [16]."
  },
  {
    "question": "Selon les règles des expressions numériques, quelle est la règle de type lors d'une opération entre un opérande de type entier et un de type réel ?",
    "options": [
      "Le type résultant est entier.",
      "Le type résultant est réel.",
      "Cela génère une erreur d'incompatibilité de type.",
      "Le résultat est converti en chaîne de caractères."
    ],
    "correctAnswer": 1,
    "explanation": "L'application d'un opérateur entre un entier et un réel renvoie toujours un type réel [17]."
  },
  {
    "question": "Quel type de résultat produit la division '/' de deux opérandes de type entier en algorithmique ?",
    "options": [
      "Entier.",
      "Réel.",
      "Caractère.",
      "Booléen."
    ],
    "correctAnswer": 1,
    "explanation": "Contrairement à l'addition ou à la multiplication d'entiers qui donne un entier, l'opérateur de division '/' appliqué à deux entiers produit un résultat de type réel [17]."
  },
  {
    "question": "Qu'est-ce qu'une variable booléenne ?",
    "options": [
      "Une variable pouvant prendre n'importe quelle valeur réelle positive.",
      "Une variable à deux états (vrai et faux) utilisée pour représenter des valeurs de vérité.",
      "Une variable stockant uniquement des codes binaires sous forme de texte.",
      "Une variable locale à une procédure."
    ],
    "correctAnswer": 1,
    "explanation": "Une variable booléenne possède uniquement deux états (vrai ou faux) et sert à stocker des états logiques de vérité [17]."
  },
  {
    "question": "Quels sont les opérateurs de comparaison utilisables pour construire une expression booléenne en algorithmique ?",
    "options": [
      "+, -, *, /, %, //",
      "<, <=, >, >=, =, <>",
      "et, ou, non",
      "is, is not, in"
    ],
    "correctAnswer": 1,
    "explanation": "Les comparaisons se font avec les opérateurs algorithmiques : inférieur (<), inférieur ou égal (<=), supérieur (>), supérieur ou égal (>=), égal (=) et différent (<>) [17]."
  },
  {
    "question": "Quel est l'ordre de priorité par défaut des opérateurs booléens ?",
    "options": [
      "'ou' est prioritaire sur 'et', qui est prioritaire sur 'non'.",
      "'non' est prioritaire sur 'et', qui est prioritaire sur 'ou'.",
      "Tous les opérateurs booléens ont la même priorité.",
      "'et' est prioritaire sur 'non', qui est prioritaire sur 'ou'."
    ],
    "correctAnswer": 1,
    "explanation": "L'opérateur logiques 'non' possède la plus haute priorité, suivi par 'et', et enfin 'ou' [18]."
  },
  {
    "question": "D'après les tables de vérité, dans quel cas l'expression 'A et B' est-elle évaluée à VRAI ?",
    "options": [
      "Si au moins l'un des deux opérandes est vrai.",
      "Si et seulement si les deux opérandes A et B sont vrais.",
      "Si l'un est vrai et l'autre est faux.",
      "Si les deux opérandes sont faux."
    ],
    "correctAnswer": 1,
    "explanation": "L'opérateur 'et' requiert que les deux entrées soient simultanément vraies pour renvoyer vrai [18]."
  },
  {
    "question": "Dans quel cas l'expression 'A ou B' est-elle évaluée à FAUX ?",
    "options": [
      "Si au moins l'un des deux opérandes est faux.",
      "Si les deux opérandes A et B sont faux simultanément.",
      "Si A est vrai et B est faux.",
      "Si l'un des deux est vrai."
    ],
    "correctAnswer": 1,
    "explanation": "L'opérateur 'ou' renvoie vrai dès qu'un opérande est vrai ; il n'est donc faux que si tous ses opérandes sont faux [18]."
  },
  {
    "question": "Quelle est la valeur de vérité de l'expression : non(76 > 90) ?",
    "options": [
      "Faux",
      "Vrai",
      "Erreur de syntaxe",
      "Indéfini"
    ],
    "correctAnswer": 1,
    "explanation": "L'expression '76 > 90' est fausse. Son inversion par l'opérateur 'non' donne donc Vrai [18]."
  },
  {
    "question": "Est-il possible de définir de véritables constantes (variables non modifiables) en Python ?",
    "options": [
      "Oui, en utilisant le mot-clé 'const'.",
      "Oui, en écrivant le nom de la variable tout en majuscules.",
      "Non, il n'est pas possible de définir de constantes en Python ; toutes les variables restent modifiables.",
      "Oui, en appelant la fonction freeze()."
    ],
    "correctAnswer": 2,
    "explanation": "Le cours mentionne explicitement qu'en Python, il n'est pas possible de définir de constantes (valeurs immuables durant l'exécution) [19]."
  },
  {
    "question": "Quels sont les cinq types de variables de base gérés nativement en Python ?",
    "options": [
      "integer, real, string, boolean, null.",
      "int, float, str, bool, NoneType.",
      "int, double, char, string, void.",
      "number, string, array, dictionary, object."
    ],
    "correctAnswer": 1,
    "explanation": "Les types de base listés dans les diapositives sont int (entier), float (réel), str (chaîne), bool (booléen) et NoneType (type spécial pour None) [19, 20]."
  },
  {
    "question": "Quelle est la signification de l'unique valeur 'None' du type 'NoneType' en Python ?",
    "options": [
      "Elle correspond à la valeur numérique 0.",
      "Elle signifie « pas de valeur » ou « valeur manquante ».",
      "Elle indique une erreur fatale dans le programme.",
      "Elle équivaut à un espace vide."
    ],
    "correctAnswer": 1,
    "explanation": "None est une valeur spéciale de Python signifiant l'absence de valeur ou une valeur manquante [20]."
  },
  {
    "question": "Qu'implique le fait que les variables soient « typées dynamiquement » en Python ?",
    "options": [
      "Qu'elles doivent impérativement être déclarées avant l'exécution.",
      "Que leur type est attribué au moment de l'exécution et peut être modifié au cours du programme.",
      "Que le type d'une variable reste fixe et ne peut jamais changer.",
      "Que le type dépend uniquement du nom de la variable."
    ],
    "correctAnswer": 1,
    "explanation": "Le typage dynamique signifie que le type d'une variable est évalué à l'exécution selon la valeur stockée, et qu'il peut changer au fil du programme [20]."
  },
  {
    "question": "Comment le type d'une variable est-il défini en Python ?",
    "options": [
      "Par une déclaration obligatoire de l'utilisateur (ex. int x).",
      "Par la valeur effective que l'on décide de stocker dans la variable.",
      "De façon statique au début du fichier par le compilateur.",
      "Par le système d'exploitation lors de l'allocation mémoire."
    ],
    "correctAnswer": 1,
    "explanation": "Le type de variable n'étant pas déclaré explicitement par l'utilisateur en Python, il est déduit de la valeur effective stockée [20]."
  },
  {
    "question": "Quelles sont les contraintes pour les noms de variables en Python ?",
    "options": [
      "Ils doivent débuter par un chiffre et ne contenir aucun tiret bas.",
      "Ils doivent débuter par une lettre ou par le symbole _, et ne contenir que des lettres, des chiffres et des tirets bas (_).",
      "Ils doivent être écrits uniquement en lettres minuscules.",
      "Ils ne doivent pas dépasser 8 caractères de longueur."
    ],
    "correctAnswer": 1,
    "explanation": "En Python, un nom de variable doit obligatoirement commencer par une lettre ou par un underscore (_) et ne contenir que des caractères alphanumériques et des underscores [21]."
  },
  {
    "question": "Quelle règle s'applique concernant la casse (lettres majuscules/minuscules) des noms de variables en Python ?",
    "options": [
      "Les noms de variables sont insensibles à la casse.",
      "Les noms de variables sont sensibles à la casse.",
      "Python convertit automatiquement toutes les variables en majuscules.",
      "Seule la première lettre d'une variable est sensible à la casse."
    ],
    "correctAnswer": 1,
    "explanation": "En Python, la casse est strictement respectée ; les variables 'somme', 'Somme' et 'SOMME' désignent donc des variables différentes [21]."
  },
  {
    "question": "Quel opérateur utilise-t-on en Python pour effectuer l'affectation d'une valeur à une variable ?",
    "options": [
      "L'opérateur ←",
      "L'opérateur :=",
      "L'opérateur =",
      "L'opérateur =="
    ],
    "correctAnswer": 2,
    "explanation": "Python utilise l'opérateur signe égal '=' pour assigner une valeur à une variable [21]."
  },
  {
    "question": "Comment récupère-t-on une chaîne de caractères saisie par l'utilisateur en Python ?",
    "options": [
      "c1 = int(input())",
      "c1 = input()",
      "c1 = read()",
      "c1 = get_string()"
    ],
    "correctAnswer": 1,
    "explanation": "La fonction native input() retourne par défaut la valeur entrée par l'utilisateur sous forme de chaîne de caractères (str) [22]."
  },
  {
    "question": "Quel opérateur Python correspond à la division réelle ?",
    "options": [
      "//",
      "%",
      "/",
      "div"
    ],
    "correctAnswer": 2,
    "explanation": "En Python, la division réelle est représentée par la barre oblique simple '/' [23]."
  },
  {
    "question": "Quel opérateur Python permet de calculer le quotient d'une division entière ?",
    "options": [
      "/",
      "//",
      "%",
      "div"
    ],
    "correctAnswer": 1,
    "explanation": "L'opérateur de division entière (qui calcule le quotient) est la double barre oblique '//' [23]."
  },
  {
    "question": "Quel opérateur Python calcule le reste de la division entière (modulo) ?",
    "options": [
      "mod",
      "//",
      "%",
      "/"
    ],
    "correctAnswer": 2,
    "explanation": "Le reste d'une division euclidienne (modulo) s'obtient avec l'opérateur pourcentage '%' [23]."
  },
  {
    "question": "Comment note-t-on l'élévation à la puissance en Python ?",
    "options": [
      "^",
      "**",
      "exp()",
      "pow"
    ],
    "correctAnswer": 1,
    "explanation": "La double étoile '**' est l'opérateur Python dédié à l'élévation à la puissance (ex. x**2) [23]."
  },
  {
    "question": "Dans la division euclidienne 'a = b * q + r', comment exprime-t-on mathématiquement q et r en Python ?",
    "options": [
      "q = a / b  et  r = a % b",
      "q = a // b  et  r = a % b (avec r < b)",
      "q = a % b  et  r = a // b",
      "q = a // b  et  r = a / b"
    ],
    "correctAnswer": 1,
    "explanation": "La division euclidienne se traduit par un quotient entier q = a // b et un reste r = a % b qui doit être inférieur au diviseur b [23]."
  },
  {
    "question": "En Python, quelle écriture simplifiée est équivalente à l'instruction 'x = x + 2' ?",
    "options": [
      "x =+ 2",
      "x += 2",
      "x++ 2",
      "x + 2 = x"
    ],
    "correctAnswer": 1,
    "explanation": "Les opérateurs associés comme '+=' permettent d'effectuer une opération puis d'affecter directement le résultat (x += 2 équivaut à x = x + 2) [24]."
  },
  {
    "question": "Quel est l'ordre de priorité appliqué lors de l'évaluation d'une expression comportant plusieurs opérateurs arithmétiques en Python ?",
    "options": [
      "Multiplications/Divisions > Additions/Soustractions > Parenthèses > Puissance.",
      "Parenthèses > Élévation à la puissance > Multiplication/Division > Addition/Soustraction > De gauche à droite.",
      "Évaluation stricte de gauche à droite sans ordre de priorité.",
      "Addition/Soustraction > Multiplication/Division > Puissance > Parenthèses."
    ],
    "correctAnswer": 1,
    "explanation": "L'ordre de priorité officiel est :"
  },
  {
    "question": "Parenthèses, 2. Élévation à la puissance, 3. Multiplication ou division, 4. Addition ou soustraction, et de gauche à droite en cas d'égal niveau [24].\n\n### 68. Quel est le résultat de l'évaluation de l'opération Python suivante : (1+2)**3 ?",
    "options": [
      "9",
      "27",
      "8",
      "Une erreur de syntaxe"
    ],
    "correctAnswer": 1,
    "explanation": "La parenthèse donne (1+2) ="
  },
  {
    "question": "Puis l'élévation à la puissance 3**3 = 3 * 3 * 3 = 27 [25].\n\n### 69. Quel est le résultat de l'expression : \"Da\" * 4 ?",
    "options": [
      "'Da4'",
      "'DaDaDaDa'",
      "'Da Da Da Da'",
      "Cela génère une erreur (TypeError)"
    ],
    "correctAnswer": 1,
    "explanation": "Multiplier une chaîne par un entier la duplique et la concatène autant de fois, ce qui donne 'DaDaDaDa' [25]."
  },
  {
    "question": "Quel est le résultat de l'expression : \"Da\" + 3 ?",
    "options": [
      "'Da3'",
      "Une erreur de type (TypeError)",
      "'DaDaDa'",
      "3"
    ],
    "correctAnswer": 1,
    "explanation": "Python ne permet pas la concaténation directe d'une chaîne (str) et d'un entier (int) avec l'opérateur '+', provoquant un TypeError [25]."
  },
  {
    "question": "Quel est le résultat de l'expression : (\"Pa\"+\"La\") * 2 ?",
    "options": [
      "'PaLaPaLa'",
      "'PaPaLaLa'",
      "'PaLa2'",
      "Une erreur de type"
    ],
    "correctAnswer": 0,
    "explanation": "La parenthèse effectue d'abord la concaténation 'PaLa'. Puis, la multiplication par 2 la répète, produisant 'PaLaPaLa' [25]."
  },
  {
    "question": "Quel est le résultat de l'expression : (\"Da\"*4) / 2 ?",
    "options": [
      "'DaDa'",
      "Une erreur de type (TypeError)",
      "'DaDaDaDa'",
      "'Da' * 2"
    ],
    "correctAnswer": 1,
    "explanation": "La parenthèse donne la chaîne 'DaDaDaDa'. Cependant, l'opérateur '/' (division) n'est pas défini entre une chaîne de caractères et un entier, provoquant une erreur [25]."
  },
  {
    "question": "Quel est le résultat en Python de l'opération : 5 / 2 ?",
    "options": [
      "2",
      "2.5",
      "2.0",
      "1"
    ],
    "correctAnswer": 1,
    "explanation": "L'opérateur '/' effectue une division réelle, produisant donc"
  },
  {
    "question": "5 [25].\n\n### 74. Quel est le résultat de l'opération : 5 // 2 ?",
    "options": [
      "2",
      "2.5",
      "2.0",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "L'opérateur '//' effectue une division entière, retournant le quotient entier de 5 divisé par 2, soit 2 [25]."
  },
  {
    "question": "Quel est le résultat de l'opération : 5 % 2 ?",
    "options": [
      "2",
      "2.5",
      "1",
      "0"
    ],
    "correctAnswer": 2,
    "explanation": "L'opérateur '%' calcule le reste de la division entière de 5 par 2 (5 = 2 * 2 + 1), soit 1 [25]."
  },
  {
    "question": "Qu'est-ce qu'une séquence d'instructions ?",
    "options": [
      "Un ensemble d'instructions exécutées de façon aléatoire.",
      "La forme la plus simple d'enchaînement d'instructions où les instructions sont écrites l'une après l'autre, séparées par un saut de ligne.",
      "Une liste d'instructions imbriquées dans des fonctions récursives.",
      "Une suite d'opérations sur des types float uniquement."
    ],
    "correctAnswer": 1,
    "explanation": "Une séquence d'instructions est un bloc simple où chaque ligne correspond à une instruction exécutée séquentiellement du haut vers le bas [26]."
  },
  {
    "question": "Quelle est la structure d'une instruction conditionnelle sous sa forme complète en pseudo-code ?",
    "options": [
      "si <condition> faire <instructions> finsi",
      "si <condition> alors <instructions 1> sinon <instructions 2> finsi",
      "tantque <condition> faire <instructions> fintantque",
      "si <condition> sinonSi <condition> finsi"
    ],
    "correctAnswer": 1,
    "explanation": "La forme complète comprend une alternative avec 'sinon' exécutée si la condition initiale est évaluée à faux [26, 27]."
  },
  {
    "question": "Quelle structure algorithmique est préférable en présence de nombreuses conditions imbriquées ?",
    "options": [
      "Des structures 'si alors sinon finsi' répétées.",
      "La structure 'si ... sinonSi ... finsi'.",
      "Une boucle 'Tant que' infinie.",
      "Une suite d'affectations simples."
    ],
    "correctAnswer": 1,
    "explanation": "La structure 'si ... sinonSi ... finsi' est recommandée pour simplifier l'écriture et la lisibilité en évitant des imbrications excessives de blocs 'si' [27, 28]."
  },
  {
    "question": "En Python, quelle règle de mise en forme est obligatoire pour définir les blocs d'instructions conditionnels ?",
    "options": [
      "Entourer chaque bloc par des accolades { }.",
      "Terminer chaque bloc par le mot-clé 'end'.",
      "L'indentation rigoureuse pour chacun des blocs d'instructions.",
      "Écrire chaque bloc sur une seule et même ligne."
    ],
    "correctAnswer": 2,
    "explanation": "En Python, l'absence de délimiteurs de bloc textuels rend l'indentation obligatoire pour structurer les blocs sous if, elif et else [28, 29]."
  },
  {
    "question": "Quel opérateur de comparaison est spécifiquement utilisé en Python pour tester l'égalité ou l'inégalité avec la valeur None ?",
    "options": [
      "==  et  !=",
      "is  et  is not",
      "in  et  not in",
      "=  et  <>"
    ],
    "correctAnswer": 1,
    "explanation": "Bien que '==' fonctionne, il est d'usage et recommandé d'utiliser 'is' ou 'is not' pour tester spécifiquement des valeurs uniques comme 'None' (ex. x is None) [30]."
  },
  {
    "question": "Pourquoi les boucles sont-elles indispensables pour effectuer la somme des N premiers entiers ?",
    "options": [
      "Parce que l'ordinateur ne sait pas faire d'additions sans boucler.",
      "Parce que N est une variable et que le nombre d'étapes de calcul n'est pas fixé à l'avance.",
      "Afin d'économiser l'utilisation de variables mémoires physiques.",
      "Car Python interdit l'utilisation de l'opérateur '+' plus de 5 fois d'affilée."
    ],
    "correctAnswer": 1,
    "explanation": "Lorsque le nombre d'itérations dépend d'une variable N, il est indispensable d'implémenter des boucles car le nombre total d'étapes n'est pas connu statiquement [31]."
  },
  {
    "question": "Quelle est la définition de la boucle 'Tant que' ?",
    "options": [
      "Une boucle qui s'exécute un nombre prédéfini et fixe de fois.",
      "Une boucle qui permet de répéter un bloc d'instructions tant qu'une certaine condition booléenne donnée est satisfaite.",
      "Une boucle qui s'exécute toujours au moins une fois.",
      "Une instruction de branchement vers un sous-programme externe."
    ],
    "correctAnswer": 1,
    "explanation": "La boucle Tant que évalue une expression booléenne et répète les instructions associées tant que cette expression reste évaluée à vrai [31]."
  },
  {
    "question": "Que se passe-t-il si la condition d'une boucle 'Tant que' est évaluée à FAUX lors de sa première évaluation ?",
    "options": [
      "La séquence d'instructions de la boucle est exécutée exactement une fois.",
      "La séquence d'instructions de la boucle n'est jamais exécutée.",
      "Le programme génère une boucle infinie.",
      "L'algorithme s'arrête immédiatement avec une erreur d'exécution."
    ],
    "correctAnswer": 1,
    "explanation": "Dans un Tant que, le test étant effectué avant l'exécution du bloc, si la condition est fausse d'emblée, la boucle n'est jamais exécutée [32]."
  },
  {
    "question": "Quelle règle essentielle doit respecter le bloc d'instructions interne d'un 'Tant que' ?",
    "options": [
      "Il ne doit jamais modifier la variable utilisée dans la condition.",
      "Il doit obligatoirement contenir une instruction de lecture.",
      "Il doit modifier la condition de la boucle, sinon la boucle sera éternelle.",
      "Il doit s'écrire sur une seule ligne."
    ],
    "correctAnswer": 2,
    "explanation": "Pour éviter de créer une boucle infinie, les instructions à l'intérieur du bloc doivent impérativement modifier une ou plusieurs variables affectant la valeur de la condition de boucle [32]."
  },
  {
    "question": "Dans l'exercice suivant : 'a ← 1; b ← a; tantque a < 5 faire b ← b * 5; écrire(b); fintantque', combien de fois le corps de la boucle s'exécutera-t-il ?",
    "options": [
      "4 fois.",
      "Une infinité de fois (boucle éternelle).",
      "0 fois.",
      "5 fois."
    ],
    "correctAnswer": 1,
    "explanation": "La variable de condition 'a' n'étant jamais modifiée à l'intérieur du corps de la boucle, la condition 'a < 5' reste perpétuellement vraie, provoquant une boucle infinie [32, 33]."
  },
  {
    "question": "Quelle est la principale différence fonctionnelle de la boucle 'Répéter' par rapport à la boucle 'Tant que' ?",
    "options": [
      "Sa condition est évaluée avant chaque itération.",
      "La séquence d'instructions est exécutée au moins une fois.",
      "Elle s'arrête lorsque sa condition devient vraie.",
      "Elle n'est utilisable que pour manipuler des réels."
    ],
    "correctAnswer": 1,
    "explanation": "Dans une boucle Répéter, l'évaluation de la condition d'arrêt se faisant en fin de boucle, la séquence d'instructions s'exécute toujours au moins une fois [33]."
  },
  {
    "question": "Quelle restriction s'applique à la boucle 'Pour' concernant la modification de ses paramètres ?",
    "options": [
      "Le corps de la boucle ne doit modifier ni la variable de boucle, ni l'expression de fin.",
      "On ne peut pas lire de variables dans une boucle 'Pour'.",
      "La variable de boucle doit impérativement être multipliée par deux à chaque étape.",
      "Les expressions de début et de fin doivent être identiques."
    ],
    "correctAnswer": 0,
    "explanation": "Dans un 'Pour', le nombre d'itérations est géré automatiquement. Modifier la variable de boucle ou la borne de fin à l'intérieur de la boucle perturbe le mécanisme et est interdit en bonne logique algorithmique [34]."
  },
  {
    "question": "Dans quel cas la boucle algorithmique 'Pour' ne s'exécutera-t-elle jamais ?",
    "options": [
      "Si la variable de boucle est initialisée à 0.",
      "Si l'expression de début est déjà strictement supérieure à l'expression de fin (avec un pas positif de 1).",
      "Si le corps de la boucle contient une conditionnelle.",
      "Si la borne de fin est un nombre réel."
    ],
    "correctAnswer": 1,
    "explanation": "Si la valeur de départ dépasse d'emblée la valeur finale, l'itérateur de la boucle 'Pour' considère le travail terminé et la boucle est totalement ignorée [34]."
  },
  {
    "question": "En Python, comment écrit-on une boucle 'Pour' pour itérer sur les n-1 premiers entiers (de 1 à n-1) ?",
    "options": [
      "for i in range(1, n+1):",
      "for i in range(1, n):",
      "while i < n:",
      "for i de 1 a n:"
    ],
    "correctAnswer": 1,
    "explanation": "La fonction range(1, n) génère une séquence d'entiers allant de 1 jusqu'à n-1 inclus (la borne supérieure n'est jamais atteinte) [36, 37]."
  },
  {
    "question": "N'ayant pas d'instruction 'do... while' en Python, comment peut-on simuler la boucle 'Répéter ... jusqu'à' ?",
    "options": [
      "En utilisant une instruction recursive imbriquée.",
      "En employant une boucle 'while True:' infinie associée à une condition de sortie avec 'break' placée en fin de boucle.",
      "En utilisant une boucle 'for' avec un range infini.",
      "Il est théoriquement impossible de reproduire ce comportement en Python."
    ],
    "correctAnswer": 1,
    "explanation": "Pour forcer l'exécution au moins une fois, on utilise une boucle while infinie (while True) et on place un test if suivi de break tout à la fin des instructions de la boucle [37]."
  },
  {
    "question": "Quelle motivation sous-tend l'utilisation des sous-programmes ?",
    "options": [
      "Permettre au compilateur de s'exécuter plus rapidement.",
      "Décomposer un problème global complexe en sous-problèmes gérables par des fonctions dédiées.",
      "Rendre l'utilisation de variables globales obligatoire.",
      "Éviter l'écriture d'algorithmes conditionnels."
    ],
    "correctAnswer": 1,
    "explanation": "Les sous-programmes permettent la modularité en décomposant un problème global en sous-problèmes plus faciles à analyser et à résoudre [38, 39]."
  },
  {
    "question": "Quand est-il fortement recommandé d'isoler un bloc d'instructions au sein d'un sous-programme (fonction) ?",
    "options": [
      "Dès que le code dépasse 10 lignes.",
      "Si l'ensemble d'instructions est susceptible d'être utilisé plusieurs fois dans un ou plusieurs programmes.",
      "Uniquement si le code doit être traduit en anglais.",
      "Si la fonction ne prend aucun paramètre d'entrée."
    ],
    "correctAnswer": 1,
    "explanation": "L'isolation de code dans un sous-programme évite la duplication de code et favorise la factorisation et la réutilisabilité [39]."
  },
  {
    "question": "Quels sont les deux types de fonctions utilisables dans un algorithme ?",
    "options": [
      "Les fonctions mathématiques et les fonctions textuelles.",
      "Les fonctions prédéfinies et les fonctions définies par l'utilisateur.",
      "Les fonctions globales et les fonctions virtuelles.",
      "Les fonctions simples et les fonctions récursives de fin."
    ],
    "correctAnswer": 1,
    "explanation": "Un algorithme peut appeler soit des fonctions déjà fournies par l'environnement (prédéfinies), soit des fonctions programmées sur mesure par le développeur [39]."
  },
  {
    "question": "Quels éléments composent obligatoirement l'en-tête de déclaration d'une fonction en algorithmique ?",
    "options": [
      "Uniquement son nom.",
      "Son nom, sa liste de paramètres d'entrée typés, ainsi que le type de la valeur de retour.",
      "L'ensemble de ses variables locales.",
      "Ses instructions internes et sa condition d'arrêt."
    ],
    "correctAnswer": 1,
    "explanation": "L'en-tête d'une fonction contient sa signature : nom, arguments typés et type du résultat qu'elle retourne via 'retourner' [41, 42]."
  },
  {
    "question": "Quelle règle régit l'association entre les paramètres effectifs (réels) lors de l'appel et les paramètres formels lors de la définition d'un sous-programme ?",
    "options": [
      "Ils doivent porter exactement les mêmes noms.",
      "Il existe une correspondance biunivoque basée sur leur ordre d'écriture.",
      "Les paramètres effectifs doivent tous être des constantes.",
      "Il n'y a pas besoin de correspondance, la machine les trie automatiquement."
    ],
    "correctAnswer": 1,
    "explanation": "Lors de l'appel, les valeurs (paramètres effectifs) sont associées aux variables de définition (paramètres formels) dans l'ordre strict de gauche à droite [43]."
  },
  {
    "question": "Quelle est la différence fondamentale entre une fonction et une procédure ?",
    "options": [
      "Une fonction s'exécute sur ordinateur, une procédure s'écrit uniquement à la main.",
      "Une fonction renvoie obligatoirement une valeur unique calculée, tandis qu'une procédure exécute des instructions et peut modifier directement ses paramètres reçus.",
      "Une procédure ne peut prendre aucun paramètre d'entrée.",
      "La procédure est propre à Python, la fonction est générique."
    ],
    "correctAnswer": 1,
    "explanation": "Une fonction calcule et renvoie une valeur via 'retourner'. Une procédure réalise des traitements sur ses paramètres en entrée/sortie sans retourner de valeur directe comme le fait une fonction [44, 45]."
  },
  {
    "question": "Dans une procédure, que permet le statut 'Entrée/Sortie' ou 'Sortie' affecté à un paramètre ?",
    "options": [
      "Il interdit au corps de la procédure de lire la variable.",
      "Il permet à la procédure de modifier la valeur de la variable d'origine fournie lors de l'appel.",
      "Il convertit automatiquement la variable en constante.",
      "Il indique que la variable doit être détruite en fin d'exécution."
    ],
    "correctAnswer": 1,
    "explanation": "Les paramètres définis en 'Sortie' ou 'Entrée/Sortie' permettent à la procédure de propager les modifications de valeurs en dehors de son espace local [45, 46]."
  },
  {
    "question": "En Python, quelle valeur est retournée par une fonction si l'instruction 'return' est omise dans sa définition ?",
    "options": [
      "La valeur 0.",
      "La valeur None.",
      "La valeur False.",
      "Elle génère une erreur d'exécution (SyntaxError)."
    ],
    "correctAnswer": 1,
    "explanation": "Si une fonction Python s'achève sans rencontrer le mot-clé 'return', elle renvoie implicitement l'objet 'None' [49]."
  },
  {
    "question": "Comment peut-on s'affranchir de respecter l'ordre d'écriture des arguments lors de l'appel d'une fonction en Python ?",
    "options": [
      "En séparant les arguments par des points-virgules.",
      "En utilisant le nom des arguments de la fonction lors de l'appel (arguments nommés).",
      "En convertissant les arguments en une liste unique ordonnée.",
      "Ce n'est pas possible, l'ordre d'écriture des arguments est absolu et immuable."
    ],
    "correctAnswer": 1,
    "explanation": "Python autorise l'utilisation de la syntaxe 'nom_argument=valeur' lors de l'appel, permettant d'écrire les arguments dans n'importe quel ordre [49]."
  },
  {
    "question": "Quelle règle absolue régit la position des arguments optionnels (facultatifs avec valeur par défaut) lors de la définition d'une fonction en Python ?",
    "options": [
      "Ils doivent être déclarés en premier dans la liste des arguments.",
      "Ils doivent impérativement se situer après le dernier argument obligatoire.",
      "Ils ne peuvent être déclarés qu'au milieu de la liste.",
      "Il n'y a aucune règle de position, ils peuvent être placés n'importe où."
    ],
    "correctAnswer": 1,
    "explanation": "En Python, tout argument doté d'une valeur par défaut doit obligatoirement figurer après tous les arguments positionnels obligatoires, sous peine de déclencher une erreur de syntaxe [50, 51]."
  }
];