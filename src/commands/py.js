// const chalk = require('chalk');
const fs = require('fs-extra');


module.exports = async function(args){

	let projectName = args[0];
	let projPath = process.cwd()+"\\"+projectName;
	
	if(projectName === undefined){
		console.log("Name is not given")
		process.exit()
	}
	else {

	await fs.writeFileSync(projPath+`.py`, `print("Hello, ${projectName}")`);
	console.log("CREATED " + projectName + ".py");
	
}
}