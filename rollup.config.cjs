const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const postcss = require('rollup-plugin-postcss');
const copy = require('rollup-plugin-copy');
const url = require('@rollup/plugin-url');
const sass = require('sass');
const path = require('path');
const fs = require('fs');

const componentsDir = path.resolve(__dirname, 'src/components');
const componentEntries = fs.readdirSync(componentsDir).reduce((entries, dir) => {
  const fullPath = path.join(componentsDir, dir, 'index.tsx'); 
  if (fs.existsSync(fullPath)) {
    entries[dir] = fullPath;
  }
  return entries;
}, {});


const globalEntry = { global: './src/index.ts' };

module.exports = {
  input: { ...globalEntry, ...componentEntries },
  output: [
    {
      dir: 'dist', 
      format: 'esm',
      sourcemap: true,
      entryFileNames: (chunk) =>
        chunk.name === 'global' ? 'index.js' : 'components/[name]/index.js', // Match output structure
      chunkFileNames: 'components/[name]/[name]-[hash].js',
      assetFileNames: 'assets/[name]-[hash][extname]' // Match new asset path
    }
  ],
  external: ['react', 'react-dom'], // Ensure React is not bundled
  plugins: [
    peerDepsExternal(), // First to exclude peer dependencies
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
    //   sourceMap: true,
      declaration: true,
      declarationDir: 'dist/components', // Match output structure
      noEmit: false,
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js']
    }),
    postcss({
      extract: (id) => {
        const componentName = path.basename(path.dirname(id));
        return `dist/components/${componentName}/${componentName}.module.css`;
      },
      modules: true,
      use: [['sass', { implementation: sass }]],
      minimize: true,
      sourceMap: true
    }),
    url({
      include: ['**/*.svg', '**/*.png', '**/*.webp'],
      limit: 0,
      emitFiles: true,
      fileName: 'assets/[name]-[hash][extname]', // Correct asset path
      destDir: 'dist/assets'
    }),
    copy({
      targets: [
        {
          src: 'src/components/**/*.module.scss',
          dest: 'dist/components',
          rename: (name, extension, fullPath) => {
            const componentName = path.basename(path.dirname(fullPath));
            return `${componentName}/${name}.${extension}`;
          }
        },
        {
          src: 'src/utils/**/*',
          dest: 'dist/utils'
        },
        {
          src: 'src/assets/**/*',
          dest: 'dist/assets'
        }
      ],
      hook: 'writeBundle'
    })
  ]
};
