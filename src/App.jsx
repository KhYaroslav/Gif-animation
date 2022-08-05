import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainComponent from './components/giphy/MainComponent';
// import Welcome from './components/welcome/Welcome';
import GamesComponent from './components/games/GamesComponent';
import IntroComp from './components/intro/IntroComp';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<IntroComp />} />
        <Route path="/games" element={<GamesComponent />} />
        <Route path="/api" element={<MainComponent />} />
      </Routes>
  );
}
