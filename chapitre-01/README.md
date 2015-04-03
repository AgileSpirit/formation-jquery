# Etape 1 : Initialiser un projet Web basé sur JS / jQuery

## Objectifs

Le but de cet exercice est de répondre aux questions suivantes :

 * comment démarrer un projet Web orienté client ?
 * quelles ressources sont nécessaires ?
 * où les placer ?
 * dans quel ordre ?
 * comment intégrer jQuery
 * comment accéder aux fonctions de jQuery

## Contexte

Depuis que le Web existe, plusieurs styles d'architecture, technologies et concepts ont émergé / se sont succédé.

Parmi les sites dynamiques (communicant avec un serveur de traitements / services), on distingue en particulier 3 types :

  A) une page est générée côté serveur ; chaque interaction de l'utilisateur nécessite un rechargement de la page
  B) la page est générée côté serveur et mise à jour via des requêtes qui retournent des fragments d'HTML (format HTTP ou XHTTP)
  C) la page est générée et mise à jour côté navigateur, via des requêtes ne retournant que de la données (JSON ou XML)

Le TP couvre les styles d'architecture B et C, pour le développement d'applications Web riches modernes.

## Le produit

Le site Web que nous allons construire est un simple blog (la partie rendu) qui :

 * liste un aperçu des derniers articles publiés
 * permet de consulter un article

Le tout en techno full JavaScript / jQuery :-)


## Réalisation

### 1. Définir l'organisation des sources

La première étape consiste à définir l'organisation de notre projet, la structuration de nos sources. Il ne s'agit là que d'un début ; nous verrons au fur et à mesure des étapes comment améliorer et enrichir notre façon de faire, pour coller aux bons patterns de deisgn et d'architecture.

Nous proposons l'arborescence suivante :
```
projet
  |
  |-- app : contient les sources relatives à l'application
  |     |
  |     |-- css : contient les fichiers CSS
  |     |     |
  |     |     + app.css
  |     |
  |     |-- js : contient les fichiers JS
  |     |     |
  |     |     + app.js
  |     |
  |     + index.html
  |     + fichier-1.html
  |     + fichier-2.html
  |     + fichier-n.html
  |
  |-- lib : contient les différentes bibliothèques / outils utilisés
```

### 2. Créer le fichier index.html

Créez le fichier index.html minimal, lequel doit contenir au minimum :

 * le DOCTYPE
 * les balises html, head, meta, title et body

### 3. Ajouter et déclarer le style CSS

L'ajout de style dans un fichier HTML5 se fait grâce à la balise : ```<link rel="stylesheet" href="xxx/yyy.css">```

Vous trouverez dans les ressources de l'étape un fichier app.css contenant des définitions de style pour la suite du TP.

### 4. Inclure la librairie jQuery

L'ajout d'un script JS se fait grâce à la balise : ```<script src="xxx/yyy.js"></script>```

### 5. Utiliser la librairie jQuery

A ce stade, on peut maintenant utiliser les fonctions de jQuery.

On va s'en assurer en intégrant le script ci-dessous à la page HTML, pour qu'il soit déclenché dès le chargement de la page effectué :

```
    $(function () {
        console.log("App ready!");
    });
```

Explications : le symbole '$' est la variable définie par jQuery permettant d'accéder aux fonctions de la librairie.


### 6. Vérifier que la page est bien construite

1. Ouvrez le fichier index.html dans un navigateur (récent)
2. Vérifiez dans l'onglet "réseau" (ou "network", "requêtes", etc. selon le navigateur) qu'il n'y a pas d'erreur de chargement de ressource
3. Vérifiez dans la console du le débugger qu'il y a bien la trace "App ready !".

### 7. Créer et déclarer le fichier app.js

Créer le fichier app.js et mettez-le au bon endroit.

Celui-ci peut être vu comme une sorte de *fichier main* de notre application.

Son but est de contenir les informations (de configuration, de navigation, de session, etc.) globales de l'application.

### 8. Déplacer le script JS depuis index.html vers app.js

Coupez le script JS du fichier index.html et collez-le à la fin du fichier app.js afin d'avoir un code propre (i.e. dont les rôles et responsabilités de chaque composant sont respectées).


