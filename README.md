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