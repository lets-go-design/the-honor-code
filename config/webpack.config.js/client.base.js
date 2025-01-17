const path = require('path')
const paths = require('../paths')
const { client: clientLoaders } = require('./loaders')
const resolvers = require('./resolvers')
const plugins = require('./plugins')

const publicPath = process.env.NODE_ENV === 'production' ? `${paths.cdn}` : paths.publicPath

module.exports = {
  name: 'client',
  target: 'web',
  entry: {
    bundle: [require.resolve('@babel/polyfill'), `${paths.src}/index.js`]
  },
  output: {
    path: paths.clientBuild,
    filename: 'bundle.js',
    publicPath: publicPath,
    chunkFilename: '[name].[chunkhash:8].chunk.js'
  },
  module: {
    rules: clientLoaders
  },
  resolve: { ...resolvers },
  plugins: [...plugins.shared, ...plugins.client],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  optimization: {
    namedModules: true,
    noEmitOnErrors: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  stats: {
    cached: false,
    cachedAssets: false,
    chunks: false,
    chunkModules: false,
    colors: true,
    hash: false,
    modules: false,
    reasons: false,
    timings: true,
    version: false
  }
}
