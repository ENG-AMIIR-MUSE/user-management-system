const express = require("express");
const onlineModel = require("./models/online");
const mongoose = require("mongoose");

// initialization
const app = express();

// api  post get delete put   get: fetching data from the server

app.get("/", (req, res) => {
  res.send("welcome  to our first api ");
});

app.use(express.json()); // it enables  the server to get the data as a json
// set connection to the database

mongoose.connect("mongodb://localhost:27017/online")
  .then(() => {
    console.log("connected to the database");
  })
  .catch((er) => {
    console.log("error while connecting to the database", er);
  });

// Insert Uploading image new loackup new imae the image new gas  



// insert api

app.post("/api/create", async (req, res) => {
  try {
    const newOnline = await onlineModel(req.body);
    await newOnline.save();
    if (!newOnline) {
      return res.status(404).json("Cant Create Complainment...");
    }
    return res.status(200).json("Complainment Registered Successfully");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.get("/api/complainments", async (req, res) => {
    try {
      const complainments = await onlineModel.find()
    
      if (!complainments) {
        return res.status(404).json("complainments Not Found ...");
      }
      return res.status(200).json(complainments);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  app.get("/api/complainments/:id", async (req, res) => {
    try {
      const findComp = await onlineModel.findOne({_id:req.params.id})
    
      if (!findComp) {
        return res.status(404).json("Employeee Not Found ...");
      }
      return res.status(200).json(findComp);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
app.put("/api/update/:id", async (req, res) => {
  try {
    const updateComp = await onlineModel.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    console.log(updateComp);
    if (!updateComp) {
      return res.status(404).json("Cant Update Complainmet...");
    }
    return res.status(200).json("Complainment Updated Successfully");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.delete("/api/delete/:id", async (req, res) => {
  try {
    const deleteComp = await onlineModel.findByIdAndDelete(req.params.id);
    console.log(deleteComp);
    if (!deleteComp) {
      return res.status(404).json("Cant Delete Complainment...");
    }
    return res.status(200).json("Compainment Deleted Successfully");
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
