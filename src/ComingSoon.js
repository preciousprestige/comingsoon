import React, { useState } from 'react';
import './index.css';

export default function ComingSoon() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="coming-soon-page">
      
      <div className="header">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>&#9776;</div>
        <div className="logo">$W.W.M</div>
      </div>

      {menuOpen && (
        <div className="menu">
          <p>COMING SOON</p>
        </div>
      )}

      <div className="footer-ticker">
        <p>COMING SOON -- WALK WITH ME</p>
      </div>
    </div>
  );
}
