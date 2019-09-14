import React, { Component } from 'react'

export default class ListBox extends Component {
    render() {
        return (
            <div>
                <div className="footer-list-box">
                        <div className="row">
                        <div className="col-md-5 col-sm-12 col-xs-12">
                            <div className="newsletter-form footer-box">
                            <h2 className="title14">Subscription</h2>
                            <form>
                                <input type="text" onblur="if (this.value=='') this.value = this.defaultValue" onfocus="if (this.value==this.defaultValue) this.value = ''" defaultValue="Place enter your email" />
                                <input type="submit" defaultValue="Subscription" />
                            </form>
                            </div>
                            <div className="social-footer footer-box">
                            <h2 className="title14">Stay Connected</h2>
                            <div className="list-social">
                                <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
                                <a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a>
                                <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-3 col-xs-6">
                            <div className="menu-footer-box footer-box">
                            <h2 className="title14">How to Buy</h2>
                            <ul className="list-unstyled">
                                <li><a href="#">Create an Account</a></li>
                                <li><a href="#">Making Payments</a></li>
                                <li><a href="#">Delivery Options</a></li>
                                <li><a href="#">Buyer Protection</a></li>
                                <li><a href="#">New User Guide</a></li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-3 col-xs-6">
                            <div className="menu-footer-box footer-box">
                            <h2 className="title14">Customer Service</h2>
                            <ul className="list-unstyled">
                                <li><a href="#">Customer Support</a></li>
                                <li><a href="#">Affiliate Program</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Contact us</a></li>
                            </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="contact-footer-box footer-box">
                            <h2 className="title14">contact us</h2>
                            <p className="formule-address">8901 Marmora Road, Glasgow, D04  89GR.</p>
                            <p className="formule-phone">+1 800 559 6580<br />+1 504 889 9898</p>
                            <p className="formule-email"><a href="mailto:email@demolink.org">email@demolink.org</a></p>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        )
    }
}
