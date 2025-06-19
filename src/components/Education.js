// src/components/Education.js
import React from 'react';

function Education({ data }) {
    return (
        <section className="section card" id="education">
            <h2>Education</h2>
            {data.map(edu => (
                <div className="item" key={edu.id}>
                    <h3>{edu.school} - {edu.degree}</h3>
                    <p className="date">{edu.period}</p>
                    {edu.details && <p>{edu.details}</p>}
                </div>
            ))}
        </section>
    );
}

export default Education;