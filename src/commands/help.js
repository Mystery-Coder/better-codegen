const { readFileSync, existsSync } = require('fs-extra');
const HELP_PATH = `${require.main.path}\\metadata\\help`;

let help_txt = readFileSync(`${HELP_PATH}\\help.txt`).toString();

module.exports = function (args) {

	if (args.length > 1) {
		console.log("Invalid number of arguments");
		process.exit();
	}

	let help_command = args[0];
	let specific_help_path = `${HELP_PATH}\\${help_command}.txt`;
	if (help_command === undefined || help_command === "help") {
		console.log(help_txt)
		process.exit()
	}
	else if (existsSync(specific_help_path)) {
		let txt = readFileSync(specific_help_path).toString();
		console.log(txt);
		process.exit()
	}
	else {
		console.log(`'${help_command}' is not a valid command or there is no help currently available.`);
		process.exit();
	}

}