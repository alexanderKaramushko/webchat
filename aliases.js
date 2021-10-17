const aliases = (prefix = 'src') => ({
  '@adapters': `${prefix}/adapters`,
  '@application': `${prefix}/application`,
  '@assets': `${prefix}/assets`,
  '@components': `${prefix}/components`,
  '@domain': `${prefix}/domain`,
  '@routes': `${prefix}/routes`,
  '@server': `${prefix}/server`,
  '@utils': `${prefix}/utils`,
});

module.exports = aliases;
