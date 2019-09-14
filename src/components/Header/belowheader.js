import React, { Component } from 'react'

export default class BelowHeader extends Component {
    render() {
        return (
            <div>
                    <div className="main-header">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-12">
                            <div className="logo logo4">
                            <h1 className="hidden">yap mart </h1>
                            <a href="index.html"><img src="images/logo.png" alt /></a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="smart-search smart-search4">
                            <div className="select-category">
                                <a className="category-toggle-link" href="#"><span>All Categories</span></a>
                                <ul className="list-category-toggle list-unstyled">
                                <li><a href="#">Computer &amp; Office</a></li>
                                <li><a href="#">Elextronics</a></li>
                                <li><a href="#">Jewelry &amp; Watches</a></li>
                                <li><a href="#">Home &amp; Garden</a></li>
                                <li><a href="#">Bags &amp; Shoes</a></li>
                                <li><a href="#">Kids &amp; Baby</a></li>
                                </ul>
                            </div>
                            <form className="smart-search-form ajax-search">
                                <input type="text" onblur="if (this.value=='') this.value = this.defaultValue" onfocus="if (this.value==this.defaultValue) this.value = ''" defaultValue="Search..." />
                                <input type="submit" defaultValue />
                                <div className="list-product-search">
                                <div className="item-search-pro">
                                    <div className="search-ajax-thumb product-thumb">
                                    <a href="#" className="product-thumb-link"><img src="images/photos/fashion/5.jpg" alt /></a>
                                    </div>
                                    <div className="search-ajax-title"><h3 className="title14"><a href="detail.html">Sampaquita Parfum</a></h3></div>
                                    <div className="search-ajax-price">
                                    <span>$350.00</span>
                                    </div>
                                </div>
                                <div className="item-search-pro">
                                    <div className="search-ajax-thumb product-thumb">
                                    <a href="#" className="product-thumb-link"><img src="images/photos/electronics/5.jpg" alt /></a>
                                    </div>
                                    <div className="search-ajax-title"><h3 className="title14"><a href="detail.html">Watches for Men</a></h3></div>
                                    <div className="search-ajax-price">
                                    <span>$310.00</span>
                                    </div>
                                </div>
                                <div className="item-search-pro">
                                    <div className="search-ajax-thumb product-thumb">
                                    <a href="#" className="product-thumb-link"><img src="images/photos/homeware/5.jpg" alt /></a>
                                    </div>
                                    <div className="search-ajax-title"><h3 className="title14"><a href="detail.html">Samsung S7</a></h3></div>
                                    <div className="search-ajax-price">
                                    <span>$390.00</span>
                                    </div>
                                </div>
                                <div className="item-search-pro">
                                    <div className="search-ajax-thumb product-thumb">
                                    <a href="#" className="product-thumb-link"><img src="images/photos/beauty/5.jpg" alt /></a>
                                    </div>
                                    <div className="search-ajax-title"><h3 className="title14"><a href="detail.html">Huwei Phones</a></h3></div>
                                    <div className="search-ajax-price">
                                    <span>$370.00</span>
                                    </div>
                                </div>
                                <div className="item-search-pro">
                                    <div className="search-ajax-thumb product-thumb">
                                    <a href="#" className="product-thumb-link"><img src="images/photos/sport/5.jpg" alt /></a>
                                    </div>
                                    <div className="search-ajax-title"><h3 className="title14"><a href="#">Smart Watches</a></h3></div>
                                    <div className="search-ajax-price">
                                    <span>$320.00</span>
                                    </div>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-xs-9">
                            <div className="check-cart check-cart4">
                            <div className="mini-cart-box">
                                
                                <a className="mini-cart-link" href="#">{/* cart.js create */}
                                <span className="mini-cart-icon"><i className="fa fa-shopping-basket" aria-hidden="true" /></span>
                                <span className="mini-cart-number">0</span>
                                </a>
                                
                            </div> 
                            {/* End Mini Cart */}
                            <div className="wishlist-box">
                                <a href="#" className="wishlist-top-link"><i className="fa fa-heart-o" aria-hidden="true" /></a>
                            </div>
                            {/* End Wishlist */}
                            <div className="checkout-box">
                                <a href="#" className="checkout-link"><i className="fa fa-lock" aria-hidden="true" /></a>
                                <ul className="list-checkout list-unstyled">
                                <li><a href="#"><i className="fa fa-user" /> Account Info</a></li>
                                <li><a href="#"><i className="fa fa-heart-o" /> Wish List</a></li>
                                <li><a href="#"><i className="fa fa-toggle-on" /> Compare</a></li>
                                <li><a href="#"><i className="fa fa-key" aria-hidden="true" />Sign in</a></li>
                                <li><a href="#"><i className="fa fa-sign-in" /> Checkout</a></li>
                                </ul>
                            </div>
                            {/* End Check Out Box */}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* End Main Header */}

            </div>
        )
    }
}
