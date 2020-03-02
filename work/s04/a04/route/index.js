/**
 * General routes.
 */
"use strict";

var express = require('express');
var router  = express.Router();
var lotto = require("../lotto/index.js")

// Add a route for the path /
router.get('/', (req, res) => {
    res.sendFile(__dirname + "/../public/index.html");
});

router.get("/lotto", (req, res) => {
    let data = {};

    data.lotto = lotto();
   
    res.render("lotto", data);
});


module.exports = router;