var express = require('express');
var router = express.Router();
var jwt = require( 'jsonwebtoken' );  // 追記

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.json({
    message:"login page"
  });
});

router.post('/', function(req, res, next) {
  // お試しユーザー
  const user = {
    id: 1,
    username: 'テストユーザー'
  }

  // dbの処理を書く

  jwt.sign({user: user}, 'secretkey', {expiresIn: '1h'}, (err, token) => {
    res.json({
      token
    })
  })
});


module.exports = router;
