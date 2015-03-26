var app = app || {};

app.articlesCtrl = (function() {
    
    'use strict';
    
    // Dependencies
    var service;
    
    // Model
    var articles = [];
    
    function loadArticles() {
        articles = service.getArticles();
    }
    
    function renderArticles() {
        var $articles = $('.article-list');
        
        // on récupère notre item template qui va nous permettre de le cloner pour chaque article
        var $articleTemplate = $('li:first', $articles);
        
        // on supprime l'item template qui a fini de jouer son rôle
        $articleTemplate.remove();
        
        for (var i = 0; i < articles.length; i++) { 
            // on récupère l'article à afficher
            var article = articles[i];

            // on récupère les différents éléments graphiques qu'on va vouloir renseigner
            var $article = $articleTemplate.clone(true);
            var $articleLink = $('.article-link', $article);
            var $articleAuthor = $('.article-author', $article);
            var $articlePublicationDate = $('.article-publication-date', $article);
            var $articleExcerpt = $('.article-excerpt', $article);
            
            // on configure les valeurs des éléments graphiques (titre, auteur, etc.)
            $articleLink.text("#" + article.id + " - " + article.title);
            $articleLink.attr("href", "article.html?id=" + article.id);
            $articleAuthor.text(article.author);
            $articlePublicationDate.text(article.publicationDate);
            $articleExcerpt.html(article.excerpt);
            
            // on rajoute l'article dans la liste des articles
            $articles.append($article);
        }
    }
    
    function init(articleService) {
        service = articleService;
        loadArticles();
        renderArticles();
    }
    
    return {
        init: init
    };
})();