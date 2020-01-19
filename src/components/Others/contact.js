import React, { Component } from 'react'

export default class contact extends Component {
    render() {
        return (
            <div>
                <div id="content">
                    <div className="content-page">
                        <div className="container">
                            <div className="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151986.00533938778!2d-2.3636687929445515!3d53.472367954780005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4d4c5226f5db%3A0xd9be143804fe6baa!2sManchester%2C+UK!5e0!3m2!1sen!2s!4v1472467262148" width={1200} height={400} style={{ border: 0 }} allowFullScreen />
                            </div>
                            {/* End Map */}
                            <div className="contact-info-page">
                                <div className="list-contact-info">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-4 col-xs-12">
                                            <div className="item-contact-info">
                                                <a className="contact-icon icon-mobile" href="#"><i className="fa fa-mobile" /></a>
                                                <h2>Hotline: <a href="#">080 900660</a></h2>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-12">
                                            <div className="item-contact-info">
                                                <a className="contact-icon icon-phone" href="#"><i className="fa fa-phone" /></a>
                                                <h2>Call: <a href="#">040 5050 3396</a></h2>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-12">
                                            <div className="item-contact-info last-item">
                                                <a className="contact-icon icon-email" href="mailto:7uptheme@gmail.com"><i className="fa fa-envelope" /></a>
                                                <h2><a href="mailto:7uptheme@gmail.com">7uptheme@gmail.com</a></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="desc">If the supplier fails to ship your products on time or the product quality does not meet the standards set in your contract, Aloshop will refund the covered amount of your payment.</p>
                            </div>
                            <div className="contact-form-page">
                                <h2>contact from</h2>
                                <div className="form-contact">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-3 col-sm-4 col-xs-12">
                                                <input type="text" name="name" defaultValue="Name *" onfocus="if (this.value==this.defaultValue) this.value = ''" onblur="if (this.value=='') this.value = this.defaultValue" />
                                            </div>
                                            <div className="col-md-3 col-sm-4 col-xs-12">
                                                <input type="text" name="email" defaultValue="Email *" onfocus="if (this.value==this.defaultValue) this.value = ''" onblur="if (this.value=='') this.value = this.defaultValue" />
                                            </div>
                                            <div className="col-md-6 col-sm-4 col-xs-12">
                                                <input type="text" name="website" defaultValue="Website" onfocus="if (this.value==this.defaultValue) this.value = ''" onblur="if (this.value=='') this.value = this.defaultValue" />
                                            </div>
                                            <div className="col-md-12 col-sm-12 col-xs-12">
                                                <textarea name="message" cols={30} rows={8} onfocus="if (this.value==this.defaultValue) this.value = ''" onblur="if (this.value=='') this.value = this.defaultValue" defaultValue={"Message"} />
                                                <input type="submit" defaultValue="Send" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
