//this file will set routes for the various html files

// Dependencies
var path = require("path");

//routes
module.exports = function(app){
	// index route, will load index.html
	app.get("/", function(req, res) {
    	res.sendFile(path.join(__dirname, "../public/index.html"));
	});

	// view route, will load the view file 
	

}