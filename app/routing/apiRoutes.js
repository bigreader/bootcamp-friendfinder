var express = require('express');
var friends = require('../data/friends.js');

console.log(friends);

var router = express.Router();
router.use(express.urlencoded({extended: true}));
router.use(express.json());

router.get('/friends', (req, res) => {
	res.json(friends);
});

router.post('/friends', (req, res) => {
	var profile = { // clean up the data, who knows what the user sent
		name: req.body.name,
		photo: req.body.photo,
		answers: req.body.answers
	}
	console.log(req.body);

	var best = null;
	var bestScore = Infinity;
	friends.forEach(friend => {
		var score = 0;
		friend.answers.forEach((answer, i) => {
			score += Math.abs(answer - profile.answers[i]);
		});
		if (score < bestScore && friend.name !== profile.name) {
			bestScore = score;
			best = friend;
		}
	});

	friends.push(profile); // add user to friends database
	console.log(friends.map(f => f.name));

	res.json({
		success: (best !== null),
		score: bestScore,
		friend: best
	});
});

module.exports = router
