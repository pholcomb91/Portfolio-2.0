import React from "react";

const styles= {
    logo: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        boxShadow: '4px 1px 4px #415971'
    },
    logoContainer: {
        width: '100%',
        height: '25%',
        marginBottom: '25px',
    }
}

function footer () {
    return (
        <div style={styles.logoContainer} className="d-flex col-8 container-fluid justify-content-evenly">
            <a href="tel:16235567463"><img src="./imgs/phone.png" alt="Phone Logo" style={styles.logo}></img></a>
            <a href="https://github.com?pholcomb91"><img src="./imgs/github.jpeg" alt="Github Logo"style={styles.logo}></img></a>
            <a href="https://www.linkedin.com/in/peter-holcomb-ba2b016a/"><img src="./imgs/linkedin.png" alt="linkedin logo"style={styles.logo}></img></a>
        </div>
    )
}

export default footer;