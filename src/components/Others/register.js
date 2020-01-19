import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class register extends Component {
    render() {
        return (
            <div>
                <div id="content">
                    <div className="content-page woocommerce">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="title-shop-page">My Account</h2>
                                    <div className="col-md-6 col-sm-6 col-ms-12">
                                        <div className="row">
                                            <div className="register-content-box">
                                                <div className="check-billing">
                                                    <div className="form-my-account">
                                                        <form >
                                                            <h2 className="title24 title-form-account">REGISTER</h2>
                                                            <p>
                                                                <label htmlFor="username">Username <span className="required">*</span></label>
                                                                <input type="text" name="username" />
                                                            </p>
                                                            <p>
                                                                <label htmlFor="password">Email address <span className="required">*</span></label>
                                                                <input type="text" name="password" />
                                                            </p>
                                                            <p>
                                                                <label htmlFor="password">Password <span className="required">*</span></label>
                                                                <input type="text" name="password" />
                                                            </p>
                                                            <p>
                                                                <input type="submit" className="register-button" name="register" defaultValue="Register" />
                                                            </p>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-ms-12">
                                        <div className="check-address">
                                            <div className="form-my-account check-register text-center">
                                                <h2 className="title24 title-form-account">Login</h2>
                                                <p className="desc">Logging In to this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
                                                <Link to='/login' className="shop-button">Login</Link>
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

//className="block-register"
//
//