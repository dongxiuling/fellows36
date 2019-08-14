const path = require('path');//node 下path
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        // ./当前路径
        index:'./src/index.js'
    },
    output:{
        // 出口文件路径绝对路径
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost'
    }
}

