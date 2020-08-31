define(function (require, exports, module) {
  var utils = require('utils');
  var moduleA = require('./moduleA');
  var moduleB = require('./moduleB');

  console.log('---- entry.js utils', utils);
  console.log('---- entry.js moduleA', moduleA);
  console.log('---- entry.js moduleB', moduleB);

  return {
    init: function () {
      moduleB.init();
      console.log('entry.js', 'init');
    },
  };
});
