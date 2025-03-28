import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import url from '@rollup/plugin-url';
import sass from 'sass'; // Import Dart Sass explicitly
import path from 'path';
import fs from 'fs'; // Import Node.js file system module

// Dynamically detect all components in the src/components folder
const componentsDir = path.resolve(__dirname, 'src/components');
const componentEntries = fs.readdirSync(componentsDir).reduce((entries, dir) => {
  const fullPath = path.join(componentsDir, dir, 'index.ts');
  if (fs.existsSync(fullPath)) {
    entries[dir] = fullPath; // Add component entry
  }
  return entries;
}, {});

// Add a global entry point for the library
const globalEntry = { global: './src/index.ts' };

export default {
  input: { ...globalEntry, ...componentEntries }, // Include global entry and components
  output: [
    {
      dir: 'dist', // Output global entry point to the dist folder
      format: 'esm',
      sourcemap: true,
      entryFileNames: (chunk) =>
        chunk.name === 'global' ? 'index.js' : 'src/components/[name]/index.js', // Global entry as index.js
      chunkFileNames: 'src/components/[name]/[name]-[hash].js',
      assetFileNames: 'src/assets/[name]-[hash][extname]' // Emit assets in the assets folder
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
      declarationDir: 'dist/src/components', // Match Rollup's dir option
      noEmit: false, // Ensure TypeScript emits compiled files
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js'] // Include .ts, .tsx, and .js files
    }),
    postcss({
      extract: (id) => {
        // Extract CSS into the same folder as the component with .module.css extension
        const componentName = path.basename(path.dirname(id)); // Get the component folder name
        return `dist/src/components/${componentName}/${componentName}.module.css`;
      },
      modules: true, // Enable CSS Modules
      use: [
        ['sass', { implementation: sass }] // Use Dart Sass explicitly
      ],
      minimize: true, // Minify CSS output
      sourceMap: true // Generate source maps for CSS
    }),
    url({
      include: ['**/*.svg', '**/*.png', '**/*.webp'], // Include image formats
      limit: 0, // Emit all files instead of inlining them
      emitFiles: true, // Ensure files are emitted to the output directory
      fileName: 'src/assets/[name]-[hash][extname]', // Output file name format
      destDir: 'dist/src/assets' // Output directory for image files
    }),
    copy({
      targets: [
        {
          src: 'src/components/**/*.module.scss', // Source SCSS files
          dest: 'dist/src/components', // Destination folder
          rename: (name, extension, fullPath) => {
            // Preserve the folder structure and file name
            const componentName = path.basename(path.dirname(fullPath));
            return `${componentName}/${name}.${extension}`;
          }
        },
        {
          src: 'src/utils/**/*', // Copy all files in the utils folder
          dest: 'dist/src/utils' // Place them in the dist/src/utils folder
        },
        {
          src: 'src/assets/**/*', // Copy all files in the assets folder
          dest: 'dist/src/assets' // Place them in the dist/src/assets folder
        }
      ],
      hook: 'writeBundle' // Ensure copying happens after the bundle is written
    })
  ]
};