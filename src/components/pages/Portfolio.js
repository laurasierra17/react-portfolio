import React from "react";
import { projects } from "../projects";
import Project from "../Project";

export default function Portfolio() {
    // Generate a new Project component for each project in the projects list
    return projects.map(project => (
        <div className="d-flex flex-row">
            <Project project={project} />
        </div>
    ))
}