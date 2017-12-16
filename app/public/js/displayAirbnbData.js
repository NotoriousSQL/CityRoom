//view.js file -> this file will take the input and create charts 
//displays the charts, maps and database data based on the inputs

$(document).ready(function() {

	var cityData = [];
	//Obtain data from user input fields
	// 

	// var startDate = $("date")
	//test to get data

	$("#room-submit").on("click", function(){
		//get data from city input
		var cityInput = $("#city").val().trim();

		var queryUrl = "/api/airbnb/"  + cityInput;

		$.get(queryUrl, function(data){
			console.log(json(data));
		});
	});



	//
});	


// //function that displays raw data
// function displayDatabaseData() {

// }

// //function that displays markers on map
// function displayMap(){

// }

// //function that displays a chart for annual price data for all 
// function createTotalPriceChart(){

// }

// //function that displays data for select room type
// function createRoomTypePriceChart(){
	
// }