const algoCm1P2Questions = [
  {
    "question": "Quelle est la différence essentielle entre une boucle « Tant que » et une boucle « Pour », d'après le rappel de cours ?",
    "options": [
      "« Tant que » ne peut être utilisée qu'avec des nombres entiers, « Pour » qu'avec des chaînes de caractères",
      "« Tant que » répète des instructions tant qu'une condition reste vraie, sans connaître à l'avance le nombre d'itérations ; « Pour » est utilisée quand le nombre de répétitions est connu ou dénombrable à l'avance",
      "Il n'existe aucune différence, ce sont deux noms pour la même structure",
      "« Pour » ne peut s'exécuter qu'une seule fois, contrairement à « Tant que »"
    ],
    "correctAnswer": 1,
    "explanation": "La boucle tant que répète des instructions tant qu'une condition est vérifiée (nombre d'itérations pas nécessairement connu à l'avance), alors que la boucle pour est adaptée lorsque le nombre de répétitions (ou la séquence à parcourir) est connu.",
    "part": "Structures répétitives (boucles)"
  },
  {
    "question": "Quel mot-clé Python introduit une boucle qui répète des instructions tant qu'une condition reste vraie ?",
    "options": [
      "loop",
      "while",
      "repeat",
      "until"
    ],
    "correctAnswer": 1,
    "explanation": "Python utilise le mot-clé while pour une boucle conditionnelle : while condition: ...",
    "part": "Structures répétitives (boucles)"
  },
  {
    "question": "Que risque-t-il de se passer si la condition d'une boucle « tant que »/while ne devient jamais fausse ?",
    "options": [
      "Python arrête automatiquement la boucle après 100 itérations par sécurité",
      "On obtient une boucle infinie, qui ne s'arrêtera jamais toute seule",
      "La boucle s'exécute exactement une fois puis s'arrête",
      "Le programme refuse de compiler"
    ],
    "correctAnswer": 1,
    "explanation": "Si la condition d'une boucle while reste toujours vraie, les instructions du corps de la boucle s'exécutent indéfiniment : c'est une boucle infinie, un piège classique à surveiller lors de l'écriture d'une condition d'arrêt.",
    "part": "Structures répétitives (boucles)"
  },
  {
    "question": "En Python, comment écrit-on une boucle for qui parcourt les entiers de 0 à 9 (inclus) ?",
    "options": [
      "for i in range(0, 9):",
      "for i from 0 to 9:",
      "for i in range(10):",
      "for (i = 0; i < 10; i++):"
    ],
    "correctAnswer": 2,
    "explanation": "range(10) génère les entiers de 0 à 9 inclus (10 exclu) : for i in range(10): parcourt donc bien les entiers de 0 à 9.",
    "part": "Structures répétitives (boucles)"
  },
  {
    "question": "Quelle est la syntaxe générale de la fonction range(a, b, pas) en Python ?",
    "options": [
      "Elle retourne toujours les entiers de 0 à a, indépendamment de b et pas",
      "Elle génère une liste de nombres réels (flottants) uniquement",
      "Elle sert uniquement à générer des chaînes de caractères aléatoires",
      "Elle retourne une séquence d'entiers de a (inclus) à b (exclu), en avançant par incréments de la valeur pas"
    ],
    "correctAnswer": 3,
    "explanation": "range(a, b, pas) génère une séquence d'entiers commençant à a (inclus) et s'arrêtant avant b (exclu), en progressant par pas d'increment fixé par le paramètre pas.",
    "part": "Structures répétitives (boucles)"
  },
  {
    "question": "Quelle instruction Python permet de sortir immédiatement d'une boucle avant qu'elle n'ait naturellement atteint sa condition d'arrêt ?",
    "options": [
      "stop",
      "break",
      "exit",
      "continue"
    ],
    "correctAnswer": 1,
    "explanation": "L'instruction break interrompt immédiatement l'exécution de la boucle englobante, qu'il s'agisse d'un for ou d'un while.",
    "part": "Structures répétitives (boucles)"
  },
  {
    "question": "À quoi sert l'instruction Python continue à l'intérieur d'une boucle ?",
    "options": [
      "Elle passe directement à l'itération suivante de la boucle, en sautant le reste des instructions du corps pour ce tour",
      "Elle relance la boucle depuis son tout début",
      "Elle met la boucle en pause indéfiniment",
      "Elle arrête complètement la boucle, comme break"
    ],
    "correctAnswer": 0,
    "explanation": "continue interrompt uniquement l'itération courante et fait directement passer à l'itération suivante de la boucle, sans exécuter le reste du code du corps pour ce tour-là.",
    "part": "Structures répétitives (boucles)"
  },
  {
    "question": "Peut-on imbriquer une boucle à l'intérieur d'une autre boucle (par exemple un for dans un for) ?",
    "options": [
      "Oui, mais uniquement avec des boucles while, jamais avec des boucles for",
      "Oui, mais la boucle intérieure doit obligatoirement s'exécuter avant la boucle extérieure",
      "Non, ce n'est jamais autorisé en algorithmique ni en Python",
      "Oui, les boucles imbriquées sont une construction courante, en algorithmique comme en Python"
    ],
    "correctAnswer": 3,
    "explanation": "L'imbrication de boucles (une boucle complète à l'intérieur du corps d'une autre) est une construction usuelle, très employée par exemple pour parcourir des structures à deux dimensions.",
    "part": "Structures répétitives (boucles)"
  },
  {
    "question": "Quelle est la distinction classique entre une fonction et une procédure en algorithmique ?",
    "options": [
      "Il n'existe aucune différence entre les deux termes",
      "Une procédure retourne toujours un booléen, une fonction ne retourne jamais rien",
      "Une fonction ne peut avoir aucun paramètre, une procédure peut en avoir plusieurs",
      "Une fonction retourne une valeur (un résultat) exploitable par l'appelant, tandis qu'une procédure exécute des actions sans renvoyer de valeur"
    ],
    "correctAnswer": 3,
    "explanation": "En algorithmique, une fonction calcule et renvoie une valeur utilisable par la suite, alors qu'une procédure réalise une série d'actions (par exemple afficher des résultats) sans renvoyer de valeur au code appelant.",
    "part": "Fonctions et procédures"
  },
  {
    "question": "Quel mot-clé permet de définir une fonction en Python ?",
    "options": [
      "func",
      "def",
      "define",
      "function"
    ],
    "correctAnswer": 1,
    "explanation": "En Python, une fonction se définit avec le mot-clé def, suivi du nom de la fonction et de ses paramètres entre parenthèses : def ma_fonction(param):",
    "part": "Fonctions et procédures"
  },
  {
    "question": "Quelle instruction Python permet à une fonction de renvoyer une valeur à son appelant ?",
    "options": [
      "return",
      "send",
      "yield only",
      "output"
    ],
    "correctAnswer": 0,
    "explanation": "L'instruction return renvoie une valeur (ou plusieurs) au code qui a appelé la fonction, et met fin à son exécution.",
    "part": "Fonctions et procédures"
  },
  {
    "question": "Une fonction Python peut-elle renvoyer plusieurs valeurs à la fois avec une seule instruction return ?",
    "options": [
      "Oui, en séparant les valeurs par des virgules après return ; elles sont alors regroupées automatiquement dans un tuple",
      "Non, Python interdit strictement de renvoyer plus d'une valeur",
      "Oui, mais uniquement si les valeurs sont de même type",
      "Oui, mais seulement en utilisant deux fonctions séparées"
    ],
    "correctAnswer": 0,
    "explanation": "En écrivant par exemple return a, b, Python regroupe automatiquement les valeurs renvoyées dans un tuple, qui peut ensuite être décomposé à la réception, par exemple x, y = ma_fonction().",
    "part": "Fonctions et procédures"
  },
  {
    "question": "Qu'est-ce qu'un argument (ou paramètre) nommé lors de l'appel d'une fonction Python ?",
    "options": [
      "Un argument qui ne peut être qu'une chaîne de caractères",
      "Un argument automatiquement converti en variable globale",
      "Un argument passé en précisant explicitement le nom du paramètre auquel il correspond (ex. ma_fonction(x=5)), ce qui permet de ne pas respecter l'ordre positionnel des paramètres",
      "Un paramètre qui n'a pas besoin d'être déclaré dans la définition de la fonction"
    ],
    "correctAnswer": 2,
    "explanation": "Un argument nommé (mot-clé) est fourni sous la forme nom_du_parametre=valeur, ce qui permet à l'appelant de préciser les arguments dans un ordre différent de celui de la définition de la fonction.",
    "part": "Fonctions et procédures"
  },
  {
    "question": "À quoi sert un paramètre par défaut (optionnel) dans la définition d'une fonction Python ?",
    "options": [
      "Il empêche la fonction de renvoyer une valeur",
      "Il transforme automatiquement la fonction en procédure",
      "Il fournit une valeur automatiquement utilisée si l'appelant n'en fournit pas explicitement une pour ce paramètre",
      "Il rend obligatoire la présence de tous les autres paramètres"
    ],
    "correctAnswer": 2,
    "explanation": "Un paramètre déclaré avec une valeur par défaut (ex. def f(x, y=0):) peut être omis lors de l'appel ; la valeur par défaut est alors utilisée à sa place.",
    "part": "Fonctions et procédures"
  },
  {
    "question": "Quel est l'intérêt de donner un nom explicite à une fonction et de bien documenter son rôle, ses paramètres et sa valeur de retour ?",
    "options": [
      "Cela n'a aucune utilité pratique en dehors de la lisibilité du code",
      "Cela réduit obligatoirement la taille du fichier source",
      "Cela facilite la compréhension et la réutilisation de la fonction par d'autres personnes (ou par soi-même plus tard), sans avoir à relire tout son code interne",
      "Cela accélère systématiquement le temps d'exécution du programme"
    ],
    "correctAnswer": 2,
    "explanation": "Nommer clairement une fonction et documenter son rôle, ses paramètres attendus et ce qu'elle retourne permet à quiconque de l'utiliser correctement sans avoir à comprendre le détail de son implémentation interne, favorisant la réutilisation et la modularité du code.",
    "part": "Fonctions et procédures"
  },
  {
    "question": "Une fonction Python peut-elle appeler une autre fonction, y compris elle-même (récursion) ?",
    "options": [
      "Oui, une fonction peut appeler n'importe quelle autre fonction déjà définie, y compris s'appeler elle-même",
      "Oui, mais uniquement des fonctions natives de Python, jamais des fonctions définies par l'utilisateur",
      "Non, seule une procédure peut appeler une fonction, jamais l'inverse",
      "Non, une fonction ne peut jamais en appeler une autre"
    ],
    "correctAnswer": 0,
    "explanation": "Une fonction peut tout à fait appeler d'autres fonctions dans son corps, y compris s'appeler elle-même, ce qui constitue le principe de la récursivité.",
    "part": "Fonctions et procédures"
  },
  {
    "question": "Que réalise l'instruction Python a, b = b, a ?",
    "options": [
      "Elle provoque systématiquement une erreur de syntaxe",
      "Elle compare a et b et affiche le plus grand des deux",
      "Elle échange (permute) les valeurs de a et b l'une avec l'autre, sans avoir besoin d'une variable intermédiaire explicite",
      "Elle affecte la même valeur à a et à b"
    ],
    "correctAnswer": 2,
    "explanation": "L'affectation multiple a, b = b, a permet, en une seule instruction, d'échanger les valeurs de deux variables en Python, sans nécessiter de variable temporaire intermédiaire comme cela serait requis dans de nombreux autres langages.",
    "part": "Fonctions et procédures"
  },
  {
    "question": "Quelle est la différence entre une variable locale et une variable globale ?",
    "options": [
      "Une variable locale est plus rapide qu'une variable globale mais ne peut pas changer de valeur",
      "Une variable globale ne peut contenir que des nombres, une variable locale que des chaînes de caractères",
      "Une variable locale n'existe et n'est accessible qu'à l'intérieur du bloc (typiquement une fonction) où elle a été créée ; une variable globale est accessible depuis l'ensemble du programme",
      "Il n'existe pas de notion de portée des variables en Python"
    ],
    "correctAnswer": 2,
    "explanation": "La portée (scope) d'une variable détermine où elle est visible : une variable locale, déclarée dans une fonction, n'est accessible qu'à l'intérieur de celle-ci, alors qu'une variable globale est visible dans tout le programme.",
    "part": "Portée (visibilité) des variables"
  },
  {
    "question": "Que se passe-t-il, par défaut, si une fonction Python affecte une valeur à une variable portant le même nom qu'une variable globale ?",
    "options": [
      "Cela crée automatiquement une nouvelle variable locale à la fonction, sans modifier la variable globale de même nom",
      "Cela provoque toujours une erreur d'exécution",
      "Cela modifie systématiquement et silencieusement la variable globale",
      "Python fusionne les deux variables en une seule"
    ],
    "correctAnswer": 0,
    "explanation": "Par défaut, une simple affectation à l'intérieur d'une fonction crée une variable locale propre à cette fonction ; la variable globale de même nom, si elle existe, n'est pas modifiée par cette affectation.",
    "part": "Portée (visibilité) des variables"
  },
  {
    "question": "Quel mot-clé Python permet explicitement, à l'intérieur d'une fonction, de modifier une variable définie en dehors de celle-ci (au niveau global) ?",
    "options": [
      "global",
      "outer",
      "extern",
      "public"
    ],
    "correctAnswer": 0,
    "explanation": "Le mot-clé global, utilisé à l'intérieur d'une fonction (par exemple global x), indique explicitement que l'affectation qui suit doit modifier la variable globale x plutôt que d'en créer une nouvelle localement.",
    "part": "Portée (visibilité) des variables"
  },
  {
    "question": "Une variable créée à l'intérieur d'une fonction Python (sans le mot-clé global) est-elle accessible depuis l'extérieur de cette fonction, une fois que celle-ci a terminé son exécution ?",
    "options": [
      "Oui, mais seulement si son nom commence par une majuscule",
      "Cela dépend uniquement du type de la valeur qu'elle contient",
      "Non, sa durée de vie est limitée à l'exécution de la fonction : elle cesse d'exister (et n'est plus accessible) dès que la fonction se termine",
      "Oui, elle reste accessible indéfiniment dans tout le reste du programme"
    ],
    "correctAnswer": 2,
    "explanation": "Une variable locale à une fonction n'existe que pendant l'exécution de cette fonction : sa portée et sa durée de vie sont limitées au corps de la fonction, et elle devient inaccessible une fois que celle-ci a terminé de s'exécuter.",
    "part": "Portée (visibilité) des variables"
  }
];
