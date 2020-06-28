$("ul.nav.nav-pills nav").click(function () {
  $(this).parent().addClass("active").siblings().removeClass("active");
});
