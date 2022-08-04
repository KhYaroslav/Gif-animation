import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import MainComponent from './components/giphy/MainComponent';
import GamesComponent from './components/games/GamesComponent';

export default function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/api">content</Link>
      <Routes>
        <Route path="/" element={<GamesComponent />} />
        <Route path="/api" element={<MainComponent />} />
      </Routes>
    </>
  );
}
