var  modal = (function() {
  let $modal = $('<div class="modal"/>');
  let $copyLinkDiv = $('<div class="copyLink">');
  let $linkTextBox = $('<input id="linkTextBox" type="text">');
  let $copyLinkButton = $('<button id="copyLinkButton" type="button" class="modalButton">&#10697;</button>');
  let $mailLinkButton = $('<button id="mailLink" type="button" class="modalButton">Mail link</button>');
  let $content = $('<div class="modal-content"/>');
  let $close = $('<button id="closeButton" role="button" class="modalButton"> Close </button>');


  $copyLinkDiv.append($linkTextBox, $copyLinkButton);
  $modal.append($copyLinkDiv, $mailLinkButton, $content, $close);

  $close.on('click', function(event) {
    event.preventDefault();
    modal.close();
  });


  $copyLinkButton.on('click', function(event) {
    let linkText = $linkTextBox.val();
    navigator.clipboard.writeText(linkText);
  });


  $mailLinkButton.on('click', function() {
    let subject = 'Link to recipe';
    let linkText = $linkTextBox.val();
    document.location = 'mailto:' + '?subject=' + subject + '&body= Prøv denne opskrift: ' + linkText;
  })


  return {
    center: function() {
      let top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
      let left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;
      $modal.css({
        top: top + $(window).scrollTop(),
        left: left + $(window).scrollLeft()
      });
    },

    open: function(settings) {
      $content.empty().append(settings.content);

      $modal.css({
        width: settings.width || 'auto',
        height: settings.height || 'auto',
        backgroundColor: 'rgb(223,244,244)',
        borderStyle: 'solid',
        borderWidth: '3px',
        borderColor: 'rgb(52, 207, 244)',
        borderRadius: '15px',
        padding: '12px'
      }).appendTo('body');

      modal.center();
      $(window).on('resize', modal.center);
    },

    close: function() {
      $content.empty();

      $modal.detach();
      $(window).off('resize', modal.center);
    }
  };
}());
