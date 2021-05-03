const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "../src", "index.ts"),
  output: {
    publicPath: "/",
    filename: "app.js",
    path: path.join(__dirname, "../dist"),
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@app": path.resolve(__dirname, "../src"),
    },
  },
  externals: [nodeExternals()],
  plugins: [new CleanWebpackPlugin()],
};
