import { FaBars, FaTimes } from "react-icons/fa"
import { useRef } from "react"
import logo from "../assets/topo-logo.png"
import Dropdown from "./Dropdown"
import React from "react"
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const navRef = useRef();

    function showNavBar() {
        return navRef.current.classList.toggle("responsive_nav");
    }
    const [dropdown, setDropdown] = React.useState(false);
    const closeMobileMenu = () => setClick(false);
    const onMouseEnter = () => {
        window.innerWidth < 800 ? setDropdown(false) : setDropdown(true)
    }

    const onMouseLeave = () => {
        setDropdown(false);
    };


    return (
        <header className=" header-home  main-grid">
            <div className="header-content">
                <Link className="logo-link" to="/">
                    <img src={logo} alt="topo.lv logo" className="logo"></img>
                </Link>

                <button aria-label="Open navigation" onClick={showNavBar} className=" nav-btn open-nav-btn"><FaBars /></button>
                <nav ref={navRef} className="nav">
                    <button aria-label="Close navigation" onClick={showNavBar} className="nav-btn close-nav-btn"> <FaTimes /></button>
                    <ul className="nav-list">
                        <li className="nav-item ">
                            <Link to="/"
                                className="nav-link"
                                onClick={closeMobileMenu}>
                                Sākums
                            </Link>
                        </li>
                        <li className="nav-item"
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}>
                            <Link to="/services"
                                className="nav-link"
                                onClick={closeMobileMenu}>
                                Pakalpojumi
                                <i className='fas fa-caret-down' />
                            </Link>
                            {dropdown && <Dropdown />}
                        </li>
                        <li className="nav-item">
                            <Link to="experience"
                                className="nav-link"
                                onClick={closeMobileMenu}>
                                Pieredze</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/models"
                                className="nav-link"
                                onClick={closeMobileMenu}>
                                3D modeļi</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact"
                                className="nav-link"
                                onClick={closeMobileMenu}>
                                Kontakti</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}