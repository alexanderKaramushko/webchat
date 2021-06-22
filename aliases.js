const aliases = (prefix = 'src') => ({
  '@assets': `${prefix}/assets`,
  '@components': `${prefix}/components`,
  '@routes': `${prefix}/routes`,
  '@utils': `${prefix}/utils`,
  '@server': `${prefix}/server`,
});

module.exports = aliases;
