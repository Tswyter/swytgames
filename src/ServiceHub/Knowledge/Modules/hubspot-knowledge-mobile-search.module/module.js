  $('.kb-search').each(function(){
    var hsSearchModule = hsSearch($(this));
  });
  /* TODO: Refactor */
  $('.kb-mobile-menu__current-page').on('click',function() {
  	$('.kb-mobile-header').toggleClass('menu-open');
  });
  $('.kb-mobile-search__mag').on('click',function() {
  	$('.kb-mobile-header').toggleClass('search-open');
    if ($('.kb-mobile-header').hasClass('search-open')) {
      $('.kb-mobile-search__input').focus();
    }
  });
  $('.kb-mobile-search__close').on('click',function() {
  	$('.kb-mobile-header').removeClass('search-open');
  });