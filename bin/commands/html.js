const fs = require("fs-extra");

module.exports = async function(projectName,proPath){
	await fs.copy(require.main.path+"\\temps\\html", proPath);
	let temp_d_html = await fs.readFileSync(process.cwd()+"\\"+projectName+"\\index.html").toString();
	let temp_d_js = await fs.readFileSync(process.cwd()+"\\"+projectName+"\\script.js").toString();
	temp_d_html = temp_d_html.replace(/\$TITLE\$/g, projectName);
	temp_d_js = temp_d_js.replace(/\$TITLE\$/g, projectName)

	await fs.writeFileSync(proPath+"\\index.html", temp_d_html);
	await fs.writeFileSync(proPath+"\\script.js", temp_d_js);

	console.log("CREATED index.html");
	console.log("CREATED script.js");
}