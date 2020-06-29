
$('.navbar-nav .nav-item .nav-link').click(function () {
  $('.navbar-nav .nav-item .nav-link').removeClass('active');
  $(this).addClass('active');
})

$('.nav-pills .nav-link').click(function () {
  $('.nav-pills .nav-link').removeClass('active');
  $(this).addClass('active');
})