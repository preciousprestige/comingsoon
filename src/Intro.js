import React from 'react';
import { useNavigate } from 'react-router-dom';
import introBg from './intro-bg.jpg';  // Place inside /src

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div 
      className="intro-page"
      style={{ backgroundImage: `url(${introBg})` }}
    >
      <button onClick={() => navigate('/coming-soon')}>WALK WITH ME</button>
    </div>
  );
}
