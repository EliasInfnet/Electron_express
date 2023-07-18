import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/server.js',
  output: {
    file: 'dist/server.js',
    format: 'cjs'
  },
  external: ['knex', 'better-sqlite3'],
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
  ],
};