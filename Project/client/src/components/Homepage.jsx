import React, { useEffect, useState } from 'react';
import '../Homepage.css'; 
import { auth } from '../../firebase'; 
import law1 from '../assets/law1.png';
import law2 from '../assets/law2.jpg';
import law3 from '../assets/law3.jpg';
import { useNavigate } from 'react-router-dom';


const images = [law1, law2, law3];

function Homepage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault(); // prevent default link behavior
    await auth.signOut();
    navigate("/login");
  };

  return (
    <div>
      {/* Navbar with Sign-In / Log-In */}
      <nav className="navbar">
        <div className="logo">NyaySetu</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="/logout" onClick={handleLogout}>Logout</a>
        </div>
      </nav>

      {/* Hero Section with Carousel */}
      <div className="hero">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`hero-image ${currentIndex === idx ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="hero-overlay">
          <h1>Justice. Technology. India.</h1>
          <p>Empowering Citizens with smart legal systems.</p>
          <div className="hero-buttons">
            <button onClick={() => navigate('/firform')}>File FIR</button>
            <button onClick={() => navigate('/trackcase')}>Track Case</button>
            <button onClick={() => navigate('/chatbot')}>NyayMitra</button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Our Features</h2>
        <div className="features-container">
          <div className="feature-item">
            <h3>Fast Legal Access</h3>
            <p>Access legal services quickly and efficiently through our platform.</p>
          </div>
          <div className="feature-item">
            <h3>Track Your Case</h3>
            <p>Stay updated on the status of your case at every stage of the process.</p>
          </div>
          <div className="feature-item">
            <h3>AI-Powered Assistance</h3>
            <p>Get legal advice through our advanced ShastraBot powered by AI.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About NyaySetu</h2>
        <p>
          NyaySetu is a platform dedicated to making justice more accessible through technology. Our aim is to provide citizens with the tools and resources to navigate the legal system easily and efficiently. We offer various services such as filing FIRs, tracking cases, and AI-powered legal assistance through ShastraBot.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or need further assistance, feel free to get in touch with us.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Homepage;
