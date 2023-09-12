const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env", "@babel/react"] },
          },
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "tsconfig.json"),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|svg)$/i,
        dependency: { not: ["url"] },
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    host: "localhost",
    port: 3000,
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"],
  },
  target: "web",
};
