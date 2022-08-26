import React from "react";

export default function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul className="navbar-nav">
            {/* About Me Page */}
            <li className="nav-item">
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About Me
                </a>
            </li>
            {/* Portfolio Page */}
            <li className="nav-item">
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </a>
            </li>
            {/* Contact Page */}
            <li className="nav-item">
                <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
            {/* Resume*/}
            <li className="nav-item">
                <a
                    href="./laura_sierra_resume.pdf"
                    download
                    onClick={() => handlePageChange('About')}
                    className='nav-link active'
                >
                    Resume
                </a>
            </li>
        </ul>
    )
}