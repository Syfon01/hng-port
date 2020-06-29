$("ul.nav.nav-pills nav-item nav-link active projects-link").click(function () {
  $(this).parent().addClass("active").siblings().removeClass("active");
});
