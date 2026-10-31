(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll('[data-set-lang]');

  function mark() {
    var current = root.getAttribute('data-lang');
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-set-lang') === current ? 'true' : 'false');
    });
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      var v = b.getAttribute('data-set-lang');
      root.setAttribute('data-lang', v);
      root.setAttribute('lang', v === 'en' ? 'en' : 'ja');
      try { localStorage.setItem('lang', v); } catch (e) {}
      mark();
    });
  });

  if (root.getAttribute('data-lang') === 'en') root.setAttribute('lang', 'en');
  mark();
})();
