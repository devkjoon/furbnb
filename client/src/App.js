import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import SignInPage from "./pages/SignInPage";
import SignUp from "./pages/SignUp";
import AddPetForm from './components/pages/AddPetForm';

function App() {
  const [currentPage, setCurrentPage] = useState("");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/add-pet" element={<AddPetForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
