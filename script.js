$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $(".nav").toggleClass("new-nav");
  });

  $(window).on("load scroll", function () {
    $(".fa-bars").removeClass("fa-times");
    $(".nav").removeClass("new-nav");

    if ($(window).scrollTop() > 30) {
      $("section").each(function () {
        var top = $(window).scrollTop();
        var id = $(this).attr("id");
        var height = $(this).height();
        var offset = $(this).offset().top - 200;

        if (top >= offset && top < height + offset) {
          $(".nav ul li a").removeClass("active");
          $(".nav")
            .find('[href="#' + id + '"]')
            .addClass("active");
        }
      });
    }
  });
});
