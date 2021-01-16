const chalk = require('chalk');
const fs = require('fs-extra');

module.exports = async function(projectName,proPath){
	await fs.copy(require.main.path+"\\temps\\p5js", proPath);
	let temp_d_p5h = await fs.readFileSync(process.cwd()+"\\"+projectName+"\\index.html").toString();
	let temp_d_p5j = await fs.readFileSync(process.cwd()+"\\"+projectName+"\\sketch.js").toString();
	temp_d_p5h = temp_d_p5h.replace(/\$TITLE\$/g, projectName);
	temp_d_p5j = temp_d_p5j.replace(/\$TITLE\$/g, projectName)

	await fs.writeFileSync(proPath+"\\index.html", temp_d_p5h);
	await fs.writeFileSync(proPath+"\\sketch.js", temp_d_p5j);

	console.log(chalk.green("CREATED ") + "index.html");
	console.log( chalk.green("CREATED ") +"sketch.js");
}