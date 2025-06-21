import React from 'react';

function Skills({ data }) {
    return (
        <section className="section card skills-section" id="skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills-list">
                {data.map((item, idx) => (
                    <div key={idx} className="skill-item">
                        <span className="skill-category">{item.category}</span>
                        <span className="skill-content"> {item.content}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
