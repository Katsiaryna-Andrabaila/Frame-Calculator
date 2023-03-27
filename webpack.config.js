// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const isProduction = process.env.NODE_ENV == 'production';
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const stylesHandler = 'style-loader';

const config = {
    entry: './src/app.ts',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{ from: 'src/assets', to: './assets' }],
        }),

    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },

            
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  {
                    loader: "css-loader",
                    options: {
                      sourceMap: true,
                    },
                  },
                  {
                    loader: "sass-loader",
                    options: {
                      sourceMap: true,
                    },
                  },
                ],
              },



            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
    },
    experiments: {
        topLevelAwait: true
    }
};

module.exports = () => {

    if (isProduction) {
        config.mode = 'production';


        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());

    } else {
        config.mode = 'development';
    }
    return config;
};
