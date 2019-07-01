import merge from 'webpack-merge';
import webpack from 'webpack';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

import common from './webpack.common';

module.exports = merge(common, {
    mode: "production",
    stats: {
        assets: true,
        chunks: true,
        builtAt: true,
        cached: true,
        version: true,
        warnings: true
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCssAssetsPlugin({})
        ],
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                styles: {
                    // all css in one file -- https://github.com/webpack-contrib/mini-css-extract-plugin
                    name: "styles",
                    test: /\.css$/,
                    chunks: "all",
                    enforce: true
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 300000
        })
    ]
});
