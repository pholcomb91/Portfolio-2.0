import React, {useState} from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
        return <Contact />
    };
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </div>
      );
}
