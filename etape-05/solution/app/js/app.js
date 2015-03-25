// Déclaration de l'espace de nomage de l'application
var app = app || {};

app = (function () {
  return {
    init: function () {
      console.log( "App ready!" );
    }
  }
})();

app.init();