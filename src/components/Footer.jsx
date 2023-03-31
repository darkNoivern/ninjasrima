import React from 'react'
import { Link } from 'react-scroll'
import '../styles/footer.css'

const Footer = () => {
    return (
        <>
        <div className="flexy">

            <footer className="footer small-section px-5">
                <div className="footer__bg">
                    <div className="footer__container container grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h1 className="footer__title">NinjaSrima
                            </h1>
                            <span className="footer__subtitle">
                                Youtuber
                            </span>
                        </div>

                        <ul className="footer__links">
                            <li>
                                <Link to="about" 
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-64} 
                                className="footer__link">About</Link>
                            </li>
                            <li>
                                <Link to="videos" 
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-64}  
                                className="footer__link">Videos</Link>
                            </li>
                            <li>
                                <Link to="contact" 
                                spy={true}
                                smooth={true}
                                duration={500} 
                                offset={-64} 
                                className="footer__link">Contact</Link>
                            </li>
                        </ul>

                        <div className="footer__socials">
                            <a href="https://www.facebook.com/mahadev.karmakar.372/" className="footer__social" target="_blank">
                                <i className="uil uil-facebook-f mr-4"></i>
                            </a>
                            <a href="https://www.instagram.com/ryuzaki_mahadev/" className="footer__social" target="_blank">
                                <i className="uil uil-instagram mr-4"></i>
                            </a>
                            <a href="" className="footer__social" target="_blank">
                                <i className="uil uil-twitter-alt"></i>
                            </a>
                        </div>
                    </div>
                    <p className="footer__copy pt-8">
                        &#169; 2023 NinjaSrima all rights reserved
                    </p>
                </div>
            </footer>
        </div>

        </>
    )
}

export default Footer