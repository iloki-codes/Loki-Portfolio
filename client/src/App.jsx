import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from 'aos';
import { useEffect } from 'react';
import './App.css';

import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Hover from './components/Hover';


const App = () => {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (

    <>

      <Router>

        <div className='
        inset-0
        bg-linear-to-r from-gray-700 via-zinc-800 to-gray-950
        bg-opacity-60
        backdrop-blur-xl
        font-sans
        overflow-y-auto
        '>

          <Navbar />

          <Hover />

          <Routes>

            <Route path='/' element={ <PageWrapper><Home /></PageWrapper> } />
            <Route path='/about' element={ <PageWrapper><About /></PageWrapper> } />
            <Route path='/projects' element={ <PageWrapper><Projects /></PageWrapper>} />
            <Route path='/contact' element={ <PageWrapper><Contact /></PageWrapper> } />
            <Route path='/blog' element={ <PageWrapper><Blog /></PageWrapper> } />

          </Routes>

          <Footer />

        </div>

      </Router>

    </>
  )
};

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className='min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 pt-20'
    >
      {children}
    </motion.div>
  )
}

export default App;
