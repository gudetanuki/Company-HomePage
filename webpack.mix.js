const mix = require('laravel-mix');
require('laravel-mix-ejs')

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
.js('src/js/main.js', dist + '/js/')
.ejs('src/html/index.ejs', dist )
.ejs('src/html/service.ejs', dist )
.ejs('src/html/contact-form.ejs', dist )
.ejs('src/html/company.ejs', dist )
.sass('src/scss/style.scss', dist + '/css/')
.sass('src/scss/contact-form.scss', dist + '/css/')
.sass('src/scss/company.scss', dist + '/css/')
.sass('src/scss/service.scss', dist + '/css/')
.options({
  processCssUrls: false
})


if (mix.inProduction()) {
  mix.version();
} else {
  mix.sourceMaps();
}

