//check off specific todos by clicking

$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});

//click on X to delete todo
$('ul').on('click', 'span', function(e) {
  $(this)
    .parent()
    .fadeOut('slow', function() {
      $(this).remove();
    });
  e.stopPropagation();
});

//add a todo to the list
$('input[type="text"]').keypress(function(e) {
  if (e.which === 13) {
    var todoText = $(this).val();
    $(this).val('');
    $('ul').append('<li><span>X</span> ' + todoText + '</li>');
  }
});
