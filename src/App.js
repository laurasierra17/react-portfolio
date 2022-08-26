import './App.css';
import { useState } from 'react';
import Footer from './components/Footer';
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Header from './components/Header';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') return <About />;
    if (currentPage === 'Portfolio') return <Portfolio />;
    if (currentPage === 'Contact') return <Contact />;
};

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className='container'>
        {/* Calling renderPage to return a component */}
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
