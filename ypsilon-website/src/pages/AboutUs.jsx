import React from 'react';
import NotFoundPage from './NotFoundPage';
import '../aboutUs.css';

const AboutUs = () => {
  return (
    <div>
      <div className="container">
        <section className="about">
          <h2>
            <center>About Us</center>
          </h2>
          <p>
            YPsilon is dedicated to providing high-quality skill courses that
            empower individuals to enhance their knowledge and expertise.
          </p>
          <p>
            Our team of experienced instructors is passionate about sharing
            their expertise and helping learners achieve their goals. Whether
            you're a beginner looking to acquire new skills or a seasoned
            professional seeking to expand your knowledge, our courses are
            designed to meet your needs and exceed your expectations.
          </p>
          <p>
            At YPsilon, we believe in the transformative power of education to
            unlock opportunities and drive personal and professional growth. Our
            commitment to excellence, innovation, and continuous improvement
            ensures that our courses remain relevant and impactful in today's
            ever-changing world.
          </p>
        </section>

        <section className="image">
          <img src="3.jpg" alt="Skill Courses Image" />
        </section>

        <section className="vision">
          <h3>Our Vision</h3>
          <p>
            "Our vision at YPsilon is to become the leading provider of skill
            courses, empowering individuals worldwide to thrive in their
            personal and professional endeavors. We envision a future where
            learning is accessible to all, enabling people to unlock their full
            potential and shape a brighter tomorrow. Through our innovative
            approach to education and unwavering commitment to quality, we aim
            to inspire lifelong learning and create positive change in the lives
            of our learners and communities."
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
