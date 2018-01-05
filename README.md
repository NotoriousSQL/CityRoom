# SiGo - Stay In or Go Out?


![Alt Text](assets/images/previewimage.png)


### Synopsis

SiGo (Stay In or Go Out) is a web-based application that gives the user two sets of options for staying in or going out.  It provides four random recipes and four random restaurants in Chicago, and then the user can choose to view any of the results in detail.  


### Motivation

The project came about after combining a few different ideas some of us had for it, such as a party hosting application using a music API and recipe API, and a more extensive calendar application that would utilize an event API to update the calendar in real time.   During our brainstorming session, we all recognized the "Fear of Missing Out" (or "FOMO") phenomenon, and started discussing a product that could help alleviate or destigmatize this fear.  We wanted something that "social butterflies" and "homebodies" could appreciate for different reasons, while also showcasing the positives of staying in or going out to both.        

### Code Example

Below is a sample of the Javascript we used that calls data from an API called Zomato when the user clicks the main button on the page.  This portion just shows it taking the titles of the four random recipes and displaying them in four divs on the page.  Each time the button is clicked it chooses four different recipes.

    $('#mainbutton').on('click', function() {

    var recipe = $(this).data('name');

    var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?limitLicense=false&number=4&tags=";
    $.ajax({
        url: queryURL,
        headers: { 'X-Mashape-Key': 'QjnzWlmOacmshwsPibENUtYYmB3Zp1X16Xmjsn1sIUIJeoo2Gx' },
        method: 'GET'
    })
        .done(function(response) {
            displayRecipes(response.recipes);
            displayImages(response.recipes);
            giveUrl(response.recipes);
            $("#img1").css("background","#fff8d3");
            $("#img2").css("background","#fff8d3");
            $("#img3").css("background","#fff8d3");
            $("#img4").css("background","#fff8d3");
            
        });
    });
    //
    function displayRecipes(recipes){
        console.log(recipes);
        var recipediv1 = $("<div>") 
        recipediv1.html(recipes[0].title)
        $("#recipediv1").html(recipediv1)
        var recipediv2 = $("<div>") 
        recipediv2.html(recipes[1].title)
        $("#recipediv2").html(recipediv2)
        var recipediv3 = $("<div>") 
        recipediv3.html(recipes[2].title)
        $("#recipediv3").html(recipediv3)
        var recipediv4 = $("<div>") 
        recipediv4.html(recipes[3].title)
        $("#recipediv4").html(recipediv4)
      }



### API Reference

The two APIs used are:

1. #### Zomato
Zomato APIs give you access to the freshest and most exhaustive information for over 1.5 million restaurants across 10,000 cities globally.

https://developers.zomato.com/api

2. #### Spoonacular
Spoonacular is dedicated to building the most comprehensive food ontology in the world. But what good is that data if you can't tap into its glorious potential? Our food API provides individual app developers as well as large businesses with the necessary tools to create stunning applications with our data.

https://spoonacular.com/food-api


### Built With

* Javascript + jQuery
* Material Design Lite
* Animate.css

![Alt Text](assets/images/mdimage.png)

### Authors

* Gary Marroquin
* Jessica Toro
* Spencer Hawk
* Nick Dehmlow 



