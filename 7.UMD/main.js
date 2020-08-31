requirejs.config({
  baseUrl: './',
});

require(['./mylib'], function (mylib) {
  mylib.say('hello');
});
