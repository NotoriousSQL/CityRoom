//sequelize model for our airbnb data

module.exports = function(sequelize, Datatypes){
	var Airbnb = sequelize.define("Airbnb",{
		room_id:{
			type: Datatypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		host_id:
		{
			type: Datatypes.INTEGER,
			allowNull: false
		},
		room_type:
		{
			type: Datatypes.STRING,
			allowNull: false
		},
		country:{
			type: Datatypes.STRING,
			allowNull: true
		},
		city:{
			type: Datatypes.STRING,
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
		price:{
			type: Datatypes.FLOAT
		},
		minstay:{
			type: Datatypes.INTEGER,
			allowNull: true
		},
		last_modified:{
			type: Datatypes.DATE,
			allowNull: false
		},
		//timestamps: false,

	});


	return Airbnb;
}