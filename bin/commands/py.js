const chalk = require('chalk');
const fs = require('fs-extra');


module.exports = async function(projectName,proPath){
	await fs.writeFileSync(proPath+`.py`, `print("Hello, ${projectName}")`);
	console.log(chalk.green("CREATED ") + chalk.magenta(projectName) + ".py");
}