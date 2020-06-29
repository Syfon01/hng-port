$("ul.nav.nav-pills ").click(function () {
  $(this).parent().addClass("active").siblings().removeClass("active");
});
