define(['jquery'], function($) {
  'use strict';

  var toggleMenuDirective = function() {
    return {
      restrict: 'E',
      //templateUrl: '/scripts/directives/toggle-menu/toggle-menu.html',
      template: '<a href="#menu-toggle" class="btn btn-default" id="menu-toggle">Toggle Menu</a>',
      link:  function(scope, element) {
        $(element[0].firstChild).on('click', function(e) {
          e.preventDefault();
          $('#wrapper').toggleClass('toggled');
        });
      }
    }
  };

  return toggleMenuDirective;
});
