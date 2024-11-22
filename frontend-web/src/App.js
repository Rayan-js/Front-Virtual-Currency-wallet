import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import QRCodePage from "./components/QRCodePage";
import DownloadPage from "./pages/Download";
import Transactions from "./pages/Transactions";

const App = () => (
  <Router>
    <Navbar />
    <main style={{ padding: "20px", marginTop: "50px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/referral" element={<QRCodePage />} />
        <Route path="/download" element={<DownloadPage />} />
        {/* Página 404 */}
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </main>
  </Router>
);

export default App;
