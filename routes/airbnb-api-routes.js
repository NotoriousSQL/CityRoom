// Requiring our models
var db = require("../models");

console.log("Airbnb: ", db.airbnb);

//route for our airbnb routes

module.exports = function(app){
	
	// //get route for all the data
	// app.get("api/airbnb", function(req, res){

	// 	db.airbnb.findAll({}).then(function(dbAirbnb){
	// 		res.json(dbAirbnb);
	// 	});
	// });

	app.get("/api/airbnb/:city/:year/", function(req, res){
		
		var year = req.params.year;
		var city = req.params.city;

		db.airbnb.findAll({
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
	
	//get route for the room type
	app.get("/api/airbnb/:city/:year/:room", function(req, res){
		
		var year = req.params.year;
		var city = req.params.city;
		var room = req.params.room;

		db.airbnb.findAll({
			where:{
				city: city,
				last_modified: {
					$regexp:year
				},
				room_type: room
			}
		}).then(function(dbAirbnb){
			res.json(dbAirbnb);
		});
	});

	//get route for the neighborhood data
	app.get("/api/airbnb/neighborhoods/:city/:year/:neighborhood", function(req, res){
		
		var year = req.params.year;
		var city = req.params.city;
		var neighborhood = req.params.neighborhood;

		db.airbnb.findAll({
			where:{
				city: city,
				last_modified: {
					$regexp:year
				},
				neighborhood: neighborhood
			}
		}).then(function(dbAirbnb){
			res.json(dbAirbnb);
		});
	});

};
