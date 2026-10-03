# Informatique Lyon 2

Site de ressources pour les étudiants en Informatique de l'Université Lyon 2 (L1 / L2) : liens utiles, cours, QCM interactifs et révisions de TD.

## Structure du projet

```text
.
├── index.html                          # Accueil (L2) — doit rester à la racine
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
│   ├── css/                            # style.css (site) · quiz.css (QCM)
│   ├── js/                             # quiz.js (moteur de QCM)
│   └── images/                         # logo.png, background.jpg, icons/
├── data/
│   ├── qcm/<matiere>/cm<N>-p<M>.js     # Banques de questions (une par jeu)
│   └── td/<matiere>/td<N>.json         # Exports PresentaForge (sources des pages td<N>.html)
├── documents/<matiere>/cm/cm<N>.pdf    # Supports de cours (PDF)
└── scripts/                            # Scripts utilitaires ponctuels
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

## Ajouter un jeu QCM

1. Créer la banque de questions `data/qcm/<matiere>/cm<N>-p<M>.js` : `const <nomVariable> = [{ question, options, correctAnswer, explanation }, ...]` (environ 30 questions par jeu).
2. Copier une page existante de `l2/<matiere>/qcm/` en `cm<N>-p<M>.html`, puis adapter : le `<title>`, le titre affiché, le chemin du script de données, ainsi que le nom de la variable et la clé `localStorage` passés à `new Quiz(...)`.
3. Ajouter une `qcm-game-card` dans `l2/<matiere>/index.html` (dans le bloc `qcm-group` du bon CM).

## Prochainement

- Commentaire pour chaque ligne
- Explication du CSS
