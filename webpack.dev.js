const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devServer: {
        static: path.join(__dirname, "examples"),
        port: 3000,
        open: {
            app: ["Google Chrome"],
        },
    },
});
