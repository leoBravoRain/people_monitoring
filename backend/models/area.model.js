// import mongoose
const mongoose = require('mongoose');

// imrpot schema from mongoose
const Schema = mongoose.Schema;

// Define schema
let Area = new Schema({

	name: {

		type: String
	},

	// Group foreign key
	group: {
	
		type: Schema.Types.ObjectId, ref: 'Group'
			
	},

});

// Export schema
module.exports = mongoose.model('Area', Area);