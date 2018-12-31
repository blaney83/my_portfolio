
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/build"));

const router = require("express").Router();
const path = require("path")

// router.use("/", v1Routes);

// Program in a fall back route for missed calls
router.use("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../app/build/index.html"));
});

// // Mongoose Connection
// const db = require("./config/connection");
// db(process.env.MONGODB_URI || "mongodb://localhost/test");

// // Start the API server
const server = app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

server.timeout = 90000
