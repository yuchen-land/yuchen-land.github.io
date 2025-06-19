// src/components/Links.js
import React from 'react';

function Links({ data }) {
    return (
        <section className="section card" id="links">
            <h2 className="section-title">Contact & Social</h2>
            <div className="links-grid">
                {data.map(link => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-item icon-only"
                        title={link.name} // Provides a tooltip on hover
                    >
                        <i className={link.icon}></i>
                        {/* Removed <span>{link.name}</span> to display only icons */}
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Links;