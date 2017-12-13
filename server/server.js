'use strict';

require('./config/config');
const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')
// const session = require('express-session');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

var env = process.env.NODE_ENV || 'development';

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var mainRoutes = require('./routes/main');
var apiRoutes = require('./routes/api');

var app = express();
var server = http.createServer(app);

// app.use(express.static(publicPath));
if (env === 'development') {
  app.set('rootDir', path.join(__dirname, '..', '..'));
}
console.log(app.get('rootDir'));

app.set('views', path.join(__dirname, '/../views'));
// view engine setup
app.set('view engine', 'ejs');
// app.use(compression());
app.use(morgan('dev'));
app.use(cookieParser());
// app.use(session({secret: 'asdfmoviestestfaggot', resave: true, saveUninitialized: true}));
app.use('/intern/css', express.static(path.join(__dirname, '..', 'public', 'css')));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true}));

// whitelist domains for api use
app.use(function(req,res,next) {
  var whiteListedDomains = ["http://localhost:3000", "https://studierenplus.de", "https://www.easyantrag.de/"];
  var origin = req.headers.origin;
  if (whiteListedDomains.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, application/json');
  next();
});

//debug purposes
app.use((req, res, next) => {
    // console.log("req body:", req.body);
    next();
});

app.use('/', mainRoutes);
app.use('/api', apiRoutes);


// deactivate in development
// Handle 404
if (env !== 'development') {
    app.use(function(req, res) {
        res.status(404).render('500', {
            title: "ERROR",
            page: "error"
        })
    });
    // Handle 500
    app.use(function(error, req, res, next) {
        res.status(500).render('500', {
            title: "ERROR",
            page: "error"
        })
    });
}

server.listen(port, () => {
    console.log(`Server up at ${port}`);
});
