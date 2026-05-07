import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs',
      format: 'cjs'
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm'
    }
  ],
  plugins: [
    json(),
    commonjs(),
    resolve(),
  ],
  external: [
    '@ellenode/envy', 
    'jsonwebtoken', 
    'dotenv',
    'path'
  ]
};
