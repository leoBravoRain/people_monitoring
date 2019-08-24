// import mongoose
const mongoose = require('mongoose');

// imrpot schema from mongoose
const Schema = mongoose.Schema;

// Define schema
let Action_of_Manager = new Schema({

	description: {

		type: String
	},

	date: {

		type: Date,

		// this must to be setted for local time
		default: Date.now
	},

	area: {

		type: Schema.Types.ObjectId, ref: 'Area'
	}

})

// Export schema
module.exports = mongoose.model('Action_of_Manager', Action_of_Manager);