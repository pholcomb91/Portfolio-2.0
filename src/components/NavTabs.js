import React from "react";

const styles= {
    a: {
      margin: 'auto',
      padding: '2px',
      textShadow: '2px 2px 4px #9a8b7c',
      borderRadius: '5px',
      boxShadow: '4px 1px 4px #415971'
    },
  }

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar nav-tabs container-fluid bg-transparent d-flex flex-row">
            <a style={styles.a} href="#about" onClick={() => handlePageChange('About')} className={currentPage ==='About' ? 'nav-link active' : 'nav-link'}>About</a>
            <a style={styles.a} href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage ==='Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
            <a style={styles.a} href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage ==='Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
            <a style={styles.a} href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage ==='Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
        </nav>
    )
}
export default NavTabs