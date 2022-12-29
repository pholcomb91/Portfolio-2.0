import React from "react";

const styles= {
    a: {
      margin: 'auto',
      textShadow: '2px 2px 4px #9a8b7c',
    }
  
  }

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar container-fluid bg-transparent d-flex flex-row-reverse">
            <a style={styles.a} href="#about" onClick={() => handlePageChange('About')} className={currentPage ==='About' ? 'nav-link active' : 'nav-link'}>About</a>
            <a style={styles.a} href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage ==='Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
            <a style={styles.a} href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage ==='Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
            <a style={styles.a} href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage ==='Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
        </nav>
    )
}
export default NavTabs