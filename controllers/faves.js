var express = require('express');
var router = express.Router();

router.get('/foods', function(req, res) {
  res.render('faves/foods', {title: 'Favorite Foods', foods: ['chicken fried steak', 'filet mignon', 'lobster bisque']})
});


router.get('/animals', function(req, res) {
  res.render('faves/animals',{title: 'Favorite Animals', animals: ['cats', 'dogs', 'bunnies']})
});

module.exports = router;