import React, { Component } from 'react'
import Header from '../Header/topheader';
import BelowHeader from '../Header/belowheader';
import MainDetail from './maindetail';
import LocationAcceptor from '../Body/Popup/locationAcceptor';
import Footer from '../Footer/mainfooter';

export default class Details extends Component {
    render() {
        return (
            <div>
                <Header />
                <BelowHeader />
                <MainDetail />
                <Footer />
                <LocationAcceptor />
            </div>
        )
    }
}
