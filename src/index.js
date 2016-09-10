'use strict';

const Phaser = require('phaser-shim');

let game = new Phaser.Game(
		1600,
		800,
		Phaser.AUTO,
		'',
		{
			preload: preload,
			create : create,
			update : update,
			render : render,
		}
);

function preload () {
	console.log('preload: phaser-shim is working OK');
}

function create () {
	console.log('create: phaser-shim is working OK');
}

function update () {
	console.log('update: phaser-shim is working OK');
}


function render () {
	console.log('render: phaser-shim is working OK');
}
