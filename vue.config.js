const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //eslint校验
  devServer: {
    proxy: "http://114.132.197.185:80/api/v1/mall-bk",
    port: 2222
  },
})
