import React from 'react';
import './Footer.scss';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__hireme">
                <h3 className="footer__hireme-title">HIRE ME!</h3>
                <p className="footer__hireme-email"><FontAwesomeIcon icon={faEnvelope} /> a.alluysios@gmail.com</p>
                <a target='_blank' rel="noopener noreferrer" href='https://alluysios.github.io/' className="footer__hireme-portfolio"><FontAwesomeIcon icon={faGlobe} /> Portfolio </a>
                <a target='_blank' rel="noopener noreferrer" href='https://github.com/Alluysios' className="footer__hireme-resume"><FontAwesomeIcon icon={faGlobe} /> Github </a>
                <a target='_blank' rel="noopener noreferrer" href='https://drive.google.com/file/d/10cVQNBVnhsEu-_37CD4kt0tSqJkGJvJi/view?usp=sharing' className="footer__hireme-resume"><FontAwesomeIcon icon={faNewspaper} /> Resume (PDF) </a>
            </div>
            <div className="footer__menu">
                <h3 className='footer__menu-heading'>Menu</h3>
                <Link to='/' className="footer__menu-item">Home</Link>
                <Link to='/' className="footer__menu-item">Categories</Link>
                <a target='_blank' rel="noopener noreferrer" href='https://alluysios.github.io/' className="footer__hireme-portfolio">About me </a>
                <a target='_blank' rel="noopener noreferrer" href='https://freshtravelers.herokuapp.com/' className="footer__menu-item">Blog</a>
            </div>
            <div className="footer__socialmedia">
                <h3 className="footer__heading">SOCIAL MEDIA</h3>
                <img src="../linkedin.png" alt="linkedin"/>
                <img src="../github.png" alt="github" style={{ background: '#fff', borderRadius: '50%' }} />
                <img src="../facebook.png" style={{ background: '#fff', borderRadius: '98%' }} alt="facebook"/>
                <img src="../instagram.png" alt="instagram"/>
            </div>
        </footer>
    )
}

export default Footer;
