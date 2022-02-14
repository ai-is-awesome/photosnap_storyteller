import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./features/Home/HomePage";
import FeaturesPage from "./features/pages/FeaturesPage/FeaturesPage";
import PricingPage from "./features/pages/PricingPage/PricingPage";
import StoriesPage from "./features/pages/StoriesPage/StoriesPage";
import "./stylesheets/main.scss";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="stories" element={<StoriesPage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="pricing" element={<PricingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);  
