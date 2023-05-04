var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('/private/index.html', {root: '.'});
});


// router.get('/:id([0-9]{3,}', function(req, res, next) {
//   let sqlRequest = `SELECT * FROM opportunity WHERE opportunity_id ${hi}`;
// });

module.exports = router;