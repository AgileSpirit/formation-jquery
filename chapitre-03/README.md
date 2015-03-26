# Etape 3 : Développer une vue Web avec HTML5 + CSS3 + JS +jQuery

## Objectifs

L'heure est venue de se lancer dans la réalisation de notre blog !

Nous allons commencer par réaliser la page qui liste les billets de blog.

Au travers ce chapitre nous verrons :

 * quels rôles pour quelles responsabilités
 * un exemple de découpage de code au sein d'un controller
 * comment rendre du code JS modulaire
 * une technique de templating basée sur JS

## Nouvelle organisation du code

Nous allons enrichir notre arboresence pour y intégrer les notions de Controller et de Service :

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
  |     |     |-- controller
  |     |     |     |
  |     |     |     + bar-ctrl.js
  |     |     |     + foo-ctrl.js
  |     |     |
  |     |     |-- service
  |     |     |     |
  |     |     |     + foobar-service.js
  |     |     |
  |     |     + app.js
  |     |
  |     + index.html
  |     + fichier-1.html
  |     + fichier-2.html
  |     + fichier-n.html
  |
  |-- lib : contient les différentes bibliothèques / outils utilisés


## Composants d'une application Web front-end

Dans la plupart des cas, une application de présentation comporte les composants logiciels suivant :

 * un Routeur avec des Routes
 * des Vues
 * des Templates
 * des Modèles
 * des Controllers
 * des Services

### Routeur et Routes

Le Routeur représente le point d'entrée de l'application.

Son rôle est d'intercepter les requêtes HTTP et de les analyser pour en déduire les Routes correspondantes.

Une Route est une correspondance URL / ressource.

Une ressource peut être une action à déclencher (ex : un Web Service à appeler) ou une page à afficher.

Ex : la route "http://app.com/view/articles" retourne la page articles.html alors que la route "http://app.com/api/articles" appelle le service Web renvoie la liste des articles du blog au format JSON.

### Vues

Une Vue est un ensemble cohérent d'éléments ou de sous-ensemble d'éléments graphiques.

### Templates

Un Template est un fragment cohérent d'éléments graphiques non valorisés.

Un Template peut lui-même contenir des Templates. Ex : un template de page peut inclure un template de header de page, un autre de footer de page (LayoutTemplate) ainsi qu'un template d'item d'une liste (DataTemplate)

