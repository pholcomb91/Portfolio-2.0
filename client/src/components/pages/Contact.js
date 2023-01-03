import React, { useState } from "react";

const styles = {
    form: {
        border: '2px solid #415971',
        width: '60%',
        height: '20%',
        borderRadius: '10px',
        padding: '25px',
        margin: '5px',
        backgroundColor: '#dadedf',
        boxShadow: '4px 1px 4px #415971'
    },
    input: {
        border: '2px solid #415971',
        borderRadius: '5px',
        backgroundColor: '#dadedf'
    },
    inputDiv: {
        backgroundColor: '#dadedf'
    },
    button: {
        border: '2px solid #415971',
        borderRadius: '5px',
        backgroundColor: '#9a8b7c',
        color: '#dadedf',
        width: 'fit-content'
    },
    h2: {
        backgroundColor: 'transparent'
    }
}
//     h3: {
//         margin: '10px',
//     },
//     logo: {
//         width: '40px',
//         height: '40px',
//         borderRadius: '50%',
//     },
//     logoContainer: {
//         width: '75%',
//         height: '25%',
//         margin: '25px',
//     }
// }


const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:3001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
    };
    return (
        <div className="d-flex container-fluid flex-column justify-content-center align-items-center">
            {/* <form action="mailto:pholcomb91@gmail.com?subject=Let's%20Connect!" style={styles.form} className="col-8">
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
            </form> */}
            <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center p-2" style={styles.form}>
                <div className="d-flex justify-content-center m-1" style={styles.inputDiv}>
                    <label htmlFor="name" style={styles.inputDiv}>Name:</label>
                    <input type="text" id="name" required style={styles.input}/>
                </div>
                <div className="d-flex justify-content-center m-1" style={styles.inputDiv}>
                    <label htmlFor="email" style={styles.inputDiv}>Email:</label>
                    <input type="email" id="email" required style={styles.input}/>
                </div>
                <div className="row d-flex m-1" style={styles.inputDiv}>
                    <label htmlFor="message" style={styles.inputDiv}>Message:</label>
                    <textarea id="message" required style={styles.input} />
                </div>
                <button type="submit" className= "d-flex justify-content-center m-1" style={styles.button}>{status}</button>
            </form>
            <h2 className="col text-center" style={styles.h2}>Or</h2>
        </div>
    );
};
export default Contact;