import React, { Component } from 'react'

export default class ProductTab extends Component {
    render() {
        return (
            <div>
                 <div className="product-tab-ajax">
                        <div className="tab-pro-ajax-header">
                            <h2>BEST SELLERS</h2>
                            <ul>
                            <li className="active"><a href="#tab1" data-toggle="tab">Fashion</a></li>
                            <li><a href="#tab2" data-toggle="tab">Electronics</a></li>
                            <li><a href="#tab3" data-toggle="tab">Homeware</a></li>
                            <li><a href="#tab4" data-toggle="tab">Sport</a></li>
                            </ul>
                        </div>
                        <div className="tab-content">
                            <div id="tab1" className="tab-pane active">
                            <div className="clearfix">
                                <div className="item-product-ajax item-product">
                                <div className="product-thumb">
                                    <a href="detail.html" className="product-thumb-link">
                                    <img src="images/photos/fashion/1.jpg" alt />
                                    </a>
                                    <a href="quick-view.html" className="quickview-link plus fancybox.iframe">quick view</a>
                                    <div className="product-extra-link">
                                    <a href="#" className="addcart-link"><i className="fa fa-shopping-basket" aria-hidden="true" /></a>
                                    <a href="#" className="wishlist-link"><i className="fa fa-heart" aria-hidden="true" /></a>
                                    <a href="#" className="compare-link"><i className="fa fa-refresh" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                    <div className="product-price">
                                    <del><span>$400.00</span></del>
                                    <ins><span>$360.00</span></ins>
                                    </div>
                                </div>
                                </div>
                                <div className="item-product-ajax item-product">
                                <div className="product-thumb">
                                    <a href="detail.html" className="product-thumb-link">
                                    <img src="images/photos/fashion/2.jpg" alt />
                                    </a>
                                    <a href="quick-view.html" className="quickview-link plus fancybox.iframe">quick view</a>
                                    <div className="product-extra-link">
                                    <a href="#" className="addcart-link"><i className="fa fa-shopping-basket" aria-hidden="true" /></a>
                                    <a href="#" className="wishlist-link"><i className="fa fa-heart" aria-hidden="true" /></a>
                                    <a href="#" className="compare-link"><i className="fa fa-refresh" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                    <div className="product-price">
                                    <del><span>$400.00</span></del>
                                    <ins><span>$360.00</span></ins>
                                    </div>
                                </div>
                                </div>
                                <div className="item-product-ajax item-product">
                                <div className="product-thumb">
                                    <a href="detail.html" className="product-thumb-link">
                                    <img src="images/photos/fashion/10.jpg" alt />
                                    </a>
                                    <a href="quick-view.html" className="quickview-link plus fancybox.iframe">quick view</a>
                                    <div className="product-extra-link">
                                    <a href="#" className="addcart-link"><i className="fa fa-shopping-basket" aria-hidden="true" /></a>
                                    <a href="#" className="wishlist-link"><i className="fa fa-heart" aria-hidden="true" /></a>
                                    <a href="#" className="compare-link"><i className="fa fa-refresh" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                    <div className="product-price">
                                    <del><span>$400.00</span></del>
                                    <ins><span>$360.00</span></ins>
                                    </div>
                                </div>
                                </div>
                                <div className="item-product-ajax item-product">
                                <div className="product-thumb">
                                    <a href="detail.html" className="product-thumb-link">
                                    <img src="images/photos/fashion/3.jpg" alt />
                                    </a>
                                    <a href="quick-view.html" className="quickview-link plus fancybox.iframe">quick view</a>
                                    <div className="product-extra-link">
                                    <a href="#" className="addcart-link"><i className="fa fa-shopping-basket" aria-hidden="true" /></a>
                                    <a href="#" className="wishlist-link"><i className="fa fa-heart" aria-hidden="true" /></a>
                                    <a href="#" className="compare-link"><i className="fa fa-refresh" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                    <div className="product-price">
                                    <del><span>$400.00</span></del>
                                    <ins><span>$360.00</span></ins>
                                    </div>
                                </div>
                                </div>
                                <div className="item-product-ajax item-product">
                                <div className="product-thumb">
                                    <a href="detail.html" className="product-thumb-link">
                                    <img src="images/photos/fashion/4.jpg" alt />
                                    </a>
                                    <a href="quick-view.html" className="quickview-link plus fancybox.iframe">quick view</a>
                                    <div className="product-extra-link">
                                    <a href="#" className="addcart-link"><i className="fa fa-shopping-basket" aria-hidden="true" /></a>
                                    <a href="#" className="wishlist-link"><i className="fa fa-heart" aria-hidden="true" /></a>
                                    <a href="#" className="compare-link"><i className="fa fa-refresh" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                    <div className="product-price">
                                    <del><span>$400.00</span></del>
                                    <ins><span>$360.00</span></ins>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="btn-loadmore"><a href="#"><i className="fa fa-spinner fa-spin" aria-hidden="true" /></a></div>
                            </div>
                            {/* End Tab */}
                            <div id="tab2" className="tab-pane">
                            <div className="clearfix">
                                <div className="item-product-ajax item-product">
                                <div className="product-thumb">
                                    <a href="detail.html" className="product-thumb-link">
                                    <img src="images/photos/electronics/1.jpg" alt />
                                    </a>
                                    <a href="quick-view.html" className="quickview-link plus fancybox.iframe">quick view</a>
                                    <div className="product-extra-link">
                                    <a href="#" className="addcart-link"><i className="fa fa-shopping-basket" aria-hidden="true" /></a>
                                    <a href="#" className="wishlist-link"><i className="fa fa-heart" aria-hidden="true" /></a>
                                    <a href="#" className="compare-link"><i className="fa fa-refresh" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                    <div className="product-price">
                                    <del><span>$400.00</span></del>
                                    <ins><span>$360.00</span></ins>
                                    </div>
                                </div>
                                </div>
                                <div className="item-product-ajax item-product">
                                <div className="product-thumb">
                                    <a href="detail.html" className="product-thumb-link">
                                    <img src="images/photos/electronics/2.jpg" alt />
                                    </a>
                                    <a href="quick-view.html" className="quickview-link plus fancybox.iframe">quick view</a>
                                    <div className="product-extra-link">
                                    <a href="#" className="addcart-link"><i className="fa fa-shopping-basket" aria-hidden="true" /></a>
                                    <a href="#" className="wishlist-link"><i className="fa fa-heart" aria-hidden="true" /></a>
                                    <a href="#" className="compare-link"><i className="fa fa-refresh" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                    <div className="product-price">
                                    <del><span>$400.00</span></del>
                                    <ins><span>$360.00</span></ins>
                                    </div>
                                </div>
                                </div>
                                <div className="item-product-ajax item-product">
                                <div className="product-thumb">
                                    <a href="detail.html" className="product-thumb-link">
                                    <img src="images/photos/electronics/10.jpg" alt />
                                    </a>
                                    <a href="quick-view.html" className="quickview-link plus fancybox.iframe">quick view</a>
                                    <div className="product-extra-link">
                                    <a href="#" className="addcart-link"><i className="fa fa-shopping-basket" aria-hidden="true" /></a>
                                    <a href="#" className="wishlist-link"><i className="fa fa-heart" aria-hidden="true" /></a>
                                    <a href="#" className="compare-link"><i className="fa fa-refresh" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                    <div className="product-price">
                                    <del><span>$400.00</span></del>
                                    <ins><span>$360.00</span></ins>
                                    </div>
                                </div>
                                </div>
                                <div className="item-product-ajax item-product">
                                <div className="product-thumb">
                                    <a href="detail.html" className="product-thumb-link">
                                    <img src="images/photos/electronics/3.jpg" alt />
                                    </a>
                                    <a href="quick-view.html" className="quickview-link plus fancybox.iframe">quick view</a>
                                    <div className="product-extra-link">
                                    <a href="#" className="addcart-link"><i className="fa fa-shopping-basket" aria-hidden="true" /></a>
                                    <a href="#" className="wishlist-link"><i className="fa fa-heart" aria-hidden="true" /></a>
                                    <a href="#" className="compare-link"><i className="fa fa-refresh" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                    <div className="product-price">
                                    <del><span>$400.00</span></del>
                                    <ins><span>$360.00</span></ins>
                                    </div>
                                </div>
                                </div>
                                <div className="item-product-ajax item-product">
                                <div className="product-thumb">
                                    <a href="detail.html" className="product-thumb-link">
                                    <img src="images/photos/electronics/4.jpg" alt />
                                    </a>
                                    <a href="quick-view.html" className="quickview-link plus fancybox.iframe">quick view</a>
                                    <div className="product-extra-link">
                                    <a href="#" className="addcart-link"><i className="fa fa-shopping-basket" aria-hidden="true" /></a>
                                    <a href="#" className="wishlist-link"><i className="fa fa-heart" aria-hidden="true" /></a>
                                    <a href="#" className="compare-link"><i className="fa fa-refresh" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                    <div className="product-price">
                                    <del><span>$400.00</span></del>
                                    <ins><span>$360.00</span></ins>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="btn-loadmore"><a href="#"><i className="fa fa-spinner fa-spin" aria-hidden="true" /></a></div>
                            </div>
                            {/* End Tab */}
                            <div id="tab3" className="tab-pane">
                            <div className="clearfix">
                                <div className="item-product-ajax item-product">
                                <div className="product-thumb">
                                    <a href="detail.html" className="product-thumb-link">
                                    <img src="images/photos/homeware/1.jpg" alt />
                                    </a>
                                    <a href="quick-view.html" className="quickview-link plus fancybox.iframe">quick view</a>
                                    <div className="product-extra-link">
                                    <a href="#" className="addcart-link"><i className="fa fa-shopping-basket" aria-hidden="true" /></a>
                                    <a href="#" className="wishlist-link"><i className="fa fa-heart" aria-hidden="true" /></a>
                                    <a href="#" className="compare-link"><i className="fa fa-refresh" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                    <div className="product-price">
                                    <del><span>$400.00</span></del>
                                    <ins><span>$360.00</span></ins>
                                    </div>
                                </div>
                                </div>
                                <div className="item-product-ajax item-product">
                                <div className="product-thumb">
                                    <a href="detail.html" className="product-thumb-link">
                                    <img src="images/photos/homeware/2.jpg" alt />
                                    </a>
                                    <a href="quick-view.html" className="quickview-link plus fancybox.iframe">quick view</a>
                                    <div className="product-extra-link">
                                    <a href="#" className="addcart-link"><i className="fa fa-shopping-basket" aria-hidden="true" /></a>
                                    <a href="#" className="wishlist-link"><i className="fa fa-heart" aria-hidden="true" /></a>
                                    <a href="#" className="compare-link"><i className="fa fa-refresh" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                    <div className="product-price">
                                    <del><span>$400.00</span></del>
                                    <ins><span>$360.00</span></ins>
                                    </div>
                                </div>
                                </div>
                                <div className="item-product-ajax item-product">
                                <div className="product-thumb">
                                    <a href="detail.html" className="product-thumb-link">
                                    <img src="images/photos/homeware/10.jpg" alt />
                                    </a>
                                    <a href="quick-view.html" className="quickview-link plus fancybox.iframe">quick view</a>
                                    <div className="product-extra-link">
                                    <a href="#" className="addcart-link"><i className="fa fa-shopping-basket" aria-hidden="true" /></a>
                                    <a href="#" className="wishlist-link"><i className="fa fa-heart" aria-hidden="true" /></a>
                                    <a href="#" className="compare-link"><i className="fa fa-refresh" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                    <div className="product-price">
                                    <del><span>$400.00</span></del>
                                    <ins><span>$360.00</span></ins>
                                    </div>
                                </div>
                                </div>
                                <div className="item-product-ajax item-product">
                                <div className="product-thumb">
                                    <a href="detail.html" className="product-thumb-link">
                                    <img src="images/photos/homeware/3.jpg" alt />
                                    </a>
                                    <a href="quick-view.html" className="quickview-link plus fancybox.iframe">quick view</a>
                                    <div className="product-extra-link">
                                    <a href="#" className="addcart-link"><i className="fa fa-shopping-basket" aria-hidden="true" /></a>
                                    <a href="#" className="wishlist-link"><i className="fa fa-heart" aria-hidden="true" /></a>
                                    <a href="#" className="compare-link"><i className="fa fa-refresh" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                    <div className="product-price">
                                    <del><span>$400.00</span></del>
                                    <ins><span>$360.00</span></ins>
                                    </div>
                                </div>
                                </div>
                                <div className="item-product-ajax item-product">
                                <div className="product-thumb">
                                    <a href="detail.html" className="product-thumb-link">
                                    <img src="images/photos/homeware/4.jpg" alt />
                                    </a>
                                    <a href="quick-view.html" className="quickview-link plus fancybox.iframe">quick view</a>
                                    <div className="product-extra-link">
                                    <a href="#" className="addcart-link"><i className="fa fa-shopping-basket" aria-hidden="true" /></a>
                                    <a href="#" className="wishlist-link"><i className="fa fa-heart" aria-hidden="true" /></a>
                                    <a href="#" className="compare-link"><i className="fa fa-refresh" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                    <div className="product-price">
                                    <del><span>$400.00</span></del>
                                    <ins><span>$360.00</span></ins>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="btn-loadmore"><a href="#"><i className="fa fa-spinner fa-spin" aria-hidden="true" /></a></div>
                            </div>
                            {/* End Tab */}
                            <div id="tab4" className="tab-pane">
                            <div className="clearfix">
                                <div className="item-product-ajax item-product">
                                <div className="product-thumb">
                                    <a href="detail.html" className="product-thumb-link">
                                    <img src="images/photos/sport/1.jpg" alt />
                                    </a>
                                    <a href="quick-view.html" className="quickview-link plus fancybox.iframe">quick view</a>
                                    <div className="product-extra-link">
                                    <a href="#" className="addcart-link"><i className="fa fa-shopping-basket" aria-hidden="true" /></a>
                                    <a href="#" className="wishlist-link"><i className="fa fa-heart" aria-hidden="true" /></a>
                                    <a href="#" className="compare-link"><i className="fa fa-refresh" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                    <div className="product-price">
                                    <del><span>$400.00</span></del>
                                    <ins><span>$360.00</span></ins>
                                    </div>
                                </div>
                                </div>
                                <div className="item-product-ajax item-product">
                                <div className="product-thumb">
                                    <a href="detail.html" className="product-thumb-link">
                                    <img src="images/photos/sport/2.jpg" alt />
                                    </a>
                                    <a href="quick-view.html" className="quickview-link plus fancybox.iframe">quick view</a>
                                    <div className="product-extra-link">
                                    <a href="#" className="addcart-link"><i className="fa fa-shopping-basket" aria-hidden="true" /></a>
                                    <a href="#" className="wishlist-link"><i className="fa fa-heart" aria-hidden="true" /></a>
                                    <a href="#" className="compare-link"><i className="fa fa-refresh" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                    <div className="product-price">
                                    <del><span>$400.00</span></del>
                                    <ins><span>$360.00</span></ins>
                                    </div>
                                </div>
                                </div>
                                <div className="item-product-ajax item-product">
                                <div className="product-thumb">
                                    <a href="detail.html" className="product-thumb-link">
                                    <img src="images/photos/sport/10.jpg" alt />
                                    </a>
                                    <a href="quick-view.html" className="quickview-link plus fancybox.iframe">quick view</a>
                                    <div className="product-extra-link">
                                    <a href="#" className="addcart-link"><i className="fa fa-shopping-basket" aria-hidden="true" /></a>
                                    <a href="#" className="wishlist-link"><i className="fa fa-heart" aria-hidden="true" /></a>
                                    <a href="#" className="compare-link"><i className="fa fa-refresh" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                    <div className="product-price">
                                    <del><span>$400.00</span></del>
                                    <ins><span>$360.00</span></ins>
                                    </div>
                                </div>
                                </div>
                                <div className="item-product-ajax item-product">
                                <div className="product-thumb">
                                    <a href="detail.html" className="product-thumb-link">
                                    <img src="images/photos/sport/3.jpg" alt />
                                    </a>
                                    <a href="quick-view.html" className="quickview-link plus fancybox.iframe">quick view</a>
                                    <div className="product-extra-link">
                                    <a href="#" className="addcart-link"><i className="fa fa-shopping-basket" aria-hidden="true" /></a>
                                    <a href="#" className="wishlist-link"><i className="fa fa-heart" aria-hidden="true" /></a>
                                    <a href="#" className="compare-link"><i className="fa fa-refresh" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                    <div className="product-price">
                                    <del><span>$400.00</span></del>
                                    <ins><span>$360.00</span></ins>
                                    </div>
                                </div>
                                </div>
                                <div className="item-product-ajax item-product">
                                <div className="product-thumb">
                                    <a href="detail.html" className="product-thumb-link">
                                    <img src="images/photos/sport/4.jpg" alt />
                                    </a>
                                    <a href="quick-view.html" className="quickview-link plus fancybox.iframe">quick view</a>
                                    <div className="product-extra-link">
                                    <a href="#" className="addcart-link"><i className="fa fa-shopping-basket" aria-hidden="true" /></a>
                                    <a href="#" className="wishlist-link"><i className="fa fa-heart" aria-hidden="true" /></a>
                                    <a href="#" className="compare-link"><i className="fa fa-refresh" aria-hidden="true" /></a>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                    <div className="product-price">
                                    <del><span>$400.00</span></del>
                                    <ins><span>$360.00</span></ins>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="btn-loadmore"><a href="#"><i className="fa fa-spinner fa-spin" aria-hidden="true" /></a></div>
                            </div>
                            {/* End Tab */}
                        </div>
                        </div>
            </div>
        )
    }
}
