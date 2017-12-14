/* This javascript file will take in a new user and add them to the database*/

$(document).ready(function(){

	//get the values from the modal join form 

	$(document).on("click","#submit-sign-up",submitUser);

	function submitUser(event){

		event.preventDefault();

		//get values
		var firstname = $("#firstName").val().trim();
		var lastname = $("#lastName").val().trim();
		var email = $("#email").val().trim();
		var password = $("#psw").val().trim();
		var username = $("#usrname").val().trim();

		console.log(firstname);


		
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