import React from "react";

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
    a: {
        textDecoration: 'none',
        backgroundColor: '#9a8b7c',
        color: '#dadedf'
    },
    h2: {
        backgroundColor: 'transparent'
    }
}

function Contact() {
    // const [status, setStatus] = useState("Submit");
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   setStatus("Sending...");
    //   const { name, email, message } = e.target.elements;
    //   let details = {
    //     name: name.value,
    //     email: email.value,
    //     message: message.value,
    //   };
    //   let response = await fetch("http://localhost:3001/contact", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json;charset=utf-8",
    //     },
    //     body: JSON.stringify(details),
    //   });
    //   setStatus("Submit");
    //   let result = await response.json();
    //   alert(result.status);
    // };
    "location.href='mailto:pholcomb91@gmail.com?subject=Let's Connect!'"


    return (
        <div className="d-flex container-fluid flex-column justify-content-center align-items-center">
            <form className="d-flex flex-column justify-content-center p-2" style={styles.form}>
                <div className="d-flex justify-content-center m-1" style={styles.inputDiv}>
                    <label htmlFor="name" style={styles.inputDiv}>Name:</label>
                    <input required type="text" id="name" style={styles.input}/>
                </div>
                <div className="d-flex justify-content-center m-1" style={styles.inputDiv}>
                    <label htmlFor="email" style={styles.inputDiv}>Email:</label>
                    <input required type="email" id="email" style={styles.input}/>
                </div>
                <div className="row d-flex m-1" style={styles.inputDiv}>
                    <label htmlFor="message" style={styles.inputDiv}>Message:</label>
                    <textarea required id="message" style={styles.input} />
                </div>
                <button type="submit" onClick={() => window.location = `mailto:pholcomb91@gmail.com?subject=Let's Connect!`} className= "d-flex justify-content-center m-1" style={styles.button}>Submit</button>
            </form>
            <h2 className="col text-center" style={styles.h2}>Or</h2>
        </div>
    );
};
export default Contact;