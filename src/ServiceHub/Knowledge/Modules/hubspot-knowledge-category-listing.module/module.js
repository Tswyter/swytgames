  var kbSmoothScroll = function() {
    var linksArray = $('.open a');
    var updateActiveMenuItem = function(selectedItemPath) {
      linksArray.parent('li').removeClass('active');
      $('a[href="' + selectedItemPath + '"]').parent('li').addClass("active");
    };
    linksArray.each(function() {
      $(this).on('click', function(e) {
        e.preventDefault();
        var decodedHash = decodeURI(e.target.hash);
        var targetPathWithHash = e.target.pathname + decodedHash;
        var clickedState = {
          path: targetPathWithHash,
          parentCat: e.target.pathname.replace('/', ''),
          childCat: decodedHash.replace('#', '')
        };
        $('.kb-mobile-header').removeClass('menu-open');
        scrollToCategory(clickedState);
        history.pushState(clickedState, '', e.target.href);
      });
    });
    var scrollToCategory = function(passedState) {
      var selectedId = passedState.childCat || passedState.parentCat;
      updateActiveMenuItem(passedState.path);
      $('html, body').animate({
        scrollTop: $("#" + selectedId).offset().top
      }, 500);
    };
    var scrollToCategoryNoAnimation = function(passedState) {
      var selectedId = passedState.childCat || passedState.parentCat;
      updateActiveMenuItem(passedState.path);
    }
    window.addEventListener('popstate', function(e) {
      if (e.state !== undefined) {
        scrollToCategory(e.state);
      }
    });
    var init = (function() {
      initialState = {
        path: window.location.pathname,
        parentCat: window.location.pathname.replace('/', ''),
        childCat: window.location.hash.substr(1)
      };
      scrollToCategoryNoAnimation(initialState);
    })();
  }

  $('.kb-category-menu').each(function() {
    kbSmoothScroll($(this));
  });