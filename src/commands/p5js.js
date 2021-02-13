// const chalk = require('chalk');
const fs = require('fs-extra');

module.exports = async function(args){

	let projectName = args[0];
	let projPath = process.cwd()+"\\"+projectName;


	if(projectName === undefined){
		console.log("Name is not given")
		process.exit()
	} else {

	await fs.copy(require.main.path+"\\metadata\\temps\\p5js", projPath);
	let temp_d_p5h = await fs.readFileSync(projPath+"\\index.html").toString();
	let temp_d_p5j = await fs.readFileSync(projPath+"\\sketch.js").toString();
	temp_d_p5h = temp_d_p5h.replace(/\$TITLE\$/g, projectName);
	temp_d_p5j = temp_d_p5j.replace(/\$TITLE\$/g, projectName)

	await fs.writeFileSync(projPath+"\\index.html", temp_d_p5h);
	await fs.writeFileSync(projPath+"\\sketch.js", temp_d_p5j);

	console.log("CREATED " + "index.html");
	console.log("CREATED " + "sketch.js");

	}
}