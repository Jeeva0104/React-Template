const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/, loader: 'html',
                exclude: /index\.html$/
            },
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {
                test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        disableHostCheck: true,   // That solved it
    },
    plugins: [
        new HtmlWebPackPlugin({
            // favicon: "src/assets/favicon.png",
            template: __dirname + "/src/index.html",
            filename: "./index.html"
        }),
    ],
    // optimization: {
    //     minimizer: [
    //         new UglifyJsPlugin({
    //             extractComments: true,
    //             uglifyOptions: {
    //                 compress: {
    //                     drop_console: true,
    //                 }
    //             }
    //         })
    //     ]
    // }
}
