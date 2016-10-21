const webpack = require('webpack');
const helpers = require('./helpers');
/*
 * Webpack Plugins
 */
// problem with copy-webpack-plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/*
 * Webpack Constants
 */
const METADATA = {
    title: 'Angular2 WebGUI from Flying Technology Ltd.',
    baseUrl: '/'
};

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = {
    /*
     * Static metadata for index.html
     *
     * See: (custom attribute)
     */
    metadata: METADATA,

    /*
     * The entry point for the bundle
     * Our Angular.js app
     *
     * See: http://webpack.github.io/docs/configuration.html#entry
     */
    entry: {
        'polyfills': helpers.root('src/polyfills.browser.ts'),
        'vendor': helpers.root('src/vendor.browser.ts'),
        'main': helpers.root('src/main.browser.ts')
    },

    /*
     * Options affecting the resolving of modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve
     */
    resolve: {

        /*
         * An array of extensions that should be used to resolve modules.
         *
         * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
         */
        extensions: ['', '.ts', '.js', '.json'],

        // Make sure root is src
        root: helpers.root('src'),

        // remove other default values
        modulesDirectories: ['node_modules']
    },

    /*
     * Options affecting the normal modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#module
     */
    module: {
        /*
         * An array of automatically applied loaders.
         *
         * IMPORTANT: The loaders here are resolved relative to the resource which they are applied to.
         * This means they are not resolved relative to the configuration file.
         *
         * See: http://webpack.github.io/docs/configuration.html#module-loaders
         */
        loaders: [
            /*
             * Typescript loader support for .ts and Angular 2 async AppRoutes via .async.ts
             * Replace templateUrl and stylesUrl with require()
             *
             * See: https://github.com/s-panferov/awesome-typescript-loader
             * See: https://github.com/TheLarkInn/angular2-template-loader
             */
            {
                test: /\.ts$/i,
                loaders: ['ts-loader', 'angular2-template-loader'],
                exclude: [/\.(spec|e2e)\.ts$/]
            },

            /*
             * Json loader support for *.json files.
             *
             * See: https://github.com/webpack/json-loader
             */
            {
                test: /\.json$/i,
                loader: 'json-loader'
            },

            /*
             * less , to string and css loader support for *.less files
             * Returns file content as string
             *
             */
            {
                test: /\.less$/i,
                loaders: ['css-to-string-loader', 'css-loader?sourceMap', 'less-loader?sourceMap'],
                include: helpers.root('src', 'app')
            },
            /*
             * sass , to string and css loader support for *.less files
             * Returns file content as string
             *
             */
            {
                test: /\.scss$/i,
                loaders: ['css-to-string-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
                include: helpers.root('src', 'app')
            },
            /*
             * css to string and css loader support for *.css files (to-string-loader doesn't support url or import)
             * we use loaders to return css as string, which used in styles or styleUrls.
             * Returns file content as string
             *
             */
            {
                test: /\.css$/i,
                loaders: ['css-to-string-loader', 'css-loader?sourceMap'],
                include: helpers.root('src', 'app')
            },

            /*
             * style and css loader support for *.css files
             * we use loaders to extract css as standalone file.
             * Returns file content as string
             *
             */
            {
                test: /\.less$/i,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!less?sourceMap'),
                exclude: helpers.root('src', 'app')
            },

            /*
             * style and css loader support for *.css files
             * we use loaders to extract css as standalone file.
             * Returns file content as string
             *
             */
            {
                test: /\.scss$/i,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap'),
                exclude: helpers.root('src', 'app')
            },

            /*
             * style and css loader support for *.css files
             * we use loaders to extract css as standalone file.
             * Returns file content as string
             *
             */
            {
                test: /\.css$/i,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap'),
                exclude: helpers.root('src', 'app')
            },

            /* Html loader support for *.html
             * Returns file content as string
             *
             * See: https://github.com/webpack/html-loader
             */
            {
                test: /\.html$/i,
                loader: 'html-loader',
                exclude: helpers.root('src/index.html')
            },

            /* url loader for supporting images, for example, in CSS files.
             * If the file is greater than the limit the file-loader is used and all query parameters are passed to it.
             * so we need to install file loader too.
             */
            {
                test: /\.(woff|woff2)(\?v=\d\.\d\.\d)?$/i,
                loader: 'url-loader?limit=4096&mimetype=application/font-woff&name=assets/[name].[hash:8].[ext]'
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico|ttf|eot)(\?v=\d\.\d\.\d)?$/i,
                loader: 'url-loader?limit=4096&name=assets/[name].[hash:8].[ext]'
            }
        ]
    },

    /*
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: [
        /*
         * Plugin: CommonsChunkPlugin
         * Description: Shares common code between the pages.
         * It identifies common modules and put them into a commons chunk.
         *
         * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
         * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
         */
        new webpack.optimize.CommonsChunkPlugin({
            name: ['polyfills', 'vendor', 'main'].reverse()
        }),

        /*
         * Plugin: CopyWebpackPlugin
         * Description: Copy files and directories in webpack.
         *
         * Copies project static assets.
         *
         * See: https://www.npmjs.com/package/copy-webpack-plugin
         */
        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: 'assets'
        }]),

        /*
         * Plugin: HtmlWebpackPlugin
         * Description: Simplifies creation of HTML files to serve your webpack bundles.
         * This is especially useful for webpack bundles that include a hash in the filename
         * which changes every compilation.
         *
         * See: https://github.com/ampedandwired/html-webpack-plugin
         */
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency'
        }),
        /*
         * Plugin: ExtractTextPlugin
         * Description: Extract text from bundle into a file.
         *
         * See: https://github.com/webpack/extract-text-webpack-plugin
         */
        new ExtractTextPlugin('[name].css'),

        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.Tether": "tether"
        }),

        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../dist/dll-manifest.json')
        })
    ]
};
