import React from "react";

export default function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul className="navbar-nav">
            {/* About Me Page */}
            <li className="nav-item">
                <a
                    className="nav-link active"
                    href="#about"
                    onClick={() => handlePageChange('About')}
                >
                    About Me
                </a>
            </li>
            {/* Portfolio Page */}
            <li className="nav-item">
                <a
                    className="nav-link active"
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                >
                    Portfolio
                </a>
            </li>
            {/* Contact Page */}
            <li className="nav-item">
                <a
                    className="nav-link active"
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                >
                    Contact
                </a>
            </li>
            {/* Resume*/}
            <li className="nav-item">
                <a
                    className="nav-link active"
                    href="./laura_sierra_resume.pdf"
                    download
                >
                    Resume
                </a>
            </li>
        </ul>
    )
}