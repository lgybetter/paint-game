var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: __dirname + '/app/index.js',
  output: {
    path: __dirname + '/public/js',
    filename: 'bundle.js',
  },
  resolveLoader: {
      root: path.join(__dirname, 'node_modules')
  },
  resolve: {
    extensions:['','.js','.vue'],
     alias: {
      'vue$': 'vue/dist/vue.js',
      'muse-components': 'muse-ui/src'
    }
  },
  module: {
    loaders: [
      {
        test:/\.vue$/,
        loader: 'vue'
      },
      {
        test:/\.js$/,
        loader: 'babel'
      },
      {
        test: /\.css$/, 
        loader: 'style!css'
      },
      {
        test: /\.less$/, 
        loader: 'style!css!less'
      },
      {
        test:   /\.(png|jpg|gif|svg|ico)$/,
        loader: 'url-loader?limit=8192',
      },
      {
        test: /muse-ui.src.*?js$/,
        loader: 'babel'
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        loader: 'file'
      }
    ]
  },
  devServer: {
    port:8080,
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  }
}