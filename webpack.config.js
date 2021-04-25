const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "toc.js",
        library: {
            name: "toc",
            type: "umd",
        },
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin({ filename: "toc.css" })],
    devServer: {
        static: path.join(__dirname, "examples"),
        port: 3000,
    },
};
