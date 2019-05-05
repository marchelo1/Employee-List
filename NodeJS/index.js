const express = require("express"); // With express you can read any data inside HTTP request
const bodyParser = require("body-parser"); // extracts the entire body portion of an incoming request stream and exposes it on req.body
const cors = require("cors");

const { mongoose } = require("./db.js"); // import mongodb file
var employeeController = require("./controllers/employeeController.js"); // import router from employeeController file

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:4200" }));

app.listen(3000, () => console.log("Server started at port : 3000")); //invoking this callback function

app.use("/employees", employeeController); // adding employeeController in this application
