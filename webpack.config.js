const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
const { initRunIcon } = require("run-success-icon"); //  handlerRunConfig,
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const webpack = require("webpack");

const urls = ["buddha", "giraffe", "poetry", "beauty"];
//随机从数组中获取一个值
const str = urls[Math.floor(Math.random() * urls.length)];

module.exports = {
  devServer: {
    historyApiFallback: true,
    static: {
      // 启动文件
      directory: path.join(__dirname, "public"),
    },
    client: {
      // progress: true,
    },
    compress: true,
    hot: true, // 热更新
    port: 7000, // 端口
    // open: true, // 启动打开
    // proxy: {
    //   // 代理
    //   "/api": {
    //     target: "http://localhost:3000",
    //     pathRewrite: { "^/api": "" },
    //   },
    // },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".vue", "json"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  mode: "development",
  entry: path.resolve(__dirname, "./src/mian.ts"),
  stats: "errors-only",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    // publicPath: "/dist",
  },
  module: {
    rules: [
      // 编译vue
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      // 编译css
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // 配置 ts-loader
      {
        test: /\.([cm]?ts|tsx)$/,
        loader: "ts-loader",
        options: { appendTsSuffixTo: [/\.vue$/] },
      },
      // 不编译node_modules下的文件
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    // 输出html模板
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
      filename: "index.html",
      title: "手搭 webpack5 + vue3",
    }),
    // 编译 vue文件
    new VueLoaderPlugin(),
    // 清空 dist
    new CleanWebpackPlugin(),
    // 控制终端输出
    new FriendlyErrorsWebpackPlugin({
      // 成功的时候输出
      compilationSuccessInfo: {
        // messages: [`Your application is running here: http://localhost:8080`],
        // messages: [handlerRunConfig()],
        messages: [initRunIcon({ iconType: str })],
      },
      // 是否每次都清空控制台
      clearConsole: true,
    }),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
};
