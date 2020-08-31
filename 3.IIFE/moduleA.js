var moduleA = (function () {
  var bar = 1; // 私有属性
  var moduleA = {};

  // 私有方法
  function getBar() {
    return bar;
  }

  moduleA.add = function (a, b) {
    return a + b;
  };

  moduleA.foo = function () {
    return getBar();
  };

  return moduleA;
})();

// (function (window) {
//   var moduleA = window.moduleA || {};

//   moduleA.add = function (a, b) {
//     return a + b;
//   };

//   moduleA.foo = function () {};

//   window.moduleA = moduleA;
// })(window);
