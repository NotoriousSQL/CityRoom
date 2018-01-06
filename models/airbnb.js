//sequelize model for our airbnb data

module.exports = function(sequelize, Datatypes){
	var Airbnb = sequelize.define("airbnb",{
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
		},
		country:{
			type: Datatypes.STRING,
			allowNull: true,
		},
		city:{
			type: Datatypes.STRING,
			allowNull: true,

		},
		borough:{
			type: Datatypes.STRING,
			allowNull: true,

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
		},
		accommodates:{
			type: Datatypes.INTEGER,
			allowNull: true,
		},
		bedrooms:{
			type: Datatypes.INTEGER,
			allowNull: true,
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
		},
		longitude:{
			type: Datatypes.FLOAT,
			allowNull: true,
		},
		last_modified:{
			type: Datatypes.STRING,
		},
		

	},
	{
		timestamps: false
	});
	return Airbnb;
}