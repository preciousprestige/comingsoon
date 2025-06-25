import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './Intro';
import ComingSoon from './ComingSoon';

export default function App() {
  return (
    <Router basename="/coming-soon">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}
