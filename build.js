'use strict';

const webpack = require('webpack'),
      config  = require('./webpack.config');

let compiler = webpack(config);

compiler.run(
		(err, stats) => {
			console.log(stats.toJson());
		}
);
