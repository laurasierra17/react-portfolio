import React, { useState } from "react";
import NavBar from "./NavBar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

export default function Header() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') return <About />;
        if (currentPage === 'Portfolio') return <Portfolio />;
        if (currentPage === 'Contact') return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* Passing the current page and a functio to update it */}
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Calling renderPage to return a component */}
            {renderPage()}
        </div>
    )
}