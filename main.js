var selector1 = "#menu_item1";
var selector2 = "#menu_item2";
var selector3 = "#menu_item3";
var selector4 = "#menu_item4";

$(document).ready(function () {
  $(".nav li a").removeClass("active");
});

$(".nav li a").on("click", function () {
  var scrollAnchor = $(this).attr("data-scroll"),
    scrollPoint =
      $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 50;
  $("body,html").animate(
    {
      scrollTop: scrollPoint,
    },
    500
  );
  return false;
});

$(window)
  .scroll(function () {
    var windscroll = $(window).scrollTop();
    var sec1 = $("#section1").offset().top - 100;
    var sec2 = $("#section2").offset().top - 100;
    var sec3 = $("#section3").offset().top - 100;
    var sec4 = $("#section4").offset().top - 100;

    if (windscroll >= sec1) {
      $(selector1).addClass("custom_active1");
    } // do not remove this class

    if (windscroll >= sec2) {
      $(selector2).addClass("custom_active2");

      $(selector1).removeClass("custom_active1");
      $(selector3).removeClass("custom_active3");
      $(selector4).removeClass("custom_active4");
    } else {
      $(selector2).removeClass("custom_active2");
    }

    if (windscroll >= sec3) {
      $(selector3).addClass("custom_active3");

      $(selector1).removeClass("custom_active1");
      $(selector2).removeClass("custom_active2");
      $(selector4).removeClass("custom_active4");
    } else {
      $(selector3).removeClass("custom_active3");
    }

    if (windscroll >= sec4) {
      $(selector4).addClass("custom_active4");

      $(selector1).removeClass("custom_active1");
      $(selector2).removeClass("custom_active2");
      $(selector3).removeClass("custom_active3");
    } else {
      $(selector4).removeClass("custom_active4");
    }
  })
  .scroll();
