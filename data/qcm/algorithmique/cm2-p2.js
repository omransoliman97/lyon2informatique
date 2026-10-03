const algoCm2P2Questions = [
  {
    "question": "Comment réaliser un calcul de complexité en temps d'un algorithme, d'après la définition donnée en cours ?",
    "options": [
      "En comptant le nombre de variables déclarées, sans tenir compte des opérations",
      "En chronométrant l'exécution sur une seule machine de référence",
      "En mesurant uniquement la taille du code source en nombre de lignes",
      "En comptant le nombre d'opérations élémentaires (affectation, calcul arithmétique ou logique, comparaison...) effectuées par l'algorithme"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours précise : « Réaliser un calcul de complexité en temps revient à compter le nombre d'opérations élémentaires (affectation, calcul arithmétique ou logique, comparaison…) effectuées par l'algorithme ».",
    "part": "Les listes en Python : définition, création et accès"
  },
  {
    "question": "Comment crée-t-on une liste Python contenant les éléments 1, 5 et 7, et comment crée-t-on une liste vide ?",
    "options": [
      "l1 = 1, 5, 7 sans crochets, l2 = null",
      "l1 = list.new(1, 5, 7), l2 = list.empty()",
      "l1 = (1, 5, 7) pour la liste remplie, l2 = {} pour la liste vide",
      "l1 = [1, 5, 7] pour la liste remplie, l2 = [] pour la liste vide"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours illustre la création avec des crochets : l1 = [1, 5, 7] pour une liste contenant des éléments définis, et l2 = [] pour une liste vide ne contenant aucun élément.",
    "part": "Les listes en Python : définition, création et accès"
  },
  {
    "question": "Que renvoie la fonction Python len() appliquée à une liste ?",
    "options": [
      "Un booléen indiquant si la liste est vide ou non",
      "La taille (le nombre d'éléments) de la liste passée en argument",
      "La somme de tous les éléments numériques de la liste",
      "Le dernier élément de la liste"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours illustre : « La fonction len retourne la taille d'une liste passée en argument », par exemple print(len(l1)) donnant 3 pour l1 = [1, 5, 7].",
    "part": "Les listes en Python : définition, création et accès"
  },
  {
    "question": "Que retourne l'appel range(1, 10) en Python, et que retourne range(0, 10, 2) ?",
    "options": [
      "range(1, 10) retourne uniquement le nombre 10 ; range(0, 10, 2) retourne uniquement le nombre 2",
      "Les deux appels sont rigoureusement équivalents et retournent la même séquence",
      "range(1, 10) retourne les entiers de 1 (inclus) à 10 (exclu) ; range(0, 10, 2) retourne les entiers de 0 à 8 par pas de 2",
      "range(1, 10) provoque systématiquement une erreur en Python"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours illustre : « range(a, b [, c]) retourne une séquence contenant les entiers de a (inclus) à b (exclu) », avec les exemples range(1, 10) ⟹ (1, 2, ..., 9) et range(0,10,2) ⟹ (0, 2, 4, ..., 8).",
    "part": "Les listes en Python : définition, création et accès"
  },
  {
    "question": "Pour une liste l = [1, 5, 7], que renvoient respectivement l[1] et l[-1] ?",
    "options": [
      "l[1] renvoie 5 (le deuxième élément, le premier indice étant 0) ; l[-1] renvoie 7 (le dernier élément de la liste)",
      "l[1] et l[-1] renvoient tous deux le même élément",
      "l[1] renvoie 1 (le premier élément) ; l[-1] provoque une erreur",
      "l[1] renvoie la liste entière ; l[-1] renvoie une liste vide"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours illustre : « Le premier indice d'une liste est 0 » donc print(l[1]) ⟹ 5, et « on peut accéder au dernier élément d'une liste en demandant l'élément d'indice -1 » donc print(l[-1]) ⟹ 7.",
    "part": "Les listes en Python : définition, création et accès"
  },
  {
    "question": "Pour une liste de taille n, quelles sont les valeurs d'indice valides, d'après le cours ?",
    "options": [
      "Il n'existe aucune limite aux valeurs d'indice possibles",
      "Uniquement les entiers positifs strictement inférieurs à n",
      "Les entiers compris entre 1 et n",
      "Les entiers compris entre -n et n-1 (inclus)"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours précise : « Pour une liste de taille n, les valeurs d'indice valides sont les entiers compris entre –n et n – 1 (inclus) ».",
    "part": "Les listes en Python : définition, création et accès"
  },
  {
    "question": "Pour l2 = [1, 5, 7, 8, 0, 9, 8], que renvoie l2[2:4], et que renvoie l2[:3] ?",
    "options": [
      "Ces syntaxes ne sont pas valides en Python",
      "l2[2:4] et l2[:3] renvoient exactement la même sous-liste",
      "l2[2:4] renvoie un seul nombre, 7 ; l2[:3] renvoie la liste entière",
      "l2[2:4] renvoie [7, 8] (de l'indice 2 inclus à l'indice 4 exclu) ; l2[:3] renvoie [1, 5, 7] (du début jusqu'à l'indice 3 exclu)"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours illustre le slicing l[d:f] (d inclus, f exclu) : print(l2[2:4]) ⟹ [7, 8], et « si on omet l'indice de début, la sélection commence au début de la liste » : print(l[:3]) ⟹ [1, 5, 7].",
    "part": "Les listes en Python : définition, création et accès"
  },
  {
    "question": "Pour parcourir uniquement les éléments (sans se soucier des indices) d'une liste l = [1, 5, 7], quelle syntaxe le cours utilise-t-il ?",
    "options": [
      "for elem == l: print(elem)",
      "while l: print(l.pop())",
      "for i in l.length: print(l[i])",
      "for elem in l: print(elem) — la variable elem prend successivement pour valeur chacun des éléments de la liste"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours illustre : « Pour parcourir les éléments d'une liste, on utilise une boucle for » : for elem in l: print(elem), où « la variable elem va prendre successivement pour valeur chacun des éléments de la liste ».",
    "part": "Parcours, modification et tri d'une liste Python"
  },
  {
    "question": "Comment parcourir une liste par ses indices plutôt que directement par ses éléments, en utilisant range et len ?",
    "options": [
      "for i in len(l): print(i)",
      "Il est impossible de parcourir une liste par indices en Python",
      "for i in l: print(i, l[i])",
      "n = len(l) ; for i in range(n): print(i, l[i])"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours illustre : « On sait que les indices d'une liste sont les entiers compris entre 0 (inclus) et la taille de la liste (exclu) [...] On va utiliser la fonction range et une boucle for » : n = len(l); for i in range(n): print(i, l[i]).",
    "part": "Parcours, modification et tri d'une liste Python"
  },
  {
    "question": "Quelle fonction Python permet, en une seule boucle for, de récupérer simultanément l'indice courant et l'élément associé d'une liste ?",
    "options": [
      "index()",
      "items()",
      "enumerate()",
      "zip()"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours illustre : « Si on a besoin de manipuler simultanément les indices d'une liste et les éléments associés, on utilise la fonction enumerate » : for i, elem in enumerate(l): print(i, elem).",
    "part": "Parcours, modification et tri d'une liste Python"
  },
  {
    "question": "Quelles méthodes permettent respectivement d'ajouter un élément à la fin d'une liste, et d'insérer un élément à un indice précis ?",
    "options": [
      "add() pour les deux cas, sans distinction",
      "append() insère à un indice précis, insert() ajoute uniquement en fin de liste",
      "append() pour ajouter en fin de liste, insert(i, x) pour insérer la valeur x à l'indice i",
      "push() pour ajouter en fin de liste, place(i, x) pour insérer à l'indice i"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours illustre : « rajouter un élément à la fin de la liste à l'aide de la méthode append » (l.append(2)) et « insérer un élément à l'indice i de la liste à l'aide de la méthode insert » (l.insert(2, 0)).",
    "part": "Parcours, modification et tri d'une liste Python"
  },
  {
    "question": "Quelles méthodes permettent respectivement de supprimer l'élément situé à un indice donné, et de supprimer la première occurrence d'une valeur donnée dans une liste ?",
    "options": [
      "pop(i) supprime l'élément d'indice i (et retourne la valeur supprimée) ; remove(valeur) supprime la première occurrence de cette valeur",
      "delete(i) et erase(valeur)",
      "Une seule méthode, clear(), permet les deux opérations",
      "remove(i) supprime par indice ; pop(valeur) supprime par valeur"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours illustre : « supprimer l'élément situé à l'indice i dans la liste, à l'aide de la méthode pop » et « supprimer la première occurrence d'une valeur donnée dans la liste à l'aide de la méthode remove », en précisant que « la méthode pop retourne la valeur supprimée ».",
    "part": "Parcours, modification et tri d'une liste Python"
  },
  {
    "question": "Que fait précisément l.pop() lorsqu'il est appelé sans argument ?",
    "options": [
      "Il supprime, par défaut, le dernier élément de la liste",
      "Il vide entièrement la liste",
      "Il supprime le premier élément de la liste",
      "Il provoque une erreur car un indice est obligatoire"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours précise : « l.pop() # par défaut, supprime le dernier élément de la liste ».",
    "part": "Parcours, modification et tri d'une liste Python"
  },
  {
    "question": "Quelle méthode permet de trouver l'indice de la première occurrence d'une valeur dans une liste, et quel mot-clé permet simplement de tester si une valeur est présente dans une liste ?",
    "options": [
      "find() renvoie l'indice ; le mot-clé has teste la présence",
      "Il n'existe qu'une seule méthode, contains(), pour les deux usages",
      "search() renvoie l'indice ; le mot-clé contains teste la présence",
      "index() renvoie l'indice de la première occurrence ; le mot-clé in teste la présence d'une valeur dans la liste"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours illustre : « on utilisera la méthode index » (print(l.index(7)) ⟹ 2), et « si on veut simplement savoir si une valeur est présente dans la liste, on peut utiliser le mot-clé in » (if 5 in l:).",
    "part": "Parcours, modification et tri d'une liste Python"
  },
  {
    "question": "Comment concaténer deux listes Python, et que fait l'opérateur * appliqué à une liste et un entier (par exemple 3 * [1, 5]) ?",
    "options": [
      "L'opérateur + concatène deux listes (l1 + l2) ; l'opérateur * répète la liste le nombre de fois indiqué (3 * [1, 5] donne [1, 5, 1, 5, 1, 5])",
      "L'opérateur + multiplie terme à terme les listes ; * les concatène",
      "+ et * produisent tous deux une erreur si les listes n'ont pas la même longueur",
      "Ni + ni * ne peuvent être utilisés avec des listes en Python"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours illustre : « on peut concaténer deux listes à l'aide de l'opérateur + » (l1 + l2) et « l'opérateur * peut aussi être utilisé pour des listes » : 3 * [1, 5] ⟹ [1, 5, 1, 5, 1, 5].",
    "part": "Parcours, modification et tri d'une liste Python"
  },
  {
    "question": "Quelle fonction Python permet de trier les éléments d'une liste (de nombres ou de chaînes de caractères) et d'en obtenir une nouvelle liste triée ?",
    "options": [
      "order()",
      "organize()",
      "sorted()",
      "rank()"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours illustre : « on peut trier les éléments contenus dans une liste à l'aide de la fonction sorted » : l2 = sorted(l), qui fonctionne aussi bien sur des nombres que sur des chaînes de caractères.",
    "part": "Parcours, modification et tri d'une liste Python"
  },
  {
    "question": "Après l'instruction l2 = l (où l est une liste), le contenu de l est-il recopié dans l2 ?",
    "options": [
      "Oui, une copie complète et indépendante du contenu de l est créée dans l2",
      "Oui, mais seulement pour les listes de moins de 10 éléments",
      "Cela dépend du type des éléments contenus dans la liste",
      "Non : on crée une variable l2 qui « pointe » vers la même position en mémoire que l, sans recopier son contenu"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours est explicite : « Si on écrit l2 = l [...] on ne recopie pas le contenu de l dans l2 [...] on crée une variable l2 qui va 'pointer' vers la même position dans la mémoire de votre ordinateur que l ».",
    "part": "Copie de liste, référence et identité (id())"
  },
  {
    "question": "Si, après l2 = l, on modifie un élément de l (par exemple l[1] = 2), cette modification apparaît-elle aussi en consultant l2 ?",
    "options": [
      "Une erreur est levée dès que l'on tente de modifier l après cette affectation",
      "Oui : puisque l et l2 référencent la même liste en mémoire, la modification est répercutée sur l2 également",
      "Cela dépend du type des valeurs contenues dans la liste",
      "Non, l2 conserve son ancien contenu, indépendamment de toute modification de l"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours illustre : « Si on modifie l après l'instruction l2 = l, la modification sera répercutée sur l2 » : après l[1] = 2, print(l) et print(l2) affichent tous deux [1, 2, 7].",
    "part": "Copie de liste, référence et identité (id())"
  },
  {
    "question": "Quelle fonction (ou méthode) faut-il utiliser pour obtenir une copie explicite et indépendante d'une liste, afin d'éviter que la modification de l'originale n'affecte la copie ?",
    "options": [
      "La fonction list(), par exemple l2 = list(l), ou la méthode copy(), par exemple liste3 = liste.copy()",
      "Une simple ré-affectation l2 = l suffit à créer une copie indépendante",
      "La fonction id() crée automatiquement une copie indépendante",
      "Il est impossible de copier réellement une liste en Python"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours indique : « Pour éviter ce comportement, il faut effectuer une copie explicite de liste, à l'aide de la fonction list » (l2 = list(l)), et présente également « la méthode copy() (ou la méthode deepcopy()) » : liste3 = liste.copy().",
    "part": "Copie de liste, référence et identité (id())"
  },
  {
    "question": "À quoi sert la fonction Python id(), et que peut-on en déduire si deux variables ont la même valeur d'id() ?",
    "options": [
      "id() retourne uniquement la taille en octets d'un objet",
      "id() retourne un identifiant représentant l'adresse mémoire de l'objet ; si deux variables ont le même id(), elles référencent le même objet en mémoire",
      "id() ne peut être appliqué qu'aux nombres entiers",
      "id() convertit une variable en identifiant textuel unique, sans lien avec la mémoire"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours illustre avec eggs = ['cat', 'dog'] et id(eggs), en précisant qu'après eggs.append('moose'), « id(eggs) # référence est la même » (35152584), montrant que id() identifie l'objet en mémoire référencé par la variable.",
    "part": "Copie de liste, référence et identité (id())"
  },
  {
    "question": "Après eggs = ['cat', 'dog'] puis eggs.append('moose'), l'identité (id()) de eggs change-t-elle ? Que se passe-t-il en revanche si l'on écrit ensuite eggs = ['bat', 'rat', 'cow'] ?",
    "options": [
      "append() et la ré-affectation produisent systématiquement le même id()",
      "L'identité d'une liste ne change jamais, quelle que soit l'opération effectuée",
      "append() modifie la liste existante sans changer son identité (même id()) ; en revanche, ré-affecter eggs à une toute nouvelle liste lui donne une référence complètement différente (nouvel id())",
      "append() change toujours l'identité de la liste, alors qu'une nouvelle affectation la conserve"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours illustre : après eggs.append('moose'), « id(eggs) # référence est la même » (35152584) ; mais après eggs = ['bat', 'rat', 'cow'], « id(eggs) # référence est complètement différente » (44409800).",
    "part": "Copie de liste, référence et identité (id())"
  },
  {
    "question": "Pourquoi bacon += ' world!' change-t-il la valeur retournée par id(bacon), alors que eggs.append('moose') ne change pas id(eggs) ?",
    "options": [
      "Parce qu'une chaîne de caractères (str) est immuable en Python : bacon += crée une toute nouvelle chaîne en mémoire, alors qu'une liste (list) est mutable et append() modifie l'objet existant sur place",
      "Il n'y a en réalité aucune différence de comportement entre les deux cas",
      "Parce que += n'est valide que sur des variables globales",
      "Parce que bacon est un nombre alors que eggs est une chaîne de caractères"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours illustre avec bacon = 'Hello' puis bacon += ' world!' que « bacon référence à une autre chaine de caractère » (nouvel id()), à la différence de eggs.append('moose') qui conserve « référence est la même » (id() inchangé), illustrant la mutabilité des listes face à l'immutabilité des chaînes.",
    "part": "Copie de liste, référence et identité (id())"
  },
  {
    "question": "Si l'on veut afficher côte à côte des prénoms et des noms provenant de deux listes distinctes (prenoms et noms) de même longueur, quelle fonction Python permet de les parcourir simultanément élément par élément ?",
    "options": [
      "zip(prenoms, noms), utilisée dans for p, n in zip(prenoms, noms): print(p, n)",
      "prenoms & noms",
      "merge(prenoms, noms)",
      "pair(prenoms, noms)"
    ],
    "correctAnswer": 0,
    "explanation": "Le cours illustre : « Si on a besoin de parcourir simultanément plusieurs listes, on utilise la fonction zip() » : for p, n in zip(prenoms, noms): print(p, n).",
    "part": "Copie de liste, référence et identité (id())"
  },
  {
    "question": "D'après le cours, le type tableau numpy.array est-il le type de tableau le plus courant en Python, et de quels types de tableaux d'autres langages est-il le plus proche ?",
    "options": [
      "Oui, et il remplace obligatoirement le type list",
      "Non, ce n'est pas le type le plus courant ; il est plus proche des types de tableaux disponibles dans d'autres langages de programmation",
      "Oui, c'est le seul type de tableau utilisable en Python",
      "Non, et il n'a aucun lien avec les tableaux d'autres langages"
    ],
    "correctAnswer": 1,
    "explanation": "Le cours indique : « Le type tableau numpy.array n'est pas le plus courant en Python. Il est plus proche des types tableaux disponibles dans d'autres langages de programmation ».",
    "part": "Les listes en Python : définition, création et accès"
  },
  {
    "question": "Que faut-il faire pour pouvoir utiliser le type numpy.array dans un programme Python, d'après le cours ?",
    "options": [
      "Il suffit de renommer les listes existantes en tableaux",
      "Aucune installation n'est nécessaire, numpy.array est disponible nativement sans rien importer",
      "Installer le module Numpy, puis inclure la ligne from numpy import * dans le programme",
      "Installer uniquement Python, la bibliothèque Numpy étant fournie d'office avec le langage"
    ],
    "correctAnswer": 2,
    "explanation": "Le cours précise qu'il est nécessaire « d'installer le module Numpy » et « d'inclure la ligne suivante dans tous les programmes utilisant les tableaux : from numpy import * ».",
    "part": "Les listes en Python : définition, création et accès"
  },
  {
    "question": "Une fois Numpy importé, que produisent respectivement zeros(3, float) et empty(4, int) ?",
    "options": [
      "zeros crée un tableau d'entiers valant 1 ; empty crée un tableau de chaînes vides",
      "Ces deux fonctions n'existent pas dans le module Numpy",
      "Les deux fonctions créent systématiquement un tableau vide, de taille 0",
      "zeros(3, float) crée un tableau de 3 réels tous initialisés à 0. (array([0., 0., 0.])) ; empty(4, int) crée un tableau de 4 entiers non initialisés, dont le contenu est indéterminé"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours illustre : « zeros(3, float) # crée un tableau rempli de 0 -> array([0., 0., 0.]) » et « empty(4, int) # crée un tableau non initialisé -> array([0, 8826784, 31983376, 0]) », ce dernier contenant des valeurs résiduelles indéterminées.",
    "part": "Les listes en Python : définition, création et accès"
  },
  {
    "question": "Sur un tableau Numpy a = array([5,3,2,1,1]), comment obtient-on sa longueur, et comment accède-t-on à son premier élément ainsi qu'à un sous-tableau de ses 3 premiers éléments ?",
    "options": [
      "Numpy ne permet ni de connaître la longueur ni d'accéder à un élément précis",
      "a.count() pour la longueur ; a.head pour le premier élément ; a[3:] pour les 3 premiers éléments",
      "a.length() pour la longueur ; a.first() pour le premier élément ; a.slice(3) pour les 3 premiers",
      "len(a) ou a.size pour la longueur ; a[0] pour le premier élément ; a[:3] pour les 3 premiers éléments"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours illustre : « len(a) # longueur » ou « a.size # autre manière d'obtenir la longueur », « a[0] # premier élément », et « a[:3] # sous-tableau correspondant aux 3 premiers éléments » (a[3:] correspondant aux éléments à partir du 4ème).",
    "part": "Les listes en Python : définition, création et accès"
  },
  {
    "question": "Comment modifie-t-on le 2ème élément (indice 1) d'un tableau Numpy a = array([5,3,2,1,1]) pour lui donner la valeur 9 ?",
    "options": [
      "On ne peut pas modifier un élément d'un tableau Numpy après sa création",
      "a.set(1, 9)",
      "a.replace(3, 9)",
      "a[1] = 9, ce qui donne a -> array([5, 9, 2, 1, 1])"
    ],
    "correctAnswer": 3,
    "explanation": "Le cours illustre : « Modifier un élément d'un tableau (identifié par son indice) en utilisant une affectation » : a[1] = 9 # modification du 2ème élément du tableau, donnant a -> array([5, 9, 2, 1, 1]).",
    "part": "Les listes en Python : définition, création et accès"
  }
];
