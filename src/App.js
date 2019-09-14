import React, { Component } from 'react';
import Header from './components/Header/topheader';
import BelowHeader from './components/Header/belowheader';
import Mainbody from './components/Body/maincontent';
import LocationAcceptor from './components/Body/Popup/locationAcceptor';
import Footer from './components/Footer/mainfooter';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BelowHeader />
        <Mainbody />
        <LocationAcceptor />
        <Footer />
      </div>
    )
  }
}
