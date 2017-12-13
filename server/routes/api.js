'use strict';

const express = require('express');
const router = express.Router();

const hf = require('../../utils/helper_functions');
router.get('/', (req,res) => {
  res.send("WELCOME TO MY API");
});

router.post('/', (req,res) => {
  // res.send("POST REQUEST");
  console.log("/API REQ BODY:", req.body);
  // console.log(req.body.data);
  // console.log(req.body.data.a);

  var {miete, einkommen, a,b,c } = req.body.data[0];
  const wohnGeld = hf.berechneWohnGeld(miete, a,b,c, einkommen);
  console.log("WOHNGELD: ", wohnGeld);
  res.json(wohnGeld);

});

module.exports = router;
