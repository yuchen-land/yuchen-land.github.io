// src/components/WorkExperience.js
import React from 'react';

function WorkExperience({ data }) {
    return (
        <section className="section card" id="experience">
            <h2>Work Experiences</h2>
            {data.map(job => (
                <div className="item" key={job.id}>
                    <h3>{job.company} - {job.position}</h3>
                    <p className="date">{job.period}</p>
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