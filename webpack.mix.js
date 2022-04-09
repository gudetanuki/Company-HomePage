const mix = require('laravel-mix');
const dist = 'dist';

mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.scss/,
        enforce: "pre",
        loader: 'import-glob-loader'
      }
    ]
  }
})
.setPublicPath(dist)
.js('src/js/index.js', dist + '/js/')
.sass('src/scss/style.scss', dist + '/css/')
.options({
  processCssUrls: false
})


if (mix.inProduction()) {
  mix.version();
} else {
  mix.sourceMaps();
}