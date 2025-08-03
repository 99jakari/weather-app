const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/weather-app.html",
        }),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),      
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ["html-loader"],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

}