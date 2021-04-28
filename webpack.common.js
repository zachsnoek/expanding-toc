const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin({ filename: 'toc.css' })],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'toc.js',
        library: {
            name: 'toc',
            type: 'umd',
        },
        clean: true,
    },
};
