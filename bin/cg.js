#!/usr/bin/env node

const commandHandler = require('./commandHandler');

const fs = require("fs-extra");

// console.log(process.argv)

const projectName = process.argv[3];
const projectType = process.argv[2];


if(projectType === "--help" || process.argv.length === 2){
	let txt = fs.readFileSync(require.main.path+"\\help.txt").toString();
	// let txt;
	console.log(txt);
}
else{
	commandHandler(projectType, projectName)
}