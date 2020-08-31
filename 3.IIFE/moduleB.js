(function (modA) {
  var moduleB = window.moduleB || {};

  moduleB.average = function (a, b) {
    return modA.add(a, b) / 2;
  };

  window.moduleB = moduleB;
})(moduleA);
