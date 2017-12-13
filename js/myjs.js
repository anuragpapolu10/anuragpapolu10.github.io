var navBar = $(".main-nav");
var hdrHeight = $("header").height();


$(window).scroll(function() {
  if( $(this).scrollTop() > hdrHeight + 150) {
    navBar.addClass("navScrolled");
  } else {
    navBar.removeClass("navScrolled");
  }
});
