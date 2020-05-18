import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Sedona</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto top-left-menu">
                        <li className="nav-item">
                            <span><Link className="nav-link" to="/">ИНФОРМАЦИЯ</Link></span>
                        </li>
                        <li className="nav-item">
                            <span><Link className="nav-link" to="/#">ФОТО И ВИДЕО</Link></span>
                        </li>
                        <li className="nav-item top-item">
                            <div className="nav-link top-icon">
                                <img className="top-icon-img" src="/img/top-menu-icon.png"/>
                            </div>
                        </li>
                        <li className="nav-item">
                            <span><Link className="nav-link" to="/#">КАРТА ШТАТА</Link></span>
                        </li>

                        <li className="nav-item">
                            <span><Link className="nav-link" to="/hotels">ГОСТИНИЦЫ</Link></span>
                        </li>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="main-background" id="photos">
                <img className="welcome" src="img/welcome.png"/>
                <div className="gorgeous">
                    <img className="gorgeous-img" src="img/to_the_gorgeous.png"/>
                    <img className="line" src="img/line.png"/>
                </div>
                <img className="sedona" src="img/sedona.png"/>
                <img className="slogan" src="img/slogan.png"/>
                <img className="white" src="img/white.png"/>
            </div>
            <div className="about-sedona">
                <h1>СЕДОНА — НЕБОЛЬШОЙ ГОРОДОК В АРИЗОНЕ,<br/>
                    ЗАСЛУЖИВАЮЩИЙ БОЛЬШЕГО!</h1>
                <h3>РАССМОТРИМ 5 ПРИЧИН, ПО КОТОРЫМ СЕДОНА КРУЧЕ, ЧЕМ ГРАНД КАНЬОН!</h3>
            </div>
        </header>
    );
}

export default Header;