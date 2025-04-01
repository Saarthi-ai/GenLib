const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const postcss = require('rollup-plugin-postcss');
const copy = require('rollup-plugin-copy');
const url = require('@rollup/plugin-url');
const sass = require('sass'); // Import Dart Sass explicitly
const path = require('path');
const fs = require('fs'); // Import Node.js file system module

// Dynamically detect all components in the src/components folder
const componentsDir = path.resolve(__dirname, 'src/components');
const componentEntries = fs.readdirSync(componentsDir).reduce((entries, dir) => {
  const fullPath = path.join(componentsDir, dir, 'index.ts');
  if (fs.existsSync(fullPath)) {
    entries[dir] = fullPath; // Add component entry
  }
  return entries;
}, {});

module.exports = {
  input: './src/index.ts', // Explicitly set the entry point to src/index.ts
  output: [
    {
      dir: 'dist', // Output global entry point to the dist folder
      format: 'esm',
      sourcemap: true,
      entryFileNames: 'index.js', // Main entry point as index.js
      chunkFileNames: 'components/[name]-[hash].js', // Chunk files for components
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
      declarationDir: 'dist', // Place declaration files directly in dist
      noEmit: false, // Ensure TypeScript emits compiled files
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js'] // Include .ts, .tsx, and .js files
    }),
    postcss({
      extract: (id) => {
        // Extract CSS into the same folder as the component with .module.css extension
        const componentName = path.basename(path.dirname(id)); // Get the component folder name
        return `dist/components/${componentName}/${componentName}.module.css`;
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
        }
      ],
      hook: 'writeBundle' // Ensure copying happens after the bundle is written
    })
  ]
};
