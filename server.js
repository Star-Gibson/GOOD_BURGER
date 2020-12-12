//DEPENDENCIES
var express = require("express");
var exphbs = require("express-handlebars");

//SETS PORT TO HEROKU OR USES LOCALHOST
var PORT = process.env.PORT || 3000;

var app = express();

// SERVE STATIC CONTENT FOR THE APP FROM THE "PUBLIC" DIRECTORY
app.use(express.static("public"));

// PARSE APPLICATION BODY AS JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//SETS UP HANDLEBARS
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// IMPORTS ROUTES
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//START OUR SERVER SO THAT IT CAN BEGIN LISTENING TO CLIENT REQUESTS
app.listen(PORT, function() {
  // LOG (SERVER-SIDE) WEN OUR SERVER HAS STARTED
  console.log("Server listening on: http://localhost:" + PORT);
});