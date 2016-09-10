'use strict';

const path = require('path');

module.exports = {
	context: path.join(__dirname, 'src'), // исходная директория
	entry  : './index', // файл для сборки, если несколько - указываем hash (entry name => filename)
	output : {
		path: path.join(__dirname, 'assets') // выходная директория
	},
	loaders: [
		{
			loader: 'script', // script-loader
			test  : /(pixi|phaser).js/
		}
	],
};
