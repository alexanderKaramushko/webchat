const path = require('path');
const alias = require('./aliases');

const SRC = './src';
const aliases = alias(SRC);

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)]),
);

module.exports = {
  devServer: {
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
  webpack: {
    alias: resolvedAliases,
  },
};
