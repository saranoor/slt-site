import React from "react";
import "./Testimonials.css";

const testimonials = [
  { name: "Ali", text: "Rabab helped my child speak confidently in 3 months!" },
  { name: "Sara", text: "Professional, caring, and highly skilled therapist." },
];

const Testimonials = () => (
  <section className="testimonials">
    <h2>What Parents Say</h2>
    <div className="testimonial-cards">
      {testimonials.map((t, i) => (
        <div className="testimonial-card" key={i}>
          <p>"{t.text}"</p>
          <strong>- {t.name}</strong>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
