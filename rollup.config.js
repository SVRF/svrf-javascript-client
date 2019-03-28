import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';
import {terser} from 'rollup-plugin-terser';

import pkg from './package.json';

export default [
  // CommonJS
  {
    input: 'src/index.js',
    output: {
      file: 'lib/svrf-client.js',
      format: 'cjs',
      indent: false,
    },
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
      nodeResolve({jsnext: true}),
      commonjs({include: /node_modules/}),
      babel({exclude: 'node_modules/**', runtimeHelpers: true}),
    ],
  },

  // IIFE Development
  {
    input: 'src/index.js',
    output: {
      file: 'dist/svrf-client.js',
      format: 'iife',
      name: 'SVRF',
      indent: false,
    },
    plugins: [
      nodeResolve({jsnext: true, browser: true}),
      commonjs({include: /node_modules/}),
      json(),
      babel({runtimeHelpers: true}),
      replace({'process.env.NODE_ENV': JSON.stringify('development')}),
    ],
  },

  // IIFE Production
  {
    input: 'src/index.js',
    output: {
      file: 'dist/svrf-client.min.js',
      format: 'iife',
      name: 'SVRF',
      indent: false,
    },
    plugins: [
      nodeResolve({jsnext: true, browser: true}),
      commonjs({include: /node_modules/}),
      json(),
      babel({runtimeHelpers: true}),
      replace({'process.env.NODE_ENV': JSON.stringify('production')}),
      terser(),
    ],
  },
];
