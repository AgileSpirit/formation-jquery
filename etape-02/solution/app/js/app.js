$(function () {

  // Exo 1
  var $labelToHide = $("#label-hide");
  var $labelToShow = $(".label-show");

  $labelToHide.hide();
  $labelToShow.show();

  // Exo 2
  var $exoManipulation = $("#exoManipulation");
  var $originSpan = $(".origin span", $exoManipulation);
  var $targetSpan = $(".target span:first", $exoManipulation);

  $targetSpan.text($originSpan.text());

  // Exo 3
  var $exoComportement = $("#exoComportement");
  var $message = $("#message");
  var $buttonMessage = $("input[type=button]:first", $exoComportement);

  $buttonMessage.on('click', function() {
    alert($message.val());
  });

  // Exo 4
  var myArray = ["bleu", "blanc", "rouge"];
  var $ul = $("#items");

  $.each(myArray, function( index, value ) {
    $ul.append("<li>" + value + "</li>");
  });
  $("li:first", $ul).remove();

  // Exo 5
  var $exoNavigation = $("#exoNavigation");
  var $input = $("input[type=text]", $exoNavigation);
  var $button = $("button", $exoNavigation);

  $button.on('click', function() {
    window.location.href = $input.val();
  });

});
