var express = require("express");
var router  = express.Router();
var request = require('request');

 
// Index
router.get("/", function(req, res){

    

       res.render("home/index", {});
 
});


module.exports = router;
