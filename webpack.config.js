// Nodejs的核心模块,专门用来处理文件路径
const path = require('path')
module.exports = {
  // 入口
  entry: './src/main.js',
  // 输出
  output: {
    // path: 文件输出目录，必须是绝对路径
    // path.resolve()方法返回一个绝对路径
    // __dirname 当前文件的文件夹绝对路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  // 加载器
  module: {
    rules: [
      {
        // 用来匹配.css结尾的文件
        test: /\.css$/,
        // use数组里面Loader执行顺序从左往右
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.s[sc]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, //小于10kb的图表会被base64处理
          },
        },
      },
    ],
  },
  // 插件
  plugins: [],
  // 模式
  mode: 'development',
}
