var sidebar = function(_instance) {
    var TOP_OFFSET = 56,
        BOTTOM_OFFSET = 100,
        FIXED_CSS_CLASS = 'fixed',
        FIXED_BOTTOM_CSS_CLASS = 'fixed-bottom';
    var el = _instance,
        sidebar = el.children('ul'),
        originalTop = el.offset().top,
        originalWidth = el.outerWidth(),
  			originalSidebarHeight = sidebar.outerHeight();

    var scrollingSidebar = function() {
      var scrollTop = $(window).scrollTop(),
        headerHeight = $('.header-container-wrapper').outerHeight(),
        bodyHeight = $('.body-container-wrapper').outerHeight(),
        hasScrolledPastTheTop = scrollTop > (originalTop - TOP_OFFSET),
        hasReachedTheFooter = (scrollTop + TOP_OFFSET + originalSidebarHeight + BOTTOM_OFFSET) >= (headerHeight + bodyHeight);

      if (hasScrolledPastTheTop && !hasReachedTheFooter) {
        el.removeClass(FIXED_BOTTOM_CSS_CLASS);
        el.addClass(FIXED_CSS_CLASS);
        sidebar.css({ position:'fixed', top: TOP_OFFSET, bottom: 'auto', width: originalWidth });
      } else if (hasReachedTheFooter) {
        el.removeClass(FIXED_CSS_CLASS);
        el.addClass(FIXED_BOTTOM_CSS_CLASS);
        sidebar.css({ position:'absolute', top: 'auto', bottom: BOTTOM_OFFSET, width: originalWidth });
      } else {
        el.removeClass(FIXED_CSS_CLASS);
        el.removeClass(FIXED_BOTTOM_CSS_CLASS);
        sidebar.css({ position: 'static', top: 'auto', bottom: 'auto' });
      }
    }

    $('.kb-category-menu svg').on('click',function(e){
      e.preventDefault();
      $(this).closest('li').toggleClass('open');
      currentSidebarHeight = sidebar.outerHeight();
    });

    $(window).on('scroll',function() {
  		scrollingSidebar();
    });
    scrollingSidebar();
  }

  $('.kb-category-menu').each(function() {
    if ($(this).closest('.span4').outerHeight() < $(this).closest('.span4').siblings('.span8').outerHeight()) {
      $(this).closest('.span12').css({position:'relative'});
    	sidebar($(this));
    }
  });