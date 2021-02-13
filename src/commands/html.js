const fs = require("fs-extra");

module.exports = async function(args){
	let projectName = args[0];
	let projPath = process.cwd()+"\\"+projectName;

	if(projectName === undefined){
		console.log("Name is not given")
		process.exit()
	}
	else {
		await fs.copy(`${require.main.path}\\metadata\\temps\\html`, projPath);
	
		let temp_d_html = await fs.readFileSync(projPath+"\\index.html").toString();
		let temp_d_js = await fs.readFileSync(projPath+"\\script.js").toString();
	
		temp_d_html = temp_d_html.replace(/\$TITLE\$/g, projectName);
		temp_d_js = temp_d_js.replace(/\$TITLE\$/g, projectName)
	
		await fs.writeFileSync(projPath+"\\index.html", temp_d_html);
		await fs.writeFileSync(projPath+"\\script.js", temp_d_js);
	
		console.log("CREATED index.html");
		console.log("CREATED script.js");
	
	}

}