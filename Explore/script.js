const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
  navLinks.forEach((link, index) => {});
  burger.classList.toggle("active");
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// next

$(window).on("load", function () {
  $(window)
    .scroll(function () {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function () {
        var objectBottom = $(this).offset().top + $(this).outerHeight();

        if (objectBottom < windowBottom) {
          if ($(this).css("opacity") == 0) {
            $(this).fadeTo(500, 1);
          }
        } else {
          if ($(this).css("opacity") == 1) {
            $(this).fadeTo(500, 0);
          }
        }
      });
    })
    .scroll();
});
