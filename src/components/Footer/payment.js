import React, { Component } from 'react'
import Service from './service';
import ListBox from './listbox';
export default class Payment extends Component {
    render() {
        return (
            <div>
                 <div className="container">
                    <Service />
                    {/* End Service Footer */}
                    <ListBox />
                    {/* End Footer List Box */}
                    </div>
                    <div className="payment-method text-center">
                    <a href="#" className="wobble-vertical"><img src="images/home4/pay1.png" alt /></a>
                    <a href="#" className="wobble-vertical"><img src="images/home4/pay2.png" alt /></a>
                    <a href="#" className="wobble-vertical"><img src="images/home4/pay3.png" alt /></a>
                    <a href="#" className="wobble-vertical"><img src="images/home4/pay4.png" alt /></a>
                    </div>
            </div>
        )
    }
}
