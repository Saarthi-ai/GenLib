import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import url from '@rollup/plugin-url';
import path from 'path';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/src', // Match TypeScript's outDir
      format: 'esm',
      sourcemap: true,
      entryFileNames: '[name]/index.js', // Each component gets its own folder
      chunkFileNames: '[name]/[name]-[hash].js',
      assetFileNames: 'assets/[name]-[hash][extname]' // Emit assets in the assets folder
    }
  ],
  external: ['react', 'react-dom'], // Exclude peer dependencies
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      sourceMap: true,
      declaration: true,
      declarationDir: 'dist/src', // Match Rollup's dir option
      noEmit: false, // Ensure TypeScript emits compiled files
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js'] // Include .ts, .tsx, and .js files
    }),
    postcss({
      extract: (id) => {
        // Extract CSS into the same folder as the component with .module.css extension
        const componentName = path.basename(path.dirname(id)); // Get the component folder name
        return `dist/src/${componentName}/${componentName}.module.css`;
      },
      modules: true, // Enable CSS Modules
      use: ['sass'], // Use Sass for SCSS files
      minimize: true, // Minify CSS output
      sourceMap: true // Generate source maps for CSS
    }),
    url({
      include: ['**/*.svg', '**/*.png', '**/*.webp'], // Include image formats
      limit: 0, // Emit all files instead of inlining them
      emitFiles: true, // Ensure files are emitted to the output directory
      fileName: 'assets/[name]-[hash][extname]', // Output file name format
      destDir: 'dist/src' // Output directory for image files
    }),
    copy({
      targets: [
        {
          src: 'src/components/**/*.module.scss', // Source SCSS files
          dest: 'dist/src', // Destination folder
          rename: (name, extension, fullPath) => {
            // Correctly resolve the component folder name
            const componentName = path.basename(path.dirname(fullPath));
            return `${componentName}/${name}.${extension}`;
          }
        },
        {
          src: 'src/components/**/*.tsx', // Source TypeScript files
          dest: 'dist/src', // Destination folder
          rename: (name, extension, fullPath) => {
            // Correctly resolve the component folder name
            const componentName = path.basename(path.dirname(fullPath));
            return `${componentName}/${name}.${extension}`;
          }
        }
      ],
      hook: 'writeBundle' // Ensure copying happens after the bundle is written
    })
  ]
};