# Informatique Lyon 2

Site de ressources pour les étudiants en Informatique de l'Université Lyon 2 (L1 / L2) : liens utiles, cours, QCM interactifs et révisions de TD.
Le site est adapté aux téléphones et peut être ajouté à l'écran d'accueil (comme une application).

## Structure du projet

```text
.
├── index.html                          # Accueil (L2) — doit rester à la racine
├── 404.html                            # Page affichée pour toute adresse inconnue
├── vercel.json                         # Redirections des anciennes adresses (voir « Hébergement »)
├── manifest.webmanifest                # Manifeste de l'application (nom, icônes, couleurs)
├── sw.js                               # Service worker minimal : rend le site installable, ne met rien en cache
├── l1/
│   └── index.html                      # Page L1
├── l2/                                 # Un dossier par matière de L2
│   ├── algorithmique/
│   │   ├── index.html                  # Page de la matière (CM / TD)
│   │   └── qcm/                        # Un jeu QCM par fichier : cm<N>-p<M>.html
│   ├── outils-recherche/
│   │   ├── index.html
│   │   └── qcm/
│   ├── programmation-web-front-end/
│   │   ├── index.html
│   │   └── td/                         # Pages de révision des TD : td<N>.html
│   ├── creation-numerique/
│   │   └── index.html
│   └── tic/
│       └── index.html
├── assets/                             # Ressources partagées par toutes les pages
│   ├── css/                            # style.css (site) · nav.css (menu) · quiz.css (QCM)
│   ├── js/                             # quiz.js (moteur de QCM) · nav.js (menu mobile) · pwa.js (écran d'accueil)
│   └── images/                         # logo.png, background.jpg, icons/ (logos des liens), app/ (icônes de l'application)
├── data/
│   ├── qcm/<matiere>/cm<N>-p<M>.js     # Banques de questions (une par jeu)
│   └── td/<matiere>/td<N>.json         # Exports PresentaForge (sources des pages td<N>.html)
├── documents/<matiere>/cm/cm<N>.pdf    # Supports de cours (PDF)
└── scripts/                            # check-site.mjs (vérifications) · split-outils.mjs (script historique)
```

## Conventions

- **Noms** : minuscules, en `kebab-case`, sans espace ni accent (ex. `cm1-p2.html`, `google-drive-logo.svg`).
- **Liens relatifs uniquement** : le site fonctionne à la racine d'un domaine, dans un sous-dossier, ou en ouvrant les fichiers en local. Préfixe vers la racine selon la profondeur de la page :

  | Page | Préfixe |
  | --- | --- |
  | `index.html` | *(aucun)* |
  | `l1/index.html` | `../` |
  | `l2/<matiere>/index.html` | `../../` |
  | `l2/<matiere>/qcm/*.html`, `l2/<matiere>/td/*.html` | `../../../` |

- Les liens vers une page de dossier pointent explicitement vers son `index.html`.
- **Ne jamais renommer les clés `localStorage` des QCM** (`quizProgress_...`) : cela réinitialiserait la progression des étudiants.
- **Cache** : quand `style.css`, `nav.css`, `quiz.css`, `quiz.js`, `nav.js` ou `pwa.js` est modifié, augmenter son numéro `?v=` dans toutes les pages qui le chargent. Sinon certains visiteurs peuvent garder l'ancienne version en cache avec le nouveau HTML (menu cassé, styles manquants...). Exemple (macOS) :

  ```bash
  grep -rl 'style.css?v=3' --include='*.html' . | xargs sed -i '' 's/style.css?v=3/style.css?v=4/'
  ```

## Vérifier le site

```bash
node scripts/check-site.mjs
```

Vérifie que **chaque page** contient le tag Google Analytics, le manifeste + `pwa.js` et le **même menu** (même HTML, `nav.css` + `nav.js`, sans styles de menu privés ; sauf `404.html`, qui peut s'afficher à n'importe quelle adresse), que tous les liens locaux (pages, images, scripts, CSS) pointent vers un fichier existant (majuscules/minuscules comprises, car Vercel y est sensible), et que chaque redirection de `vercel.json` mène à un fichier existant sans masquer une vraie page. À lancer avant chaque push.
Les pages TD sont générées par PresentaForge : après un nouvel export, relancer la vérification, qui indique ce qu'il faut y remettre (tag Google Analytics, menu partagé, `pwa.js`).

## Menu de navigation

Le menu (logo, Liens, L1, L2, thème clair/sombre) est **le même sur toutes les pages**, pages TD comprises :

- **Styles** : `assets/css/nav.css`, une seule feuille utilisée par toutes les pages. Elle est autonome : elle reprend les couleurs du site quand la page les définit, et a ses propres valeurs sinon (pages TD).
- **Comportement** : `assets/js/nav.js`.
- **HTML** : le bloc `<nav class="navbar">…</nav>` doit être identique d'une page à l'autre (copier celui d'une page existante ; seuls les chemins relatifs changent).
- **Téléphone** : sous 820 px de large (ou sur un téléphone tenu en paysage), la barre devient un bouton ☰ qui ouvre un panneau ; toucher « L1 » ou « L2 » déplie son sous-menu au lieu de changer de page.
- Ne pas redéfinir le menu dans une page (pas de `.nav-menu {…}` dans un `<style>`) : modifier `nav.css` pour que tout le site suive. `node scripts/check-site.mjs` le vérifie.
- **Pages TD** (générées par PresentaForge) : après un nouvel export, remplacer le `<nav>` par celui d'une autre page (en adaptant les chemins), ajouter les liens `nav.css` / `nav.js` comme dans `td1.html`, et supprimer les styles de menu du `<style>` exporté. Seule la règle `.navbar{flex:0 0 auto;z-index:30}` doit rester : elle garde le menu sous le panneau « Sommaire ».

## Ajouter à l'écran d'accueil

`assets/js/pwa.js` affiche, **sur téléphone et tablette uniquement**, une petite bannière invitant à ajouter le site à l'écran d'accueil :

- Android / Chrome : bouton « Installer l'application » (ou les étapes manuelles si le navigateur ne le propose pas).
- iPhone / iPad : les étapes « Partager → Sur l'écran d'accueil » (iOS n'a pas de bouton d'installation).
- Elle n'apparaît ni sur ordinateur, ni dans les navigateurs intégrés (Instagram, Facebook...), ni si le site est déjà installé.
- Une seule fois par session ; « Plus tard » la masque 7 jours (puis 30 jours), « Ne plus afficher » définitivement.
- Les actions sont envoyées à Google Analytics (événements `a2hs_shown`, `a2hs_accepted`, `a2hs_dismissed`...). Un lancement depuis l'écran d'accueil apparaît avec la source `homescreen`.

Prévisualiser sur ordinateur : ajouter `?a2hs=1` (ou `?a2hs=ios` / `?a2hs=android`) à l'adresse d'une page. Pour la revoir après l'avoir masquée : `localStorage.removeItem('a2hs')` dans la console du navigateur.
L'installation demande du HTTPS (Vercel ✓). Les icônes sont dans `assets/images/app/` et le nom/couleurs dans `manifest.webmanifest`.

## Hébergement et anciennes adresses

Le site est hébergé sur **Vercel** (`lyon2informatique.vercel.app`) et se met à jour automatiquement à chaque `git push` sur la branche `main` du dépôt GitHub.

- **`vercel.json`** : redirections permanentes (308) des anciennes adresses d'avant la réorganisation (`l1.html`, `outils_recherche.html`, `qcm_algo_cm1_p1.html`, `l2s1_td_prog_web/...`, les PDF de `files/`...) vers les nouvelles, pour que les liens déjà partagés ou mis en favoris continuent de fonctionner. Pour en ajouter une : ajouter une entrée dans `redirects` (`source` = ancienne adresse, `destination` = nouvelle) puis lancer `node scripts/check-site.mjs`. Dans les sources des PDF, `:rest` remplace la fin du nom du dossier, pour tolérer les espaces et les accents.
- **`404.html`** : page affichée par Vercel pour toute adresse inconnue, avec un bouton « Retour à l'accueil ». Elle est autonome (styles dans le fichier, chemins absolus `/...`) car elle peut s'afficher à n'importe quelle adresse.

## Ajouter un jeu QCM

1. Créer la banque de questions `data/qcm/<matiere>/cm<N>-p<M>.js` : `const <nomVariable> = [{ question, options, correctAnswer, explanation }, ...]` (environ 30 questions par jeu).
2. Copier une page existante de `l2/<matiere>/qcm/` en `cm<N>-p<M>.html` (Google Analytics, menu et écran d'accueil sont déjà inclus), puis adapter : le `<title>`, le titre affiché, le chemin du script de données, ainsi que le nom de la variable et la clé `localStorage` passés à `new Quiz(...)`.
3. Ajouter une `qcm-game-card` dans `l2/<matiere>/index.html` (dans le bloc `qcm-group` du bon CM).
4. Lancer `node scripts/check-site.mjs`.

## Prochainement

- Commentaire pour chaque ligne
- Explication du CSS
