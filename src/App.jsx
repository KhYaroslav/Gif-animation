import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import MainComponent from './components/giphy/MainComponent';

export default function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/content">content</Link>
      <Routes>
        
        <Route path="/content" element={<MainComponent />} />
      </Routes>
    </>
  );
}
