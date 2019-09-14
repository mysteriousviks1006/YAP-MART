import React, { Component } from 'react'

export default class Service extends Component {
    render() {
        return (
            <div>
                    <div className="service-footer">
                        <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="item-service-footer">
                            <div className="service-icon">
                                <a href="#" className="wobble-horizontal"><img src="images/photos/piggy-bank.png" alt /></a>
                            </div>
                            <div className="service-info">
                                <h2 className="title14">Business Identity</h2>
                                <p>Get Verified, Build Trust</p>
                                <ul className="list-unstyled">
                                <li><a href="#">Display your verification status</a></li>
                                <li><a href="#">Faster responses from suppliers when verified</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="item-service-footer">
                            <div className="service-icon">
                                <a href="#" className="wobble-horizontal"><img src="images/photos/investment.png" alt /></a>
                            </div>
                            <div className="service-info">
                                <h2 className="title14">e - Credit Line</h2>
                                <p>Buy Now, Pay Later</p>
                                <ul className="list-unstyled">
                                <li><a href="#">Trusted local lenders</a></li>
                                <li><a href="#">Trade financing in minutes</a></li>
                                <li><a href="#">Competitive rates</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="item-service-footer">
                            <div className="service-icon">
                                <a href="#" className="wobble-horizontal"><img src="images/photos/telemarketer.png" alt /></a>
                            </div>
                            <div className="service-info">
                                <h2 className="title14">Inspection Service</h2>
                                <p>Have Your Order Inspected</p>
                                <ul className="list-unstyled">
                                <li><a href="#">Independent inspectors</a></li>
                                <li><a href="#">Proven cost efficiency</a></li>
                                <li><a href="#">Competitive rates</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
        )
    }
}