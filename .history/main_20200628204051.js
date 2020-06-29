$("ul.nav.nav-pills li a").click(function () {
  $(this).parent().addClass("pill-active").siblings().removeClass("pill-active");
});
