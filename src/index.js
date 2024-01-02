import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./layout/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ReactDOM from "react-dom/client";
import Main from "./layout/Main.jsx";
import ApartmentPage from "./pages/ApartmentPage.jsx";

const App = () => {
  return (
    <Router>
      <Main>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flat/:id" element={<ApartmentPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Main>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
