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

//debug purposes
app.use((req, res, next) => {
    // console.log("req body:", req.body);
    next();
});

app.use('/', mainRoutes);
app.use('/api', apiRoutes);

// app.get('/', (req, res) => {
//     var p1 = Promise.resolve(University.distinct("City"));
//     var p2 = Promise.resolve(University.distinct("Study_program"));
//
//     Promise.all([p1, p2]).then(values => {
//         var distinctCities = values[0].sort();
//         var distinctStudies = values[1].sort();
//         res.render('index', {
//             title: 'Homepage',
//             page: "homepage",
//             services: "/#service-container",
//             advantages: "/#advantages-container",
//             about_us: "/#about-us-container",
//             contact: "/kontakt",
//             blog: "/#blog-container",
//             distinctCities,
//             distinctStudies
//         });
//     });
// });

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
