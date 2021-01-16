const chalk = require('chalk');
const fs = require('fs-extra');
// const html = require('./commands/html');
const projectTypes = ["html", "py", "p5js", "node-express"];
const commands = {};



fs.readdirSync( require.main.path + "\\commands").forEach(file => {
	let fname_no_ext = file.replace(".js", "");
	commands[fname_no_ext] = require(`./commands/${fname_no_ext}`);
});
// log(commands);


				//arguments are passed like cg html(command) name(name)
module.exports = function(projectType, projectName) {

	//Handling case when invalid project type is given like 'cg htm name'
	if(projectTypes.includes(projectType) === false){
		console.log(chalk.yellow(projectType) + " is "+ chalk.red.underline("not") +" a valid projectType.")
		console.log(chalk.green("The valid project types are:"))
		projectTypes.map(val  => {
			console.log(chalk.blue(val))
		})
	}
	//Handling case when no name is given like 'cg p5js'
	else if(projectName === undefined && projectTypes.includes(projectType)){
		console.log(chalk.yellow("NAME") + ` not given for valid project type ${projectType}`);
		console.log(chalk.blue("Example: ") + chalk.cyan(`cg ${projectType} myproject. `) + 
		chalk.green(`This will create a ${projectType} project in a directory called myproject`))
	}

	else {
		let proPath = process.cwd()+"\\"+projectName;
		commands[projectType](projectName, proPath)
	}
}