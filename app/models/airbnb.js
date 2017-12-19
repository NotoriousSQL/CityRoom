//sequelize model for our airbnb data

module.exports = function(sequelize, Datatypes){
<<<<<<< HEAD
	var Airbnb = sequelize.define("Airbnb",{
=======
	var Airbnb = sequelize.define("airbnb",{
>>>>>>> origin/Development
		room_id:{
			type: Datatypes.INTEGER,
			allowNull: false,
		},
<<<<<<< HEAD
		host_id:
		{
			type: Datatypes.INTEGER,
			allowNull: true
=======
		survey_id:
		{
			type: Datatypes.INTEGER,
			allowNull: false
		},
		host_id:
		{
			type: Datatypes.INTEGER,
			allowNull: false
>>>>>>> origin/Development
		},
		room_type:
		{
			type: Datatypes.STRING,
<<<<<<< HEAD
			allowNull: true,
			notEmpty: false
		},
		country:{
			type: Datatypes.STRING,
			allowNull: true,
			notEmpty: false
		},
		city:{
			type: Datatypes.STRING,
			allowNull: true,
			notEmpty: false
		},
		borough:{
			type: Datatypes.STRING,
			allowNull: true,
			notEmpty: false
		},
		neighborhood:{
			type: Datatypes.STRING,
			notEmpty: false,
		},
		review:{
			type: Datatypes.INTEGER,
			allowNull: true
		},
		overall_satisfaction:{
			type: Datatypes.FLOAT,
			allowNull: true,
			notEmpty: false
		},
		accommodates:{
			type: Datatypes.INTEGER,
			allowNull: true,
			notEmpty: false
		},
		bedrooms:{
			type: Datatypes.INTEGER,
			allowNull: true,
			notEmpty: false
		},
		price:{
			type: Datatypes.FLOAT,
			allowNull: true
=======
			allowNull: false
		},
		country:{
			type: Datatypes.STRING,
			allowNull: true
		},
		city:{
			type: Datatypes.STRING,
			allowNull: false
		},
		borough:{
			type: Datatypes.STRING,
			allowNull: true
		},
		neighborhood:{
			type: Datatypes.STRING,
			allowNull: true
		},
		review:{
			type: Datatypes.INTEGER
		},
		overall_satisfaction:{
			type: Datatypes.FLOAT
		},
		accomidates:{
			type: Datatypes.INTEGER
		},
		bedrooms:{
			type: Datatypes.INTEGER
		},
		bathrooms:{
			type: Datatypes.INTEGER
		},
		price:{
			type: Datatypes.FLOAT
>>>>>>> origin/Development
		},
		minstay:{
			type: Datatypes.INTEGER,
			allowNull: true
		},
<<<<<<< HEAD
		latitude:{
			type: Datatypes.FLOAT,
			allowNull: true,
			notEmpty: false
		},
		longitude:{
			type: Datatypes.FLOAT,
			allowNull: true,
			notEmpty: false
		},
		last_modified:{
			type: Datatypes.STRING,
			notEmpty: false
		},
		

	},
	{
		timestamps: false
=======
		last_modified:{
			type: Datatypes.STRING,
			allowNull: false
		}

>>>>>>> origin/Development
	});


	return Airbnb;
}