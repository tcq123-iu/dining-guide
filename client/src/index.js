import React from "react";
import App from "./App";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";

import { createRoot } from 'react-dom/client';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RestaurantsContextProvider>
      <App />
    </RestaurantsContextProvider>
  </React.StrictMode>,
  
);
