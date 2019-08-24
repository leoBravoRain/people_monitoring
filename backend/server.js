// import express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// crate express instance
const app = express();

// Create express router instance
const routes = express.Router();

// define PORT
const PORT = 4000;

// express app is going to use cors
app.use(cors());

// express app is going to parse the body content in JSON format
app.use(bodyParser.json());

// route take control of request starting with path /piece_of_ground
app.use('/people_monitoring', routes)

// connect to local mongodb
mongoose.connect('mongodb://127.0.0.1:27017/people_monitoring', { useNewUrlParser: true });

// create connection object
const connection = mongoose.connection;

// once the connection is opened
connection.once('open', function() {

    console.log("MongoDB database connection established successfully");

});


// Add Group routes from own file
require('./routes/groups.routes')(routes);

// Add Areas routes from own file
require('./routes/areas.routes')(routes);

// Add Daily Questions routes from own file
require('./routes/daily_questions.routes')(routes);

// Add Message from worker routes from own file
require('./routes/message_from_worker.routes')(routes);

// Add Action of manager routes from own file
require('./routes/actions_of_manager.routes')(routes);

// app is listening
app.listen(PORT, function() {

    console.log("Server is running on Port: " + PORT);

});