import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import path from "path";
import fs from 'fs';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  external: ['react', 'react-dom'], // Exclude peer dependencies
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json',
      sourceMap: true, // Ensure sourcemaps are enabled
      declaration: true, // Keep declaration files
      declarationDir: "dist", // Store .d.ts files in dist
      noEmit: false }),
    postcss({
      extract: (outputFile) => {
        // Dynamically generate CSS file names based on input file paths
        const componentName = path.basename(outputFile, path.extname(outputFile));
        return `dist/${componentName}.css`;
      },
      modules: true, // Enable CSS Modules
      use: ['sass'], // Use Sass for SCSS files
      minimize: true, // Minify CSS output
      sourceMap: true // Generate source maps for CSS
    })
  ]
};
