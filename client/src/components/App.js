import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Navigation from './layout/navbar/Navbar'
import Footer from './layout/footer/Footer'

import Index from './pages/index/Index'
import ProductsList from './pages/productsList/ProductsList'
import ProductDetails from './pages/productDetails/ProductDetails'
import ProductEdit from './pages/productEdit/ProductEdit'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import Cart from './pages/cart/Cart'

import authService from './../service/auth.service'

import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedInUser: undefined
    }
    this.authService = new authService()
  }


  componentDidMount = () => this.fetchUser()

  setTheUser = user => this.setState({ loggedInUser: user }, () => console.log('El usuario es', this.state.loggedInUser))

  fetchUser = () => {
    this.authService
      .isLoggedIn()
      .then(response => this.setState({ loggedInUser: response.data }))
      .catch(err => this.setState({ loggedInUser: null }))
  }

  render() {
    return (
      <>
        <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />
        <Switch>
          <Route path="/" exact render={() => <Index />} />

          <Route path="/products" exact render={() => <ProductsList loggedInUser={this.state.loggedInUser} />} />
          <Route path="/products/details/:product_id" render={props => <ProductDetails {...props} loggedInUser={this.state.loggedInUser}/>} />
          <Route path="/products/edit/:product_id" render={(props) => this.state.loggedInUser ? <ProductEdit {...props} loggedInUser={this.state.loggedInUser}/> : <Redirect to="/login" />} />

          <Route path="/signup" render={props => <Signup setTheUser={this.setTheUser} {...props} />} />
          <Route path="/login" render={props => <Login setTheUser={this.setTheUser} {...props} />} />
          <Route path="/profile" render={(props) => this.state.loggedInUser ? <Profile loggedInUser={this.state.loggedInUser} {...props} /> : <Redirect to="/login" />} />
          <Route path="/cart" render={(props) => this.state.loggedInUser ? <Cart loggedInUser={this.state.loggedInUser} {...props} /> : <Redirect to="/login" />} />

        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
