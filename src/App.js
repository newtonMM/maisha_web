import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import LandingPage from "./components/landingPage";
import AboutUs from "./components/aboutUs";
function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutUs />
    </div>
  );
}

export default App;
