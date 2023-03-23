import React from "react";
// import PageContainer from "./components/PageContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Gallery from "./components/pages/Gallery"


const App = () => {

    return (
        <div className="App" >
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
            <Footer/>
            </BrowserRouter>
        </div>);
}

export default App;