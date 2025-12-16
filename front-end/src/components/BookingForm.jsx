// import React, { useEffect, useState } from "react";

// const BookingForm = () => {
//   const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
//   const [form, setForm] = useState({ name: "", email: "", date: "", time: "" });
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     if (!message) return undefined;
//     const timer = setTimeout(() => setMessage(""), 3000);
//     return () => clearTimeout(timer);
//   }, [message]);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const res = await fetch(`${API_BASE}/api/bookings/`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (!res.ok) throw new Error();
//       setMessage("✅ Appointment booked successfully");
//       setForm({ name: "", email: "", date: "", time: "" });
//     } catch {
//       setMessage("❌ Failed to book appointment");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="booking">
//       <form className="card" onSubmit={handleSubmit}>
//         <h2>Book an Appointment</h2>

//         <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
//         <input type="date" name="date" value={form.date} onChange={handleChange} required />
//         <select name="time" value={form.time} onChange={handleChange} required>
//           <option value="">Select time</option>
//           <option>09:00</option>
//           <option>10:00</option>
//           <option>11:00</option>
//           <option>14:00</option>
//           <option>15:00</option>
//         </select>

//         <button type="submit" disabled={loading}>{loading ? "Booking..." : "Book Now"}</button>
//         {message && <p>{message}</p>}
//       </form>
//     </section>
//   );
// };

// export default BookingForm;


import { useState } from "react";
import "./Booking.css";

const Booking = () => {
  const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(`${API_BASE}/api/bookings/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="booking">
      <div className="booking-container">
        <h2>Book a Session</h2>

        {status === "success" && (
          <p className="success-msg">
            Your request was received. We’ll contact you shortly.
          </p>
        )}

        {status !== "success" && (
          <form className="booking-form" onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            >
              <option value="">Select Time</option>
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="12:00">12:00 PM</option>
              <option value="13:00">01:00 PM</option>
              <option value="14:00">02:00 PM</option>
              <option value="15:00">03:00 PM</option>
              <option value="16:00">04:00 PM</option>
            </select>

            <textarea
              name="message"
              placeholder="Message (optional)"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Submitting..." : "Request Booking"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Booking;
