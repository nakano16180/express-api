## express api server

```
$ express -v pug --git express-api
$ cd express-api && npm install
$ DEBUG=express-api:* npm start
```

```
# GET
$ curl -X GET http://localhost:3000

# POST
$ curl -X POST http://localhost:3000 -d {}

```

### JWT 
```
$ curl -X POST http://localhost:3000/login -d {}
```
{"token": "****************************"}が返ってくるのでそれを用いて以下のコマンド
```
$ curl -H "Authorization: JWT *********************" -X POST http://localhost:3000/posts -d {}
```