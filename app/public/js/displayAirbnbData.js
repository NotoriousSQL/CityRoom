//displayAirbnbData.js file -> this file will take the input and create charts 
//displays the charts, maps and database data based on the inputs

$(document).ready(function() {

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
			//setting the year
			var year = parseInt(startYear)+i;
			//push the year into the array called years. this will be used for the labels for the chart
			years.push(year);

			console.log(years);


			var priceArray;
			var resolvedPromise = getYearData(year, cityInput);
			resolvedPromise.then(function(value){

				console.log("i",i)
				//set the array of prices to the value, which is equal to array of prices corresponding to the year
				priceArray = value;

				console.log("Price Array:",priceArray);

				console.log("Value: ", value)

				yearData.push(priceArray);


				console.log("yearData[i]", yearData[i])

				//get the average price for the year
				var averagePriceForYear = getAveragePrice(yearData[i]);
				//push it into the array that holds the average data
				averagePricePerYearArray.push(averagePriceForYear);

				console.log(averagePricePerYearArray);

				//creates the chart
				createChart(averagePricePerYearArray, years);
			});
			
		}


		

		
	});


	

	//
});	

//gets data from database for the prices depending on the year for the city
function getYearData(year, city){
	//Function that is asynchronous - waits until the database is finished with the query and returns the data
	return new Promise(
		function (resolve, reject){
			//create the queryUrl
			var queryUrl = "/api/airbnb/" + city + "/" + year;
			//array for holding the prices for the year
			var priceArray = [];

			console.log(queryUrl);

			//get route, will return the values that have both city and year
			$.get(queryUrl, function(data){

				console.log(data);
				//for loop to go through data and retreive the price
				for(var i = 0; i < data.length; i++){
					console.log("Year: ",year,data[i].price)
					//pushes the price into an array
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
	
	var average = Math.round(total/arrayPrices.length, -2);

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