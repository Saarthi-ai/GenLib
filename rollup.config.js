import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import path from 'path';
import url from '@rollup/plugin-url';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist', // Output each component into its own folder
      format: 'esm',
      sourcemap: true,
      entryFileNames: '[name]/index.js', // Each component gets its own folder
      chunkFileNames: '[name]/[name]-[hash].js',
      assetFileNames: '[name]/[name][extname]' // CSS files will be placed in the same folder
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
      declarationDir: 'dist/types',
      noEmit: false
    }),
    postcss({
      extract: (id) => {
        // Extract CSS into the same folder as the component with .module.css extension
        const componentName = path.basename(path.dirname(id)); // Get the component folder name
        return `dist/components/${componentName}/${componentName}.module.css`;
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
      fileName: 'src/assets/[name]-[hash][extname]', // Output file name format
      destDir: 'dist/src/assets' // Output directory for image files
    }),
    copy({
      targets: [
        {
          src: 'src/components/**/*.module.scss', // Source SCSS files
          dest: 'dist/components', // Destination folder
          rename: (name, extension, fullPath) => {
            // Preserve the folder structure and file name
            const componentName = path.basename(path.dirname(fullPath));
            return `${componentName}/${name}.${extension}`;
          }
        }
      ],
      hook: 'writeBundle' // Ensure copying happens after the bundle is written
    })
  ]
};
