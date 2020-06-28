$('.projects-link').click(function () {

  var nextId = $(this).parents('.tab-pane').next().attr("id");
  $('[href=#' + nextId + ']').tab('show');

})


$('.navbar-nav .nav-link').click(function () {
  $('.navbar-nav .nav-link').removeClass('active');
  $(this).addClass('active');
})