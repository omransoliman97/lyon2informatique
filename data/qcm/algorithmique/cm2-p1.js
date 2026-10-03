const algoCm2P1Questions = [
  {
    "question": "Comment le cours définit-il les structures de données ?",
    "options": [
      "Un synonyme strict d'algorithme de tri",
      "Des moyens spécifiques d'organiser et de stocker des données afin qu'elles puissent être consultées et traitées de manière efficace",
      "Une notion propre au langage Python, sans équivalent en algorithmique générale",
      "Des instructions qui permettent uniquement d'afficher du texte à l'écran"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours définit les structures de données comme « des moyens spécifiques d'organiser et de stocker des données afin qu'elles puissent être consultées et traitées de manière efficace ».",
    "part": "Pourquoi des structures de données, et les tableaux statiques"
  },
  {
    "question": "Quelles conséquences le cours attribue-t-il au choix d'une structure de données inappropriée ?",
    "options": [
      "Des durées de fonctionnement inutilement longues, des pertes de mémoire et un gaspillage de stockage, pouvant entraîner une perte de plusieurs millions d'euros à l'échelle",
      "Uniquement un ralentissement négligeable de quelques microsecondes",
      "Un simple message d'avertissement à la compilation, sans autre effet",
      "Aucune, le choix de structure de données n'a pas d'impact pratique"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours avertit qu'« une structure de données inappropriée peut entraîner des durées de fonctionnement (inutilement) longues, des pertes de mémoire et un gaspillage de stockage », pouvant « raisonnablement entraîner une perte de plusieurs millions d'euros » à l'échelle de données massives.",
    "part": "Pourquoi des structures de données, et les tableaux statiques"
  },
  {
    "question": "Quelle limite fondamentale des variables simples justifie l'introduction des variables structurées ?",
    "options": [
      "Les variables simples ne peuvent être utilisées qu'une seule fois dans tout le programme",
      "Les variables simples occupent toujours plus de mémoire que les tableaux",
      "Les variables simples ne peuvent avoir qu'une seule valeur à un instant donné : si une nouvelle valeur leur est affectée, la précédente est perdue",
      "Les variables simples ne peuvent contenir que des nombres entiers"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours souligne que « les variables simples peuvent avoir qu'une valeur à un instant donné. Si une nouvelle valeur leur est affectée, la précédente est perdue », ce qui justifie l'usage de variables structurées comme les tableaux ou les structures.",
    "part": "Pourquoi des structures de données, et les tableaux statiques"
  },
  {
    "question": "Quelle est la caractéristique commune à toutes les variables structurées (tableaux et structures), d'après le cours ?",
    "options": [
      "Elles ne peuvent contenir que des caractères",
      "Elles ne peuvent jamais être modifiées après leur création",
      "Elles doivent toutes avoir exactement la même taille en mémoire",
      "Elles peuvent avoir plusieurs valeurs à un instant donné, même si elles se définissent et s'utilisent de manières différentes"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours conclut : « Caractéristique commune des variables structurées : elles peuvent avoir plusieurs valeurs à un instant donné. Mais elles se définissent et s'utilisent de manières différentes ».",
    "part": "Pourquoi des structures de données, et les tableaux statiques"
  },
  {
    "question": "Comment le cours définit-il un tableau à une dimension ?",
    "options": [
      "Une variable qui ne peut contenir qu'un seul élément à la fois",
      "Un synonyme d'une structure, sans aucune différence",
      "Une variable réservée exclusivement aux nombres réels",
      "Une variable structurée qui peut contenir une série d'éléments de même type, caractérisée par un identificateur"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours précise : « Un tableau à une dimension est une variable structurée qui peut contenir une série d'éléments de même type. Un tableau est caractérisé par un identificateur ».",
    "part": "Pourquoi des structures de données, et les tableaux statiques"
  },
  {
    "question": "Comment repère-t-on un élément particulier au sein d'un tableau ?",
    "options": [
      "Il est impossible de désigner un élément précis d'un tableau",
      "Par sa couleur d'affichage à l'écran",
      "Par un indice, un nombre entier qui prend ses valeurs entre deux bornes (borne de début et de fin)",
      "Par son nom propre, différent pour chaque élément"
    ],
    "correctAnswer": 2,
    "explanation": "Chaque élément de tableau « est repéré par un indice (un nombre entier) qui prend ses valeurs entre deux bornes (bornes de début et de fin) ».",
    "part": "Pourquoi des structures de données, et les tableaux statiques"
  },
  {
    "question": "Quelles informations sont nécessaires pour déclarer un tableau, selon la syntaxe du cours <identificateur> : tableau [<indice_début> ... <indice_fin>] de <type> ?",
    "options": [
      "Le nombre exact d'éléments réellement utilisés, jamais les bornes",
      "Uniquement le type des éléments, la taille étant toujours automatique",
      "Les bornes (inférieure et supérieure) de l'indice, ainsi que le type des valeurs prises par les éléments du tableau",
      "Uniquement le nom du tableau, sans autre précision"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours précise que la déclaration nécessite « les bornes : la borne inférieure et la borne supérieure que peut prendre son indice [...] » et « le type de valeurs prises par les éléments d'un tableau », illustré par table1 : tableau [0..15] d'entiers.",
    "part": "Pourquoi des structures de données, et les tableaux statiques"
  },
  {
    "question": "Un tableau déclaré avec un intervalle d'indices de 1 à 100 mais qui ne contient réellement que 20 valeurs utiles : que dit le cours de la place déclarée et de la place occupée ?",
    "options": [
      "La place déclarée est de 100 éléments, la place occupée est de 20 éléments : il ne faut pas surdimensionner un tableau pour ne pas gaspiller la mémoire vive",
      "La place déclarée et la place occupée sont toujours automatiquement égales",
      "Seule la place occupée existe ; la notion de place déclarée n'a pas de sens",
      "Le tableau redimensionne automatiquement sa place déclarée à 20"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours illustre : « Place déclarée est de 100 éléments », « Place occupée est 20 éléments », et avertit « Il ne faut pas surdimensionner un tableau pour ne pas gaspiller la place en mémoire vive ! ».",
    "part": "Pourquoi des structures de données, et les tableaux statiques"
  },
  {
    "question": "Si la taille nécessaire pour une variable structurée doit pouvoir évoluer en cours d'exécution, quel type de variable le cours recommande-t-il plutôt qu'un tableau classique (statique) ?",
    "options": [
      "Un booléen",
      "Une variable dynamique",
      "Il n'existe aucune alternative : il faut obligatoirement sur-dimensionner le tableau",
      "Une structure, exclusivement"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours indique : « Si le problème nécessite de faire évoluer la taille, un tableau n'est pas le type de variable approprié. Il faut alors utiliser des variables dynamiques ».",
    "part": "Pourquoi des structures de données, et les tableaux statiques"
  },
  {
    "question": "Avec quelle syntaxe accède-t-on à un élément de tableau, et l'indice utilisé peut-il être autre chose qu'une simple constante ?",
    "options": [
      "<indice>(<identificateur>), l'indice ne peut être qu'un caractère",
      "On ne peut accéder qu'au premier ou au dernier élément d'un tableau, jamais à un indice arbitraire",
      "<identificateur>.<indice>, et l'indice doit toujours être une constante littérale",
      "<identificateur>[<indice>] ; l'indice peut être une constante, une variable, ou une expression (par exemple table1[ind + 1])"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours précise l'accès via <identificateur>[<indice>], l'indice pouvant être « une constante : table1[2] », « une variable : ind ← 3 ; table1[ind] » ou « une expression : table1[ind + 1] ».",
    "part": "Pourquoi des structures de données, et les tableaux statiques"
  },
  {
    "question": "Un élément de tableau se comporte-t-il comme une variable simple, et dans quelles instructions peut-il être utilisé ?",
    "options": [
      "Oui, mais uniquement à l'intérieur d'une boucle pour",
      "Oui : il peut être utilisé en lecture, en écriture, en affectation, dans une expression, ou comme paramètre effectif d'une fonction (ex. tab[5] ← 45, écrire(tab[5] * 10), échanger(tab[1], tab[2]))",
      "Non, un élément de tableau ne peut jamais être affecté ni modifié",
      "Non, un élément de tableau ne peut être utilisé que dans une instruction de lecture"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours confirme qu'« un élément de tableau se comporte exactement comme une variable simple » et peut être utilisé en lecture, en écriture, en affectation, dans une expression (écrire(tab[5] * 10)), ou comme paramètre effectif (échanger(tab[1], tab[2])).",
    "part": "Pourquoi des structures de données, et les tableaux statiques"
  },
  {
    "question": "Dans l'algorithme remplir_tableau_1 du cours, comment le nombre de caractères à lire (ncar) est-il obtenu, avant de remplir le tableau texte avec une boucle « pour » ?",
    "options": [
      "ncar est lu directement au clavier avec lire(ncar), puis la boucle « pour i de 0 à ncar-1 faire lire(texte[i]) » remplit le tableau",
      "Le nombre de caractères n'a besoin d'être ni lu ni connu pour cet algorithme",
      "ncar est calculé automatiquement comme la taille maximale du tableau, sans être demandé à l'utilisateur",
      "ncar est fixé une fois pour toutes à 99 dans le code de l'algorithme"
    ],
    "correctAnswer": 0,
    "explanation": "L'algorithme remplir_tableau_1 commence par « lire (ncar) », puis remplit le tableau avec « pour i de 0 à ncar-1 faire lire(texte[i]) finpour ».",
    "part": "Algorithmes de remplissage et parcours de tableau"
  },
  {
    "question": "Dans l'exercice 1 (remplir_tableau_2), comment reconnaît-on la fin de la saisie lorsque le dernier élément est un caractère spécial rangé dans le tableau ?",
    "options": [
      "Avec une boucle répéter...jusqu'à qui lit un caractère et incrémente ncar, en s'arrêtant quand la condition « jusqu'à texte[ncar] = '.' » devient vraie, le point étant lui-même rangé dans le tableau",
      "Il est impossible de détecter la fin de la saisie dans ce cas",
      "En limitant arbitrairement la saisie à 10 caractères",
      "En demandant à l'utilisateur de saisir le nombre exact de caractères avant de commencer"
    ],
    "correctAnswer": 0,
    "explanation": "La solution de l'exercice 1 utilise une boucle « répéter [...] lire(texte[ncar]) ; ncar ← ncar + 1 [...] jusqu'à texte[ncar] = '.' », le caractère de fin ('.') étant lui-même rangé dans le tableau puisqu'il est lu avant le test d'arrêt.",
    "part": "Algorithmes de remplissage et parcours de tableau"
  },
  {
    "question": "Dans l'exercice 2 (remplissage avec un caractère de fin fictif, non rangé dans le tableau), quelle structure de boucle et quelle variable supplémentaire (carlu) le cours utilise-t-il ?",
    "options": [
      "Une boucle « tantque carlu <> '#' faire » qui lit un caractère dans carlu avant de le ranger dans le tableau, ce qui permet de ne jamais y ranger le caractère de fin '#' lui-même",
      "Aucune boucle n'est nécessaire, un seul test suffit",
      "La même boucle répéter...jusqu'à que l'exercice précédent, sans aucune différence",
      "Une boucle « pour » avec un nombre d'itérations fixé à l'avance"
    ],
    "correctAnswer": 0,
    "explanation": "La solution lit d'abord carlu, puis exécute « tantque carlu <> '#' faire texte[ncar] ← carlu ; lire(carlu) ; ncar ← ncar + 1 fintantque » : le caractère '#' est lu mais jamais rangé dans le tableau puisqu'il fait échouer le test avant l'affectation.",
    "part": "Algorithmes de remplissage et parcours de tableau"
  },
  {
    "question": "Dans l'algorithme parcourir_tableau_1, quelle transformation est appliquée à chaque caractère 'i' du tableau texte ?",
    "options": [
      "Le tableau est trié par ordre alphabétique",
      "Chaque 'i' est dupliqué deux fois de suite",
      "Chaque 'i' est supprimé du tableau, ce qui réduit sa taille",
      "Chaque 'i' est remplacé par un 'x' au moyen d'un test « si texte[k] = 'i' alors texte[k] ← 'x' finsi » à l'intérieur d'une boucle pour"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours donne l'algorithme parcourir_tableau_1, qui parcourt le tableau avec « pour k de 0 à ncar faire si texte[k] = 'i' alors texte[k] ← 'x' finsi finpour », remplaçant ainsi chaque 'i' par un 'x'.",
    "part": "Algorithmes de remplissage et parcours de tableau"
  },
  {
    "question": "Pour déclarer un tableau à n dimensions, que faut-il fournir en plus du type des valeurs, d'après le cours ?",
    "options": [
      "Uniquement le nombre total d'éléments, sans distinguer les dimensions",
      "n intervalles de valeurs, un pour chaque indice (dimension)",
      "Une seule borne globale valable pour toutes les dimensions à la fois",
      "Le nom de chaque élément individuellement"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours précise : « Pour déclarer un tableau à n dimensions, il faut donner n intervalles de valeurs pour les indices, ainsi que le type des valeurs rangées dans le tableau ».",
    "part": "Tableaux à plusieurs dimensions et tableaux dynamiques"
  },
  {
    "question": "Dans l'exemple du cours mat : tableau[0..3, 0..5] de caractères, comment accède-t-on à l'élément situé ligne 2, colonne 3 (qui contient 'Q') ?",
    "options": [
      "mat[2, 3]",
      "mat[2][3][0]",
      "mat(2)(3)",
      "mat.2.3"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours illustre l'accès à un tableau à deux dimensions par mat[2, 3], qui « contient la valeur 'Q' » dans l'exemple donné.",
    "part": "Tableaux à plusieurs dimensions et tableaux dynamiques"
  },
  {
    "question": "Pourquoi un tableau classique (défini avec des bornes fixes) est-il qualifié de « statique » dans le cours ?",
    "options": [
      "Parce qu'il ne peut contenir que des nombres entiers",
      "Parce qu'il est automatiquement trié dès sa création",
      "Parce qu'il ne peut jamais contenir plus d'un élément",
      "Parce qu'il faut connaître, au moment de l'écriture de l'algorithme, la taille maximale que pourra atteindre le tableau"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours indique : « Les tableaux définis jusqu'ici sont dits statiques, car il faut qu'au moment de l'écriture d'algorithme, on ait la taille maximale que pourra atteindre le tableau ».",
    "part": "Tableaux à plusieurs dimensions et tableaux dynamiques"
  },
  {
    "question": "Comment crée-t-on un tableau dynamique, et quelle instruction faut-il exécuter avant de pouvoir s'en servir réellement ?",
    "options": [
      "On le déclare avec une taille fixe très grande dès le départ, comme un tableau statique",
      "On lui affecte une taille vide à la déclaration (tableau[] de type), puis on doit le redimensionner avec l'instruction Redimensionner <identificateur>[N] avant utilisation",
      "Un tableau dynamique n'a besoin d'aucune déclaration ni d'aucun redimensionnement",
      "Il suffit de lui donner un nom sans jamais préciser ni type ni taille"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours indique : « Pour créer un tableau dynamique, il suffit de lui affecter une taille vide » (ex. t : tableau[] d'entiers), puis « il convient de redimensionner le tableau avant de pouvoir s'en servir » avec Redimensionner t[11].",
    "part": "Tableaux à plusieurs dimensions et tableaux dynamiques"
  },
  {
    "question": "En quoi une structure diffère-t-elle fondamentalement d'un tableau, tous deux étant des variables structurées ?",
    "options": [
      "Une structure ne peut contenir qu'une seule valeur, contrairement à un tableau",
      "Un tableau peut mélanger des types différents, une structure non",
      "Il n'existe aucune différence entre une structure et un tableau",
      "Une structure peut contenir plusieurs valeurs de types différents, chaque valeur étant rangée dans un champ repéré par un identificateur de champ, alors qu'un tableau ne contient que des éléments d'un même type repérés par un indice numérique"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours précise qu'une structure « peut contenir plusieurs valeurs de types différents » et que « chaque valeur est rangée dans un champ et repérée par un identificateur de champ », à la différence du tableau dont tous les éléments partagent le même type et sont repérés par un indice.",
    "part": "Structures, définition de types et types complexes"
  },
  {
    "question": "Dans l'exemple element : structure du cours (nom, symbole, Z, masse), quels types sont respectivement attribués aux champs nom et Z ?",
    "options": [
      "nom et Z sont tous deux des réels",
      "nom est une chaîne de caractères, Z est un entier",
      "nom est un entier, Z est une chaîne de caractères",
      "nom et Z sont tous deux des booléens"
    ],
    "correctAnswer": 1,
    "explanation": "La déclaration donnée est : « nom : chaîne de caractères [...] Z : entier [...] masse : réel », ce qui confirme que nom est une chaîne et Z un entier.",
    "part": "Structures, définition de types et types complexes"
  },
  {
    "question": "Comment accède-t-on à un champ particulier d'une variable de type structure, d'après la syntaxe <identificateur>.<identificateur champ> ?",
    "options": [
      "Avec des crochets, comme pour un tableau, par exemple element[symbole]",
      "Avec le point, par exemple element.symbole, aussi bien en lecture, en écriture, en affectation que dans une expression",
      "Avec le symbole @, par exemple element@symbole",
      "Il est impossible d'accéder individuellement à un champ, seule la structure entière est manipulable"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours illustre l'accès par le point : « lire(element.symbole) », « écrire(element.symbole) », « element.symbole ← 'Na' », ou encore dans une expression comme « m ← element.masse * 4 ».",
    "part": "Structures, définition de types et types complexes"
  },
  {
    "question": "À quoi sert la définition de types (<type> = <définition du type>) présentée en cours ?",
    "options": [
      "À transformer automatiquement tous les tableaux en structures",
      "À empêcher toute déclaration de nouvelle variable",
      "C'est un synonyme strict de l'instruction d'affectation",
      "À nommer un type personnalisé (par exemple à partir d'un tableau ou d'une structure) afin de pouvoir l'utiliser ensuite simplement dans des déclarations de variables"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours indique qu'« il peut être pratique de définir des types et les utiliser dans des déclarations de variables », illustré par typeTab = tableau[0..15] d'entiers puis tab : typeTab.",
    "part": "Structures, définition de types et types complexes"
  },
  {
    "question": "Quelles compositions de types complexes le cours autorise-t-il, entre tableaux et structures ?",
    "options": [
      "Une structure ne peut jamais contenir de tableau comme champ",
      "Un élément de tableau peut être une structure, et un champ de structure peut être un tableau, sans limite à la composition",
      "Un tableau ne peut jamais contenir de structures",
      "Seule une composition de deux niveaux maximum est autorisée"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours précise qu'« on peut construire des types complexes en composant tableaux et structures : un élément de tableau peut être une structure, un champ de structure peut être un tableau [...] Il n'y a pas de limite à la composition ».",
    "part": "Structures, définition de types et types complexes"
  },
  {
    "question": "Dans l'exemple de la table des éléments chimiques (typeTab = tableau[0..120] de typeEl), comment accède-t-on à la masse du 5ème élément (indice 4) une fois la variable table_periodique déclarée ?",
    "options": [
      "table_periodique[4].masse (ou table[4].masse dans la notation du cours)",
      "table_periodique.masse[4]",
      "table_periodique{4}{masse}",
      "masse(table_periodique, 4)"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours illustre l'accès à un tableau de structures par table[4].masse, qui « contient la valeur 10,8 » dans l'exemple de la table périodique (Bore, indice 4).",
    "part": "Structures, définition de types et types complexes"
  },
  {
    "question": "D'après la conclusion du cours sur les variables structurées, comment les structures de données et les algorithmes qui les exploitent sont-ils généralement liés ?",
    "options": [
      "Un même algorithme fonctionne toujours identiquement quelle que soit la structure de données choisie",
      "Les structures de données n'ont aucun lien avec les méthodes algorithmiques",
      "Ils sont le plus souvent dépendants les uns des autres",
      "Ils sont totalement indépendants et interchangeables sans aucune conséquence"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours conclut : « Les structures de données et les méthodes algorithmiques qui les exploitent sont le plus souvent dépendantes les unes des autres ».",
    "part": "Structures, définition de types et types complexes"
  },
  {
    "question": "Comment le cours définit-il une liste Python ?",
    "options": [
      "Une collection ordonnée de valeurs, chaque valeur occupant une position bien définie repérée par un entier appelé indice, la première valeur étant associée à l'indice 0",
      "Un synonyme strict d'un dictionnaire Python",
      "Un ensemble non ordonné de valeurs uniques, sans aucune notion de position",
      "Une structure qui ne peut contenir que des nombres entiers"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours définit une liste comme « une collection ordonnée de valeurs [...] chaque valeur occupe une position bien définie que l'on repère par un entier appelé indice. La première valeur est associée à l'indice 0 ».",
    "part": "Les listes en Python : définition, création et accès"
  },
  {
    "question": "Une liste Python doit-elle obligatoirement contenir des éléments tous du même type ?",
    "options": [
      "Non, il n'est pas nécessaire que tous les éléments d'une liste soient du même type",
      "Oui, mais uniquement pour les listes de plus de 10 éléments",
      "Oui, Python lève systématiquement une erreur si les types diffèrent",
      "Non, mais seuls les entiers et les chaînes peuvent être mélangés"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours précise : « En Python, il n'est pas nécessaire que tous les éléments d'une liste soient du même type ».",
    "part": "Les listes en Python : définition, création et accès"
  },
  {
    "question": "À l'aide de quelles structures de données le type list de Python est-il implémenté, et quelle en est la conséquence sur la complexité de l'accès à un élément quelconque ?",
    "options": [
      "Il est implémenté à l'aide de tableaux dynamiques ; l'accès à un élément quelconque se fait en temps constant, contrairement à une liste chaînée",
      "Il n'existe aucune implémentation sous-jacente documentée",
      "Il est implémenté à l'aide de tables de hachage ; l'accès prend un temps logarithmique",
      "Il est implémenté à l'aide de piles (LIFO) uniquement"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours indique : « Le type list de Python est implémenté à l'aide de tableaux dynamiques [...] l'accès à un élément quelconque est réalisé en temps constant, ce qui n'est pas le cas avec une liste chaînée ».",
    "part": "Les listes en Python : définition, création et accès"
  },
  {
    "question": "D'après le tableau de complexités du cours, la suppression ou l'insertion d'un élément ailleurs qu'en fin de liste Python est-elle réalisée en temps constant ?",
    "options": [
      "Non : cela nécessite de décaler les valeurs de fin de liste, ce qui n'est donc pas réalisé en temps constant (complexité O(n))",
      "Oui, mais seulement pour des listes de moins de 100 éléments",
      "Oui, toute opération sur une liste Python est en temps constant O(1)",
      "Non, c'est même impossible à réaliser en Python"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours précise que « la suppression ou l'ajout ailleurs qu'en fin de liste nécessite de décaler les valeurs de fin de liste, et n'est donc pas réalisé en temps constant », ce que confirme le tableau (effacement/insertion en O(n)), contrairement à l'ajout en fin de liste (append, O(1)) et à l'accès à un élément (O(1)).",
    "part": "Les listes en Python : définition, création et accès"
  }
];
