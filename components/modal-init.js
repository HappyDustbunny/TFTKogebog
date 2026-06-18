(function() {
  let $content = $('#share-options').detach();
  let linkText = '';

  $('.share').on('click', function(event) {
    modal.open({content: $content, width: 'auto', height: 'auto'});

    if ($(this).parent().parent().prev()[0]) {
      linkText = window.location.href + '#' + $(this).parent().parent().prev()[0].id;
    } else {
      linkText = window.location.href + '#' + $(this).parent().parent().parent().prev()[0].id;
    };
    linkText = linkText.replace('##', '#');
    $('#linkTextBox').val(linkText);
  });

}());
