const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  target: "electron-renderer",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: {
                    esmodules: true,
                  },
                },
              ],
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: [/\.s[ac]ss$/i, /\.css$/i],
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
              url: {
                filter: (url) => {
                  // Semantic-UI-CSS has an extra semi colon in one of the URL due to which CSS loader along
                  // with webpack 5 fails to generate a build.
                  // Below if condition is a hack. After Semantic-UI-CSS fixes this, one can replace use clause with just
                  // use: ['style-loader', 'css-loader']
                  if (url.includes("charset=utf-8;;")) {
                    return false;
                  }
                  return true;
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "build", "js"),
  },
};
