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
import PetDashboard from './components/pages/PetDashboard';
// import CreateUserForm from "./components/pages/CreateUserForm";
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import Profile from "./pages/Profile"
import Faq from './pages/Faq';

let httpLink = createHttpLink({
  uri: '/graphql'
})

// still need to set this up but you'll pull this from local storage
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

let client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})


function App() {
  const [currentPage, setCurrentPage] = useState("");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <ApolloProvider client={client}>
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
            <Route path="/petlist" element={<AddPetForm />} />
            <Route path="/signInPage" element={<SignInPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/PetDashboard" element={<PetDashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
