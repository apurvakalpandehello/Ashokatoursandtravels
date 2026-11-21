import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IntroAnimation from './components/IntroAnimation';

// तुमचे मूळ वेबसाइट पेजेस येथे इम्पोर्ट करा
// import Home from './pages/Home';
// import About from './pages/About';
// import Attractions from './pages/Attractions';
// import Services from './pages/Services';

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    return sessionStorage.getItem('ashok_intro_seen') !== 'true';
  });

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <Router>
      {showIntro ? (
        /* 1. सुरुवातीला हा Intro दिसेल */
        <IntroAnimation onComplete={handleIntroComplete} />
      ) : (
        /* 2. कोणत्याही लिंकवर क्लिक केल्यावर ही मुख्य वेबसाइट व नवीन पेजेस उघडतील */
        <div className="main-website">
          {/* तुमचा मुख्य Navbar येथे असेल */}
          <nav style={{ padding: '15px 30px', background: '#111', color: '#f5c542', display: 'flex', gap: '20px' }}>
            <Link to="/" style={{ color: '#f5c542', textDecoration: 'none' }}>Home</Link>
            <Link to="/about" style={{ color: '#f5c542', textDecoration: 'none' }}>About Us</Link>
            <Link to="/attractions" style={{ color: '#f5c542', textDecoration: 'none' }}>Tourist Attractions</Link>
            <Link to="/services" style={{ color: '#f5c542', textDecoration: 'none' }}>Services</Link>
          </nav>

          {/* प्रत्येक लिंकसाठी वेगळे नवीन पेज */}
          <Routes>
            <Route path="/" element={<div style={{ padding: '40px' }}><h1>Welcome to Ashok Tours & Travels (Home Page)</h1></div>} />
            <Route path="/about" element={<div style={{ padding: '40px' }}><h1>About Ashok Tours & Travels</h1></div>} />
            <Route path="/attractions" element={<div style={{ padding: '40px' }}><h1>Top Tourist Attractions</h1></div>} />
            <Route path="/services" element={<div style={{ padding: '40px' }}><h1>Our Travel & Bus Services</h1></div>} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;