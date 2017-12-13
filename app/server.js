//dependencies
var express = require("express");
var bodyParser = require("body-parser");

//express app
var app = express();
var PORT = process.env.PORT || 8000;


// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

//routes
require("./routes/html-routes.js")(app);
// require("./routes/airbnb-api-routes.js")(app);
// require("./routes/user-api-routes.js")(app);

//syncing sequeilize models and starting express app
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});