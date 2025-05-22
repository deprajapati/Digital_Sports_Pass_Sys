import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">Explore the World of Sports</h1>
        <p className="home-subtext">
          Sports are not just about competition — they promote fitness, teamwork, and mental strength.
        </p>
        <p className="home-description">
          Our platform encourages participation in multiple sports, supports athlete growth, and celebrates the spirit of competition and health.
        </p>
  
      </div>

      <div className="home-card">
        <h2 className="home-section-title">Our Mission</h2>
        <p className="home-description">
          We aim to build a community that thrives on energy, commitment, and excellence. Whether you're a beginner or a professional athlete, our facilities and coaches are here to help you reach your potential.
        </p>
      </div>

      <div className="home-card">
        <h2 className="home-section-title">Why Choose Us?</h2>
        <ul className="home-list">
          <li>✔️ Wide range of sports to choose from</li>
          <li>✔️ Modern infrastructure and equipment</li>
          <li>✔️ Professional trainers and guidance</li>
          <li>✔️ Member tracking and performance analysis</li>
          <li>✔️ Fun, safe, and supportive environment</li>
        </ul>
      </div>

      <div className="home-card">
        <h2 className="home-section-title">Get Started Today</h2>
        <p className="home-description">
          Register now and become a part of our growing sports community. Discover your passion, train with the best, and achieve your fitness and sports goals.
        </p>
        <a href="/Registration" className="home-cta-button">Join Now</a>
      </div>
    </div>
  );
}

export default Home;
