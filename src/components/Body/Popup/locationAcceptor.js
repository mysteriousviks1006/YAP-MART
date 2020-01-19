import React, { Component } from 'react'

class LocationAcceptor extends Component {
    render() {
        return (
            <div>
                <div id="boxes">
                    <div className="window" id="dialog">
                        <div className="window-popup text-center"> 
                        <div className="content-popup">
                            <a href="#" className="close-popup color"><i className="fa fa-times" aria-hidden="true" /></a>
                            <h2 className="title30">Enter</h2>
                            <h2 className="title30">Your Location</h2>
                            <h3 className="title18">To not miss a good deal</h3>
                            <img src="images/shop/popup.jpg" alt className="image-popup" />
                            <form>
                            <input type="text" defaultValue="Enter Your Email..." onfocus="if (this.value==this.defaultValue) this.value = ''" onblur="if (this.value=='') this.value = this.defaultValue" />
                            <select className="select-location text-left">
                                <option value>--- Select your city ---</option>
                                <option value>MUMBAI</option>
                                <option value>Chicago</option>
                                <option value>San Francisco</option>
                                <option value>Dallas</option>
                                <option value>Michigan</option>
                                <option value>Philadelphia</option>
                                <option value>Houston</option>
                                <option value>Miami</option>
                                <option value>Alaska</option>
                            </select>
                            <input type="submit" className="bg-color title18" defaultValue="become a member" />
                            </form>
                            <div className="confirm-user clearfix">
                            <a href="#" className="pull-left">Processing of personal data</a>
                            <a href="#" className="pull-right">I am already a member</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div id="mask" />
                    </div>
                    {/* End Newsletter Popup */}

            </div>
        )
    }
}
export default LocationAcceptor;