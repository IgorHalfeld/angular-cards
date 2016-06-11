(function(angular, window, undefined) {

  angular.module('angularCards', [])

  .run(['$templateCache', function($templateCache) {
    $templateCache.put('src/card.html', '<div class=card><header class=card__header><span class=card__tooltip></span><div class=card__overlay ng-style="{\'background-color\': color}"></div><img alt=""class=card__header--image ng-src={{src}}><h1 class=card__title><small class=card__title--small>{{titleBigWord}},</small>{{titleSmallWord}}</h1></header><article class=card__article><p ng-transclude></article></div>');
  }])

  .directive('card', function() {
    return {
      templateUrl: 'src/card.html',
      retrict: 'E',
      transclude: true,
      scope: {
        titleSmallWord: '@',
        titleBigWord: '@',
        src: '@',
        color: '@'
      }
    };
  });

})(angular, window);
