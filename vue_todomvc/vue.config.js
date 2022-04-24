const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:"./",
  devServer:{
    //跨域
    proxy:{
      'api':{
        //目标路径
        target:'http://192.168.1.229:3000/',
        // 允许跨域
        changeOrigin:true,
        // 重写路径
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
})
