module.exports = {devServer: {
    host: '0.0.0.0',
    //public: '192.192.192.121:8080',//该网络地址为你联网的ip地址
    port: 8080,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
  },
  configureWebpack: {
    resolve: {
      alias: {//别名
        //已经配置过，默认是src '@':'src'
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
