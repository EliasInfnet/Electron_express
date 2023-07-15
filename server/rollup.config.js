import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/server.js',
  output: {
    file: 'dist/server.js',
    format: 'cjs'
  },
  external: ['knex'],
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
  ],
};