import React from "react";
import "../styles/About.css";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <p className="about-tag">ABOUT DRIVEGENIE</p>
        <h1>
          Find your drive.
          <br />
          <span>Discover your next car.</span>
        </h1>
        <p className="about-intro">
          DriveGenie helps you explore, compare, and discover cars that match
          your style, needs, and budget.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to make car discovery simple and enjoyable. We bring
            useful car information and easy-to-use tools together in one place.
          </p>
        </div>

        <div className="about-card">
          <h2>What You Can Do</h2>
          <ul>
            <li>Explore featured and trending cars</li>
            <li>Compare car specifications side by side</li>
            <li>Save your favorite cars</li>
            <li>Get recommendations based on your preferences</li>
            <li>Estimate monthly payments with the EMI calculator</li>
          </ul>
        </div>
      </section>

      <section className="about-bottom">
        <h2>Your next journey starts here.</h2>
        <p>Explore the cars. Compare your favorites. Find your drive.</p>
      </section>
    </main>
  );
}

export default About;