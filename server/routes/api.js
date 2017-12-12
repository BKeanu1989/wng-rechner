'use strict';

var express = require('express');
var router = express.Router();

router.get('/', (req,res) => {
  res.send("WELCOME TO MY API");
});

router.post('/', (req,res) => {
  res.send("POST REQUEST");
  console.log(req.body);
  console.log(req.body.data);
  console.log(req.body.data.a);


});

module.exports = router;
