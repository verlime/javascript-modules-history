require.config({
  baseUrl: 'js/',
  paths: {
    jquery: './lib/jquery',
    utils: './utils/index',
  },
});

require(['./entry'], function (entry) {
  entry.init();
});
