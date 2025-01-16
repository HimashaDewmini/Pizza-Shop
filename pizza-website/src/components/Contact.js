import React from "react";
import "./Contact.css"; 

const Contact = () => {
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
          <form>
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
