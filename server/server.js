const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const db = require('./config/connection');

const PORT = process.env.PORT || 3001
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);



router.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 

    if (name, email, message){
        const mail = {
            from: name,
            to: "pholcomb91@gmail.com",
            subject: "Let's Connect!",
            html: `<p>Name: ${name}</p>
                   <p>Email: ${email}</p>
                   <p>Message: ${message}</p>`,
          };
          contactEmail.sendMail(mail, (error) => {
            if (error) {
              res.status(400).json({ status: "ERROR" });
            } else {
              res.status(200).json({ status: "Message Sent" });
            }
          });
    } else {
        res.status(400).json({ status: "ERROR" });
    }
    
  });

db.once('open', () => {
    app.listen(PORT, () => console.log(`Server Running on ${PORT}`));
});

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "pholcomb91@gmail.com",
      pass: "zbenpydduptmhcnt",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  