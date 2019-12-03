module.exports = {
  entry:  __dirname + "/src/index.js",
  output: {
   path: __dirname + "/www",
   filename: "bundle.js",
   publicPath: "/",
  }
};
