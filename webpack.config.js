const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        // rules: [
        //     {
        //         test: /\.css$/,
        //         use: ['style-loader', 'css-loader']
        //     }
        // ],
        loaders: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
            ,{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        publicPath: "/",
        contentBase: "./public",
        hot: true,
        historyApiFallback: true
    },

}   