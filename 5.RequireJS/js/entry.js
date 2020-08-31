define(['utils', './moduleA', './moduleB'], function (utils, moduleA, moduleB) {
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
