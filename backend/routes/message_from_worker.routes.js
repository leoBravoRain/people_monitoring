let Message_from_Worker = require('../models/message_from_worker.model');
let Area = require('../models/area.model');

module.exports = function(routes){

	// Routing control for get requests
	routes.route('/message_from_worker/:id_area').get(function(req, res) {

		// Pick up the instances
		Area.findById(req.params.id_area, function(err, area) {

			// if it gets error
			if (err) {

				// display error in console
				console.log(err);

				// send error
				res.status(500).send(err);

			} else {

				// if there is a area (area != null)
				if (area) {

					// Get message_from_workers of area
					Message_from_Worker.find({area: area._id}, function(err, message_from_workers) {	

						// if error
						if (err) {

							// display error in console
							console.log(err);

							// data was not found
							res.status(500).send(err);

						}

						// if there is not error
						else {

							// return message_from_workers
							res.json(message_from_workers);
							
						};

					});

				}

				// If there is not question
				else {

					res.status(404).send('data is not found');

				};

			};

		});

	});

	// Routing control for add new instance
	routes.route('/add_message_from_worker').post(function(req, res) {

		// new instace. it get data from req body
		let message_from_workers = new Message_from_Worker(req.body);

		// save instace in DB
		message_from_workers.save()

			// if correctly saved
			.then( message_from_workers => {

				res.status(200).json({'message_from_workers': 'message_from_workers added successfully'});

			})

			// if error
			.catch(err => {

				res.status(400).send('Adding new message_from_workers failed\nError:  ' + err);

			});

	});

	// // Routing control for update a piece of ground
	// routes.route('/update_piece_of_ground/:id').post(function(req, res) {

	// 	// Find the instance in DB
	// 	Piece_of_Ground.findById(req.params.id, function(err, piece_of_ground) {

	// 		// If it NOT gets the instance
	// 		if (!piece_of_ground) {

	// 			res.status(404).send('data is not found');

	// 		}

	// 		// if it gets the instance
	// 		else {

	// 			// update all files
	// 			piece_of_ground.name = req.body.name;
	// 			piece_of_ground.size = req.body.size;
	// 			piece_of_ground.price = req.body.price;
	// 			piece_of_ground.available = req.body.available;
	// 			piece_of_ground.loteo = req.body.loteo;
	// 			piece_of_ground.latitude = req.body.latitude;
	// 			piece_of_ground.longitude = req.body.longitude;

	// 			// // update instance in DB
	// 			piece_of_ground.save().then(piece_of_ground => {

	// 				// json response
	// 				res.json('Updated!');

	// 			})

	// 			// if there is an error
	// 			.catch(err => {

	// 				// json response
	// 				res.status(400).send('Update not possible');

	// 			});

	// 		};


	// 	})

	// })
 
}