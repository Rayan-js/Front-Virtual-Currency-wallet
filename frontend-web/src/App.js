import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import QRCodePage from './components/QRCodePage';
import DownloadPage from './pages/Download';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/referral" element={<QRCodePage />} />
      <Route path="/download" element={<DownloadPage />} />
    </Routes>
  </Router>
);

export default App;
