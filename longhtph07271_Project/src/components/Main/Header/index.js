import React, { useState } from 'react';
import { BsSearch, BsBagFill, BsGear } from "react-icons/bs";
import { IconContext } from "react-icons";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom';

const Header = props => {
    let history = useHistory()
    const [keyWord, setKeyWord] = useState("");

    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setKeyWord(value)
    }


    return (
        <div>
            {/* Start of Header */}
            <header className="header bgc-white header-type-1">
                <div className="top-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 order-2 col-sm-12 order-sm-2 col-md-8 order-md-1 align-self-center">
                                <p>Mid-season sale up to 20% OFF. Use code "SALEOFF20"</p>
                            </div>
                            <div className="col-12 order-1 col-sm-12 order-sm-1 col-md-4 order-md-2">
                                <ul className="list-inline">
                                    <li className="currency list-inline-item">
                                        <div className="btn-group">
                                            <button className="btn-link dropdown-toggle"> USD $<i className="fa fa-angle-down" /></button>
                                            <div className="dropdown-menu">
                                                <ul>
                                                    <li><a href="#">Euro €</a></li>
                                                    <li><a href="#" className="current">USD $</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="language list-inline-item">
                                        <div className="btn-group">
                                            <button className="btn-link dropdown-toggle">English <i className="fa fa-angle-down" /></button>
                                            <div className="dropdown-menu">
                                                <ul>
                                                    <li><a href="#" className="current"><img src="/images/icons/en-gb.png" alt="Icons" /> English</a></li>
                                                    <li><a href="#"><img src="/images/icons/fr-fr.png" alt="Icons" /> Français</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> {/* end of container */}
                </div> {/* end of top-bar */}
                <div className="header-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-6 order-2 col-sm-6 order-sm-2 col-md-4 order-md-1 col-lg-3">
                                <div className="header-search-area">
                                    <div className="input-group">
                                        <input type="text" className="form-control" name="keyword" onChange={onHandleChange} placeholder="Search sản phẩm ..." />
                                        <div className="input-group-append">
                                            <Link to={`/search/products/${keyWord}`} className="header-search-btn" type="button"><BsSearch /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 order-1 col-sm-12 order-sm-1 col-md-4 order-md-2 col-lg-6">
                                <div className="logo">
                                    <a href="/"><img src="/images/logo.png" alt="Logo" className="img-fluid" /></a>
                                </div>
                            </div>
                            <div className="col-6 order-3 col-sm-6 col-md-4 col-lg-3">
                                <div className="header-cart-area">
                                    <div className="header-cart">
                                        <div className="btn-group">
                                            <Link to="/shoping-cart" className="btn-link  icon-cart">
                                                <IconContext.Provider value={{ color: "black" }}>
                                                    <div>
                                                        <BsBagFill />
                                                    </div>
                                                </IconContext.Provider>
                                            </Link>
                                            {/* <div className="dropdown-menu">
                                                <div className="shopping-cart-content">
                                                    <ul className="list-unstyled">
                                                        <li className="single-cart-item media">
                                                            <div className="shopping-cart-img mr-4">
                                                                <a href="#">
                                                                    <img className="img-fluid" alt="Cart Item" src="/images/cart/cart-1.jpg" />
                                                                    <span className="product-quantity">1x</span>
                                                                </a>
                                                            </div>
                                                            <div className="shopping-cart-title media-body">
                                                                <h4><a href="#">Rival Field Messenger</a></h4>
                                                                <p className="cart-price">$120.00</p>
                                                                <div className="product-attr">
                                                                    <span>Size: S</span>
                                                                    <span>Color: Black</span>
                                                                </div>
                                                            </div>
                                                            <div className="shopping-cart-delete">
                                                                <a href="#"><i className="ion ion-md-close" /></a>
                                                            </div>
                                                        </li>
                                                        <li className="single-cart-item media">
                                                            <div className="shopping-cart-img mr-4">
                                                                <a href="#">
                                                                    <img className="img-fluid" alt="Cart Item" src="/images/cart/cart-2.jpg" />
                                                                    <span className="product-quantity">2x</span>
                                                                </a>
                                                            </div>
                                                            <div className="shopping-cart-title media-body">
                                                                <h4><a href="#">Fusion Backpack</a></h4>
                                                                <p className="cart-price">$200.00</p>
                                                                <div className="product-attr">
                                                                    <span>Color: White</span>
                                                                    <span>Accessories: Yes</span>
                                                                </div>
                                                            </div>
                                                            <div className="shopping-cart-delete">
                                                                <a href="#"><i className="ion ion-md-close" /></a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="shopping-cart-total">
                                                        <h4>Sub-Total : <span>$320.00</span></h4>
                                                        <h4>Total : <span>$320.00</span></h4>
                                                    </div>
                                                    <div className="shopping-cart-btn">
                                                        <a className="default-btn" href="cart.html">view cart</a>
                                                        <a className="default-btn" href="checkout.html">checkout</a>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <ul className="list-inline">
                                        <li className="top-links list-inline-item">
                                            <div className="btn-group">
                                                <button className="btn-link dropdown-toggle">
                                                    <IconContext.Provider value={{ color: "black" }}>
                                                        <div>
                                                            <BsGear />
                                                        </div>
                                                    </IconContext.Provider></button>
                                                <div className="dropdown-menu">
                                                    <ul>
                                                        <li><a href="register.html">Register</a></li>
                                                        <li><a href="login.html">Login</a></li>
                                                        <li><a href="my-account.html">My Account</a></li>
                                                        <li><a href="wishlist.html">Wishlist</a></li>
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div> {/* end of header-cart-area */}
                            </div>
                        </div>
                    </div> {/* end of container */}
                </div> {/* end of header-top */}
                {/* Start of Main and Mobile Navigation */}
                <div className="main-nav-area bgc-white">
                    <div className="container">
                        <nav id="main_nav" className="stellarnav">
                            <ul>
                                <li><a href="/"><span>Home</span></a></li>
                                <li><Link to="/shop/products" ><span>Shop</span></Link></li>
                                <li><Link to="/about"><span>About Vn</span></Link></li>
                                <li><Link to="/contact"><span>Contact Vn</span></Link></li>
                                <li><Link to="/blog"><span>Blog Vn</span></Link></li>
                            </ul>
                        </nav>
                    </div> {/* end of container */}
                </div>
                {/* End of Main and Mobile Navigation */}
            </header>
            {/* End of Header */}
        </div>
    )
}

export default Header
