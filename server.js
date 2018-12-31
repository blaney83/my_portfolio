
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/build"));

// Add routes, both API and view
// app.use(routes);

// // Mongoose Connection
// const db = require("./config/connection");
// db(process.env.MONGODB_URI || "mongodb://localhost/test");

// // Start the API server
const server = app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

server.timeout = 90000
