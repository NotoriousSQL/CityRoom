//displayAirbnbData.js file -> this file will take the input and create charts 
//displays the charts, maps and database data based on the inputs

$(document).ready(function() {

	//initialize global variables
	var cityInput;
	var startYear;
	var endYear;
	var differenceInYears;
	var roomType;
	
	

	$("#room-submit").on("click", function(){

		//empty the div with the about
		$("#aboutUs").empty();

		//get data from city input
		cityInput = $("#city").val().trim();
		//get startDate
		startYear = $("#start-date").val();
		//get EndDate
		var endYear = $("#end-date").val();
		//get the difference
		differenceInYears = endYear - startYear;
		//array to hold the years
		var years = [];
		//array variable to hold data for each year
		var yearData = [];
		//
		var averagePricePerYearArray = [];
		//
		var yearDataObject = {}

		roomType = $("#room-type").val().trim();
		var room = roomType.substr(0,roomType.indexOf(' '));

		//console.log(typeof(roomType))

		//for loop
		for(let i = 0; i<=differenceInYears; i++){
			//setting the year
			var year = parseInt(startYear)+i;
			//push the year into the array called years. this will be used for the labels for the chart
			years.push(year);

			console.log(years);


			var priceArray;	
			//to get average price per year data and create chart 
			var getYearDataResolved = getYearData(year, cityInput);
			getYearDataResolved.then(function(value){
				//set the array of prices to the value, which is equal to array of prices corresponding to the year
				priceArray = value;

				var year = parseInt(startYear)+i;
				//create an object with the key being the year, and the 
				yearDataObject = {year: priceArray}
				yearData[i] = yearDataObject;


				//get the average price for the year
				var averagePriceForYear = getAveragePrice(priceArray);
				//push it into the array that holds the average data
				averagePricePerYearArray[i] = averagePriceForYear;

				//creates the chart
				createChart(averagePricePerYearArray, years);
			});	


			//
			var eachYearRoomTypeDataArray = [];
			var roomTypeAveragePricePerYearArray = [];
			var roomTypeChartTitle = "Average Airbnb Price Per Year for: " + roomType;
			//getting average price per year by the room type
			// var getRoomDataResolved = getRoomData(year, cityInput, roomType);

			getRoomTypeData(year, cityInput, roomType).then(function(value){
				//this variable priceArray will hold the array of prices for that year and roomtype
				priceArray = value;
				//adding the array for the year and roomtype into an array with other years' data
				eachYearRoomTypeDataArray[i] = priceArray;
				//
				var averageRoomPricePerYear = getAveragePrice(priceArray);
				//add to array at the proper index for the average room price per year data
				roomTypeAveragePricePerYearArray[i] = averageRoomPricePerYear;
				//create chart
				createRoomChart(roomTypeAveragePricePerYearArray, years, roomTypeChartTitle);
			});
		}		
	});
});	


//grabs the data from database, and stores the json into an array
// function getAllData(year, city){}


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

function getRoomTypeData(year, city, roomType){
	//Function that is asynchronous - waits until the database is finished with the query and returns the data
	return new Promise(
		function (resolve, reject){
			//create the queryUrl
			var queryUrl = "/api/airbnb/" + city + "/" + year + "/" +roomType + "/";
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

	var total = 0.0;

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
	$("#chart1").empty();
	//console.log("DATA for chart:", data)


	var chartdata = {
		labels:labelsArray,
		datasets:[
			{
				label:"Average Airbnb Price Per Year",
				backgroundColor: 'rgba(100, 100, 100, 0.75)',
				borderColor: 'rgba(100, 100, 100, 0.75)',
				hoverBackgroundColor: 'rgba(100, 100, 100, 0.75)',
				hoverBorderColor: 'rgba(100, 100, 100, 0.75)',
				data: data
			}
		]
	}
	var options = {
	    scales: {
	    	// xAxes: [{
	    	// 	scaleLabel:{
	    	// 		display: true,
	    	// 		labelString: "Years"
	    	// 	}
	    	// }],
	        yAxes: [{
	            ticks: {
	                beginAtZero: true,
	                min: 0
	            },
	         	scaleLabel:{
	         		display: true,
	         		labelString: "Price in US Dollars"
	         	}
	        }]
	    }
	}
	var chart = new Chart(ctx, {

		type: "bar",
		data: chartdata,
		options: options

	});
}

function createRoomChart(data, labelsArray, title){
	var ctx = $("#chartRoomType");
	ctx.empty();
	//console.log("DATA for chart:", data)
	var chartdata = {
		labels:labelsArray,
		datasets:[
			{
				label:title,
				backgroundColor: 'rgba(200, 200, 200, 0.75)',
				borderColor: 'rgba(200, 200, 200, 0.75)',
				hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
				hoverBorderColor: 'rgba(200, 200, 200, 1)',
				data: data
			}
		]
	}
	var options = {
	    scales: {
	        yAxes: [{
	            ticks: {
	                beginAtZero: true,
	                min: 0
	            },
	            scaleLabel:{
	         		display: true,
	         		labelString: "Price in US Dollars"
	         	}
	        }]
	    }
	}
	var chart = new Chart(ctx, {

		type: "bar",
		data: chartdata,
		options: options

	});
}