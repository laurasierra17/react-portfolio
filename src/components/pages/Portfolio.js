import React from "react";
import { projects } from "../projects";
import Project from "../Project";

export default function Portfolio() {
    return projects.map(project => (
        <div className="d-flex flex-row">
            <Project project={project} />

        </div>
    ))
}