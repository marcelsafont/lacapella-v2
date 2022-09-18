$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    margin: 50,
  });

  //dropdown hover intent
  $(".menu-item--expanded").hoverIntent(
    function () {
      $(this).find(".wrapper-menu").addClass("open-desktop");
    },
    function () {
      $(this).find(".wrapper-menu").removeClass("open-desktop");
    }
  );
  $(".des-carousel").slick({
    infinite: false,
    variableWidth: false,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  });
});

// $(document).ready(function () {
//   $(".des-carousel").owlCarousel({
//     items: 3,
//     nav: true,
//     center: true,
//     dots: false,
//     autoWidth: true,
//     stagePadding: 5,
//   });
// });

// $(document).ready(function () {
//   $(".des-carousel").slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     variableWidth: false,
//     infinite: false,
//     centerMode: true,
//   });
// });

$(document).ready(function () {
  $(".mobile-button").click(function () {
    $(this).toggleClass("open");
    $(".nav--main-nav  ul:not(.contextual-links):not(.dropdown)").toggleClass(
      "show"
    );
  });
});

$(document).ready(function () {
  $("li.dd").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("open");
    $(".nav--main-nav  ul.dropdown:not(.contextual-links)").toggleClass("show");
  });
  // Selectric below -------
  $("#edit-lang-dropdown-select").selectric();
});
