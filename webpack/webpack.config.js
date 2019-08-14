const path = require('path');//node 下path
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    mode:"development",//production
    entry:{
        // ./当前路径
        index:'./src/index.js'
    },
    output:{
        // 出口文件路径绝对路径
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js',
        outputPath:'../'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },{
                test:/\.(jpg|png|gif)/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:500,
                            outputPath:'images/'
                        }
                    }

                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        new ExtractTextPlugin("styles.css"),
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost'
    }
}

