/* This javascript file will take in a new user and add them to the database*/

$(document).ready(function(){

	//get the values from the modal join form 

	$(document).on("submit","#submit-sign-up",submitUser);

	function submitUser(event){

		event.preventDefault();

		//get values
		var firstname = $("#firstname").val().trim();
		var lastname = $("#lastname").val().trim();
		var email = $("#email").val().trim();
		var password = $("#password").val().trim();
		var username = $("#username").val().trim();


		
		var userObject = {
			first_name: firstname,
			last_name: lastname,
			email: email,
			username: username,
			password: password
		}

		$.post("/api/user", userObject).then(function(){
			console.log(userObject);
		});
	}


});