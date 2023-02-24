import React from "react";
import resume from "../../assets/WebResume2023.pdf";


function Resume() {
    return (
        <div className="text-center">
            <h2>Proficiencies</h2>
            <h3>Foundational languages</h3>
            <h5>HTML</h5>
            <h5>CSS</h5>
            <h5>JavaScript</h5>
            <h3>Supplemental Libraries/Technologies</h3>
            <h5>Web and Third Party APIs</h5>
            <h5>Node.js</h5>
            <h5>Express.js</h5>
            <h5>SQL</h5>
            <h5>MVC architecture</h5>
            <h5>Mongoose/MongoDB</h5>
            <h5>React</h5>
            <h5>MERN architecture</h5>
            <h2>Download my resume <a href={resume} download>here</a></h2>
        </div>
    )
}

export default Resume;