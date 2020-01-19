import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render()
    {
        return(
            <div>
                <div id="header">
                <div className="header">
                    <div className="top-header top-header4">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="account-login">
                            <Link to="/profile">My Account</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                            <Link to='/about'>About Us</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 hidden-xs">
                        <div className="currency-language">
                            <div className="language-box">
                                <a href="#" className="language-current"><img src="images/flag/flag.png" alt /><span>English</span></a>
                                <ul className="language-list list-unstyled">
                                <li><a href="#"><img src="images/flag/flag-in.png" alt /><span>English</span></a></li>
                                <li><a href="#"><img src="images/flag/flag-fr.png" alt /><span>French</span></a></li>
                                <li><a href="#"><img src="images/flag/flag-gm.png" alt /><span>German</span></a></li>
                                </ul>
                            </div>
                            <div className="address-box">
                                <a href="#" className="address-toggle"><i className="fa fa-map-marker" aria-hidden="true" /></a>
                                <ul className="address-list list-unstyled">
                                    <li><p>Address 1: 8901 Marmora Road, Glasgow, D04  89GR.</p></li>
                                    <li><p>Address 2: 8901 Marmora Road, Glasgow, D04  89GR.</p></li>
                                </ul>
                                </div>
                        </div>                            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* End Header */}
                </div>
            </div>
        );
    }
}


export default Header;