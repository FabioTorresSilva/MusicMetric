import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage'; 
import UserMetrics from './pages/UserMetrics';
import MusicPage from './pages/MusicPage'; 
import ArtistsPage from './pages/ArtistsPage'; 
import MetricasArtista from './pages/MetricasArtista';
import ScrollToTop from './pages/ScrollToTop';


function App() {
  return (
    <Router>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/usermetrics" element={<Layout><UserMetrics /></Layout>} />
        <Route path="/musicas" element={<Layout><MusicPage /></Layout>} /> 
        <Route path="/artistas" element={<Layout><ArtistsPage /></Layout>} /> 
        <Route path="/artista/:artistName" element={<Layout><MetricasArtista /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;

