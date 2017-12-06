const { environment } = require('@rails/webpacker');

environment.loaders.set('less', {
  test: /\.less$/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'less-loader',
    },
  ],
});

module.exports = environment;
