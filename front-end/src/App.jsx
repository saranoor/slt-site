import React from "react";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
// import Services from "./components/Services";
import BookingForm from "./components/BookingForm";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Hero />
      <AboutMe />
      {/* <Services /> */}
      <BookingForm />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

