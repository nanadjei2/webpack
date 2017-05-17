const path = require('path')

 const config = {
    //below is the entering point which bootstraps the all script files
    entry: './src/script-1.js',

    //below is the output or kinna outlet to the javascript files 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
 
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: 'babel-loader',
                exclude: /(node_modeles)/,
                query: {
                    presets: ['es2015']
                }
            },

            {
                test: /\.(css)$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};

module.exports = config;