import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {

    // const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'

    const themeChange = () => {
        document.body.classList.toggle(darkTheme)
        console.log(document.querySelector('.change-theme'))
        document.querySelector('.change-theme').classList.toggle('uil-moon')
        document.querySelector('.change-theme').classList.toggle('uil-sun')
    }

    /*==================== REMOVE MENU MOBILE ====================*/
    const linkAction = () => {
        const navMenu = document.getElementById('nav-menu')
        console.log(navMenu, 'clicked')
        navMenu.classList.remove('show-menu')
    }

    return (
        <header className="header bg-white flexy px-5" id="header">
            <nav className="nav container my-4">
                <Link to='home' className="nav__logo">NinjaSrima</Link>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <Link
                                onClick={()=>{linkAction();}}
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="nav__link">
                                <i class="uil uil-estate nav__icon"></i>Home
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                onClick={()=>{linkAction();}}
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-64} 
                                className="nav__link">
                                <i class="uil uil-user nav__icon"></i>About
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                onClick={()=>{linkAction();}}
                                activeClass="active"
                                to="videos"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-64} 
                                className="nav__link"><i class="uil uil-youtube nav__icon"></i>Videos
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                onClick={()=>{linkAction();}}
                                activeClass="active"
                                to="stats"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-64} 
                                className="nav__link">
                                <i class="uil uil-rocket nav__icon"></i>Stats
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                onClick={()=>{linkAction();}}
                                activeClass="active"
                                to="timeline"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-64} 
                                className="nav__link">
                                <i class="uil uil-history-alt nav__icon"></i>Timeline
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                onClick={()=>{linkAction();}}
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-64} 
                                className="nav__link">
                                <i class="uil uil-message nav__icon"></i>Contact
                            </Link>
                        </li>
                    </ul>

                    <i
                    onClick={()=>{
                        document.getElementById('nav-menu').classList.remove('show-menu') 
                    }}
                    className="uil uil-times nav__close" id="nav-close"></i>
                </div>
                <div className="nav__btns">
                    {/* <i
                        onClick={() => { themeChange(); }}
                        className="uil uil-sun change-theme" id="theme-button"></i> */}
                    <div
                    onClick={()=>{
                        document.getElementById('nav-menu').classList.add('show-menu')
                    }}
                    className="nav__toggle" id="nav-toggle">
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar