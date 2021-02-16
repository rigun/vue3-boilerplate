const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  runtimeCompiler: true,
  publicPath: process.env.VUE_APP_PATH,
  module: {
    rules: [
      {
        test: /\.s|css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
    ]
  },
  configureWebpack: {
    plugins: [
      new TerserPlugin({
      terserOptions: {
         compress: {
             drop_console: true
         }
        }
    }),
    new MiniCssExtractPlugin({ filename: "[name].[hash].css" })],
  },
  pluginOptions: {
    i18n: {
      locale: process.env.VUE_APP_I18N_LOCALE,
      fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE,
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  pwa: {
      name: 'MyApps',
      workboxPluginMode: "InjectManifest",
      workboxOptions:{
          swSrc: "src/service-worker.js",
          exclude: [/\.(?:json)$/],
      }
  }
}
