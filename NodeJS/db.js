const mongoose = require("mongoose"); // Connection on MongoDB

mongoose.connect("mongodb://localhost:27017/CrudDB", err => {
  // Error checking
  if (!err) console.log("MongoDB connection succeeded.");
  else
    console.log(
      "Error in DB connection : " + JSON.stringify(err, undefined, 2)
    );
});

module.exports = mongoose;
