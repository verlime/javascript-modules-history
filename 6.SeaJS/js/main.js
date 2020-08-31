seajs.config({
  base: './js/',
  alias: {
    jquery: 'lib/jquery',
    utils: 'utils/index',
  },
});

seajs.use(['jquery', 'entry'], function ($, entry) {
  entry.init();
});
