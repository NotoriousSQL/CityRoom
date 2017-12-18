//sequelize model for our airbnb data

module.exports = function(sequelize, Datatypes){
	var Airbnb = sequelize.define("Airbnb",{
		room_id:{
			type: Datatypes.INTEGER,
			allowNull: false,
		},
		host_id:
		{
			type: Datatypes.INTEGER,
			allowNull: true
		},
		room_type:
		{
			type: Datatypes.STRING,
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
		},
		minstay:{
			type: Datatypes.INTEGER,
			allowNull: true
		},
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
	});


	return Airbnb;
}