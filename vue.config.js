const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //eslint校验
  devServer: {
    proxy: "http://4266278ws2.zicp.fun:30344/api/v1/mall-bk",
    port:2222
  },
})
