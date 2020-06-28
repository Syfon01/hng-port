$("ul.nav.nav-pills li a").click(function () {
  $(this).parent().addClass("active").siblings().removeClass("pill-active");
});
