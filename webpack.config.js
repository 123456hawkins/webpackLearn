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
    filename: 'static/js/main.js', //将js文件输出到static/js目录中
    clean: true, //自动清空上次打包资源
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
        test: /\.(png|jpe?g|gif|webp|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, //小于10kb的图表会被base64处理
          },
        },
        // 修改输出资源的名称和路径
        generator: {
          // 将图片文件输出到 static/imgs 目录中
          // 将图片文件命名 [hash:8][ext][query]
          // [hash:8]: hash值取8位
          // [ext]: 使用之前的文件扩展名
          // [query]: 添加之前的query参数
          filename: 'static/imgs/[hash:8][ext][query]',
        },
      },
      {
        // 处理字体资源
        test: /\.(ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[hash:8][ext][query]',
        },
      },
      {
        // 处理音视频资源
        test: /\.(ttf|woff2?|map4|map3|avi|mp3)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[hash:8][ext][query]',
        },
      },
    ],
  },
  // 插件
  plugins: [],
  // 模式
  mode: 'development',
}
