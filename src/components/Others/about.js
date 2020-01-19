import React, { Component } from 'react'

export default class about extends Component {
    render() {
        return (
            <div>
                <div id="content">
                    <div className="content-page">
                        <div className="container">
                            <div className="about-banner banner-image">
                                <a href="#"><img src="images/pages/about-banner.jpg" alt /></a>
                            </div>
                            <ul className="about-menu">
                                <li><a href="#">Introduction </a></li>
                                <li><a href="#">Protection</a></li>
                                <li><a href="#"> Customer Reviews</a></li>
                            </ul>
                            <div className="contact-info-page about-info-page">
                                <div className="list-contact-info">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-4 col-xs-12">
                                            <div className="item-contact-info">
                                                <a className="contact-icon icon-quality" href="#"><i className="fa fa-diamond" /></a>
                                                <h2><a href="#">100% Product quality protection</a></h2>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-12">
                                            <div className="item-contact-info">
                                                <a className="contact-icon icon-shipment" href="#"><i className="fa fa-clock-o" /></a>
                                                <h2><a href="#">100% On-time shipment protection</a></h2>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-12">
                                            <div className="item-contact-info last-item">
                                                <a className="contact-icon icon-payment" href="#"><i className="fa fa-usd" /></a>
                                                <h2><a href="#">100% Payment protection</a></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="desc">If the supplier fails to ship your products on time or the product quality does not meet the standards set in your contract, Aloshop will refund the covered amount of your payment.</p>
                            </div>
                            <div className="protect-video">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="about-full-protec">
                                            <h2 className="title-default">To get full protection</h2>
                                            <ul>
                                                <li><span className="about-num"><span>1</span></span> <p>CONFIRM your order online with a Trade Assurance supplier</p></li>
                                                <li><span className="about-num"><span>2</span></span> <p>PAY to the supplier’s CITIBANK account designated by Aloshop with credit card or bank transfer</p></li>
                                            </ul>
                                            <a href="#" className="new-user-guide">View New User Guide</a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="video-about">
                                            <a href="#"><img src="images/pages/about-video.jpg" alt /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="about-review">
                                <h2 className="title-default">Customer Reviews</h2>
                                <div className="list-about-review">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="item-about-review">
                                                <div className="about-review-thumb">
                                                    <a href="#"><img src="images/pages/cus1.jpg" alt /></a>
                                                </div>
                                                <div className="about-info">
                                                    <h3><a href="#">Stenve Johnson </a></h3>
                                                    <p>Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris consectetuer adipiscing</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="item-about-review">
                                                <div className="about-review-thumb">
                                                    <a href="#"><img src="images/pages/cus2.jpg" alt /></a>
                                                </div>
                                                <div className="about-info">
                                                    <h3><a href="#">Madison Knight</a></h3>
                                                    <p>Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris consectetuer adipiscing</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="item-about-review">
                                                <div className="about-review-thumb">
                                                    <a href="#"><img src="images/pages/cus3.jpg" alt /></a>
                                                </div>
                                                <div className="about-info">
                                                    <h3><a href="#">Charlie McGlynn</a></h3>
                                                    <p>Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris consectetuer adipiscing</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="item-about-review last-item">
                                                <div className="about-review-thumb">
                                                    <a href="#"><img src="images/pages/cus4.jpg" alt /></a>
                                                </div>
                                                <div className="about-info">
                                                    <h3><a href="#">Alina Rouch</a></h3>
                                                    <p>Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris consectetuer adipiscing</p>
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
