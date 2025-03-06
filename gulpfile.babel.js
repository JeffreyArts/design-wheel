import gulp from 'gulp';
import webpack from 'webpack';
import path from 'path';
import serve from 'browser-sync';
import del from 'del';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import colorsSupported from 'supports-color';
import historyApiFallback from 'connect-history-api-fallback';

process.noDeprecation = true;

// __dirname is already available in CommonJS, so we don't need to define it manually.

// Source code folder
const root = 'client';

// Map of all paths
const paths = {
  entry: [
    'core-js/stable', // Replace babel-polyfill with core-js
    'regenerator-runtime/runtime', // Include regenerator-runtime for async/await support
    path.join(__dirname, root, 'app/app.js') // Your main entry file
  ],
  dest: 'dist'
};

// Build Task
async function build() {
  const { default: config } = await import('./webpack.dist.config');
  config.entry.app = paths.entry;
  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err) {
        console.error(err);
        return reject(new Error('Webpack build failed'));
      }
      console.log('[webpack]', stats.toString({
        colors: colorsSupported,
        chunks: false,
        errorDetails: false
      }));
      resolve();
    });
  });
}

// Serve Task
async function serveTask() {
  const { default: config } = await import('./webpack.dev.config');
  config.entry.app = ['webpack-hot-middleware/client', ...paths.entry];
  const compiler = webpack(config);
  
  serve.init({
    port: process.env.PORT || 4000,
    open: false,
    server: { baseDir: root },
    middleware: [
      historyApiFallback(),
      webpackDevMiddleware(compiler, {
        stats: {
          colors: colorsSupported,
          chunks: false,
          modules: false
        },
        publicPath: config.output.publicPath
      }),
      webpackHotMiddleware(compiler)
    ]
  });
}

// Clean Task
async function clean() {
  const deletedPaths = await del([paths.dest]);
  console.log('[clean]', deletedPaths);
}

// Default Task: Clean then Serve
const dev = gulp.series(clean, serveTask);
export { build, serveTask, clean };
gulp.task('default', dev);
