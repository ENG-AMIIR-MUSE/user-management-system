const express = require("express");
const employeeModel = require("./models/employee-model");
const mongoose = require("mongoose");

// initialization
const app = express();

// api  post get delete put   get: fetching data from the server

app.get("/", (req, res) => {
  res.send("welcome  to our first api ");
});

app.use(express.json()); // it enables  the server to get the data as a json
// set connection to the database

mongoose.connect("mongodb://localhost:27017/employee")
  .then(() => {
    console.log("connected to the database");
  })
  .catch((er) => {
    console.log("error while connecting to the database", er);
  });

// Insert Uploading image new loackup new imae the image new gas  



// insert api

app.post("/create", async (req, res) => {
  try {
    const newEmployee = await employeeModel(req.body);
    await newEmployee.save();
    if (!newEmployee) {
      return res.status(404).json("Cant Create Emmployee...");
    }
    return res.status(200).json("Employee Registered Successfully");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get("/api/employees", async (req, res) => {
    try {
      const employees = await employeeModel.find()
    
      if (!employees) {
        return res.status(404).json("Employeee Not Found ...");
      }
      return res.status(200).json(employees);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
app.put("/update/:id", async (req, res) => {
  try {
    const newEmployee = await employeeModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    console.log(newEmployee);
    if (!newEmployee) {
      return res.status(404).json("Cant Update Emmployee...");
    }
    return res.status(200).json("Employee Updated Successfully");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const deleteEmployee = await employeeModel.findByIdAndDelete(req.params.id);
    console.log(deleteEmployee);
    if (!deleteEmployee) {
      return res.status(404).json("Cant Delete Emmployee...");
    }
    return res.status(200).json("Employee Deleted Successfully");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
// status code >>> 404 , 200 , 201,403

//  employee > name , tell , age

const port = 1000;
app.listen(port, () => {
  console.log("ápp is running on port ", port);
});

//

//
