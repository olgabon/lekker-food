var express = require('express');
var cookieParser = require('cookie-parser');
var path = require('path');
var mongoose = require("mongoose")
var cors = require("cors")
var session = require('express-session')

const port = 5000;
require("dotenv").config()

mongoose.connect("mongodb://localhost/food")
    .then(()=> {
        console.log("connected to mongo")
    })
    .catch((err)=> {
        console.log("not connected to mongod", err)
    })

var app = express();

app.use(session({
    secret: 'fat potato',
    resave: false,
}))


app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(cors({
    origin: ["http://localhost:3000", "localhost:3000"],
    credentials: true
}))

app.use('/', require('./routes/index'))

app.use('/users', require('./routes/users'));

app.listen(port, () => {
    console.log(`listening on ${port}`)
})

module.exports = app;