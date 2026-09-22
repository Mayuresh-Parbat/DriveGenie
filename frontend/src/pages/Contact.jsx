import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">

      <section className="contact-hero">
        <p className="contact-label">GET IN TOUCH</p>

        <h1>
          Let's talk about
          <span> cars.</span>
        </h1>

        <p>
          Have a question, suggestion, or feedback about DriveGenie?
          We'd love to hear from you.
        </p>
      </section>

      <section className="contact-container">

        <div className="contact-info">

          <h2>Contact DriveGenie</h2>

          <p className="contact-description">
            Whether you need help exploring cars, have feedback about the
            platform, or simply want to get in touch, send us a message.
          </p>

          <div className="contact-item">
            <div className="contact-icon">📧</div>

            <div>
              <span>Email</span>
              <strong>support@drivegenie.com</strong>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📍</div>

            <div>
              <span>Location</span>
              <strong>Pune, Maharashtra</strong>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📞</div>

            <div>
              <span>Phone</span>
              <strong>+91 9000000000</strong>
            </div>
          </div>

        </div>

        <div className="contact-form-box">

          {submitted ? (
            <div className="contact-success">
              <div className="success-icon">✓</div>

              <h2>Message Sent!</h2>

              <p>
                Thank you for contacting DriveGenie. We'll get back to you
                soon.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="contact-reset-btn"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>

              <div className="contact-row">

                <div className="contact-field">
                  <label>Your Name</label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label>Email Address</label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

              </div>

              <div className="contact-field">
                <label>Subject</label>

                <input
                  type="text"
                  placeholder="What is this about?"
                  required
                />
              </div>

              <div className="contact-field">
                <label>Message</label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  required
                />
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
              >
                Send Message →
              </button>

            </form>
          )}

        </div>

      </section>

    </main>
  );
}

export default Contact;