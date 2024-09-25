const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})




// module.exports = {
//   outputDir: 'docs',
//   assetsDir: './',
//   publicPath: './',
// }

module.exports = {
  outputDir: 'docs',  // GitHub Pagesで使用する出力先
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-portfolio/'  // ここをリポジトリ名に変更
    : '/'
}