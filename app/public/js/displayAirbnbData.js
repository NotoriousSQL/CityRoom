//view.js file -> this file will take the input and create charts 
//displays the charts, maps and database data based on the inputs

$(document).ready(function() {

	//var cityData = [];
	//Obtain data from user input fields
	// 

	// var startDate = $("date")
	//test to get data

	//initialize global variables
	var cityInput;
	var startYear;
	var endYear;
	var differenceInYears;

	
	

	$("#room-submit").on("click", function(){

		//empty the div with the about
		$("#aboutUs").empty();

		//get data from city input
		cityInput = $("#city").val().trim();
		//get startDate
		startYear = $("#start-date").val();
		//returns just the year
		startYear = moment(startYear).format("YYYY");
		console.log(startYear);
		//get EndDate
		var endYear = $("#end-date").val();
		//returns just the year selected
		endYear = moment(endYear).format("YYYY");
		//get the difference
		differenceInYears = endYear - startYear;
		console.log(differenceInYears)

		//array to hold the years
		var years = [];

		//array variable to hold data for each year
		var yearData = [];
		//
		var averagePricePerYearArray = [];
		//for loop
		for(let i = 0; i<=differenceInYears; i++){
			var year = parseInt(startYear)+i;

			years.push(year);

			console.log(years);


			var priceArray;
			var resolvedPromise = getYearData(year, cityInput);
			resolvedPromise.then(function(value){

				console.log("i",i)

				priceArray = value;

				console.log("Price Array:",priceArray);

				console.log("Value: ", value)

				yearData.push(priceArray);


				console.log("yearData[i]", yearData[i])

			//get average

				var averagePriceForYear = getAveragePrice(yearData[i]);
				averagePricePerYearArray.push(averagePriceForYear);

				console.log(averagePricePerYearArray);

				createChart(averagePricePerYearArray, years);
			});
			
		}


		

		
	});


	

	//
});	

//gets data from database for the prices depending on the year for the city
function getYearData(year, city, iterator){
	return new Promise(
		function (resolve, reject){
			var queryUrl = "/api/airbnb/" + city + "/" + year;
			var priceArray = [];

			console.log(queryUrl);

			$.get(queryUrl, function(data){
				console.log(data);
				var pricesArray = [];
				for(var i = 0; i < data.length; i++){
					console.log("Year: ",year,data[i].price)
					priceArray.push(data[i].price);
				}
				resolve(priceArray);
			});
		}
	);

}
//returns an average price for the year
function getAveragePrice(arrayPrices){

	var total = 0.0

	for(var i = 0; i < arrayPrices.length; i++){
		total += arrayPrices[i];
	}
	
	var average = total/arrayPrices.length;

	//return the average price, rounded to 2 decimal places
	return average
}

//creates a chart for average price per year
function createChart(data, labelsArray){
	var ctx = $("#chart1");

	var chartdata = {
		labels:labelsArray,
		datasets:[
			{
				label:"Average Airbnb Price Per Year",
				backgroundColor: 'rgba(200, 200, 200, 0.75)',
				borderColor: 'rgba(200, 200, 200, 0.75)',
				hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
				hoverBorderColor: 'rgba(200, 200, 200, 1)',
				data: data
			}
		]
	}

	var chart = new Chart(ctx, {

		type: "bar",
		data: chartdata

	});
}