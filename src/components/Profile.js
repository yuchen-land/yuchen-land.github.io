import React from 'react';

function Profile({ data }) {
    return (
        <section className="section card profile-section" id="profile">
            <div className="profile-header-centered">
                <img src={data.photo} alt={data.name} className="profile-photo-lg" />
                <div className="profile-text-centered">
                    <h1>{data.name}</h1>
                    <div className="profile-english-name">Cindy Liu</div>
                    <p className="title">{data.title}</p>
                    <div className="contact-info">
                    </div>
                    <div className="profile-social-links">
                        <a href="http://linkedin.com/in/yuchenliu0401/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com/yuchen-land" target="_blank" rel="noopener noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
                        <a href="mailto:yuchen880401@gmail.com" target="_blank" rel="noopener noreferrer" title="Email"><i className="fas fa-envelope"></i></a>
                        <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" title="Website"><i className="fas fa-globe"></i></a>
                    </div>
                </div>
            </div>
            <h2 className="section-title">About Me</h2>
            <p className="bio-text">{data.bio}</p>
        </section>
    );
}

export default Profile;