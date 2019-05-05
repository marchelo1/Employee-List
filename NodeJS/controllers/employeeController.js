// CRUD operations

const express = require("express");
var router = express.Router(); // implement router for express
var ObjectId = require("mongoose").Types.ObjectId; // import ObjectId from mongoose/Object Data Modeling library for MongoDB/

var { Employee } = require("../models/employee"); // importing employees

// to execute this => localhost:3000/employees/
router.get("/", (req, res) => {
  // retrieving all collections from employees
  Employee.find((err, docs) => {
    if (!err) {
      res.send(docs); // if there is no errors, retrieving collections from employees
    } else {
      console.log(
        "Error in Retriving Employees :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

// getting id from MongoDB database
router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);
  // finding employee by id
  Employee.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Retriving Employee :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

// importing new db collections in databese
router.post("/", (req, res) => {
  // creating Employee objects as a new object model class emp
  var emp = new Employee({
    // sending JSON data with req.body
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
  });
  // saving record in mongodb after inserting a new record
  emp.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Employee Save :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

// update method
router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);
  // if the id is vallid, then we create variable emp
  var emp = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
  };
  // then set this parameters and updating with new informations
  Employee.findByIdAndUpdate(
    req.params.id,
    { $set: emp },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(
          "Error in Employee Update :" + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});

// delete operations
router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Employee.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Employee Delete :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

module.exports = router;
