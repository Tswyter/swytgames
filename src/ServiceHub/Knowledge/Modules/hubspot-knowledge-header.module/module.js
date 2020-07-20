$(document).ready(function() {
  $(window).bind('hashchange', function() {
    var hash = window.location.hash;
    var navMenuOpen = hash === '#kb-header';
    $('body').toggleClass('kb__header-nav-open', navMenuOpen);
  });
});