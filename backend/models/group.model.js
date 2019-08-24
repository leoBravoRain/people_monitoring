// import mongoose
const mongoose = require('mongoose');

// imrpot schema from mongoose
const Schema = mongoose.Schema;

// Define schema
let Group = new Schema({

	name: {

		type: String
	},

	password: {

		type: String
	},

	

})

// Export schema
module.exports = mongoose.model('Group', Group);