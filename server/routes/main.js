'use strict';

var express = require('express');
var router = express.Router();

const axios = require('axios');
const connection = require('../config/db_config');



router.get('/', (req,res) => {
  // connection.connect();
  //
  // connection.query('SELECT * FROM WerteABC', function (error, results, fields) {
  //   if (error) {
  //     throw error;
  //   }
  //   console.log('The solution is: ', results);
  //   results.forEach((result) => {
  //     console.log(result);
  //   });
  //
  // });
  //
  // connection.end();

  // res.render('index', {
  //   bodyClass: 'homepage'
  // });

    res.render('index', {
      bodyClass: 'homepage'
    });
});

module.exports = router;
