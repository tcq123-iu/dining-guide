import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RestaurantsContext } from "../context/RestaurantsContext";
import RestaurantFinder from "../apis/RestaurantFinder";

const UpdateRestaurant = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { restaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const[phone_number, setPhoneNumber] = useState("");
  const[cuisine_type, setCuisineType] = useState("");
  const[opening_hours, setOpeningHours] = useState("");
  const[closing_hours, setClosingHours] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);
      console.log(response.data.data);
      setName(response.data.data.restaurants.name);
      setLocation(response.data.data.restaurants.location);
      setPriceRange(response.data.data.restaurants.price_range);
      setPhoneNumber(response.data.data.restaurants.phone_number);
      setCuisineType(response.data.data.restaurants.cuisine_type);
      setOpeningHours(response.data.data.restaurants.opening_hours);
      setClosingHours(response.data.data.restaurants.closing_hours);

      
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
      phone_number,
      cuisine_type,
      opening_hours,
      closing_hours,
    });
    navigate("/");
  };

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Price Range</label>
          <input
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            id="price_range"
            className="form-control"
            type="number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone_number">Phone Number</label>
          <input
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            id="phone_number"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cuisine_type">Cuisine Type</label>
          <input
            value={cuisine_type}
            onChange={(e) => setCuisineType(e.target.value)}
            id="cuisine_type"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="opening_hours">Opening Hours</label>
          <input
            value={opening_hours}
            onChange={(e) => setOpeningHours(e.target.value)}
            id="opening_hours"
            className="form-control"
            type="text"
          />
        </div>
        <div className="form-group">
          <label htmlFor="closing_hours">Closing Hours</label>
          <input
            value={closing_hours}
            onChange={(e) => setClosingHours(e.target.value)}
            id="closing_hours"
            className="form-control"
            type="text"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
