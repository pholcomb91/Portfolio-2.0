import React from "react";
import cvImg from "../../assets/CV.png"
import forumNav from "../../assets/Homepage2.png"
import drinkApp from "../../assets/Drink-app.png"
import regex from "../../assets/Regex.png"
import workADay from "../../assets/GTD.png"

const styles= {
    card: {
        width: '25rem',
        borderRadius: '5px',
        boxShadow: '4px 1px 4px #415971'
    },
    cardBody: {
        background: '#9a8b7c',
        color: '#dadedf'
    },
    a: {
        background: '#dadedf',
        color: '#9a8b7c',
        border: '#415971',
        borderWidth: '2px',
        boxShadow: '4px 4px 5px #415971'
    },
}

const projects = [
    {
        key: "1",
        title: "Forum For Life",
        img: forumNav,
        deployed: "https://shrouded-gorge-83366.herokuapp.com/",
        repo: "https://github.com/pholcomb91/FORUM",
        alt: "Forum for Life Screenshot"
    },
    {
        key: "2",
        title: "Drink",
        img: drinkApp,
        deployed: "https://mrgreen12375.github.io/drink/",
        repo: "https://github.com/mrgreen12375/drink",
        alt: "Drink App screenshot"
    },
    {
        key: "3",
        title: "Regex Gist",
        img: regex,
        deployed: "https://gist.github.com/pholcomb91",
        repo: "https://gist.github.com/pholcomb91/236077dada435701e95618940fb79717",
        alt: "Regex Gist screenshot"
    },
    {
        key: "4",
        title: "Work Day Scheduler",
        img: workADay,
        deployed: "https://pholcomb91.github.io/Getting-Things-Done/",
        repo: "https://github.com/pholcomb91/Getting-Things-Done.git",
        alt: "Work Day Scheduler screenshot"
    },
    {
        key: "5",
        title: "Curriculum Vitae",
        img: cvImg,
        deployed: "https://pholcomb91.github.io/Peter-Curriculum-Vitae/",
        repo: "https://github.com/pholcomb91/Peter-Curriculum-Vitae",
        alt: "Peter's CV screenshot"

    },
];

class Portfolio extends React.Component {
    state = {
        projects: []
    };
    componentDidMount() {
        console.log(projects);
        this.setState({ projects });
    };
    render() {
        const { projects } = this.state;
        const portfolio = projects.map(project => {
            return (
                <div className="card col col-sm-12 m-4 p-0" style={styles.card} key= {project.key}>
                    <img src={project.img} className="card-img-top" alt={project.alt}></img>
                    <div className="col card-body justify-content-center rounded-bottom" style={styles.cardBody}>
                        <h5 className="card-title m-1 text-center" style={styles.cardBody}>{project.title}</h5>
                        <a href={project.deployed} className="btn m-1" style={styles.a}>Deployed Application</a>
                        <br></br>
                        <a href={project.repo} className="btn m-1" style={styles.a}>Repo Link</a>
                    </div>
                </div>
            );
        });
        return <div className="d-flex flex-wrap container-fluid "><div className="row justify-content-evenly">{<React.Fragment>{portfolio}</React.Fragment>}</div></div>
    };
}

export default Portfolio;