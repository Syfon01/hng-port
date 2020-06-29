$("ul.nav.nav-pills nav-item ").click(function () {
  $(this).parent().addClass("active").siblings().removeClass("active");
});
