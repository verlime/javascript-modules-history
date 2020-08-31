define(['utils'], function (utils) {
  return {
    a: function () {
      utils.formatDate();
      console.log('moduleA.js');
    },
  };
});
