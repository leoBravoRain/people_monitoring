// import mongoose
const mongoose = require('mongoose');

// imrpot schema from mongoose
const Schema = mongoose.Schema;

// Define schema
let Daily_Question = new Schema({

	calification: {

		type: Number
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
module.exports = mongoose.model('Daily_Question', Daily_Question);