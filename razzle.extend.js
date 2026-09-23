/**
 * Replace with custom razzle config when needed.
 * @module razzle.config
 */

/**
 * This file is required through the `io-sanita-theme` symlink inside a
 * consuming site's node_modules. Node resolves symlinked modules to their real
 * filesystem path before processing further requires, so a plain
 * `require('@plone/razzle-dev-utils/...')` here would search this repo's own
 * (sibling, unrelated) directory tree instead of the consuming site's
 * node_modules. Anchor the resolution to process.cwd() — razzle always runs
 * with the site's root as the working directory — to find the real package.
 */
const makeLoaderFinder = require(
  require.resolve('@plone/razzle-dev-utils/makeLoaderFinder', {
    paths: [process.cwd()],
  }),
);
// const fileLoaderFinder = makeLoaderFinder('file-loader');
// const urlLoaderFinder = makeLoaderFinder('url-loader');
// const lessLoaderFinder = makeLoaderFinder('less-loader');
const babelLoaderFinder = makeLoaderFinder('babel-loader');

// Volto 19 passes plugins as objects, not bare strings, so the previous
// `plugin !== 'scss'` never matched and the default scss plugin was kept
// alongside ours. It also no longer resolves a plugin by name alone, hence
// the explicit `object:`.
const sassOptions = {
  includePaths: ['node_modules'],
  outputStyle: 'expanded',
  sourceMap: true,
  quiet: true,
  quietDeps: true,
  // Bootstrap Italia and design-react-kit still use the legacy sass APIs;
  // without this every build prints thousands of deprecation warnings.
  silenceDeprecations: [
    'import',
    'global-builtin',
    'color-functions',
    'legacy-js-api',
  ],
};

const plugins = (defaultPlugins) => {
  const newPlugins = defaultPlugins.filter((plugin) => plugin.name !== 'scss');
  newPlugins.push({
    name: 'scss',
    object: require(
      require.resolve('@plone/volto/webpack-plugins/webpack-scss-plugin', {
        paths: [process.cwd()],
      }),
    ),
    options: {
      sass: {
        dev: { sassOptions },
        prod: { sassOptions },
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
