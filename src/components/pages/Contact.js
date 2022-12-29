import React from "react";

const styles = {
    form: {
        border: '2px solid #415971',
        width: '80%',
        height: '20%',
        borderRadius: '10px',
        padding: '25px'
    },
    button: {

    },
    h3: {
        margin: '10px',
    },
    logo: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
    },
    logoContainer: {
        width: '75%',
        height: '25%',
        margin: '25px',
    }
}

function about () {
    return (
        <div className="d-flex container-fluid row justify-content-center align-items-center">
            <form action="mailto:pholcomb91@gmail.com?subject=Let's%20Connect!" style={styles.form} className="col-8">
                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name"></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email Address:</label>
                    <input type="email" className="form-control" id="email"></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Body:</label>
                    <input type="text" className="form-control" id="body"></input>
                </div>
                <button type="submit" className="btn btnColor">Send</button>
                <button type="reset" className="btn btnColor">Reset</button>
            </form>
            <h2 className="col-4 text-center">Or</h2>
            <div style={styles.logoContainer} className="d-flex col-8 container-fluid justify-content-around">
                <a href="tel:16235567463"><img src="./imgs/phone.png" alt="Phone Logo" style={styles.logo}></img></a>
                {/* <a href="mailto:pholcomb91@gmail.com"><img src="./imgs/gmail.png" alt="Gmail Logo"style={styles.logo}></img></a> */}
                <a href="https://github.com?pholcomb91"><img src="./imgs/github.jpeg" alt="Github Logo"style={styles.logo}></img></a>
                <a href="https://www.linkedin.com/in/peter-holcomb-ba2b016a/"><img src="./imgs/linkedin.png" alt="linkedin logo"style={styles.logo}></img></a>
            </div>
        </div>
    )
}

export default about;