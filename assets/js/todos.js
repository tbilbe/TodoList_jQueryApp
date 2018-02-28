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
    $('ul').append(
      '<li><span><i class="fas fa-trash"></i></span> ' + todoText + '</li>'
    );
  }
});

//show or hide form on anchor
$('i').on('click', function() {
  console.log('anchor clicked');
});

//toggle the form
$('#toggle-form').click(function() {
  $("input[type='text']").fadeToggle();
});
