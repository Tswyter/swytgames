import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss';
import html2 from 'rollup-plugin-html2';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import path from 'path';

export default {
  input: './main.js',
  output: {
    preserveModules: true,
    dir: 'dist',
    format: 'es'
  },
  watch: {
    exclude: ['node_modules/**']
  },
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    scss({
      output: './dist/styles.css',
      watch: 'src/scss'
    }),
    html2({
      template: './template.html'
    }),
    serve({
      open: true,
      contentBase: 'dist',
      host: 'localhost',
      port: '8080'
    }),
    livereload({
      watch: 'dist',
      exts: ['html', 'js', 'scss', 'sass', 'css']
    })
  ]
};