$(document).ready(function() {
  // nav toggle
  $(".nav-toggle").click(function () {
    $(".header .nav").slideToggle();
  })
  $(".header .nav a").click( function () {
    if ($(window).width()<768) {
      $(".header .nav").slideToggle();
    }
  });
  // fixed header

  $(window).scroll(function () {
    if($(this).scrollTop()>100) {
      $(".header").addClass("fixed");
    }
    else {
      $(".header").removeClass("fixed");
    }
  });
  // smooth scroll
  $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function() {
            window.Location.hash = hash;

        });
    }
  });
});
