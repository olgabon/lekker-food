var express = require('express');
var cookieParser = require('cookie-parser');
var path = require('path');
var mongoose = require("mongoose")
var cors = require("cors")
var session = require('express-session')

const port = process.env.PORT;
require("dotenv").config()

mongoose.connect(process.env.DATA_BASE)
    .then(()=> {
        console.log("connected to mongo")
    })
    .catch((err)=> {
        console.log("not connected to mongod", err)
    })

var app = express();

app.use(session({
    secret: process.env.COOKIE_SECRET,
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

app.use((req, res, next)=>{
    res.sendFile(__dirname + "/public/index.html")
})

//app.use('/', require('./routes/index'))

app.use('/users', require('./routes/users'));

app.listen(port, () => {
    console.log(`listening on ${port}`)
})

module.exports = app;