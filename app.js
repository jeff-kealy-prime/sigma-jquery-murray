$(document).ready(function() {

  // effect button event listeners
  $("#slide-up").on("click", function() {
    $(".murray").slideUp(300).delay(250).fadeIn('slow');
  });
  $("#slide-down").on("click", function() {
    $(".murray").slideDown("fast");
  });
  $("#fade-toggle").on("click", function() {
    $(".murray").fadeToggle("slow");
  });

  // Create an ad-hoc animation with jQuery and CSS properties
  // $("#murray-box").on("click", ".murray", function() {
  //   $(this).animate({
  //     height: '-=50px',
  //     width: '-=50px'
  //   }, 500)
  //   .delay(500)
  //   .animate({
  //     height: '+=50px',
  //     width: '+=50px'
  //   }, 'fast');
  //
  //
  // });

  // using a pre-made animation class from CSS
  $("#murray-box").on("click", ".murray", function() {
    $(this).toggleClass("spin-murray");
  });

  $("#add-murray").on("click", function() {
    var size = randomNumber(150, 400);
    var img = '<img class="murray" src="http://www.fillmurray.com/' + size + '/' + size + '" />';
    $("#murray-box").append(img);
  });
  
  $("#remove-murray").on("click", function() {
    $("#murray-box").empty();
  });


});

function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}
