var express  = require("express");
var router   = express.Router();
var watson = require('watson-developer-cloud');

// Index
router.post("/", function(req, res){
    var conversation = new watson.ConversationV1({
        username: "85fa57b1-555a-4b62-8e51-fd1b1807b62d",
        password: "MzWVbEbF0hWE",
        version_date: "2018-01-09"
      });

    var workspace = {
        name: 'API test',
        description: 'Example workspace created via API.'
      };
      
      conversation.createWorkspace(workspace, function(err, response) {
        if (err) {
          console.error(err);
        } else {
          console.log(JSON.stringify(response, null, 2));
        }
       });
});

// show
router.get("/", function(req, res){
    var conversation = new watson.ConversationV1({
        username: "85fa57b1-555a-4b62-8e51-fd1b1807b62d",
        password: "MzWVbEbF0hWE",
        version_date: "2018-01-09"
      });


       conversation.message({
        workspace_id: "9f608b05-d2da-4b77-b7ca-7960fc227f68",
        input: {'text': req.query.query},
        context : req.query.context
      },  function(err, response) {
        if (err)
          console.log('error:', err);
        else
          console.log(JSON.stringify(response, null, 2));
          res.json(response);
          
      });

});

module.exports = router;
