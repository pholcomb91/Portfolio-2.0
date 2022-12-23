import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
// import '../styles/Header.css';

const styles = {
  h1: {
    fontSize: '100px',
    backgound: 'transparent',
  },
  hero: {
    width: '100%',
    height: 'auto',
  }
}

function Header() {
  return (
    <header className="header">
      <img style={styles.hero} src='../public/imgs/1C7A2199_websize.jpg' alt='Peter and Family'></img>
      <h1 style={styles.h1} className='text-center'>Peter Holcomb</h1>
    </header>
  );
}

export default Header;
