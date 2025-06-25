import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './Intro'; 
import ComingSoon from './ComingSoon'; 
import './index.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}
