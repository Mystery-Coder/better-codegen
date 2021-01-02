const express = require('express');
const app = express();

//Serving the files in the 'public' directory
app.use(express.static("public"))

app.use(express.json())

app.get("/welcome", (req, res) => {
	res.json({"Hello": "This is some JSON Data"});
})


app.listen(4000, console.log("Listening at http://localhost:4000/"));