import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import url from '@rollup/plugin-url';
import sass from 'sass'; // Import Dart Sass explicitly
import path from 'path';

export default {
  input: './src/index.ts', // Explicitly set the entry point to src/index.ts
  output: [
    {
      dir: 'dist', // Output everything to the dist folder
      format: 'esm',
      sourcemap: false, // Disable source map generation
      entryFileNames: 'index.js', // Ensure the global entry is named index.js
      chunkFileNames: 'components/[name]-[hash].js', // Place component chunks in components folder
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
      sourceMap: false, // Disable source maps for TypeScript
      declaration: true,
      declarationDir: 'dist/components', // Place declaration files directly in dist/components
      noEmit: false, // Ensure TypeScript emits compiled files
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js'] // Include .ts, .tsx, and .js files
    }),
    postcss({
      extract: (id) => {
        const componentName = path.basename(path.dirname(id)); // Get the component folder name
        return `dist/components/${componentName}/${componentName}.module.css`; // Place CSS in the same folder as the JS file
      },
      modules: true, // Enable CSS Modules
      use: [
        ['sass', { implementation: sass }] // Use Dart Sass explicitly
      ],
      minimize: true, // Minify CSS output
      sourceMap: false // Disable source maps for CSS
    }),
    url({
      include: ['**/*.svg', '**/*.png', '**/*.webp'], // Include image formats
      limit: 0, // Emit all files instead of inlining them
      emitFiles: true, // Ensure files are emitted to the output directory
      fileName: 'assets/[name]-[hash][extname]', // Output file name format
      destDir: 'dist/assets' // Output directory for image files
    }),
    copy({
      targets: [
        {
          src: 'src/utils/**/*', // Copy all files in the utils folder
          dest: 'dist/utils' // Place them in the dist/utils folder
        },
        {
          src: 'src/assets/**/*', // Copy all files in the assets folder
          dest: 'dist/assets' // Place them in the dist/assets folder
        },
        {
          src: 'src/components/**/*.scss', // Copy all SCSS files from components
          dest: 'dist/components' // Place them in the dist/components folder
        }
      ],
      hook: 'writeBundle' // Ensure copying happens after the bundle is written
    })
  ]
};