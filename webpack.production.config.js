const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin");
var theme = require("./theme.js");
module.exports = {
  target: "web",
  entry: {
    main: ["babel-polyfill", "./src/index.js"],
    vendor: ["redux", "react-redux", "react-router", "react-router-redux", "redux-thunk"]
  },
  output: {
    filename: "[name].[chunkhash:8].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].[chunkhash:8].chunk.js"
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    immutable: "Immutable"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: {
                path: "postcss.config.js" // 这个得在项目根目录创建此文件
              }
            }
          },
          {
            loader: `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 1024,
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      reducers: path.join(__dirname, "src/reducers"),
      components: path.join(__dirname, "src/components"),
      common: path.join(__dirname, "src/components/common"),
      store: path.join(__dirname, "src/store"),
      routes: path.join(__dirname, "src/routes"),
      assets: path.join(__dirname, "src/assets")
    }
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "Output Management"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new CompressionPlugin({
      //asset: "[path].gz[query]",
      algorithm: "gzip",
      test: new RegExp(
        "\\.(js|css)$" //压缩 js 与 css
      ),
      threshold: 10240 //只处理比这个值大的资源。按字节计算
    })
  ],
  mode: "production",
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
};
