import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const config = {
  input: './index.ts', // Ensure the input path is correct
  output: [
    {
      file: './dist/index.cjs.js', // Ensure output paths are correct
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: './dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: ['tslib'], // Mark tslib as an external dependency
  plugins: [
    peerDepsExternal(), // Exclude peer dependencies from the bundle
    resolve(), // Resolve node_modules
    commonjs(), // Convert CommonJS modules to ES6
    typescript({ tsconfig: './tsconfig.json' }), // Use the correct tsconfig path
  ],
};

export default config; // Ensure a valid options object is exported
