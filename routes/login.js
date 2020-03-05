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
 
  jwt.sign({user: user}, 'secretkey', {expiresIn: '1h'}, (err, token) => {
    res.json({
      token
    })
  })
});


function verifyToken(req, res, next) {
  // リクエストヘッダーから認証値を取得
  console.log(req.headers);
  const bearerHeader = req.headers["authorization"];
  console.log(bearerHeader);
  if (typeof bearerHeader !== "undefined") {
    // Bearerの後ろのスペース以降がトークンになる為splitして取得
    const bearer = bearerHeader.split(" ");
    // トークンを保持して次の処理に進む
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    // トークンが存在しない場合にはエラー
    res.sendStatus(403);
  }
}

module.exports = router;
