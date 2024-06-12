import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddRestaurant = () => {
  const { addRestaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Minimum Price");
  const[phone_number, setPhoneNumber] = useState("");
  const[cuisine_type, setCuisineType] = useState("");
  const[opening_hours, setOpeningHours] = useState("");
  const[closing_hours, setClosingHours] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/", {
        name,
        location,
        price_range: priceRange,
        phone_number,
        cuisine_type,
        opening_hours,
        closing_hours,
      });
      

      console.log(response.data.data);
      
      addRestaurants(response.data.data.restaurants);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mb-4">
      <form action="">
        <div className="row gx-3 gy-2 align-items-center">
          <div className="col">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="col">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Location"
            />
          </div>
          <div className="col">
            <select
              aria-label="label for the select"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="form-select"
              
            >
              <option disabled>Minimum price </option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
              <option value="60">60</option>
              <option value="70">70</option>
              <option value="80">80</option>
              <option value="90">90</option>
              <option value="100">100</option>
            </select>
          </div>
          <div className="col">
            <input
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="form-control"
              type="text"
              placeholder="phone number"
            />
          </div>
          <div className="col">
            <input
              value={cuisine_type}
              onChange={(e) => setCuisineType(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Cuisine Type"
            />
          </div>
          <div className="col">
            <input
              value={opening_hours}
              onChange={(e) => setOpeningHours(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Opening Hours"
            />
          </div>
          <div className="col">
            <input
              value={closing_hours}
              onChange={(e) => setClosingHours(e.target.value)}
              className="form-control"
              type="text"
              placeholder="Closing Hours"
            />
          </div>




          <div className="col-auto">
                  
    <button  onClick={handleSubmit} type = "submit" className="btn btn-primary">Add</button>

  </div>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;