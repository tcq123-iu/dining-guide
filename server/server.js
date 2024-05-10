require("dotenv").config();

const express = require("express");

const db = require("./db");
const morgan = require("morgan");



const app = express();
app.use(express.json())


//get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM restaurants");
    console.log(results);

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,

      },

    });
  } catch (err) {
    console.log(err);

  }

});

//get a restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
  console.log(req.params.id);

  try {
    const results = await db.query("select * from restaurants where id = $1", [req.params.id]);

    res.status(200).json({
      status: "success",
      data: {

        restaurants: results.rows[0],

      },

    });

  } catch (err) {
    console.log(err);
  }
});

//create a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
  console.log(req.body);
  try {
    const results = await db.query(
      "insert into restaurants(name, location, price_range) values ($1, $2,$3) returning *",
      [req.body.name, req.body.location, req.body.price_range]);

    res.status(201).json({
      status: "success",
      data: {

        restaurants: results.rows[0],

      },

    });
  } catch (err) {
    console.log(err);

  }


});

//update restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
  console.log(req.params.id);
  console.log(req.body);

  try {
    const results = await db.query("update restaurants set name = $1, location = $2, price_range = $3 where id = $4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]);

    res.status(200).json({
      status: "success",
      data: {

        restaurants: results.rows[0],

      },

    });

  } catch (err) {
    console.log(err);
  }


});

//delete restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {

  try {
    const results = await db.query(" delete from restaurants where id =$1", [req.params.id]);
  } catch (err) {
    console.log(err);

  }
  res.status(204).json({

    status: "success",

  });

});
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`at ${port}`);
});