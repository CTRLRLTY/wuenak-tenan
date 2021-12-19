const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const pages = [
    new HtmlWebpackPlugin({
        template: "./index.html",
        //    favicon: './favicon.svg'
        chunks: ["index", "component"],
    }),
    new HtmlWebpackPlugin({
        template: "./about-us.html",
        filename: "about-us.html",
        //    favicon: './favicon.svg'
        chunks: ["about", "component"],
    }),
    new HtmlWebpackPlugin({
        template: "./menu.html",
        filename: "menu.html",
        //    favicon: './favicon.svg'
        chunks: ["menu", "component"],
    }),
    new HtmlWebpackPlugin({
        template: "./custom-menu.html",
        filename: "custom-menu.html",
        chunks: ["custom_menu", "component"],
    }),
    new HtmlWebpackPlugin({
        template: "./contact-us.html",
        filename: "contact-us.html",
        chunks: ["contact", "component"],
    }),
    new HtmlWebpackPlugin({
        template: "./order-status.html",
        filename: "order-status.html",
        chunks: ["order", "component"],
    }),
]

const plugins = [
    ...pages,
    new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
    })
];


module.exports = {
    plugins,
    context: path.resolve(__dirname, "src"),
    entry: {
        component: ["./main.js", "./component.css"],
        index: [
            "./index.css",
            "./menu_recc1.png",
            "./burger.png",
            "./reviewer1.png",
            "./banner.png"
        ],
        about: ["./about.css"],
        menu: ["./menu.css", "./menu_a.png"],
        custom_menu: ["./custom_menu.js", "./custom_menu.css"],
        contact: ["./contact.css", "./banner2.png"],
        order: ["./order.css", "./confused.png", "./search.svg"]
    },
    output: {
        filename: "[name].[contenthash].js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};
