import React, { Component } from 'react';
import Logo from '../../assets/client/img/core-img/logo.png';
import Bg6 from '../../assets/client/img/bg-img/bg-6.jpg';
import Heart from '../../assets/client/img/core-img/heart.svg';
import User from '../../assets/client/img/core-img/user.svg';
import Bag from '../../assets/client/img/core-img/bag.svg';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header className="header_area">
                <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
                    {/* Classy Menu */}
                    <nav className="classy-navbar" id="essenceNav">
                        {/* Logo */}
                        <Link className="nav-brand" to="/"><img src={Logo} alt="" /></Link>
                        {/* Navbar Toggler */}
                        <div className="classy-navbar-toggler">
                            <span className="navbarToggler"><span /><span /><span /></span>
                        </div>
                        {/* Menu */}
                        <div className="classy-menu">
                            {/* close btn */}
                            <div className="classycloseIcon">
                                <div className="cross-wrap"><span className="top" /><span className="bottom" /></div>
                            </div>
                            {/* Nav Start */}
                            <div className="classynav">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/shop">Shop</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                </ul>
                            </div>
                            {/* Nav End */}
                        </div>
                    </nav>
                    {/* Header Meta Data */}
                    <div className="header-meta d-flex clearfix justify-content-end">
                        {/* Search Area */}
                        <div className="search-area">
                            <form action="#" method="post">
                                <input type="search" name="search" id="headerSearch" placeholder="Type for search" />
                                <button type="submit"><i className="fa fa-search" aria-hidden="true" /></button>
                            </form>
                        </div>
                        {/* Favourite Area */}
                        {/* <div className="favourite-area">
                            <a href="#"><img src={Heart} alt="" /></a>
                        </div> */}
                        {/* User Login Info */}
                        {/* <div className="user-login-info">
                            <a href="#"><img src={User} alt="" /></a>
                        </div> */}
                        {/* Cart Area */}
                        <div className="cart-area">
                            <a href="#" id="essenceCartBtn"><img src={Bag} alt="" /> <span>3</span></a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
