// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({
//     items: 1,
//     nav: false,
//     dots: true,
//     margin: 50,
//   });

$(window).on("load", function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    margin: 50,
  });

  $(".des-carousel").slick({
    infinite: false,
    variableWidth: false,
    swipeToSlide: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
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
  $(".article-images--row").slick({
    infinite: false,
    variableWidth: true,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  });
});

$(document).ready(function () {
  //dropdown hover intent
  // $(".menu-item--expanded").hoverIntent(
  //   function () {
  //     $(this).find(".wrapper-menu").addClass("open-desktop");
  //   },
  //   function () {
  //     $(this).find(".wrapper-menu").removeClass("open-desktop");
  //   }
  // );
  $(".custom-select select").selectric();
  $(".menu-item--expanded > a").click(function (e) {
    e.preventDefault();
    $(".wrapper-menu").removeClass("open-desktop");
    $(this).parent().find(".wrapper-menu").addClass("open-desktop");
  });

  $("#search-form").click(function () {
    $(".views-exposed-form").addClass("show-form");
  });

  $("#close-form").click(function () {
    $(".views-exposed-form").removeClass("show-form");
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

// Article slider toggles
$(document).ready(function () {
  $(".toggle-images-btn").click(function (e) {
    e.preventDefault();
    $(".toggle-images").toggleClass("closed");
    $(this).toggleClass("open");
    $(this).hasClass("open")
      ? $(this).children(".text").text("Tancar")
      : $(this).children(".text").text("Obrir");
    $(this).closest(".borders").toggleClass("opened");
  });

  $(".toggle-videos-btn").click(function (e) {
    e.preventDefault();
    $(".toggle-videos").toggleClass("closed");
    $(this).toggleClass("open");
    $(this).hasClass("open")
      ? $(this).children(".text").text("Tancar")
      : $(this).children(".text").text("Obrir");
    $(this).closest(".borders").toggleClass("opened");
  });
});
