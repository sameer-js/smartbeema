import Sidebar from "./Layout/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Claim from "./Pages/Claim";
import Admin from "./Pages/Admin";
import History from "./Pages/History";
import Profile from "./Pages/Profile";
import Whitelist from "./Pages/Whitelist";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

/* importing CSS */
import "./Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Row, Col, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/register" || location.pathname === "/login")
      setIsLoggedIn(false);
    else {
      setIsLoggedIn(true);
    }
  }, [location]);

  return (
    <Container fluid={true} className="app">
      <Row>
        {isLoggedIn && (
          <Col lg={2} className="sidebar-container">
            <Sidebar />
          </Col>
        )}
        <Col>
          {/* Routing */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/claim" element={<Claim />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/whitelist" element={<Whitelist />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
