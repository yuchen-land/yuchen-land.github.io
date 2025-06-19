// src/components/Projects.js
import React from 'react';
import { Link } from 'react-router-dom'; // 引入 Link 組件

function Projects({ data }) {
    return (
        <section className="section card" id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {data.map(project => (
                    <div className="project-card" key={project.id}>
                        <h3>
                            <Link to={`/project/${project.id}`}>{project.name}</Link> {/* 點擊導向專案詳細頁 */}
                        </h3>
                        <p className="date">{project.date}</p>
                        <p className="short-description">{project.shortDescription}</p>
                        <div className="project-tech">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;