import React, { Component } from 'react'

export default class cart extends Component {
    render() {
        return (
            <div>
                <div id="content">
                    <div className="content-page woocommerce">
                        <div className="container">
                            <div className="cart-content-page">
                                <h2 className="title-shop-page">my cart</h2>
                                <form method="post">
                                    <div className="table-responsive">
                                        <table cellSpacing={0} className="shop_table cart table">
                                            <thead>
                                                <tr>
                                                    <th className="product-remove">&nbsp;</th>
                                                    <th className="product-thumbnail">&nbsp;</th>
                                                    <th className="product-name">Product</th>
                                                    <th className="product-price">Price</th>
                                                    <th className="product-quantity">Quantity</th>
                                                    <th className="product-subtotal">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="cart_item">
                                                    <td className="product-remove">
                                                        <a className="remove" href="#"><i className="fa fa-times" /></a>
                                                    </td>
                                                    <td className="product-thumbnail">
                                                        <a href="#"><img src="images/photos/fashion/7.jpg" alt /></a>
                                                    </td>
                                                    <td className="product-name">
                                                        <a href="#">Luphen Caunoiteng kug </a>
                                                    </td>
                                                    <td className="product-price">
                                                        <span className="amount">$68.00</span>
                                                    </td>
                                                    <td className="product-quantity">
                                                        <div className="detail-qty border radius">
                                                            <a href="#" className="qty-down"><i className="fa fa-caret-down" aria-hidden="true" /></a>
                                                            <span className="qty-val">6</span>
                                                            <a href="#" className="qty-up"><i className="fa fa-caret-up" aria-hidden="true" /></a>
                                                        </div>
                                                    </td>
                                                    <td className="product-subtotal">
                                                        <span className="amount">$68.00</span>
                                                    </td>
                                                </tr>
                                                <tr className="cart_item">
                                                    <td className="product-remove">
                                                        <a className="remove" href="#"><i className="fa fa-times" /></a>
                                                    </td>
                                                    <td className="product-thumbnail">
                                                        <a href="#"><img src="images/photos/fashion/8.jpg" alt /></a>
                                                    </td>
                                                    <td className="product-name">
                                                        <a href="#">Cooc Huyinh Phale </a>
                                                    </td>
                                                    <td className="product-price">
                                                        <span className="amount">$19.00</span>
                                                    </td>
                                                    <td className="product-quantity">
                                                        <div className="detail-qty border radius">
                                                            <a href="#" className="qty-down"><i className="fa fa-caret-down" aria-hidden="true" /></a>
                                                            <span className="qty-val">6</span>
                                                            <a href="#" className="qty-up"><i className="fa fa-caret-up" aria-hidden="true" /></a>
                                                        </div>
                                                    </td>
                                                    <td className="product-subtotal">
                                                        <span className="amount">$38.00</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="actions" colSpan={6}>
                                                        <div className="coupon">
                                                            <label htmlFor="coupon_code">Coupon:</label>
                                                            <input type="text" placeholder="Coupon code" defaultValue id="coupon_code" className="input-text" name="coupon_code" />
                                                            <input type="submit" defaultValue="Apply Coupon" name="apply_coupon" className="button" />
                                                        </div>
                                                        <input type="submit" defaultValue="Update Cart" name="update_cart" className="button" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                                <div className="cart-collaterals">
                                    <div className="cart_totals ">
                                        <h2>Cart Totals</h2>
                                        <div className="table-responsive">
                                            <table cellSpacing={0} className="table">
                                                <tbody>
                                                    <tr className="cart-subtotal">
                                                        <th>Subtotal</th>
                                                        <td><strong className="amount">$106.00</strong></td>
                                                    </tr>
                                                    <tr className="shipping">
                                                        <th>Shipping</th>
                                                        <td>
                                                            <ul id="shipping_method">
                                                                <li>
                                                                    <input type="radio" className="shipping_method" defaultChecked="checked" defaultValue="free_shipping" id="shipping_method_0_free_shipping" data-index={0} name="shipping_method[0]" />
                                                                    <label htmlFor="shipping_method_0_free_shipping">Free Shipping</label>
                                                                </li>
                                                                <li>
                                                                    <input type="radio" className="shipping_method" defaultValue="local_delivery" id="shipping_method_0_local_delivery" data-index={0} name="shipping_method[0]" />
                                                                    <label htmlFor="shipping_method_0_local_delivery">Local Delivery (Free)</label>
                                                                </li>
                                                                <li>
                                                                    <input type="radio" className="shipping_method" defaultValue="local_pickup" id="shipping_method_0_local_pickup" data-index={0} name="shipping_method[0]" />
                                                                    <label htmlFor="shipping_method_0_local_pickup">Local Pickup (Free)</label>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr className="order-total">
                                                        <th>Total</th>
                                                        <td><strong><span className="amount">$106.00</span></strong> </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="wc-proceed-to-checkout">
                                            <a className="checkout-button button alt wc-forward" href="checkout.html">Proceed to Checkout</a>
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
