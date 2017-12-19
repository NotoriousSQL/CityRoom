// Requiring our models
var db = require("../models");

console.log("User:", db.User);

//routes for user
module.exports = function(app){

	//get route
<<<<<<< HEAD
	app.get("/api/user", function(req, res){
=======
	app.get("api/user", function(request, response){
>>>>>>> origin/Development
		//this will return all users and all the information associated with the user
		db.User.findAll({}).then(function(dbUser){
			res.json(dbUser);
		});
	});

	//this will return just 1 user
<<<<<<< HEAD
	app.get("/api/user/:username/:password", function(req, res){
		db.User.findOne({
      		where: {
        		username: req.params.username,
            password: req.params.username
=======
	app.get("api/user/:id", function(request, response){
		db.User.findOne({
      		where: {
        		id: req.params.id
>>>>>>> origin/Development
      		}
    	}).then(function(dbUser) {
      		res.json(dbUser);
    	});
  	});

  	//for creating a user 
	app.post("/api/user", function(req, res) {
    console.log(req.body);

		db.User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    }).then(function(dbUser) {
	  		res.json(dbUser);
		});
	});

	//for deleting an item
<<<<<<< HEAD
  	app.delete("api/user/:id", function(req, res){
=======
  	app.delete("api/user/:id", function(request, response){
>>>>>>> origin/Development
  		db.User.destroy({
  			where:{
  				id: req.params.id
  			}
  		}).then(function(dbUser){
  			res.json(dbUser);
  		});
  	});
};