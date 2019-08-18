module.exports = api => {
  api.cache.invalidate(() => process.env.NODE_ENV === 'production');
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: ['last 1 versions', 'ie >= 10'],
          },
          modules: false,
          loose: true,
        },
      ],
      '@babel/preset-react',
    ],
    plugins: ['@babel/plugin-syntax-export-default-from'],
  };
};
