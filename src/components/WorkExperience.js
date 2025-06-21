// src/components/WorkExperience.js
import React from 'react';

function WorkExperience({ data }) {
    return (
        <section className="section card" id="experience">
            <div className="work-exp-title-wrapper">
                <h2>Work Experiences</h2>
            </div>
            {data.map(job => (
                <div className="item work-item" key={job.id}>
                    <div className="work-header">
                        <div>
                            <span className="company-name">{job.company}</span>
                            <span className="position">{job.position}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.7em', minWidth: '7.5em', justifyContent: 'flex-end' }}>
                            <span className="date">
                                <span className="date-num">{job.period}</span>
                            </span>
                            {job.companyLogo && (
                                <img src={job.companyLogo} alt={job.company} style={{ height: '1.5em', width: '1.5em', borderRadius: '50%', objectFit: 'contain', background: '#fff', verticalAlign: 'middle', marginLeft: '0.3em', padding: '0.05em' }} />
                            )}
                        </div>
                    </div>
                    <ul>
                        {job.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}

export default WorkExperience;