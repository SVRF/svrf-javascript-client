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
    output: {file: 'lib/svrf-api.js', format: 'cjs', indent: false},
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
      nodeResolve({
        jsnext: true,
      }),
      commonjs({
        include: /node_modules/,
      }),
      babel({
        runtimeHelpers: true,
      }),
    ],
  },

  // ES
  {
    input: 'src/index.js',
    output: {file: 'es/svrf-api.js', format: 'es', indent: false},
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
      nodeResolve({
        jsnext: true,
      }),
      commonjs({
        include: /node_modules/,
      }),
      babel({
        runtimeHelpers: true,
      }),
    ],
  },

  // ES for Browsers
  {
    input: 'src/index.js',
    output: {file: 'es/svrf-api.mjs', format: 'es', indent: false},
    plugins: [
      nodeResolve({
        jsnext: true,
        browser: true,
      }),
      commonjs({
        include: /node_modules/,
      }),
      json(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      terser(),
    ],
  },

  // UMD Development
  {
    input: 'src/index.js',
    output: {
      file: 'dist/svrf-api.js',
      format: 'umd',
      name: 'SVRF',
      indent: false,
    },
    plugins: [
      nodeResolve({
        jsnext: true,
        browser: true,
      }),
      commonjs({
        include: /node_modules/,
      }),
      json(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
  },

  // UMD Production
  {
    input: 'src/index.js',
    output: {
      file: 'dist/svrf-api.min.js',
      format: 'umd',
      name: 'SVRF',
      indent: false,
    },
    plugins: [
      nodeResolve({
        jsnext: true,
        browser: true,
      }),
      commonjs({
        include: /node_modules/,
      }),
      json(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      terser(),
    ],
  },
];
