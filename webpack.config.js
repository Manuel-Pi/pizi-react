const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const webpack = require("webpack")

let config = {
    devtool: false,
    entry: "./src/index.ts",

    output:{
        path: __dirname + '/dist',
        filename: 'index.js',
        library: {
            name: 'pizi-react',
            type: 'umd'
          }
    },

    resolve: {
        extensions: [".ts", ".tsx",".js", ".jsx", ".less"]
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins:[ 
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    externals: {
        "react": "React",
        "react-dom/client": "ReactDOM"
    }
}

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        console.log("Development build...");
        config.devtool = 'source-map';
    }
  
    if (argv.mode === 'production') {
        config.optimization = {
            minimizer: [
                new CssMinimizerPlugin()
            ]
        }
    }
  
    return config
}
