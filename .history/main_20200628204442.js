$('.continue').click(function () {

  var nextId = $(this).parents('.tab-pane').next().attr("id");
  $('[href=#' + nextId + ']').tab('show');

})