import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const baseConfig = {
  input: 'src/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
};

const cjs = {
  output: {
    file: `dist/${pkg.main}`,
    format: 'cjs',
  },
  ...baseConfig,
};

const esm = {
  output: {
    file: `dist/${pkg.module}`,
    format: 'esm',
  },
  ...baseConfig,
};

export default [cjs, esm];
