
module.exports = {
    mode: 'development',
    entry: './main.js',
    output:{
        filename: 'bundle.js'
    },
    resolve: {
        modules: ['node_modules']
    },
    module: {
        rules:
        [
            {
                    test: /\.js/,
                    loader: 'babel-loader',
                    exclude: /(node_modules|bower_components)/,
                    query: {compact: false}
            },
            {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
            },
            {
                    test: /\.hbs$/,
                    loader: 'handlebars-loader',
                    exclude: /(node_modules|bower_components)/
            }
        ]
    }
}