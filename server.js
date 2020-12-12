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

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});