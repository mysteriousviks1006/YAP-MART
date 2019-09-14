import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (
            <div>
                        <div className="banner-slider banner-slider4 banner-direct-nav">
                                <div className="wrap-item" data-pagination="false" data-autoplay="true" data-navigation="true" data-itemscustom="[[0,1]]" data-transition="fade">
                                    <div className="item-banner4">
                                    <div className="banner-thumb">
                                        <a href="#"><img src="images/slider/slide1.jpg" alt /></a>
                                    </div>
                                    <div className="banner-info animated" data-animated="bounceInLeft">
                                        <h2>Model</h2>
                                        <h3>Dress Women’s</h3>
                                        <h3><strong>$498.00</strong></h3>
                                    </div>
                                    </div>
                                    <div className="item-banner4">
                                    <div className="banner-thumb">
                                        <a href="#"><img src="images/slider/slide2.jpg" alt /></a>
                                    </div>
                                    <div className="banner-info animated" data-animated="lightSpeedIn">
                                        <h2>cute sale</h2>
                                        <h3>100 new Item</h3>
                                        <h3><strong>upto 50% off</strong></h3>
                                    </div>
                                    </div>
                                    <div className="item-banner4">
                                    <div className="banner-thumb">
                                        <a href="#"><img src="images/slider/slide3.jpg" alt /></a>
                                    </div>
                                    <div className="banner-info animated" data-animated="zoomInLeft">
                                        <h2>sale</h2>
                                        <h3>collection</h3>
                                        <h3><strong>watches</strong></h3>
                                    </div>
                                    </div>
                                </div>
                                </div>
            </div>
        )
    }
}
