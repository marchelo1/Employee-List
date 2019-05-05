const mongoose = require("mongoose");

var Employee = mongoose.model("Employee", {
  // structures of our model
  name: { type: String },
  position: { type: String },
  office: { type: String },
  salary: { type: Number }
});

module.exports = { Employee }; // exporting objects
