import React from "react";
import '../style/contact.css';

const ContactUs = () => {
  return (
    <section id="contactUs" className="contactUsSection">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>
          We’d love to hear from you! Reach out to us for reservations, feedback, or inquiries.
        </p>

        <div className="contact-details">
          <h3>Our Contact Information</h3>
          <p><strong>Address:</strong> 1234 Food Street, Downtown, New York, NY 10001</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567 / +1 (555) 987-6543</p>
          <p><strong>Email:</strong> <a href="mailto:info@arihantfood.com">info@arihantfood.com</a></p>
          <p><strong>Opening Hours:</strong> 9:00 AM - 11:00 PM</p>
        </div>

        <footer className="contact-footer">
          <p>Developed By <strong>Sudarshan Hingalje</strong></p>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </footer>
      </div>
    </section>
  );
};

export default ContactUs;
