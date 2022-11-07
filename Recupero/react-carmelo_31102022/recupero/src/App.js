import React from "react";
import Info from "./components/Info";
import Login from "./components/Login";
import Contatti from "./components/Contatti";
// import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid ">
      <Router>
        <nav className="navbar navbar-expand-lg d-flex justify-content-center ">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/info">
                Info
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contatti">
                Contatti
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/info" element={<Info />} />

          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
