import React, { Component } from 'react'

export default class profile extends Component {
    render() {
        return (
            <div>
                <div id="content">
                    <div className="content-page woocommerce">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="title-shop-page">My Profile</h2>
                                    <div className="my-profile-box register-content-box">
                                        <div className="form-my-account">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <p>
                                                        <label htmlFor="firstname">First name <span className="required">*</span></label>
                                                        <input type="text" name="firstname" />
                                                    </p>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <p>
                                                        <label htmlFor="lastname">Last name <span className="required">*</span></label>
                                                        <input type="text" name="lastname" />
                                                    </p>
                                                </div>
                                            </div>
                                            <p>
                                                <label htmlFor="email">Email address <span className="required">*</span></label>
                                                <input type="text" name="email" />
                                            </p>
                                            <h3 className="title18 title-change-pasword">Password change</h3>
                                            <p>
                                                <label htmlFor="current-password">Current password (leave blank to leave unchanged)</label>
                                                <input type="text" name="current-password" />
                                            </p>
                                            <p>
                                                <label htmlFor="new-password">New password (leave blank to leave unchanged)</label>
                                                <input type="text" name="new-password" />
                                            </p>
                                            <p>
                                                <label htmlFor="confirm-password">Confirm new password</label>
                                                <input type="text" name="confirm-password" />
                                            </p>
                                            <p>
                                                <input type="submit" className="register-button save-change" name="register" defaultValue="Save Changes" />
                                            </p>
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
