var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.json({
    message:"Hello,world"
  });
});

router.post('/', (req, res) => {
  res.json({
    message: "Post Success!"
  })
});
module.exports = router;
