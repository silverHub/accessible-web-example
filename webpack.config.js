module.exports = {
    entry: "./js/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    watch: true,
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'react-hot!babel-loader',
            }
        ]
    }
};