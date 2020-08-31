(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = factory())
    : typeof define === 'function' && define.amd
    ? define(factory)
    : (global.mylib = factory());
})(this, function () {
  'use strict';
  var mylib = {};

  mylib.version = '0.0.1';

  mylib.say = function (message) {
    console.log(message);
  };

  return mylib;
});
