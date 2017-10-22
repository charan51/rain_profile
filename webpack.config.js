const path = require("path");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'build.js'
    },
    module:{
        rules : [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modlues/'
            },
            {
                test: /\.scss$/,
                use: ["style-loader","css-loader", "sass-loader"]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),        
        historyApiFallback:true,
        port: 3000
    }
}