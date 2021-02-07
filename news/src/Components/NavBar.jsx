import React from 'react'
import NasaLogo from '../Assets/NasaLogo.png';
import {Link} from 'react-router-dom';


function NavBar() {
    return (
        <nav>
            <div className="top-nav">
                <h1><Link to='/'>HUBBLESITE</Link></h1>
                <img className="Logo" src={NasaLogo} alt="Logo"/>
            </div>
            <div className="nav-links">
                <ul>
                    <li><Link to='/images'>Images</Link></li>
                    <li><Link to='/newsreleases'>News Releases</Link></li>
                    <li><Link to='/videos'>Videos</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;