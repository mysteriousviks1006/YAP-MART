import React, { Component } from 'react'

export default class checkout extends Component {
    render() {
        return (
            <div>
                <div id="content">
                    <div className="content-page woocommerce">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h2 className="title-shop-page">checkout</h2>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-ms-12">
                                            <div className="check-billing">
                                                <form className="form-my-account">
                                                    <h2 className="title18">Billing Details</h2>
                                                    <p className="clearfix box-col2">
                                                        <input type="text" defaultValue="First Name *" onblur="if (this.value=='') this.value = this.defaultValue" onfocus="if (this.value==this.defaultValue) this.value = ''" />
                                                        <input type="text" defaultValue="last name *" onblur="if (this.value=='') this.value = this.defaultValue" onfocus="if (this.value==this.defaultValue) this.value = ''" />
                                                    </p>
                                                    <p><input type="text" defaultValue="Company Name" onblur="if (this.value=='') this.value = this.defaultValue" onfocus="if (this.value==this.defaultValue) this.value = ''" /></p>
                                                    <p className="clearfix box-col2">
                                                        <input type="text" defaultValue="Email *" onblur="if (this.value=='') this.value = this.defaultValue" onfocus="if (this.value==this.defaultValue) this.value = ''" />
                                                        <input type="text" defaultValue="phone *" onblur="if (this.value=='') this.value = this.defaultValue" onfocus="if (this.value==this.defaultValue) this.value = ''" />
                                                    </p>
                                                    <p>
                                                        <select name="country" id="country">
                                                            <option value>Country*</option>
                                                            <option value>United State</option>
                                                            <option value>England</option>
                                                            <option value>Germany</option>
                                                            <option value>France</option>
                                                        </select>
                                                    </p>
                                                    <p><input type="text" defaultValue="Address *" onblur="if (this.value=='') this.value = this.defaultValue" onfocus="if (this.value==this.defaultValue) this.value = ''" /></p>
                                                    <p className="clearfix box-col2">
                                                        <input type="text" defaultValue="Postcode / Zip" onblur="if (this.value=='') this.value = this.defaultValue" onfocus="if (this.value==this.defaultValue) this.value = ''" />
                                                        <input type="text" defaultValue="Town / City *" onblur="if (this.value=='') this.value = this.defaultValue" onfocus="if (this.value==this.defaultValue) this.value = ''" />
                                                    </p>
                                                    <p>
                                                        <input type="checkbox" id="remember" /> <label htmlFor="remember">Create an account?</label>
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-ms-12">
                                            <div className="check-address">
                                                <form className="form-my-account">
                                                    <p className="ship-address">
                                                        <input type="checkbox" id="address" /> <label htmlFor="address">Ship to a different address?</label>
                                                    </p>
                                                    <p>
                                                        <textarea cols={30} rows={10} onblur="if (this.value=='') this.value = this.defaultValue" onfocus="if (this.value==this.defaultValue) this.value = ''" defaultValue={"Order Notes"} />
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="order_review_heading">Your order</h3>
                                    <div className="woocommerce-checkout-review-order" id="order_review">
                                        <div className="table-responsive">
                                            <table className="shop_table woocommerce-checkout-review-order-table">
                                                <thead>
                                                    <tr>
                                                        <th className="product-name">Product</th>
                                                        <th className="product-total">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="cart_item">
                                                        <td className="product-name">
                                                            Luphen Caunoiteng kug&nbsp; <span className="product-quantity">× 1</span>
                                                        </td>
                                                        <td className="product-total">
                                                            <span className="amount">$68.00</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="cart_item">
                                                        <td className="product-name">
                                                            Cooc Huyinh Phale&nbsp;	<span className="product-quantity">× 2</span>
                                                        </td>
                                                        <td className="product-total">
                                                            <span className="amount">$38.00</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr className="cart-subtotal">
                                                        <th>Subtotal</th>
                                                        <td><strong className="amount">$106.00</strong></td>
                                                    </tr>
                                                    <tr className="shipping">
                                                        <th>Shipping</th>
                                                        <td>
                                                            <ul id="shipping_method" className="list-none">
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
                                                </tfoot>
                                            </table>
                                        </div>
                                        <div className="woocommerce-checkout-payment" id="payment">
                                            <ul className="payment_methods methods list-none">
                                                <li className="payment_method_bacs">
                                                    <input type="radio" data-order_button_text defaultValue="bacs" name="payment_method" className="input-radio" id="payment_method_bacs" defaultChecked="checked" />
                                                    <label htmlFor="payment_method_bacs">Direct Bank Transfer 	</label>
                                                    <div style={{}} className="payment_box payment_method_bacs">
                                                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                                    </div>
                                                </li>
                                                <li className="payment_method_cheque">
                                                    <input type="radio" data-order_button_text defaultValue="cheque" name="payment_method" className="input-radio" id="payment_method_cheque" />
                                                    <label htmlFor="payment_method_cheque">Cheque Payment 	</label>
                                                    <div style={{ display: 'none' }} className="payment_box payment_method_cheque">
                                                        <p>Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                    </div>
                                                </li>
                                                <li className="payment_method_cod">
                                                    <input type="radio" data-order_button_text defaultValue="cod" name="payment_method" className="input-radio" id="payment_method_cod" />
                                                    <label htmlFor="payment_method_cod">Cash on Delivery 	</label>
                                                    <div style={{ display: 'none' }} className="payment_box payment_method_cod">
                                                        <p>Pay with cash upon delivery.</p>
                                                    </div>
                                                </li>
                                                <li className="payment_method_paypal">
                                                    <input type="radio" data-order_button_text="Proceed to PayPal" defaultValue="paypal" name="payment_method" className="input-radio" id="payment_method_paypal" />
                                                    <label htmlFor="payment_method_paypal">
                                                        PayPal <img alt="PayPal Acceptance Mark" src="images/shop/payment.png" /><a title="What is PayPal?" onclick="javascript:window.open('https://www.paypal.com/gb/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;" className="about_paypal" href="https://www.paypal.com/gb/webapps/mpp/paypal-popup">What is PayPal?</a>
                                                    </label>
                                                    <div style={{ display: 'none' }} className="payment_box payment_method_paypal">
                                                        <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="form-row place-order">
                                                <input type="submit" data-value="Place order" defaultValue="Place order" id="place_order" name="woocommerce_checkout_place_order" className="button alt" />
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
