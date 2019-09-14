import React, { Component } from 'react'

export default class MainDetail extends Component {
    render() {
        return (
            <div>
                <div id="content">
                    <div className="content-page">
                        <div className="container">
                        <div className="bread-crumb radius">
                            <a href="#">Home</a> <span>Fashion</span>
                        </div>
                        {/* End Bread Crumb */}
                        <div className="row">
                            <div className="col-md-9 col-sm-8 col-col-xs-12">
                            <div className="product-detail accordion-detail border radius">
                                <div className="row">
                                <div className="col-md-5 col-sm-12 col-xs-12">
                                    <div className="detail-gallery">
                                    <div className="mid">
                                        <img src="images/photos/homeware/8.jpg" alt />
                                    </div>
                                    </div>
                                    {/* End Gallery */}
                                    <div className="detail-social">
                                    <ul className="list-social-detail list-inline-block">
                                        <li><a href="#" className="soci-fa soc-tumblr"><i className="fa fa-tumblr" aria-hidden="true" /></a></li>
                                        <li><a href="#" className="soci-fa soc-facebook"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                        <li><a href="#" className="soci-fa soc-twitter"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                        <li><a href="#" className="soci-fa soc-print"><i className="fa fa-print" aria-hidden="true" /></a></li>
                                        <li>
                                        <div className="more-social">
                                            <a className="soci-fa add-link soc-add" href="#"><i aria-hidden="true" className="fa fa-plus" /><span>7</span></a>
                                            <ul className="list-social-share list-none">
                                            <li><a href="#"><i className="fa fa-youtube" aria-hidden="true" /><span>Youtute</span></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin" /><span>linkedin</span></a></li>
                                            <li><a href="#"><i className="fa fa-pinterest" /><span>pinterest</span></a></li>
                                            <li><a href="#"><i className="fa fa-google" /><span>google</span></a></li>
                                            <li><a href="#"><i className="fa fa-instagram" /><span>instagram</span></a></li>
                                            <li><a href="#"><i className="fa fa-flickr" /><span>flickr</span></a></li>
                                            <li><a href="#"><i className="fa fa-reddit" /><span>reddit</span></a></li>
                                            </ul>
                                        </div>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="col-md-7 col-sm-12 col-xs-12">
                                    <div className="detail-info">
                                    <h2 className="title-detail">New Favorite</h2>
                                    <div className="product-rate">
                                        <div className="product-rating" style={{width: '90%'}} />
                                    </div>
                                    <p className="desc">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla paria tur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div className="product-price">
                                        <ins><span>$360.00</span></ins>
                                    </div>
                                    <div className="available">
                                        <strong>Availability: </strong>
                                        <span className="in-stock">In Stock</span>
                                    </div>
                                    <a className="mail-to-friend" href="#">Email to a Friend</a>
                                    <div className="attr-detail attr-color">
                                        <div className="attr-title">
                                        <strong><sup>*</sup>color:</strong><span className="current-color">White</span>
                                        </div>
                                        <ul className="list-filter color-filter">
                                        <li><a href="#" data-color="Red"><span style={{background: '#ff596d'}} /></a></li>
                                        <li><a href="#" data-color="Yellow"><span style={{background: '#ffdb33'}} /></a></li>
                                        <li className="active"><a href="#" data-color="White"><span style={{background: '#ffffff'}} /></a></li>
                                        <li><a href="#" data-color="Orange"><span style={{background: '#ffbb51'}} /></a></li>
                                        <li><a href="#" data-color="Cyan"><span style={{background: '#80e6ff'}} /></a></li>
                                        <li><a href="#" data-color="Green"><span style={{background: '#38cf46'}} /></a></li>
                                        <li><a href="#" data-color="Purple"><span style={{background: '#ff8ff8'}} /></a></li>
                                        </ul>
                                    </div>	
                                    <div className="attr-detail attr-size">
                                        <div className="attr-title">
                                        <strong><sup>*</sup>Size:</strong><span className="current-size">M</span>
                                        </div>
                                        <ul className="list-filter size-filter">
                                        <li><a href="#">s</a></li>
                                        <li className="active"><a href="#">m</a></li>
                                        <li><a href="#">l</a></li>
                                        <li><a href="#">xl</a></li>
                                        <li><a href="#">2xl</a></li>
                                        </ul>
                                    </div>	
                                    <div className="detail-extralink">
                                        <div className="detail-qty border radius">
                                        <a href="#" className="qty-down"><i className="fa fa-caret-down" aria-hidden="true" /></a>
                                        <span className="qty-val">1</span>
                                        <a href="#" className="qty-up"><i className="fa fa-caret-up" aria-hidden="true" /></a>
                                        </div>
                                        <div className="product-extra-link2">
                                        <a className="addcart-link" href="#">Add to Cart</a>
                                        <a className="wishlist-link" href="#"><i aria-hidden="true" className="fa fa-heart" /></a>
                                        <a className="compare-link" href="#"><i aria-hidden="true" className="fa fa-refresh" /></a>
                                        </div>
                                    </div>
                                    </div>
                                    {/* Detail Info */}
                                </div>
                                </div>
                                <div className="tab-detal toggle-tab">
                                <div className="item-toggle-tab active">
                                    <h2 className="toggle-tab-title title14 radius border">Description</h2>
                                    <div className="toggle-tab-content">
                                    <div className="content-detail-tab">
                                        <div className="detail-tab-thumb">
                                        <img src="images/shop/tab-img.png" alt />
                                        </div>
                                        <div className="detail-tab-info">
                                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit a tion ulla mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident est laborum.</p>
                                        <ul>
                                            <li>Any Product types that You want - Simple, Configurable, Bundled and Grouped Products</li>
                                            <li>Downloadable/Digital Products, Virtual Products</li>
                                            <li>Inventory Management with Backordered items</li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="item-toggle-tab">
                                    <h2 className="toggle-tab-title title14 radius border">Tags</h2>
                                    <div className="toggle-tab-content">
                                    <div className="content-detail-tab">
                                        <div className="detail-tab-thumb">
                                        <img src="images/shop/tab-img.png" alt />
                                        </div>
                                        <div className="detail-tab-info">
                                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit a tion ulla mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident est laborum.</p>
                                        <ul>
                                            <li>Any Product types that You want - Simple, Configurable, Bundled and Grouped Products</li>
                                            <li>Downloadable/Digital Products, Virtual Products</li>
                                            <li>Inventory Management with Backordered items</li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="item-toggle-tab">
                                    <h2 className="toggle-tab-title title14 radius border">Reviews</h2>
                                    <div className="toggle-tab-content">
                                    <div className="content-detail-tab">
                                        <div className="detail-tab-thumb">
                                        <img src="images/shop/tab-img.png" alt />
                                        </div>
                                        <div className="detail-tab-info">
                                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit a tion ulla mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident est laborum.</p>
                                        <ul>
                                            <li>Any Product types that You want - Simple, Configurable, Bundled and Grouped Products</li>
                                            <li>Downloadable/Digital Products, Virtual Products</li>
                                            <li>Inventory Management with Backordered items</li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="item-toggle-tab">
                                    <h2 className="toggle-tab-title title14 radius border">Sizing Guide</h2>
                                    <div className="toggle-tab-content">
                                    <div className="content-detail-tab">
                                        <div className="detail-tab-thumb">
                                        <img src="images/shop/tab-img.png" alt />
                                        </div>
                                        <div className="detail-tab-info">
                                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit a tion ulla mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident est laborum.</p>
                                        <ul>
                                            <li>Any Product types that You want - Simple, Configurable, Bundled and Grouped Products</li>
                                            <li>Downloadable/Digital Products, Virtual Products</li>
                                            <li>Inventory Management with Backordered items</li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="item-toggle-tab">
                                    <h2 className="toggle-tab-title title14 radius border">Custom Tab</h2>
                                    <div className="toggle-tab-content">
                                    <div className="content-detail-tab">
                                        <div className="detail-tab-thumb">
                                        <img src="images/shop/tab-img.png" alt />
                                        </div>
                                        <div className="detail-tab-info">
                                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercit a tion ulla mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen derit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident est laborum.</p>
                                        <ul>
                                            <li>Any Product types that You want - Simple, Configurable, Bundled and Grouped Products</li>
                                            <li>Downloadable/Digital Products, Virtual Products</li>
                                            <li>Inventory Management with Backordered items</li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* End Main Detail */}
                            </div>
                            <div className="col-md-3 col-sm-4 col-col-xs-12">
                            <div className="sidebar sidebar-right">
                                <div className="list-detail-adv">
                                <div className="detail-adv">
                                    <a href="#"><img className="radius wobble-horizontal" alt src="images/shop/pro-adv1.jpg" /></a>
                                </div>
                                <div className="detail-adv">
                                    <a href="#"><img className="radius wobble-horizontal" alt src="images/shop/pro-adv2.jpg" /></a>
                                </div>
                                <div className="detail-adv">
                                    <a href="#"><img className="radius wobble-horizontal" alt src="images/shop/pro-adv3.jpg" /></a>
                                </div>
                                </div>
                                <div className="widget widget-seller">
                                <h2 className="widget-title title14">best sellers</h2>
                                <div className="widget-content">
                                    <div className="wrap-item" data-pagination="false" data-navigation="true" data-itemscustom="[[0,1]]">
                                    <div className="list-pro-seller">
                                        <div className="item-pro-seller">
                                        <div className="product-thumb">
                                            <a href="#" className="product-thumb-link"><img src="images/photos/homeware/8.jpg" alt /></a>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                            <div className="product-price">
                                            <ins><span>$360.00</span></ins>
                                            <del><span>$400.00</span></del>
                                            </div>
                                            <div className="product-rate">
                                            <div style={{width: '90%'}} className="product-rating" />
                                            </div>
                                        </div>
                                        </div>	
                                        <div className="item-pro-seller">
                                        <div className="product-thumb">
                                            <a href="#" className="product-thumb-link"><img src="images/photos/homeware/2.jpg" alt /></a>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                            <div className="product-price">
                                            <ins><span>$360.00</span></ins>
                                            <del><span>$400.00</span></del>
                                            </div>
                                            <div className="product-rate">
                                            <div style={{width: '90%'}} className="product-rating" />
                                            </div>
                                        </div>
                                        </div>	
                                        <div className="item-pro-seller">
                                        <div className="product-thumb">
                                            <a href="#" className="product-thumb-link"><img src="images/photos/homeware/9.jpg" alt /></a>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                            <div className="product-price">
                                            <ins><span>$360.00</span></ins>
                                            <del><span>$400.00</span></del>
                                            </div>
                                            <div className="product-rate">
                                            <div style={{width: '90%'}} className="product-rating" />
                                            </div>
                                        </div>
                                        </div>		
                                    </div>	
                                    <div className="list-pro-seller">
                                        <div className="item-pro-seller">
                                        <div className="product-thumb">
                                            <a href="#" className="product-thumb-link"><img src="images/photos/homeware/3.jpg" alt /></a>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                            <div className="product-price">
                                            <ins><span>$360.00</span></ins>
                                            <del><span>$400.00</span></del>
                                            </div>
                                            <div className="product-rate">
                                            <div style={{width: '90%'}} className="product-rating" />
                                            </div>
                                        </div>
                                        </div>	
                                        <div className="item-pro-seller">
                                        <div className="product-thumb">
                                            <a href="#" className="product-thumb-link"><img src="images/photos/homeware/4.jpg" alt /></a>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                            <div className="product-price">
                                            <ins><span>$360.00</span></ins>
                                            <del><span>$400.00</span></del>
                                            </div>
                                            <div className="product-rate">
                                            <div style={{width: '90%'}} className="product-rating" />
                                            </div>
                                        </div>
                                        </div>	
                                        <div className="item-pro-seller">
                                        <div className="product-thumb">
                                            <a href="#" className="product-thumb-link"><img src="images/photos/homeware/10.jpg" alt /></a>
                                        </div>
                                        <div className="product-info">
                                            <h3 className="product-title"><a href="detail.html">new favorite</a></h3>
                                            <div className="product-price">
                                            <ins><span>$360.00</span></ins>
                                            <del><span>$400.00</span></del>
                                            </div>
                                            <div className="product-rate">
                                            <div style={{width: '90%'}} className="product-rating" />
                                            </div>
                                        </div>
                                        </div>		
                                    </div>									
                                    </div>
                                </div>
                                </div>
                                {/* End widget */}
                            </div>
                            </div>
                        </div>
                        </div>	
                    </div>
                    </div>
                    {/* End Content */}

            </div>
        )
    }
}
