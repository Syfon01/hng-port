$("ul.nav.nav-pills li a").click(function () {
  $(this).parent().addClass("nav-active").siblings().removeClass("active");
});
