import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="navbar">
            <div className="navbar-logo">Cindy Liu</div>
            <button className="navbar-hamburger" aria-label="Menu" onClick={() => setOpen(!open)}>
                <span className={open ? 'bar open' : 'bar'}></span>
                <span className={open ? 'bar open' : 'bar'}></span>
                <span className={open ? 'bar open' : 'bar'}></span>
            </button>
            <ul className={open ? 'navbar-links open' : 'navbar-links'}>
                <li><a href="#profile" onClick={() => setOpen(false)}>About</a></li>
                <li><a href="#experience" onClick={() => setOpen(false)}>Experience</a></li>
                <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
                <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
