(function() {

  // let subject = 'Link to recipe';
  // let message = '';
  // if ($(this).parent().parent().prev()[0]) {
  //   message = window.location.href + '#' + $(this).parent().parent().prev()[0].id;
  // } else {
  //   message = window.location.href + '#' + $(this).parent().parent().parent().prev()[0].id;
  // }
  // let messageBody = message.replace('##', '#');
  // document.location = 'mailto:' + '?subject=' + subject + '&body= Prøv denne opskrift: ' + messageBody;



  let $content = $('#share-options').detach();

  $('.share').on('click', function() {
    modal.open({content: $content, width: 300, height: 300})
  })
}());
