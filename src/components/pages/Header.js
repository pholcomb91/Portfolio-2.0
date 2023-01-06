import React from 'react';


const styles = {
  h1: {
    fontSize: '7vw',
    position: 'fixed',
    background: 'transparent',
    top: '10px',
    border: '0px none',
    textShadow: '4px 1px 4px #dadedf',
    
  },
  hero: {
    width: '100%',
    height: 'auto',
  }
}

function Header() {
  return (
    <header className="header d-flex justify-content-center">
      <h1 style={styles.h1} className='text-center'>Peter Holcomb</h1>
      <img style={styles.hero} src='./imgs/1C7A2199_websize.jpg' alt='Peter and Family'></img>
    </header>
  );
}

export default Header;
