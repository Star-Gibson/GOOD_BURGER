//DEPENDENCIES
var express = require("express");

var router = express.Router();

//IMPORT BURGER.JS MODEL
var burger = require("../models/burger.js")

//GET ROUTE
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
      var hbsObject = {
        burgers: data,
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

//POST ROUTE
router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ],
        function (result) {
            //SEND BACK THE ID OF THE NEW BURGER
            res.json({ id: result.insertId });
        });
});

//PUT ROUTE
router.put("/api/burgers/:id", function (req, res) {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne(
        { devoured: req.body.devoured }, condition, function (result) {
            if (result.changedRows == 0) {
                return res.sendStatus(404);
            }
            else {
                res.sendStatus(200);
            }
        }
    )
});

module.exports = router;