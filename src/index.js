#!/usr/bin/env node
const fs = require('fs');
const commands = {}
fs.readdirSync(__dirname + "\\commands").forEach(filename => {
	let filename_no_ext = filename.replace(".js", "")
	commands[filename_no_ext] = require(`./commands/${filename_no_ext}`)
})


let args = process.argv //Making a copy of the arguments of Node.


//splice returns an array of items removed. The 3rd item will be the actual command like 'html' or py or p5js or help.. 
//Which will correspond to a JS file like html.js which is loaded from commands folder. Now args wil have only 
//args will now have only the parameters after command.Ex: 'cg html myp', args will be ["myp"].
let command = args.splice(0, 3)[2];

//Checking to see if the user typed only 'cg'.
if (args.length === 0 && command === undefined) {
	console.log("Available Commands:")

	Object.keys(commands).forEach(c => {
		console.log(c);
	})
}

//Checking if the command actually exists in the commands object as one of the keys.
else if (Object.keys(commands).includes(command)) {
	commands[command](args);
}
else {
	console.log(`'${command}' is not a valid command`)
	console.log("Available Commands are,")
	Object.keys(commands).forEach(c => {
		console.log(c);
	})
}