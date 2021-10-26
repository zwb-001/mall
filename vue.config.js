module.exports = {
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
