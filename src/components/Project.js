import React from "react";

export default function Project({ project }) {
    return (
        <div>
            <h1>{project.projectName}</h1>
            <p>{project.projectDescription}</p>
            <a href={`${project.github}`}>GitHub</a>
            <a href={`${project.deployed}`}>Deployed</a>
            <img src={`${project.img}`} alt="screenshot"/>
        </div>
    )
}