// server.js is the entrypoint for the application where server requests are handled

// Node.js is just a js engine that allows you to run js code outside of the browser... Your computer, a server etc
// When you download node.js it comes with node package manager (npm) this is a library of a bunch of functionality that you can use plus a package manager to handle any packages that you install and use
// Express is one of these modules that you can install that makes it easier to set up a server using js and node.js as well as make it easier to work with http requests and routing requests

// grabbing the express module so that we can use it
const express = require("express");
// creating an instance of the express object so we can use it's methods etc
const app = express();

// set up request handling for different http requests... get, post, put, delete
// if you want to send rendered html views then you have to download and utilize a view engine and a very commonone is "EJS" this basically allows you to render and send html files with js that dynamically includes data like php did in the lamp stack
// I don't exacatly get what is going on here but 
const path = require("path");
app.set("views", path.join(__dirname, "frontend", "views")); // Your html must have .ejs ext instead of html

app.get("/", (req, res) => {
    res.send("Working Server yayaya changed path heyyaaa");
})

// using the express object to set up a server that is actively listening for requests on port 3000
app.listen(3000);