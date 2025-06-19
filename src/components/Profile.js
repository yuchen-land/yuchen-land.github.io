import React from 'react';

function Profile({ data }) {
    return (
        <section className="section card profile-section" id="profile">
            <div className="profile-header-centered">
                <img src={data.photo} alt={data.name} className="profile-photo-lg" />
                <div className="profile-text-centered">
                    <h1>{data.name}</h1>
                    {/* <p className="english-name">{data.englishName}</p>  */}
                    <p className="title">{data.title}</p>

                    {/* 新增聯絡資訊 */}
                    <div className="contact-info">
                        {data.contact.phone && (
                            <p><i className="fas fa-phone-alt icon-small"></i> {data.contact.phone}</p>
                        )}
                        {data.contact.location && (
                            <p><i className="fas fa-map-marker-alt icon-small"></i> {data.contact.location}</p>
                        )}
                    </div>

                    {/* 新增社群圖標 */}
                    <div className="profile-social-links">
                        {data.socialLinks && data.socialLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="profile-social-item" /* 新增 profile-social-item 類別 */
                                title={link.name}
                            >
                                <i className={link.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <h2 className="section-title">About Me</h2>
            <p className="bio-text">{data.bio}</p>
        </section>
    );
}

export default Profile;