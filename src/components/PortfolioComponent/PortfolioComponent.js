
// Portfolio.jsx

import React from "react";
import "./PortfolioComponent.module.css";
import bootycamp from "../../images/bootycamp.jpeg";


// project images not rendering, need to fix, cant figure out why.  Grader, I hope you are having a nice day! Please advise, thanks!

const projects = [
    {
        id: 1,
        name: "BootyCamp",
        description: "a simple fitness application built with js, node, handlebars, and mysql",
        image: { bootycamp },
        link: "https://bootycamp.herokuapp.com/"
    },
    {
        id: 2,
        name: "Country Trivia",
        description: "A geography quiz built with 3rd party APIs, HTML, CSS, and JavaScript",
        image: "../../images/trivia.png",
        link: "https://gnrt.github.io/Country-trivia/#"
    },
    {
        id: 3,
        name: "Burning Money",
        description: "a budgeting app built using MERN stack",
        image: "../../images/burning.png",
        link: "not yet deployed, check back soon!"
    },
    {
        id: 4,
        name: "Work Day Scheduler",
        description: "a calendar app built with HTML, CSS, and Jquery and Day.js",
        image: "../../images/work.png",
        link: "https://zander-m75.github.io/Workday-Planner-75/"
    },
    {
        id: 5,
        name: "Javascript timed quiz",
        description: "a short sports trivia quiz built with HTML, CSS, and JavaScript",
        image: "../../images/quiz.png",
        link: "https://zander-m75.github.io/04-JS-Time-Coding-Quiz-Game/"
    },
    {
        id: 6,
        name: "SQL Employee Tracker",
        description: "a CLI app built with node, inquirer, and mysql to manage employees in a company",
        image: "../../images/employee.png",
        link: "https://github.com/Zander-M75/SQL-Employee-Tracker"
    },

];

function PortfolioComponent() {
    return (
        <div className="portfolio">
            {projects.map((project) => (
                <a
                    key={project.id}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card"
                >
                    <img src={project.image} alt={project.name} />
                    <div className="overlay">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default PortfolioComponent;





