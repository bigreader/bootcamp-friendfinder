var express = require('express');

var router = express.Router();
router.use(express.urlencoded({extended: true}));
router.use(express.json());

router.get('/friends', (req, res) => {
	res.json({});
});

router.post('/friends', (req, res) => {
	res.json({});
});

module.exports = router
