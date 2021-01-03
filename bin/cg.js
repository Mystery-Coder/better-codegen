#!/usr/bin/env node

const fs = require("fs-extra");
const log = console.log;
const chalk = require('chalk');
const projectTypes = ["html", "py", "p5js", "node-express"];

// console.log(process.argv)

const projectName = process.argv[3];
const projectType = process.argv[2];
let proPath = process.cwd()+"\\"+projectName;


if(projectType === "--help" || process.argv.length === 2){
	let txt = fs.readFileSync(require.main.path+"\\help.txt").toString();
	// let txt;
	console.log(txt);
}

else if(!projectTypes.includes(projectType)){
	log(chalk.yellow(projectType) + " is "+ chalk.red.underline("not") +" a valid projectType.")
	log(chalk.green("The valid projectTypes are:"))
	projectTypes.map(val  => {
		log(chalk.blue(val))
	})
}

else if(projectName === undefined && projectTypes.includes(projectType)){
	log(chalk.yellow("NAME") + ` not given for project type ${projectType}`);
	log(chalk.blue("Example: ") + chalk.cyan(`cg ${projectType} myproject. `) + 
	chalk.green(`This will create a ${projectType} project in a directory called myproject`))
}


else if(projectType === "html" && projectName !== undefined){
	(async function(){
		await fs.copy(require.main.path+"\\temps\\html", proPath);
		let temp_d_html = await fs.readFileSync(process.cwd()+"\\"+projectName+"\\index.html").toString();
		let temp_d_js = await fs.readFileSync(process.cwd()+"\\"+projectName+"\\script.js").toString();
		temp_d_html = temp_d_html.replace(/\$TITLE\$/g, projectName);
		temp_d_js = temp_d_js.replace(/\$TITLE\$/g, projectName)

		await fs.writeFileSync(process.cwd()+"\\"+projectName+"\\index.html", temp_d_html);
		await fs.writeFileSync(process.cwd()+"\\"+projectName+"\\script.js", temp_d_js);

		log("CREATED index.html");
		log("CREATED script.js");
	})();

}
else if(projectType === "p5js" && projectName !== undefined){
	(async function(){
		await fs.copy(require.main.path+"\\temps\\p5js", proPath);
		let temp_d_p5h = await fs.readFileSync(process.cwd()+"\\"+projectName+"\\index.html").toString();
		let temp_d_p5j = await fs.readFileSync(process.cwd()+"\\"+projectName+"\\sketch.js").toString();
		temp_d_p5h = temp_d_p5h.replace(/\$TITLE\$/g, projectName);
		temp_d_p5j = temp_d_p5j.replace(/\$TITLE\$/g, projectName)

		await fs.writeFileSync(process.cwd()+"\\"+projectName+"\\index.html", temp_d_p5h);
		await fs.writeFileSync(process.cwd()+"\\"+projectName+"\\sketch.js", temp_d_p5j);

		log(chalk.green("CREATED ") + "index.html");
		log( chalk.green("CREATED ") +"sketch.js");
	})();

}

else if(projectType === "py" && projectName !== undefined){
	(async function(){
		await fs.writeFileSync(proPath+`.py`, `print("Hello, ${projectName}")`);
		log(chalk.green("CREATED ") + chalk.magenta(projectName) + ".py");
	})();

}
else if(projectType === "node-express" && projectName !== undefined){
	(async function(){
		await fs.copy(require.main.path+"\\temps\\node-express", proPath);
		let temp_d_ex_index = await fs.readFileSync(process.cwd()+"\\"+projectName+"\\public\\index.html").toString();
		let temp_d_pack = await fs.readFileSync(process.cwd()+"\\"+projectName+"\\package.json").toString();
		temp_d_ex_index = temp_d_ex_index.replace(/\$TITLE\$/g, projectName);
		temp_d_pack = temp_d_pack.replace(/node-express/g, projectName)

		await fs.writeFileSync(process.cwd()+"\\"+projectName+"\\public\\index.html", temp_d_ex_index);
		await fs.writeFileSync(process.cwd()+"\\"+projectName+"\\package.json", temp_d_pack);

		log(chalk.blue(projectName)+ chalk.magenta(" Express app has been created"));
	})();

}


