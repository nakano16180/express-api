var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken"); // 追記

function verifyToken(req, res, next) {
  // リクエストヘッダーから認証値を取得
  const bearerHeader = req.headers["authorization"];
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

/* GET home page. */
router.get("/", function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.json({
    message: "Post page"
  });
});

router.post('/', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
      if(err){
        res.sendStatus(403)
      } else {
  　　  res.json({
          authData
        })
      }
    })
  })

module.exports = router;
