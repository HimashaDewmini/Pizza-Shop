import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mlddvqra", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      alert("Failed to send message. Try again.");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Address:</strong> 198 West 21th Street, Suite 721 New York, NY 10016</p>
          <p><strong>Phone:</strong> <span className="highlight">+1235 2355 98</span></p>
          <p><strong>Email:</strong> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
          <p><strong>Website:</strong> <a href="#">yoursite.com</a></p>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              <br /><br />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            </div>
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
            <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
