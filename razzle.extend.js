/**
 * Replace with custom razzle config when needed.
 * @module razzle.config
 */

const makeLoaderFinder = require('razzle-dev-utils/makeLoaderFinder');
const fileLoaderFinder = makeLoaderFinder('file-loader');
const urlLoaderFinder = makeLoaderFinder('url-loader');
const lessLoaderFinder = makeLoaderFinder('less-loader');
const babelLoaderFinder = makeLoaderFinder('babel-loader');

const plugins = (defaultPlugins) => {
  const newPlugins = defaultPlugins.filter((plugin) => plugin !== 'scss');
  newPlugins.push({
    name: 'scss',
    options: {
      sass: {
        dev: {
          sassOptions: {
            includePaths: ['node_modules'],
            outputStyle: 'expanded',
            sourceMap: true,
            quiet: true,
            quietDeps: true,
          },
        },
        prod: {
          sassOptions: {
            includePaths: ['node_modules'],
            outputStyle: 'expanded',
            sourceMap: true,
            quiet: true,
            quietDeps: true,
          },
        },
      },
    },
  });
  return newPlugins;
};

const modify = (webpackConfig, { target, dev }, webpackObject) => {
  // const urlLoader = webpackConfig.module.rules.find(urlLoaderFinder);
  // urlLoader.exclude = [/\.(png|jpe?g)$/i, ...(urlLoader.exclude || [])];
  // // see: node_modules/razzle/config/createConfig.js
  // const IMG_LOADER = {
  //   test: /\.(png|jpe?g)$/i,
  //   use: [
  //     {
  //       loader: 'url-loader',
  //       options: {
  //         limit: 8192,
  //         name: 'static/media/[name].[hash:8].[ext]',
  //         emitFile: target === 'web',
  //       },
  //     },
  //     {
  //       // currently webpack 5 w/ asset is not supported by webpack-image-resize-loader
  //       // see https://github.com/Calvin-LL/webpack-image-resize-loader/issues/491
  //       // when Volto moves to webpack 5 w/ asset, this loader need to be reevaluated
  //       // or substituted by responsive-loader
  //       loader: 'webpack-image-resize-loader',
  //       // see https://github.com/Calvin-LL/webpack-image-resize-loader for options.
  //       // options: {
  //       //   width: 1000,
  //       // },
  //     },
  //   ],
  // };
  // webpackConfig.module.rules.push(IMG_LOADER);

  //const lessLoader = webpackConfig.module.rules.find(lessLoaderFinder);
  //lessLoader.include.push(/node_modules\/volto-data-grid-widget/);

  // See https://github.com/italia/design-react-kit/pull/885#issuecomment-1420886066
  const babelLoader = webpackConfig.module.rules.find(babelLoaderFinder);
  babelLoader.include.push(/node_modules\/design-react-kit/);

  return webpackConfig;
};

module.exports = {
  modify,
  plugins,
};
