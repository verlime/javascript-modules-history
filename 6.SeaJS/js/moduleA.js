define(function (require, exports, module) {
  return {
    a: function () {
      var utils = require('utils');

      utils.formatDate();
      console.log('moduleA.js');
    },
  };
});
