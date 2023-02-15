
// Portfolio.jsx

import React from "react";
import "./PortfolioComponent.module.css";

const projects = [
    {
        id: 1,
        name: "BootyCamp",
        description: "Description of Project 1",
        image: "https://via.placeholder.com/300x200",
        link: "https://www.project1.com"
    },
    {
        id: 2,
        name: "Project 2",
        description: "Description of Project 2",
        image: "https://via.placeholder.com/300x200",
        link: "https://www.project2.com"
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





