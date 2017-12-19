// Requiring our models
var db = require("../models");

console.log("Airbnb: ", db.Airbnb);

//route for our airbnb routes

module.exports = function(app){
	
	//get route for all the data
	app.get("api/airbnb", function(req, res){

		db.Airbnb.findAll({}).then(function(dbAirbnb){
			res.json(dbAirbnb);
		});
	});

	app.get("/api/airbnb/:city/:year/", function(req, res){
		
		var year = req.params.year;
		var city = req.params.city;

		db.Airbnb.findAll({
			where:{
				city: city,
				last_modified: {
					$regexp:year
				}
			}
		}).then(function(dbAirbnb){
			res.json(dbAirbnb);
		});
	});
	
	// //get route for the neighborhood
	// app.get("api/airbnb/:neighborhood/", function(request, response){
	// 	db.Airbnb.findAll({
	// 		where:{
	// 			neighborhood: req.params.neighborhood
	// 		}
	// 	}).then(function(dbAirbnb){
	// 		res.json(dbAirbnb);
	// 	});
	// });

	//get route for 
};
