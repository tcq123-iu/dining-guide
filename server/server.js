require("dotenv").config();

const express = require("express");


const app = express();

//get all restaurants
app.get("/api/v1/restaurants", (req, res) => {

  res.status(200).json({
    status: "success",
    data: {
      restaurants: ["Ngo Quyen", "KFC"],

    },

  });
});

//get a restaurant
app.get("/api/v1/restaurants/:restaurantid", (req, res)=>{
  console.log(req.params);

});

//create a restaurant
app.post("/api/v1/restaurants", (req, res)=>{
  console.log(req);

});


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`at ${port}`);
});