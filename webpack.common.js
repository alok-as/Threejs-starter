//IMPORTING PATH PACKAGE
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

//CLEANING BEFORE BUILD
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: "./src/js/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ["babel-loader"],
				exclude: /node_modules/,
			},
			{ test: /\.html$/, use: ["html-loader"] },
			{
				test: /\.(svg|png|jpg|gif|glb|gltf|obj|bin|mtl)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "img",
					},
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		// new CopyPlugin({
		// 	patterns: [{ from: "src/assets/texture", to: "img/texture" }],
		// 	patterns: [{ from: "src/assets/textures", to: "img/textures" }],
		// }),
	],
};
