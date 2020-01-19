import React, { Component } from 'react'

import {Link} from 'react-router-dom'

export default class Error extends Component {
    render() {
        return (
            <div>
                <div id="content">
                    <div class="content-page">
                        <div class="container">
                            <div class="bread-crumb radius">
                                <Link to="/">Home</Link> <span>Fashion</span>
                            </div>
                            <div class="content-404">
                                <img src="images/pages/404.png" alt="Page Not Found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
