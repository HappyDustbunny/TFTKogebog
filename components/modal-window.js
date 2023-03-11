var  modal = (function() {
  let $modal = $('<div class="modal"/>');
  let $content = $('<div class="modal-content"/>');
  let $close = $('<button role="button" class="modal-close"> Close </button>');

  $modal.append($content, $close);
  $close.on('click', function(event) {
    event.preventDefault();
    modal.close();
  });

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
        backgroundColor: 'white'
      }).appendTo('body');

      $close.css({
        position: 'relative',
          bottom: '-64px',
          width: '57px',
          left: '235px',
          backgroundColor: 'rgb(205,248,255)',
          borderRadius: '5px',
          padding: '7px'
      }).appendTo($modal);

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
