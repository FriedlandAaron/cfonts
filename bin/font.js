#!/usr/bin/env node
/*
 * cfonts
 * https://github.com/dominikwilkowski/cfonts
 *
 * Copyright (c) 2015 Dominik Wilkowski
 * Licensed under the MIT license.
 */

'use strict';


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Dependencies
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
var fs = require('fs');
var program = require('commander');
var CFONTS = require('./../index.js');

var $package = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
var $version = $package.version;


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Custom functions
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
function list(val) {
	return val.split(',');
}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Command line
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
program
	.version( $version )
	.usage('[option1] <input1> [options2] <input1>,<input2>')
	.option('-t, --text <textinput>', '"textinput" to be converted into a nice font')
	.option('-f, --font <fontname>', '"fontname" to be used')
	.option('-c, --colors <color>,<color>...', 'provide colors in format: red,blue etc.', list)
	.option('-b, --background <background>', 'provide background color in format: \'white\'')
	.option('-l, --letter-spacing <letterSpacing>', 'letterSpacing to be used as integer')
	.option('-s, --space <space>', 'define if the output text should have empty lines on top and on the bottom')
	.option('-m, --max-length <maxLength', 'define how many character can be on one line')
	.parse(process.argv);


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Programm
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
var cfonts = new CFONTS(
	program.text,
	program.font,
	program.colors,
	program.background,
	program.letterSpacing,
	program.space,
	program.maxLength
);