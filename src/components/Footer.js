import React from "react";

export default function Footer() {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a href="https://www.linkedin.com/in/laurasierra2022"><i className="fa-brands fa-linkedin fa-2xl"></i></a></li>
                    <li className="ms-3"><a href="https://www.github.com/laurasierra17"><i class="fa-brands fa-github fa-2xl"></i></a></li>
                    <li className="ms-3"><a href="https://medium.com/@laura.sierra17"><i class="fa-brands fa-medium fa-2xl"></i></a></li>
                </ul>
                <div className="col-md-4 d-flex align-items-center">
                    <span className="text-muted">Designed and developed by Laura Sierra</span>
                </div>
            </footer>
        </div>
    )
}