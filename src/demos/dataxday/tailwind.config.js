/* eslint-disable import/no-commonjs */
const _ = require('lodash');
const defaultConfig = require('../../../tailwind.config.js');

module.exports = _.merge(defaultConfig, {
  colors: {
    orange: '#f0830c',
  },
});
