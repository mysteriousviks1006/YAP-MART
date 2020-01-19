import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class login extends Component {
    render() {
        return (
            <div>
                <div id="content">
                    <div className="content-page woocommerce">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="title-shop-page">My Account</h2>
                                    <div className="register-content-box">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6 col-ms-12">
                                                <div className="check-billing">
                                                    <div className="form-my-account">
                                                        <form className="block-login">
                                                            <h2 className="title24 title-form-account">Login</h2>
                                                            <p>
                                                                <label htmlFor="username">Username or email address <span className="required">*</span></label>
                                                                <input type="text" name="username" />
                                                            </p>
                                                            <p>
                                                                <label htmlFor="password">Password <span className="required">*</span></label>
                                                                <input type="text" name="password" />
                                                            </p>
                                                            <p>
                                                                <input type="submit" className="register-button" name="login" defaultValue="Login" />
                                                            </p>
                                                            <div className="table create-account">
                                                                <div className="text-left">
                                                                    <p>
                                                                        <input type="checkbox" id="remember" /> <label htmlFor="remember">Remember me</label>
                                                                    </p>
                                                                </div>
                                                                <div className="text-right">
                                                                    <a href="#" className="color">Lost your password?</a>
                                                                </div>
                                                            </div>
                                                            <h2 className="title18 social-login-title">Or login with</h2>
                                                            <div className="social-login-block table text-center">
                                                                <div className="social-login-btn">
                                                                    <a href="#" className="login-fb-link">Facebook</a>
                                                                </div>
                                                                <div className="social-login-btn">
                                                                    <a href="#" className="login-goo-link">Google</a>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-6 col-ms-12">
                                                <div className="check-address">
                                                    <div className="form-my-account check-register text-center">
                                                        <h2 className="title24 title-form-account">Register</h2>
                                                        <p className="desc">Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
                                                        <Link to='/register' className="shop-button">Register</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
