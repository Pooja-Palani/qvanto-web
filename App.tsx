import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Capabilities from './Capabilities';
import Architecture from './Architecture';
import Insights from './Insights';
import BlogArticle from './BlogArticle';
import About from './About';
import Contact from './Contact';
import Admin from './Admin';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
      case 'ecosystem':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'capabilities':
      case 'product':
        return <Capabilities setCurrentPage={setCurrentPage} />;
      case 'architecture':
        return <Architecture setCurrentPage={setCurrentPage} />;
      case 'insights':
      case 'developers':
        return <Insights setCurrentPage={setCurrentPage} />;
      case 'blog-ai-governance':
      case 'blog-esg-data':
      case 'blog-digital-retail':
        return <BlogArticle slug={currentPage} setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      case 'admin':
        return <Admin />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-blue/20 selection:text-brand-blue">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
