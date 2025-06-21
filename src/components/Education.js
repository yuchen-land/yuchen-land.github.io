// src/components/Education.js
import React from 'react';

function Education({ data }) {
    return (
        <section className="section card" id="education">
            <h2>Education</h2>
            {data.map(edu => (
                <div className="education-item" key={edu.id}>
                    <div className="education-header-row">
                        <div className="education-school-group">
                            <span className="education-school">{edu.school}</span>
                            {edu.department && edu.department.trim() !== '' && (
                                <span className="education-dept">{edu.department}</span>
                            )}
                        </div>
                        <div className="education-right-group">
                            <span className="education-degree">{edu.degree}</span>
                            <span className="education-period">{edu.period}</span>
                        </div>
                    </div>
                    {edu.details && <div className="education-details">{edu.details}</div>}
                </div>
            ))}
        </section>
    );
}

export default Education;