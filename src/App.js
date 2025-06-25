import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './Intro';
import ComingSoon from './ComingSoon';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />              {/* First page */}
        <Route path="/coming-soon" element={<ComingSoon />} />  {/* Second page */}
      </Routes>
    </Router>
  );
}
