var express = require('express');
var router = express.Router();

const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  const jsonObject = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
  res.json(jsonObject);
});

router.post('/', (req, res) => {
  fs.writeFileSync('./data.json', JSON.stringify(req.body));
  res.json({
    message: "Post Success!"
  })
});
module.exports = router;
