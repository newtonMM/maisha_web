import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import LandingPage from "./components/landingPage";
import AboutUs from "./components/aboutUs";
import Services from "./components/services";
import Contacts from "./components/contacts";
import Footer from "./components/footer";
function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AboutUs />
      <Services />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
