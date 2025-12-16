// import React from "react";

// const Hero = () => (
//   <section className="hero">
//     <h1>Somano Speech Therapy Center</h1>
//     <p className="tagline">
//       A place where your children learn to speak, express, and grow with confidence.
//     </p>
//   </section>
// );

import React from "react";
import therapistImg from "../assets/therapist.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* Left Content */}
        <div className="hero-text">
          <h1>
            Helping You <br /> Communicate with Confidence
          </h1>

          <p>
            Online speech therapy for children and adults — from the comfort
            of your home.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Book a Free Consultation
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img
            src={therapistImg}
            alt="Online Speech Therapist"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
