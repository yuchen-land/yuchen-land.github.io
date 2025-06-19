import React from 'react';
import { useParams, Link } from 'react-router-dom';
import resumeData from '../data/resumeData';

function ProjectDetail() {
    const { projectId } = useParams();
    const project = resumeData.projects.find(p => p.id === projectId);

    if (!project) {
        return (
            <main className="container">
                <section className="section card">
                    <h2>Project Not Found</h2>
                    <p>The project you are looking for does not exist.</p>
                    <Link to="/resume" className="back-link">Return to Resume Page</Link>
                </section>
            </main>
        );
    }

    return (
        <main className="container main-detail">
            <section className="section card">
                <Link to="/resume" className="back-link">&larr; Return to Resume Page</Link>
                <h2>{project.name}</h2>
                <p className="date">{project.date}</p>
                <p><strong>Category:</strong> {project.category}</p>
                <p>{project.fullDescription}</p>

                <h3>Technologies Used</h3>
                <div className="project-tech-detail">
                    {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                    ))}
                </div>

                <div className="project-links">
                    {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                    )}
                    {project.demoLink && (project.demoLink !== "#") && (
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            <i className="fas fa-external-link-alt"></i> Demo
                        </a>
                    )}
                </div>
            </section>
        </main>
    );
}

export default ProjectDetail;