import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="navbar container-fluid bg-transparent d-flex flex-row-reverse">
            <li className="navbar-brand">
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage ==='About' ? 'nav-link active' : 'nav-link'}
                >
                About
                </a>
            </li>
            <li className="navbar-brand">
                <a
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage ==='Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                Portfolio
                </a>
            </li>
            <li className="navbar-brand">
                <a
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage ==='Resume' ? 'nav-link active' : 'nav-link'}
                >
                Resume
                </a>
            </li>
            <li className="navbar-brand">
                <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage ==='Contact' ? 'nav-link active' : 'nav-link'}
                >
                Contact
                </a>
            </li>
        </ul>
    )
}
export default NavTabs