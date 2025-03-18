var express = require('express');
var router = express.Router();
const {author} = require('../models')
/* GET users listing. */



router.route("/:genresId/authors").get( async function(req, res, next) {

    try{
        
    }catch(err){
        res.status(400).json(err);
    }
    
})

module.exports = router;