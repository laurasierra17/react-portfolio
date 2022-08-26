import React from "react";

export default function Project({ project }) {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-5">
                    <img src={`${project.img}`} className="img-fluid rounded-start" alt="screenshot" />
                </div>
                <div className="col-md-7">
                    <div className="card-body">
                        <h5 className="card-title">{project.projectName}</h5>
                        <p className="card-text">{project.projectDescription}</p>
                        <a className="card-text text-muted" href={`${project.github}`}>GitHub</a>
                        <br/>
                        <a className="card-text text-muted" href={`${project.deployed}`}>Deployed</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

