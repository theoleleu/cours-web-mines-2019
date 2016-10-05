const $ = require('jquery');
require('bootstrap-loader');
require('../css/bootstrap.min.css');
require('../css/style.css');

const $mainContent = $('#main-content');

$mainContent.html(require('../html/index.html'));

$('body').on('click', 'a', function() {
  const $this = $(this);
  const target = $this.data('target');

  if (target) {
    const $target = $(target);
    $target.html(require('../html/' + $this.attr('href') + '.html'));
  } else {
    $mainContent.html(require('../html/' + $this.attr('href') + '.html'));
  }

  return false;
});
