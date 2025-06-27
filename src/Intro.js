import React from 'react';
import { useNavigate } from 'react-router-dom';
import introBg from './intro-bg.jpg'; 

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div 
      className="intro-page"
      style={{ backgroundImage: `url(${introBg})` }}
    >
      <button className="walk-button" onClick={() => navigate('/coming-soon')}>
        <span>WALK WITH ME</span>
      </button>
    </div>
  );
}
