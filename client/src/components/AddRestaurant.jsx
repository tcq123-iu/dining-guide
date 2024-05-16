import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddRestaurant = () => {
  const { addRestaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/", {
        name,
        location,
        price_range: priceRange,
      });
      console.log(response.data.data);
      addRestaurants(response.data.data.restaurant);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div class="mb-4">
      <form action="">
        <div class="row gx-3 gy-2 align-items-center">
          <div class="col-sm-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              class="form-control"
              placeholder="Name"
            />
          </div>
          <div class="col-sm-4">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              class="form-control"
              type="text"
              placeholder="Location"
            />
          </div>
          <div class="col-sm-3">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              class="form-select" 
              
            >
              <option disabled>Price Range</option>
              <option value="1">10.000-20.000</option>
              <option value="2">20.000-30.000</option>
              <option value="3">30.000-40.000</option>
              <option value="4">40.000-50.000</option>
              <option value="5">50.000-60.000</option>
              <option value="6">60.000-70.000</option>
            </select>
          </div>
          <div class="col-auto">
    <button type="submit" class="btn btn-primary">Add</button>
  </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;