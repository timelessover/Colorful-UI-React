const path = require('path')


function resolve() {
    return path.resolve(__dirname, '..')
  }

module.exports = {
    mode: "development", 
    resolve: {
        // 这个必须要设，要不找不到路径，主要省略文件名称
        extensions: [".ts", '.tsx', '.js', '.json'],
        alias: {
            components: resolve() + '/components',
            types: resolve() + '/types'
          }
    },
    module: { 
        rules: [ 
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.scss$/,
                use: ['sass-loader'],
            }
        ]
    },
}