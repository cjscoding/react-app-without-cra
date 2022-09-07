const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env) => {
  let mode = env.mode === "development" ? "development" : "development";

  // webpack 설정 부분
  return {
    mode,
    // 애플리케이션의 진입점(entry point). 리액트 앱이 있는 위치와 번들링 프로세스가 시작되는 지점
    entry: `${path.resolve(__dirname, "./src")}/index.tsx`,
    // 컴파일된 파일을 저장할 경로
    output: {
      // 번들된 파일 이름. [hash]는 애플리케이션이 수정되어 다시 컴파일 될 때마다 웹팩에서 생성된 해시로 변경해주어 캐싱에 도움이 됨
      filename: "bundle.[hash].js",
      path: path.resolve(__dirname, "dist"),
      // filename: "[name].[contenthash].js",
      // path: path.resolve(__dirname, "../dist"),
      // publicPath: "./",
      // clean: true,
    },
    // 소스맵(source maps)을 생성해 애플리케이션 디버깅을 도움. 그 중 inline-source-map은 개발 시에만 사용됨
    devtool: "inline-source-map",
    // 애플리케이션 내 포함되는 모듈을 정의(esnext, css 모듈 등)
    module: {
      //각 모듈을 처리하는 방법
      rules: [
        // node_modules 디렉토리를 제외한 ts, tsx, js, jsx 파일을 찾은 후 babel-loader를 통해 바벨을 사용해 바닐라 JS로 변환
        //바벨은 .babelrc 파일에서 설정 내용을 읽음
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        // css 파일을 찾고 style-loader와 css-loader로 css를 처리
        // 그 후 css-loader에게 css 모듈, 카멜케이스, 소스맵을 사용하도록 지시
        // [css 모듈, 카멜케이스]: import ... from '...' 와 같이 구조 해체 문법으로 스타일 정의 가능
        {
          test: /\.(sa|sc|c)ss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    // html-webpack-plugin: 다른 옵션을 가진 객체를 받음
    plugins: [
      new HtmlWebpackPlugin({
        template: `${path.resolve(__dirname, "./public")}/index.html`,
      }),
      new webpack.ProvidePlugin({
        React: "react",
      }),
      // new MiniCssExtractPlugin(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "..src/"),
      },
      extensions: [".js", ".ts", ".jsx", ".tsx", ".css", ".json"],
    },
    // 개발 서버 설정
    devServer: {
      host: "localhost",
      port: 8081,
      historyApiFallback: true,
      open: true,
    },
    // optimization: {
    //   usedExports: true,
    //   minimize: true,
    //   minimizer: [
    //     new TerserPlugin({
    //       terserOptions: {
    //         compress: {
    //           drop_console: true,
    //         },
    //       },
    //     }),
    //     new CssMinimizerPlugin(),
    //   ],
    //   splitChunks: {
    //     chunks: "all",
    //   },
    // },
    // performance: {
    //   hints: false,
    //   maxEntrypointSize: 512000,
    //   maxAssetSize: 512000,
    // },
  };
};
