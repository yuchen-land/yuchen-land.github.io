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
                        <div className="project-header-row">
                            <h3 className="project-title-left">
                                <a href={`/project/${project.id}`} target="_blank" rel="noopener noreferrer">{project.name}</a>
                            </h3>
                            <div className="project-links project-links-right">
                                {project.githubLink && (
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" title="GitHub" className="project-link-icon">
                                        <i className="fab fa-github"></i>
                                    </a>
                                )}
                                {project.demoLink && project.demoLink !== "#" && (
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" title="Demo" className="project-link-icon">
                                        <i className="fas fa-external-link-alt"></i>
                                    </a>
                                )}
                            </div>
                        </div>
                        <p className="date">{project.date}</p>
                        {/* shortDescription 支援陣列自動換行/列點 */}
                        {Array.isArray(project.shortDescription) ? (
                            <ul className="short-description-list">
                                {project.shortDescription.map((desc, idx) => (
                                    <li key={idx}>{desc}</li>
                                ))}
                            </ul>
                        ) : (
                            <p className="short-description">{project.shortDescription}</p>
                        )}
                        <div className="project-tech">
                            {project.technologies.map((tech, i) => (
                                tech === "Team Leader" ? (
                                    <span key={i} className="tech-tag team-leader-tag">{tech}</span>
                                ) : (
                                    <span key={i} className="tech-tag">{tech}</span>
                                )
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;