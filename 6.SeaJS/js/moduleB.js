define(function (require, exports, module) {
  return {
    init: function () {
      var $btn = $('#btn-click');
      $btn.click(function () {
        var handleClick = require('handleClick');

        handleClick.init($btn);
      });
    },
  };
});
