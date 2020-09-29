const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
    console.log("env", env)
    return {
        entry: {
            'bundle.min.css': [
                path.resolve(__dirname, 'assets/css') + '/global.css',
                path.resolve(__dirname, 'assets/css') + '/home.css',
                path.resolve(__dirname, 'assets/css') + '/header.css',
                path.resolve(__dirname, 'assets/css') + '/security.css',
                path.resolve(__dirname, 'assets/css') + '/faq.css',
                path.resolve(__dirname, 'assets/css') + '/footer.css',
                path.resolve(__dirname, 'assets/css') + '/legal.css',
                path.resolve(__dirname, 'assets/css') + '/transfers.css',
                path.resolve(__dirname, 'assets/css') + '/payments.css',
                path.resolve(__dirname, 'assets/css') + '/charge.css',
                path.resolve(__dirname, 'assets/css') + '/investment.css',
                path.resolve(__dirname, 'assets/css') + '/card.css',
                path.resolve(__dirname, 'assets/css') + '/promotions.css',
                path.resolve(__dirname, 'assets/css') + '/extractions.css',
                path.resolve(__dirname, 'assets/css') + '/about.css',
                path.resolve(__dirname, 'assets/css') + '/press.css',
                path.resolve(__dirname, 'assets/css') + '/carrers.css'
            ],
            'bundle.js': path.resolve(__dirname, 'assets/scripts') + '/app.ts'
        }, 
        output: {
            filename: '[name]',
            path: path.resolve(__dirname, 'dist'),
        },
        performance: { hints: false },
        optimization: {
            minimizer: [
            new TerserPlugin({
                terserOptions: {
                output: {
                    comments: false,
                },
                },
            }),
            ],
        },
        plugins: [
            new ExtractTextPlugin("bundle.min.css"),
            new webpack.DefinePlugin({
                "process.env": JSON.stringify(env)
            })
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
            }),
                },
                {
                    test: require.resolve('jquery'),
                    use: [{
                        loader: 'expose-loader',
                        options: '$'
                    }]
                },
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'dist/fonts/'
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js", ".css"]
        },
        devtool: "source-map"
    };

}