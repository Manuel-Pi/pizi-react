const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

let config = {
    devtool: 'source-map',
    entry: "./src/index.ts",

    output:{
        path: __dirname + '/dist',
        filename: 'index.js',
        library: {
            type: 'module'
        }
    },

    experiments:{
        outputModule: true
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
    externals: ["react", "react-dom/client", "react-router-dom", "react-router-dom/server.js"]
}

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        console.log("Development build...")
    }
  
    if (argv.mode === 'production') {
        config.optimization = {
            minimizer: [
                new CssMinimizerPlugin(),
                new TerserPlugin()
            ]
        }
    }
  
    return config
}
