define(['jquery'], function ($) {
  return {
    init: function () {
      var $btn = $('#btn-click');
      $btn.click(function () {
        require(['./handleClick'], function (handleClick) {
          handleClick.init($btn);
        });
      });
    },
  };
});
