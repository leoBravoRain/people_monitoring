let Action_of_Manager = require('../models/action_of_manager.model');
let Area = require('../models/area.model');

module.exports = function(routes){

	// Routing control for get requests
	routes.route('/action_of_manager/:id_area').get(function(req, res) {

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

					// Get action_of_manager of area
					Action_of_Manager.find({area: area._id}, function(err, actions_of_manager) {	

						// if error
						if (err) {

							// display error in console
							console.log(err);

							// data was not found
							res.status(500).send(err);

						}

						// if there is not error
						else {

							console.log(actions_of_manager);
							
							// return actions_of_manager
							res.json(actions_of_manager);
							
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
	routes.route('/add_action_of_manager').post(function(req, res) {

		// new instace. it get data from req body
		let action_of_manager = new Action_of_Manager(req.body);

		// save instace in DB
		action_of_manager.save()

			// if correctly saved
			.then( action_of_manager => {

				res.status(200).json({'action_of_manager': 'action_of_manager added successfully'});

			})

			// if error
			.catch(err => {

				res.status(400).send('Adding new action_of_manager failed\nError:  ' + err);

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