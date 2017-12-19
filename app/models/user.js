//seqeulize model for user database


module.exports = function(sequelize, Datatypes){
	var User = sequelize.define("User",{
		first_name:{
			type: Datatypes.STRING
		},
		last_name:{
			type: Datatypes.STRING
		},
		email:{
			type: Datatypes.STRING,
			allowNull: false,
			//validation: must be in email format, qwerty@qwerty.com
			validate:{
				isEmail:true
			}
		},
		username:{
			type: Datatypes.STRING,
			allowNull: false,
			//validation of username - can't be an empty string, and 
			validate:{
				notEmpty:true
				//function that tells a user name if that user name is already in use, will throw error
				// isUnique: function(name){
				// 	User.find({

				// 	})
			}
		},
		password:{
			type: Datatypes.STRING,
			allowNull: false,
			//validation, must be between 8 and 20 characters long
			validation:{
				len:[6,20]
			}
		}
	});

	return User;

}
