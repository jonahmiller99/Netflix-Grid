const express = require('express');
const db = require('../db');

const router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*');
  
  try {
      let results = await db.all();
      results = results
      res.json(results);
  } catch(err) {
    console.log(err);
    res.sendStatus(500);
  }


});

module.exports = router;
