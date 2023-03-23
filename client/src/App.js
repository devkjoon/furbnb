import React from "react";
// import PageContainer from "./components/PageContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Pricing from "./components/pages/Pricing"
import Services from "./components/pages/Services"
import Gallery from "./components/pages/Gallery"
import SignInPage from "./components/pages/SignInPage"
import SignUp from "./components/pages/SignUp"
import PetList from "./components/pages/PetList"


const App = () => {

    return (
        <div className="App" >
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/login" element={<SignInPage />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/petlist" element={<PetList />} />
                </Routes>
            <Footer/>
            </BrowserRouter>
            
        </div>);
}

export default App;