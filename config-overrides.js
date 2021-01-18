const {injectBabelPlugin} = require('react-app-rewired');
const WebpackPluginImport = require('webpack-plugin-import');
const rewireSass = require('./rewire-scss');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import',
    {
      libraryName: '@alifd/next',
    }], config);
  
  config.plugins.push(
    new WebpackPluginImport([
      {
        libraryName: /^@alifd\/next\/lib\/([^/]+)/,
        stylePath: 'style.js',
      },
      {
        libraryName: /@alifd\/.*/,
        stylePath: 'style.js',
      },
    ])
  );
  
  config = rewireSass(config);
  
  return config;
};