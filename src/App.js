import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import LandingPage from "./components/landingPage";
import AboutUs from "./components/aboutUs";
import Services from "./components/services";
function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutUs />
      <Services />
    </div>
  );
}

export default App;
