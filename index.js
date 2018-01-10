var express        = require("express");
var mongoose       = require("mongoose");
var bodyParser     = require("body-parser");
var methodOverride = require("method-override");
var app = express();


var db = mongoose.connection;
db.once("open", function(){
  console.log("DB connected");
});
db.on("error", function(err){
  console.log("DB ERROR : ", err);
});

// Other settings
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

// Routes (*redirect할때 주의)
app.use("/", require("./routes/home"));
// app.use("/contacts", require("./routes/contacts"));
// app.use("/CreditCardIssuerList", require("./routes/CreditCardIssuerList"));
// app.use("/mycardlists", require("./routes/mycardlists"));
app.use("/Conversation", require("./routes/Conversation"));


// Port setting
app.listen(process.env.PORT || 3000, function(){
  console.log("server on!");
});
