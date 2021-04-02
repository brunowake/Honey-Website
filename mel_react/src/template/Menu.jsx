import React from 'react'
import './Menu.css'
import Logo from '../img/logo.png'


const Menu = () => {

    return (
        <header>
            <div className="left-side">
                <img src={Logo} className="logo" />
            </div>
            <div className="right-side">
                <nav className="navigation">
                    <a href="#">Domov </a>
                    <a href="#/products">Products</a>
                    <a href="#/about">O mne</a>
                </nav>
            </div>
        </header>
    )
}

export default Menu