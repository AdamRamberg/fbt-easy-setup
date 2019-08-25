const path = require('path');

module.exports = api => {
  api.cache.invalidate(() => process.env.NODE_ENV === 'production');
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: 3,
        },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      [
        'babel-plugin-fbt',
        {
          fbtEnumPath: path.join(__dirname, '.enum_manifest.json'),
        },
      ],
      'babel-plugin-fbt-runtime',
      '@babel/plugin-proposal-class-properties',
    ],
    // NOTE: Needed for enums to work.
    sourceType: 'unambiguous',
  };
};
