var express = require('express');
var router = express.Router();
const {author} = require('../models')
/* GET users listing. */


router.route("/").get( async function(req, res, next) {
  const authorsData = await author.findAll();
  res.json(authorsData);
})

router.route("/new").post( async function(req, res, next) {

    try{
        const {name, birthdate, email} = req.body;
        const authorsData = await author.create({name, birthdate, email});
        res.json(authorsData);
    }catch(err){
        res.status(400).json(err);
    }
    
})

module.exports = router;