// Requiring our models
var db = require("../models");


//routes for user
module.exports = function(app){

	//get route
	app.get("api/user", function(request, response){
		//this will return all users and all the information associated with the user
		db.User.findAll({}).then(function(dbUser){
			res.json(dbUser);
		});
	});

	//this will return just 1 user
	app.get("api/user/:id", function(request, response){
		db.User.findOne({
      		where: {
        		id: req.params.id
      		}
    	}).then(function(dbUser) {
      		res.json(dbUser);
    	});
  	});

  	//for creating a user 
	app.post("/api/authors", function(req, res) {
		db.User.create(req.body).then(function(dbUser) {
	  		res.json(dbUser);
		});
	});

	//for deleting an item
  	app.delete("api/user/:id", function(request, response){
  		db.User.destroy({
  			where:{
  				id: req.params.id
  			}
  		}).then(function(dbUser){
  			res.json(dbUser);
  		});
  	});
};