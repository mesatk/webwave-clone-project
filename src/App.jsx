import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./pages/HomePage";
import CustomNavbar from "./components/CustomNavbar";
import CustomFooter from "./components/CustomFooter";

function App() {
  return (
    <>
      <Router>
        <CustomNavbar />
        <Container className="custom-container">
          <Routes>
            {/* Varsayılan sayfa için path'i "/" olarak ayarlayın */}
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Container>
        {/* <CustomFooter /> */}
      </Router>
    </>
  );
}

export default App;
