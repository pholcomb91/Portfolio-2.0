import React from "react";

const styles = {
    h3: {
        margin: '10px',
    },
    logo: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        marginRight: '10px',
    },
    logoContainer: {
        width: '75%',
        height: '25%',
        margin: '25px',
    }
}

function about () {
    return (
        <div className="d-flex container-fluid justify-content-center align-items-center col">
            <div style={styles.logoContainer} className="d-flex container-fluid justify-content-center">
                <a href="tel:16235567463"><img src="./imgs/phone.png" alt="Phone Logo" style={styles.logo}></img></a>
                <a href="mailto:pholcomb91@gmail.com"><img src="./imgs/gmail.png" alt="Gmail Logo"style={styles.logo}></img></a>
                <a href="https://github.com?pholcomb91"><img src="./imgs/github.jpeg" alt="Github Logo"style={styles.logo}></img></a>
                <a href="https://www.linkedin.com/in/peter-holcomb-ba2b016a/"><img src="./imgs/linkedin.png" alt="linkedin logo"style={styles.logo}></img></a>
            </div>
        </div>
    )
}

export default about;