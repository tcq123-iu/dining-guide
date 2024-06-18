require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./db");
const morgan = require("morgan");
const app = express();
app.use(cors());
app.use(express.json());




//get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {

    const restaurantRatingsData = await db.query(
      "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;"
    );

    res.status(200).json({
      status: "success",
      results: restaurantRatingsData.rows.length,
      data: {
        restaurants: restaurantRatingsData.rows,
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
    const restaurants = await db.query(
      "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1",
      [req.params.id]
    );

    const reviews = await db.query(
      "select * from reviews where restaurant_id = $1",
      [req.params.id]
    );
    console.log(reviews);
    res.status(200).json({
      status: "success",
      data: {
        restaurants: restaurants.rows[0],
        reviews : reviews.rows
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
      "insert into restaurants(name, location, price_range, phone_number, cuisine_type, opening_hours,closing_hours) values ($1, $2,$3,$4, $5, $6,$7) returning *",
      [req.body.name, req.body.location, req.body.price_range, req.body.phone_number, req.body.cuisine_type,req.body.opening_hours, req.body.closing_hours]
    );

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
    const results = await db.query(
      "update restaurants set name = $1, location = $2, price_range = $3,phone_number=$4, cuisine_type=$5, opening_hours=$6, closing_hours=$7  where id = $8 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.body.phone_number, req.body.cuisine_type,req.body.opening_hours, req.body.closing_hours, req.params.id]
    );

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
    const results = await db.query(" delete from restaurants where id =$1", [
      req.params.id,
    ]);
  } catch (err) {
    console.log(err);
  }
  res.status(204).json({
    status: "success",
  });
});

//add review
app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
  try {
    const newReview = await db.query(
      "INSERT INTO reviews (restaurant_id, name, review, rating,u_id, date) values ($1, $2, $3, $4, $5, $6) returning *;",
      [req.params.id, req.body.name, req.body.review, req.body.rating, req.params.id, req.body.date]
    );
    console.log(newReview);
    res.status(201).json({
      status: "success",
      data: {
        review: newReview.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`at ${port}`);
});
