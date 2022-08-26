import React from "react";
import Navigation from "./Navigation";

export default function Header(props) {
    // Handles the currentPage's state
    const handlePageChange = (page) => props.setCurrentPage(page);

    return (
        <nav className="navbar navbar-expand-lg bg-light p-4">
            <div className="container-fluid">
                <h1>Laura Sierra</h1>
                {/* Passing the current page and a functio to update it */}
                <div className="d-flex">
                    <Navigation currentPage={props.currentPage} handlePageChange={handlePageChange} />
                </div>
            </div>
        </nav>
    )
}