import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  
  return (
    <RestaurantsContextProvider>
    <div className = "container">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />

          <Route exact path="/register" element={<Register/>} />

          <Route exact path="/restaurants/:id/update" element={<UpdatePage/>} />
          <Route
            exact
            path="/restaurants/:id"
            element={<RestaurantDetailPage/>}
          />
        </Routes>
      </Router>
    </div>
    </RestaurantsContextProvider>

  );
};
export default App;
