module.exports = {
  entry:  __dirname + "/src/index.js",
  output: {
   path: __dirname + "/www",
   filename: "bundle.js",
   publicPath: "/",
 },
 devServer: {
    contentBase: "./www",
    historyApiFallback: true,
    inline: true,
  }
};
