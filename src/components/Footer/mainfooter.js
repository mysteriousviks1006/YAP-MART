import React, { Component } from 'react'
import Payment from './payment';
import Tab from './tab';
import Copyright from './copyright';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div id="footer">
                <div className="footer footer4">
                   <Payment />
                    {/* End Payment */}
                    <Tab />
                    {/* End Footer Tab */}
                    <Copyright />
                    {/* End Footer Copyright */}
                </div>
                </div>
                {/* End Footer */}

            </div>
        )
    }
}
