let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// const HtmlInjector = require('bs-html-injector');\
const fs = require('fs');
const path = require('path');
mix.webpackConfig({
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: './',
            },
            tunnel: true,
            open: true,
            notify: true,
            files: ["dist/**", "index.html"],
            plugins: [
                {
                    module: "bs-html-injector",
                    options: {
                        files: "index.html",
                    }
                }
            ], 
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss/,
                loader: 'import-glob-loader'
            }
        ]
    }
})
.js('./js/main.js', './dist/main.min.js')
    .sass('./scss/main.scss', './dist/main.min.css', {
        sassOptions: {
            outputStyle: 'compressed',
        }
    })

// Add postCss options
mix.options({
    processCssUrls: false,
    postCss: [
        tailwindcss('./tailwind.config.js')
    ],
});
