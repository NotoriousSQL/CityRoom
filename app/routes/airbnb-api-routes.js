// Requiring our models
var db = require("../models");

<<<<<<< HEAD
console.log("Airbnb: ", db.Airbnb);

//route for our airbnb routes

module.exports = function(app){
	
	//get route for all the data
	app.get("api/airbnb", function(req, res){

		db.Airbnb.findAll({}).then(function(dbAirbnb){
			res.json(dbAirbnb);
		});
	});

	// //get route for city to retreive data based on the city input
	// app.get("/api/airbnb/:city/", function(req, res){
	// 	db.Airbnb.findAll({
	// 		where:{
	// 			city: req.params.city
	// 		}
	// 	}).then(function(dbAirbnb){
	// 		res.json(dbAirbnb)
	// 	});
	// });

	app.get("/api/airbnb/:city/:startDate/", function(req, res){
		
		var startDate = req.params.startDate;
		var city = req.params.city;

		db.Airbnb.findAll({
			where:{
				city: city,
				last_modified: {
					$regexp:startDate
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
=======
//route for our airbnb routes
>>>>>>> origin/Development
