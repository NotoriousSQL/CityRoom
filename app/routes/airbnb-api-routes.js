// Requiring our models
var db = require("../models");

//route for our airbnb routes

module.exports = function(app){
	
	//get route for all the data
	app.get("api/airbnb", function(request, response){

		db.Airbnb.findAll({}).then(function(dbAirbnb){
			res.json(dbAirbnb);
		});
	});

	//get route for city to retreive data based on the city input
	app.get("api/airbnb/:city/", function(request, response),{
		db.Airbnb.findAll({
			where:{
				city: req.params.city
			}
		}).then(function(dbAirbnb){
			res.json(dbAirbnb)
		});
	});
	
	//get route for the neighborhood
	app.get("api/airbnb/:neighborhood/", function(request, response),{
		db.Airbnb.findAll({
			where:{
				neighborhood: req.params.neighborhood
			}
		}).then(function(dbAirbnb){
			res.json(dbAirbnb);
		});
	});

	//get route for 
};