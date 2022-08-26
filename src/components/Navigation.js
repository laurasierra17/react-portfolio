import React from "react";

export default function Navigation({ currentPage, handlePageChange }) {
    return (
        <ul>
            {/* About Me Page */}
            <li>
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                >
                    About Me
                </a>
            </li>
            {/* Portfolio Page */}
            <li>
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                >
                    Portfolio
                </a>
            </li>
            {/* Contact Page */}
            <li>
                <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                >
                    Contact
                </a>
            </li>
            {/* Resume*/}
            <li>
                <a
                    href="./laura_sierra_resume.pdf"
                    download
                >
                    Resume
                </a>
            </li>
        </ul>
    )
}