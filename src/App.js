import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Header from './components/Header/topheader';
import Navbar from './components/Header/belowheader';
import Mainbody from './components/Body/maincontent';
import LocationAcceptor from './components/Body/Popup/locationAcceptor';
import Footer from './components/Footer/mainfooter';

import Detail from './components/Details/maindetail'
import Error from './components/Others/Error'
import About from './components/Others/about'
import Login from './components/Others/login'
import Register from './components/Others/register'
import Profile from './components/Others/profile'
import Contact from './components/Others/contact'
import Cart from './components/Others/cart'
import Checkout from './components/Others/checkout'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>

        <Header />
        <Navbar />
        
        <Route exact path='/' component={Mainbody} />

        <Switch>

        <Route path='/detail' component={Detail} />
        <Route path='/about' component={About} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
        <Route path='/contact' component={Contact} />
        <Route path='/cart' component={Cart} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/locate' component={LocationAcceptor} />
        <Route path='/register' component={Register} />
        <Route default component={Error} />
        </Switch>
        
        <Footer />

        </Router>
      </div>
    )
  }
}
