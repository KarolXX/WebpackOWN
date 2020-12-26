const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: {
        main: './src/message.js',
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../', 'build')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'title from config file',
            filename: 'assets/main.html',
            template: 'src/templates/template.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/images/tirex.jpg', to: 'images' }
            ]
        })
    ]
}