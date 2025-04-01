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

const globalEntry = { global: './src/index.ts' }; // Ensure the global entry is correctly defined

// Dynamically detect all components in the src/components folder
const componentsDir = path.resolve(__dirname, 'src/components');
const componentEntries = fs.readdirSync(componentsDir).reduce((entries, dir) => {
  const fullPath = path.join(componentsDir, dir, 'index.ts');
  if (fs.existsSync(fullPath)) {
    entries[dir] = fullPath; // Add component entry
  }
  return entries;
}, {});

// Dynamically detect all .tsx files for components in the src/components folder
const componentTSXFiles = fs.readdirSync(componentsDir).reduce((targets, dir) => {
  const tsxFile = path.join(componentsDir, dir, `${dir}.tsx`);
  if (fs.existsSync(tsxFile)) {
    targets.push({
      src: tsxFile, // Source .tsx file
      dest: `dist/src/components` // Place all .tsx files in a single folder
    });
  }
  return targets;
}, []);

// Dynamically detect all .d.ts files for components in the src/components folder
const componentDeclarationFiles = fs.readdirSync(componentsDir).reduce((targets, dir) => {
  const declarationFile = path.join(componentsDir, dir, `${dir}.d.ts`);
  if (fs.existsSync(declarationFile)) {
    targets.push({
      src: declarationFile, // Source .d.ts file
      dest: `dist/src/components` // Place all .d.ts files in a single folder
    });
  }
  return targets;
}, []);

module.exports = {
  input: './src/index.ts', // Explicitly set the entry point to src/index.ts
  output: [
    {
      dir: 'dist', // Output global entry point to the dist folder
      format: 'esm',
      sourcemap: true,
      entryFileNames: (chunk) =>
        chunk.name === 'global' ? 'index.js' : 'src/components/[name].js', // Place all component files in a single folder
      chunkFileNames: 'src/components/[name]-[hash].js',
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
      declarationDir: 'dist/src', // Place declaration files in dist/src
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
          src: 'dist/types/index.d.ts', // Copy the main TypeScript declaration file
          dest: 'dist' // Place it in the root of the dist folder
        },
        {
          src: 'src/utils/**/*', // Copy all files in the utils folder
          dest: 'dist/src/utils' // Place them in the dist/src/utils folder
        },
        {
          src: 'src/assets/**/*', // Copy all files in the assets folder
          dest: 'dist/src/assets' // Place them in the dist/src/assets folder
        },
        {
          src: 'src/components/**/*.scss', // Copy all SCSS files from components
          dest: 'dist/src/components' // Place them in the dist/src/components folder
        },
        ...componentTSXFiles, // Dynamically copy all .tsx files for components
        ...componentDeclarationFiles // Dynamically copy all .d.ts files for components
      ],
      hook: 'writeBundle' // Ensure copying happens after the bundle is written
    })
  ]
};
