var app = app || {};

app.articleCtrl = function() {
    
    'use strict';
    
    // Dependencies
    var service;
    
    // Model
    var article = {};

    function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    function loadModel() {
      var id = getParameterByName("id");
      article = service.getArticle(id);
    }
    
    function renderView() {
        // on récupère les différents éléments graphiques qu'on va vouloir renseigner
        var $article = $(".article");
        var $articleLink = $('.article-link', $article);
        var $articleAuthor = $('.article-author', $article);
        var $articlePublicationDate = $('.article-publication-date', $article);
        var $articleContent = $('.article-content', $article);

        // on configure les valeurs des éléments graphiques (titre, auteur, etc.)
        $articleLink.text("#" + article.id + " - " + article.title);
        $articleLink.attr("href", "article.html?id=" + article.id);
        $articleAuthor.text(article.author);
        $articlePublicationDate.text(article.publicationDate);
        $articleContent.html(article.content);
    }
    
    function init() {
        service = app.articleService;
        loadModel();
        renderView();
    }
    
    return {
        init: init
    };
}();