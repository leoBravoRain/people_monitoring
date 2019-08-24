// import mongoose
const mongoose = require('mongoose');

// imrpot schema from mongoose
const Schema = mongoose.Schema;

// Define schema
let Message_from_Worker = new Schema({

	message: {

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
module.exports = mongoose.model('Message_from_Worker', Message_from_Worker);