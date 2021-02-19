const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

let config = {
    devtool: false,
    entry: "./src/index.tsx",

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
                    {
                        loader: "file-loader",
                        options: {
                            name: "style.css"
                        }
                    },
                    "extract-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    plugins:[
        new CopyPlugin({
            patterns: [
                "src/index.html"
            ],
          })
    ]
}

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        console.log("Development build...");
        config.devtool = 'eval-source-map';
    }
  
    if (argv.mode === 'production') {
        config.externals = {
            "react": "React",
            "react-dom": "ReactDOM"
        }
    }
  
    return config;
  };
