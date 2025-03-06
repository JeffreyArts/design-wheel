const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {},
  mode: 'development', // or 'production' depending on your environment
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {loader: 'sass-loader', options: {implementation: require('sass')}}
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {targets: 'defaults'}]],
            plugins: [
              ['@babel/plugin-proposal-decorators', {legacy: true}],
              ['angularjs-annotate', {explicitOnly: true}],
              'lodash'
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset',
        parser: {dataUrlCondition: {maxSize: 8192}}
      },
      {
        test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {filename: 'fonts/[name][ext]'}
      },
      {
        test: /\.(ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {filename: 'fonts/[name][ext]'}
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      inject: 'body'
    }),

    // new CopyWebpackPlugin({
    //   patterns: [
    //     {from: 'client/fonts', to: 'fonts'},
    //     {from: 'client/img', to: 'img'}
    //   ]
    // }),

    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: {quality: [0.7, 1.0]},
      svgo: {plugins: [{removeViewBox: false}]}
    })
  ],

  optimization: {
    splitChunks: {chunks: 'all'}
  }
};
