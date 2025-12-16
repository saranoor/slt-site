import { useState } from "react";
import "./Booking.css";

const Booking = () => {
  const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

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
    setErrorMsg("");

    try {
      const res = await fetch(`${API_BASE}/api/bookings/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        return;
      }

      // --- failure path ---
      let message = "Booking failed. Please check your details and try again.";

      try {
        const data = await res.json();
        if (data?.errors) {
          const errorsArray = Object.values(data.errors).flat();
          if (errorsArray.length > 0) {
            message = errorsArray.join(" ");
          }
        }
      } catch {
        // backend didn't return JSON → keep fallback message
      }

      setErrorMsg(message);
      setStatus("error");
    } catch {
      setErrorMsg("Network error. Please try again later.");
      setStatus("error");
    }
  };


  return (
    <section className="booking">
      <div className="booking-container">
        <h2>Book a Session</h2>

        {status === "error" && (
          <p className="error-msg">{errorMsg}</p>
        )}

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
