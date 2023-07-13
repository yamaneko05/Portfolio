$(".button").on("click", function() {
  var target = $(this).data("target");
  var targetTop = $(`#${target}`).offset().top;
  $(window).scrollTop(targetTop - 100);
  $("nav").slideUp();
  $(".hamburger").removeClass("open");
});

$(".hamburger").on("click", function() {
  $("nav").slideToggle();
  $(this).toggleClass("open");
});