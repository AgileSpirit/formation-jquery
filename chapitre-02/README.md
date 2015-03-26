# Etape 2 : Utiliser jQuery

## Objectifs

Avant d'aller plus loin, nous devons d'abord nous familiariser avec jQuery, la librairie JavaScript au coeur de notre future application.

Le but de cet exercice est d'apprendre à utiliser les fonctionnalités basiques de jQuery :

 * récupérer un élément du DOM, de différentes façons
 * manipuler un élément du DOM
 * ajouter du comportement à un élément du DOM
 * enrichir / modifier le DOM
 * faire des redirections Web "propres" (i.e. qui respectent le bouton Back)
 * faire des boucles for

## Exercices

Remarque : chaque exercice peut être facilement résolu en moins de 6 lignes

### Exercice \#1

**Enoncé** : cacher le libellé actuellement affiché et le remplacer par le libellé actuellement caché

**Indices** : utiliser les fonctions

 *  ```$```, ainsi que les sélecteurs ID et de classe pour récupérer les élements
 * ```.hide()```
 * ```.show()```

### Exercice \#2

**Enoncé** : remplacer le texte du libellé "target" par celui du label "origin"

**Indices** : utiliser la fonction

 * ```.text()```...

### Exercice \#3

**Enoncé** : ajouter un comportement à l'écoute de l'évènement 'click' du bouton qui va afficher une popup dont le message est celui saisi dans le champs texte associé

**Indices** : utiliser les fonctions

 * ```.on( event, function )```
 * ```.val()```


### Exercice \#4

**Enoncé** : déclarer un tableau de données contenant les données "bleu", "blanc", "rouge" et générer la liste HTML en conséquence

**Indices** : utiliser les fonctions

 * ```.each( data, function( index, value ) )```
 * ```.append( value )```
 * ```.remove()```

### Exercice \#5

**Enoncé** : ajouter du comportement au bouton "Go !" pour qu'au clic une redirection soit effectuée vers l'URL saisie dans le champs de saisie associée

**Contrainte** : après redirection le bouton "back" doit rester valide




