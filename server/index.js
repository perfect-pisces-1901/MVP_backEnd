const path = require("path");
const express = require("express");
const volleyball = require("volleyball");
const app = express();
module.exports = app;

// Logging middleware
app.use(volleyball);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname + "./public")));

app.use("/api", require("./api"));
