const chalk = require('chalk');
const fs = require('fs-extra');

module.exports = async function(projectName, proPath){
	await fs.copy(require.main.path+"\\temps\\node-express", proPath);
	let temp_d_ex_index = await fs.readFileSync(process.cwd()+"\\"+projectName+"\\public\\index.html").toString();
	let temp_d_pack = await fs.readFileSync(process.cwd()+"\\"+projectName+"\\package.json").toString();
	temp_d_ex_index = temp_d_ex_index.replace(/\$TITLE\$/g, projectName);
	temp_d_pack = temp_d_pack.replace(/node-express/g, projectName)

	await fs.writeFileSync(proPath + "\\public\\index.html", temp_d_ex_index);
	await fs.writeFileSync(proPath +"\\package.json", temp_d_pack);

	console.log(chalk.blue(projectName)+ chalk.magenta(" Express app has been created"));
}