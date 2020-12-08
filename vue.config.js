module.exports = {
  // lintOnSave: false
  devServer: {
    proxy: {
      "/ajax": {
        target: "https://m.maoyan.com",
        ws: true,
        changeOrigin: true
      },
      "/api": {
        target: "http://pudge.wang:3080",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
