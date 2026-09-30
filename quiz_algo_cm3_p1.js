const algoCm3P1Questions = [
  {
    "question": "Quel est l'objectif principal d'une table de hachage comme structure de données ?",
    "options": [
      "Garantir qu'aucune donnée ne peut jamais être supprimée une fois insérée",
      "Remplacer entièrement la notion de tableau, en interdisant tout indiçage numérique",
      "Permettre une recherche, une insertion et une suppression d'éléments très rapides, en moyenne proches du temps constant, grâce à un accès direct calculé plutôt qu'un parcours séquentiel",
      "Trier automatiquement tous les éléments qu'elle contient par ordre alphabétique"
    ],
    "correctAnswer": 2,
    "explanation": "Une table de hachage vise à offrir un accès très rapide (recherche, insertion, suppression proches du temps constant en moyenne) en calculant directement, via une fonction de hachage, l'emplacement où chercher ou ranger une donnée, plutôt qu'en parcourant séquentiellement une structure.",
    "part": "Tables de hachage : principe et fonction de hachage"
  },
  {
    "question": "Quel est le principe général d'une fonction de hachage h dans une table de hachage ?",
    "options": [
      "Elle transforme une clé en un indice (un entier) dans un tableau, indiquant où placer ou chercher la valeur associée à cette clé",
      "Elle trie les clés avant de les stocker dans le tableau",
      "Elle chiffre irréversiblement toutes les données pour des raisons de sécurité",
      "Elle sert uniquement à comparer deux clés entre elles, sans produire d'indice"
    ],
    "correctAnswer": 0,
    "explanation": "La fonction de hachage h associe à chaque clé un indice dans le tableau sous-jacent de la table de hachage, indice qui détermine où la donnée doit être rangée ou recherchée.",
    "part": "Tables de hachage : principe et fonction de hachage"
  },
  {
    "question": "Parmi les qualités attendues d'une bonne fonction de hachage, laquelle est correcte ?",
    "options": [
      "Elle doit être déterministe (toujours renvoyer le même indice pour une même clé), rapide à calculer, et répartir les clés le plus uniformément possible sur les indices disponibles",
      "Elle doit systématiquement produire des collisions pour être valide",
      "Elle doit toujours renvoyer un indice différent pour une même clé, à chaque appel",
      "Elle doit être volontairement lente à calculer pour renforcer la sécurité"
    ],
    "correctAnswer": 0,
    "explanation": "Une bonne fonction de hachage est déterministe (la même clé donne toujours le même indice), rapide à évaluer, et répartit les clés de façon la plus uniforme possible sur l'ensemble des indices du tableau, afin de limiter les collisions.",
    "part": "Tables de hachage : principe et fonction de hachage"
  },
  {
    "question": "Qu'appelle-t-on une « collision » dans une table de hachage ?",
    "options": [
      "Le fait que deux tables de hachage différentes utilisent la même fonction de hachage",
      "Une erreur qui survient uniquement lorsqu'on essaie de supprimer un élément inexistant",
      "Une situation qui ne peut jamais se produire si la table est suffisamment grande",
      "Le cas où deux clés différentes sont associées, par la fonction de hachage, au même indice dans le tableau"
    ],
    "correctAnswer": 3,
    "explanation": "Une collision se produit lorsque deux clés distinctes sont hachées vers le même indice du tableau ; c'est un phénomène inévitable en pratique (par le principe des tiroirs) dès lors que le nombre de clés possibles dépasse le nombre d'indices disponibles, et toute table de hachage doit prévoir une stratégie pour les gérer.",
    "part": "Tables de hachage : principe et fonction de hachage"
  },
  {
    "question": "Pourquoi préfère-t-on souvent une table de hachage à une simple liste lorsqu'il s'agit de rechercher fréquemment des éléments par une clé (plutôt que par leur position) ?",
    "options": [
      "Parce qu'une table de hachage consomme systématiquement moins de mémoire qu'une liste, sans exception",
      "Il n'y a en réalité aucun avantage à utiliser une table de hachage plutôt qu'une liste",
      "Parce que la recherche par clé dans une liste nécessite en général de parcourir séquentiellement ses éléments (temps O(n)), alors qu'une table de hachage permet en moyenne un accès direct quasi constant (O(1))",
      "Parce qu'une liste ne peut jamais contenir plus de 30 éléments"
    ],
    "correctAnswer": 2,
    "explanation": "Retrouver un élément selon une clé dans une liste (par exemple avec la méthode index() ou le mot-clé in vus en CM2) nécessite un parcours séquentiel en O(n), alors qu'une table de hachage calcule directement l'emplacement probable de la clé, offrant en moyenne un temps quasi constant O(1).",
    "part": "Tables de hachage : principe et fonction de hachage"
  },
  {
    "question": "En quoi consiste la résolution des collisions par chaînage ?",
    "options": [
      "On ignore purement et simplement la collision, en écrasant l'ancienne valeur par la nouvelle",
      "On agrandit systématiquement le tableau d'un facteur 2 dès la première collision",
      "Chaque case du tableau contient une liste (ou liste chaînée) de tous les éléments dont la clé a été hachée vers cet indice, plutôt qu'un seul élément",
      "On refuse d'insérer toute clé provoquant une collision"
    ],
    "correctAnswer": 2,
    "explanation": "Avec le chaînage, chaque case (ou « seau ») du tableau de la table de hachage contient une structure (typiquement une liste chaînée) capable d'accueillir plusieurs éléments ayant le même indice de hachage, résolvant ainsi les collisions sans perdre de données.",
    "part": "Gestion des collisions : chaînage et adressage ouvert"
  },
  {
    "question": "Quel est le principe de la résolution des collisions par adressage ouvert (contrairement au chaînage) ?",
    "options": [
      "On stocke la collision dans un fichier externe plutôt qu'en mémoire",
      "L'adressage ouvert est rigoureusement identique au chaînage, ce n'est qu'un autre nom",
      "On utilise systématiquement une seconde table de hachage entièrement séparée pour stocker les collisions",
      "Tous les éléments sont stockés directement dans le tableau lui-même (une seule case par élément) ; en cas de collision, on cherche une autre case libre selon une séquence de sondage (probing)"
    ],
    "correctAnswer": 3,
    "explanation": "En adressage ouvert, chaque case du tableau ne contient qu'un seul élément ; en cas de collision, l'algorithme explore d'autres cases du même tableau, selon une séquence de sondage (probing), jusqu'à trouver une case libre où insérer l'élément.",
    "part": "Gestion des collisions : chaînage et adressage ouvert"
  },
  {
    "question": "Comment fonctionne le sondage linéaire (linear probing) en cas de collision par adressage ouvert ?",
    "options": [
      "On teste les cases suivantes une par une, à intervalle constant (par exemple l'indice suivant, puis le suivant, etc.), jusqu'à trouver une case libre",
      "On recalcule systématiquement une clé complètement différente",
      "On teste des cases dont l'écart augmente au carré à chaque tentative",
      "On abandonne l'insertion dès la première collision rencontrée"
    ],
    "correctAnswer": 0,
    "explanation": "Le sondage linéaire consiste, en cas de collision à un indice i, à essayer successivement les indices i+1, i+2, i+3, etc. (à intervalle constant) jusqu'à trouver une case disponible.",
    "part": "Gestion des collisions : chaînage et adressage ouvert"
  },
  {
    "question": "En quoi le sondage quadratique (quadratic probing) diffère-t-il du sondage linéaire ?",
    "options": [
      "Il est rigoureusement identique au sondage linéaire, avec un nom différent",
      "Il ne teste jamais plus d'une seule case supplémentaire, quelle que soit la situation",
      "L'écart entre les cases testées successivement augmente de façon quadratique (par exemple i+1², i+2², ...) plutôt que de façon constante, ce qui limite un phénomène de regroupement (clustering) des éléments",
      "Il nécessite obligatoirement une deuxième fonction de hachage"
    ],
    "correctAnswer": 2,
    "explanation": "Le sondage quadratique espace les cases testées selon une progression quadratique (par exemple en ajoutant successivement 1², 2², 3², ...) plutôt que par un simple incrément constant, ce qui aide à réduire le regroupement d'éléments (clustering) que peut provoquer le sondage linéaire.",
    "part": "Gestion des collisions : chaînage et adressage ouvert"
  },
  {
    "question": "Qu'est-ce que le double hachage (double hashing), une autre stratégie de résolution de collisions par adressage ouvert ?",
    "options": [
      "Une seconde fonction de hachage détermine le pas (l'écart) utilisé pour chercher la case suivante en cas de collision, au lieu d'utiliser un pas fixe ou une simple progression quadratique",
      "Chaque clé est hachée deux fois de façon strictement identique, sans aucun effet pratique",
      "On calcule la fonction de hachage deux fois plus lentement pour plus de sécurité",
      "On utilise deux tables de hachage entièrement séparées en parallèle"
    ],
    "correctAnswer": 0,
    "explanation": "Le double hachage utilise une seconde fonction de hachage pour déterminer le pas de déplacement en cas de collision, ce qui tend à mieux disperser les séquences de sondage que des pas fixes ou purement arithmétiques.",
    "part": "Gestion des collisions : chaînage et adressage ouvert"
  },
  {
    "question": "Pourquoi la suppression d'un élément pose-t-elle un problème particulier dans une table de hachage utilisant l'adressage ouvert ?",
    "options": [
      "La suppression provoque systématiquement une erreur de dépassement de mémoire",
      "La suppression est en réalité impossible techniquement dans une table de hachage",
      "Ce problème ne se pose qu'avec le chaînage, jamais avec l'adressage ouvert",
      "Si l'on marque simplement la case comme « vide », cela peut casser la chaîne de sondage utilisée pour retrouver d'autres éléments qui avaient été placés plus loin à cause d'une collision passée par cette même case"
    ],
    "correctAnswer": 3,
    "explanation": "En adressage ouvert, marquer une case comme simplement « vide » après suppression romprait la continuité de la séquence de sondage : un élément inséré plus tard suite à une collision à cet endroit deviendrait alors introuvable, la recherche s'arrêtant prématurément à la première case « vide » rencontrée.",
    "part": "Gestion des collisions : chaînage et adressage ouvert"
  },
  {
    "question": "Quelle solution le cours présente-t-il pour résoudre le problème de la suppression en adressage ouvert ?",
    "options": [
      "Ignorer le problème, car il n'a en pratique aucune conséquence",
      "Utiliser un marqueur spécial « SUPPRIMÉ » (DELETED), distinct à la fois d'une case vide et d'une case occupée, afin que la recherche continue son sondage au-delà de cette case tout en sachant qu'elle peut être réutilisée pour une insertion",
      "Reconstruire entièrement la table de hachage à chaque suppression, quel que soit son coût",
      "Interdire purement et simplement toute suppression une fois qu'un élément a été inséré"
    ],
    "correctAnswer": 1,
    "explanation": "La solution classique consiste à marquer la case supprimée avec une valeur spéciale « SUPPRIMÉ »/DELETED (différente de « vide » et de « occupée ») : la recherche continue de sonder au-delà d'une case DELETED (contrairement à une case vide), tandis qu'une insertion future peut réutiliser cette case.",
    "part": "Gestion des collisions : chaînage et adressage ouvert"
  },
  {
    "question": "Le chaînage et l'adressage ouvert sont-ils les deux seules approches possibles pour gérer les collisions, et lequel des deux garde tous les éléments strictement à l'intérieur du tableau principal ?",
    "options": [
      "Chaînage et adressage ouvert sont rigoureusement la même technique",
      "Ce sont les deux approches classiques présentées ; l'adressage ouvert garde tous les éléments dans le tableau principal lui-même, contrairement au chaînage qui utilise des listes annexes par case",
      "Le chaînage garde tous les éléments dans le tableau principal, contrairement à l'adressage ouvert",
      "Les deux approches nécessitent systématiquement une structure annexe en dehors du tableau"
    ],
    "correctAnswer": 1,
    "explanation": "Le chaînage et l'adressage ouvert sont les deux grandes familles de résolution de collisions présentées ; c'est l'adressage ouvert qui conserve tous les éléments à l'intérieur du tableau principal (en cherchant une autre case libre), alors que le chaînage attache une structure annexe (liste) à chaque case.",
    "part": "Gestion des collisions : chaînage et adressage ouvert"
  },
  {
    "question": "Comment définit-on le facteur de charge (load factor) d'une table de hachage ?",
    "options": [
      "La taille en octets d'une seule clé stockée dans la table",
      "Le nombre de fonctions de hachage différentes utilisées simultanément",
      "Le rapport entre le nombre d'éléments effectivement stockés et la taille totale (le nombre de cases) du tableau sous-jacent",
      "Le nombre moyen de collisions par seconde observées lors des tests"
    ],
    "correctAnswer": 2,
    "explanation": "Le facteur de charge se définit comme le rapport entre le nombre d'éléments stockés dans la table et la taille (nombre de cases) du tableau qui la sous-tend ; il quantifie à quel point la table est « remplie ».",
    "part": "Complexité et facteur de charge d'une table de hachage"
  },
  {
    "question": "Comment un facteur de charge élevé influence-t-il en général les performances d'une table de hachage ?",
    "options": [
      "Il réduit la mémoire utilisée sans jamais affecter la vitesse d'accès",
      "Il n'a strictement aucun effet sur les performances, quelle que soit sa valeur",
      "Il augmente le risque et la fréquence des collisions, ce qui dégrade les performances de recherche, d'insertion et de suppression",
      "Il améliore systématiquement les performances, plus il est élevé, mieux c'est"
    ],
    "correctAnswer": 2,
    "explanation": "Plus le facteur de charge est élevé (table proche d'être pleine), plus les collisions deviennent fréquentes, ce qui dégrade les performances des opérations de recherche, d'insertion et de suppression, se rapprochant d'un comportement en temps linéaire plutôt que quasi constant.",
    "part": "Complexité et facteur de charge d'une table de hachage"
  },
  {
    "question": "Que fait-on typiquement lorsque le facteur de charge d'une table de hachage devient trop élevé ?",
    "options": [
      "On supprime aléatoirement des éléments jusqu'à ce que le facteur de charge redescende",
      "On change définitivement de langage de programmation",
      "On redimensionne (agrandit) le tableau sous-jacent et l'on rehache l'ensemble des éléments existants dans cette nouvelle table de plus grande taille",
      "On ne fait rien : la taille du tableau d'une table de hachage ne peut jamais être modifiée"
    ],
    "correctAnswer": 2,
    "explanation": "Lorsque le facteur de charge dépasse un certain seuil, on redimensionne le tableau sous-jacent (typiquement en doublant sa taille) puis on réinsère (rehache) tous les éléments existants dans cette nouvelle table, afin de retrouver un facteur de charge plus favorable.",
    "part": "Complexité et facteur de charge d'une table de hachage"
  },
  {
    "question": "En moyenne, et en supposant une bonne fonction de hachage avec un facteur de charge raisonnable, quel est l'ordre de grandeur de la complexité des opérations de recherche, d'insertion et de suppression dans une table de hachage ?",
    "options": [
      "Toujours O(n²), quelle que soit la situation",
      "Un temps qui croît nécessairement de façon exponentielle avec le nombre d'éléments",
      "Un temps proche de O(1), c'est-à-dire quasi constant en moyenne",
      "Toujours O(log n), comme pour un arbre équilibré"
    ],
    "correctAnswer": 2,
    "explanation": "C'est précisément l'intérêt des tables de hachage : avec une bonne fonction de hachage et un facteur de charge maîtrisé, les opérations de recherche, d'insertion et de suppression s'effectuent en moyenne en temps quasi constant, O(1), bien que le pire cas théorique (beaucoup de collisions) puisse être bien plus coûteux.",
    "part": "Complexité et facteur de charge d'une table de hachage"
  },
  {
    "question": "Dans le pire des cas (par exemple si toutes les clés provoquent des collisions vers un même indice), quelle devient la complexité des opérations sur une table de hachage ?",
    "options": [
      "Elle reste toujours O(1), quel que soit le nombre de collisions",
      "Elle devient instantanément infinie et l'opération ne se termine jamais",
      "Elle peut se dégrader jusqu'à un temps linéaire O(n), similaire à une recherche séquentielle dans une simple liste",
      "Elle s'améliore automatiquement grâce aux collisions"
    ],
    "correctAnswer": 2,
    "explanation": "Dans le pire des cas, si de nombreuses clés se retrouvent en collision au même endroit (par exemple avec une fonction de hachage mal choisie), les opérations peuvent se dégrader jusqu'à un temps linéaire O(n), perdant l'avantage recherché face à une simple liste.",
    "part": "Complexité et facteur de charge d'une table de hachage"
  },
  {
    "question": "Sur quelle structure de données le type dict de Python est-il implémenté en interne ?",
    "options": [
      "Une table de hachage",
      "Un tableau trié classique",
      "Un arbre binaire de recherche équilibré",
      "Une liste chaînée simple"
    ],
    "correctAnswer": 0,
    "explanation": "Le type dict de Python est implémenté à l'aide d'une table de hachage, ce qui explique la rapidité (en moyenne quasi constante) de ses opérations de recherche, d'ajout et de suppression par clé.",
    "part": "Le type dict de Python : définition et création"
  },
  {
    "question": "Comment le cours définit-il un dictionnaire Python ?",
    "options": [
      "Un synonyme strict d'une liste Python, sans aucune différence de fonctionnement",
      "Une liste ordonnée qui ne peut contenir que des chaînes de caractères",
      "Une collection non ordonnée à l'origine de paires clé-valeur, où chaque clé unique est associée à une valeur",
      "Une structure qui ne peut contenir qu'une seule paire clé-valeur à la fois"
    ],
    "correctAnswer": 2,
    "explanation": "Un dictionnaire Python (dict) est une collection de paires clé-valeur, chaque clé étant unique au sein du dictionnaire et servant à retrouver la valeur qui lui est associée.",
    "part": "Le type dict de Python : définition et création"
  },
  {
    "question": "Comment crée-t-on un dictionnaire Python contenant des paires clé-valeur définies, et comment crée-t-on un dictionnaire vide ?",
    "options": [
      "Avec des parenthèses, par exemple d = ('nom', 'Dupont')",
      "Il est impossible de créer un dictionnaire vide en Python",
      "Avec des accolades, par exemple d = {'nom': 'Dupont', 'age': 30} pour un dictionnaire rempli, et d = {} (ou d = dict()) pour un dictionnaire vide",
      "Avec des crochets uniquement, comme pour une liste, sans aucune différence de syntaxe"
    ],
    "correctAnswer": 2,
    "explanation": "Un dictionnaire se crée avec des accolades et des paires clé:valeur séparées par des virgules, par exemple d = {'nom': 'Dupont', 'age': 30}, et un dictionnaire vide s'obtient avec d = {} ou avec la fonction dict().",
    "part": "Le type dict de Python : définition et création"
  },
  {
    "question": "Depuis quelle version de Python les dictionnaires garantissent-ils officiellement de conserver l'ordre d'insertion des paires clé-valeur ?",
    "options": [
      "Les dictionnaires Python ne conservent l'ordre d'insertion dans aucune version",
      "Depuis Python 3.7",
      "Depuis la toute première version de Python (Python 1.0)",
      "Depuis Python 2.0 uniquement, cette garantie ayant ensuite été supprimée"
    ],
    "correctAnswer": 1,
    "explanation": "Depuis Python 3.7, l'ordre d'insertion des paires clé-valeur dans un dictionnaire est officiellement garanti et conservé, alors que ce n'était pas le cas dans les versions antérieures du langage.",
    "part": "Le type dict de Python : définition et création"
  },
  {
    "question": "Comment accède-t-on à la valeur associée à une clé donnée dans un dictionnaire d, et que se passe-t-il si l'on accède ainsi à une clé qui n'existe pas dans d ?",
    "options": [
      "On utilise d[clé] ; si la clé n'existe pas, Python retourne silencieusement None sans jamais lever d'erreur",
      "On utilise d.clé, avec un point, comme pour un champ de structure",
      "L'accès par clé n'existe pas ; seul un parcours complet permet de retrouver une valeur",
      "On utilise d[clé] ; si la clé n'existe pas, Python lève une exception (KeyError)"
    ],
    "correctAnswer": 3,
    "explanation": "L'accès à la valeur associée à une clé se fait avec la syntaxe d[clé] ; si cette clé n'est pas présente dans le dictionnaire, Python lève une exception de type KeyError.",
    "part": "Le type dict de Python : définition et création"
  },
  {
    "question": "Un dictionnaire Python peut-il utiliser n'importe quel type de donnée comme clé, par exemple une liste ?",
    "options": [
      "Non, seules les chaînes de caractères peuvent servir de clé à un dictionnaire",
      "Oui, mais uniquement si la liste contient moins de 3 éléments",
      "Non : une clé de dictionnaire doit être un type immuable (comme un entier, une chaîne de caractères ou un tuple), une liste (mutable) ne peut donc pas servir de clé",
      "Oui, absolument n'importe quel objet Python peut servir de clé, y compris une liste"
    ],
    "correctAnswer": 2,
    "explanation": "Une clé de dictionnaire doit être hachable, ce qui exige qu'elle soit d'un type immuable (entier, chaîne de caractères, tuple, etc.) ; une liste, étant mutable, ne peut donc pas être utilisée comme clé d'un dictionnaire Python.",
    "part": "Le type dict de Python : définition et création"
  },
  {
    "question": "Que produit l'expression len(d), où d est un dictionnaire Python ?",
    "options": [
      "La somme de toutes les valeurs numériques du dictionnaire",
      "Le nombre de caractères de la clé la plus longue",
      "len() ne peut pas être appliquée à un dictionnaire",
      "Le nombre de paires clé-valeur (d'entrées) présentes dans le dictionnaire"
    ],
    "correctAnswer": 3,
    "explanation": "Comme pour une liste, la fonction len() appliquée à un dictionnaire renvoie son nombre d'éléments, c'est-à-dire ici son nombre de paires clé-valeur.",
    "part": "Le type dict de Python : définition et création"
  },
  {
    "question": "Un dictionnaire Python peut-il être parcouru directement avec une boucle for, et que fournit alors chaque itération par défaut ?",
    "options": [
      "Oui, mais uniquement en utilisant la méthode values() explicitement",
      "Non, un dictionnaire ne peut jamais être parcouru avec une boucle for",
      "Oui : for cle in d: parcourt par défaut les clés du dictionnaire, une à une",
      "Oui, mais chaque itération fournit directement une valeur, jamais une clé"
    ],
    "correctAnswer": 2,
    "explanation": "Un dictionnaire est directement itérable avec une boucle for : for cle in d: parcourt, par défaut, l'ensemble des clés du dictionnaire une à une (on peut ensuite accéder à d[cle] pour obtenir la valeur associée).",
    "part": "Le type dict de Python : définition et création"
  },
  {
    "question": "Quelles méthodes permettent respectivement d'obtenir la liste des clés, la liste des valeurs, et la liste des paires (clé, valeur) d'un dictionnaire ?",
    "options": [
      "index(), content(), all()",
      "keys() pour les clés, values() pour les valeurs, items() pour les paires (clé, valeur)",
      "getkeys(), getvalues(), getpairs()",
      "Une seule méthode, list(), donne indifféremment l'un ou l'autre"
    ],
    "correctAnswer": 1,
    "explanation": "Les trois méthodes usuelles d'un dictionnaire sont keys() (les clés), values() (les valeurs) et items() (les paires clé-valeur sous forme de tuples), souvent utilisées pour parcourir le dictionnaire.",
    "part": "Méthodes et parcours des dictionnaires Python"
  },
  {
    "question": "Comment teste-t-on si une clé donnée est présente dans un dictionnaire d, sans risquer de lever une exception ?",
    "options": [
      "Avec le mot-clé in, par exemple if cle in d:",
      "Avec la méthode exists(cle), qui n'existe pas réellement en Python",
      "Il n'existe aucun moyen de tester la présence d'une clé sans risquer une erreur",
      "En accédant directement à d[cle] et en interceptant systématiquement l'exception"
    ],
    "correctAnswer": 0,
    "explanation": "Le mot-clé in permet de tester directement et sûrement la présence d'une clé dans un dictionnaire, par exemple if cle in d: print(«présente»), sans risquer de lever une exception KeyError.",
    "part": "Méthodes et parcours des dictionnaires Python"
  },
  {
    "question": "À quoi sert la méthode get() d'un dictionnaire, et en quoi diffère-t-elle d'un simple accès par crochets d[clé] ?",
    "options": [
      "d.get(clé, valeur_defaut) renvoie la valeur associée à la clé si elle existe, ou une valeur par défaut fournie (ou None si aucune n'est précisée) si la clé est absente, évitant ainsi de lever une exception",
      "get() fonctionne rigoureusement à l'identique de d[clé], sans aucune différence",
      "get() ne peut être utilisée que sur des dictionnaires vides",
      "get() supprime la clé après en avoir lu la valeur"
    ],
    "correctAnswer": 0,
    "explanation": "La méthode get(clé, valeur_par_defaut) permet de récupérer la valeur associée à une clé sans risquer de lever une exception si elle est absente : elle renvoie alors la valeur par défaut fournie en second argument, ou None si aucune valeur par défaut n'est précisée.",
    "part": "Méthodes et parcours des dictionnaires Python"
  },
  {
    "question": "À quoi sert la méthode setdefault() d'un dictionnaire ?",
    "options": [
      "Elle trie les clés du dictionnaire par ordre alphabétique",
      "Elle supprime toutes les clés du dictionnaire dont la valeur est absente",
      "Elle réinitialise systématiquement tout le dictionnaire à sa valeur d'origine",
      "Elle renvoie la valeur associée à une clé si celle-ci existe déjà ; sinon, elle insère la clé avec la valeur par défaut fournie, puis renvoie cette valeur"
    ],
    "correctAnswer": 3,
    "explanation": "setdefault(clé, valeur_par_defaut) renvoie la valeur déjà associée à la clé si elle est présente ; si la clé est absente, elle l'insère avec la valeur par défaut fournie, puis renvoie cette même valeur — une manière pratique d'initialiser une clé seulement si nécessaire.",
    "part": "Méthodes et parcours des dictionnaires Python"
  },
  {
    "question": "Un dictionnaire Python peut-il contenir, comme valeur associée à une clé, une autre structure comme une liste ou un autre dictionnaire ?",
    "options": [
      "Non, une valeur de dictionnaire ne peut être qu'un nombre ou une chaîne de caractères",
      "Non, seules les clés peuvent être des structures complexes, jamais les valeurs",
      "Oui : les dictionnaires et les listes peuvent être imbriqués les uns dans les autres sans limite particulière de composition",
      "Oui, mais uniquement sur un seul niveau d'imbrication, jamais davantage"
    ],
    "correctAnswer": 2,
    "explanation": "Les dictionnaires Python peuvent librement imbriquer des listes et d'autres dictionnaires comme valeurs (par exemple un dictionnaire dont une valeur est elle-même une liste de dictionnaires), permettant de représenter des données structurées complexes.",
    "part": "Méthodes et parcours des dictionnaires Python"
  },
  {
    "question": "À quoi sert la fonction pprint (du module du même nom) lorsqu'on affiche un dictionnaire imbriqué et complexe ?",
    "options": [
      "Elle transforme le dictionnaire en liste avant de l'afficher",
      "Elle convertit le dictionnaire en fichier binaire compressé",
      "Elle affiche le dictionnaire de façon plus lisible (« pretty print »), avec une indentation et une mise en forme adaptées à sa structure, plutôt qu'un simple print brut sur une seule ligne",
      "Elle supprime automatiquement les clés dupliquées d'un dictionnaire"
    ],
    "correctAnswer": 2,
    "explanation": "La fonction pprint() du module pprint affiche une structure de données comme un dictionnaire imbriqué de façon plus lisible qu'un simple print(), en la présentant avec une indentation adaptée à sa structure interne.",
    "part": "Méthodes et parcours des dictionnaires Python"
  },
  {
    "question": "Comment supprime-t-on une paire clé-valeur d'un dictionnaire Python à partir de sa clé ?",
    "options": [
      "Avec l'instruction del d[clé], ou avec la méthode d.pop(clé)",
      "Uniquement en recréant entièrement le dictionnaire à chaque suppression",
      "Il est impossible de supprimer une entrée d'un dictionnaire une fois insérée",
      "En affectant simplement None à d[clé], ce qui supprime réellement la clé du dictionnaire"
    ],
    "correctAnswer": 0,
    "explanation": "On peut retirer une entrée d'un dictionnaire avec l'instruction del d[clé], ou avec la méthode d.pop(clé), qui supprime la paire correspondante et peut aussi renvoyer la valeur supprimée.",
    "part": "Méthodes et parcours des dictionnaires Python"
  },
  {
    "question": "Comment ajoute-t-on une nouvelle paire clé-valeur à un dictionnaire Python existant d, ou modifie-t-on la valeur d'une clé déjà présente ?",
    "options": [
      "Par une simple affectation d[clé] = valeur : si la clé existe déjà, sa valeur est remplacée ; sinon, la paire est ajoutée au dictionnaire",
      "On ne peut ajouter une entrée qu'au moment de la création du dictionnaire, jamais après",
      "Il faut obligatoirement recréer entièrement le dictionnaire pour ajouter la moindre entrée",
      "Avec la méthode insert(clé, valeur), qui n'existe pas sur les dictionnaires Python"
    ],
    "correctAnswer": 0,
    "explanation": "L'affectation d[clé] = valeur sert à la fois à ajouter une nouvelle paire clé-valeur (si la clé n'existait pas encore) et à mettre à jour la valeur d'une clé déjà présente dans le dictionnaire.",
    "part": "Méthodes et parcours des dictionnaires Python"
  }
];
