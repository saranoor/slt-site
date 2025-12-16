import React from "react";
import "./FAQ.css";

const faqs = [
  { q: "How much is the session fees?", a: "The session fee is 100GBP." },
  { q: "How long is a session?", a: "Each session lasts about 45 minutes." },
];

const FAQ = () => (
  <section className="faq">
    <h2>Frequently Asked Questions</h2>
    {faqs.map((f, i) => (
      <div key={i} className="faq-item">
        <strong>{f.q}</strong>
        <p>{f.a}</p>
      </div>
    ))}
  </section>
);

export default FAQ;
