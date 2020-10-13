import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Navigation from './layout/navbar/Navbar'
import Footer from './layout/footer/Footer'

import Index from './pages/index/Index'
import ProductsList from './pages/productsList/ProductsList'
import ProductDetails from './pages/productDetails/ProductDetails'
import ProductEdit from './pages/productEdit/ProductEdit'
import ProductDelete from './pages/productDelete/ProductDelete'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import Cart from './pages/cart/Cart'

import authService from './../service/auth.service'
import CartService from './../service/cart.service'

import Alert from './shared/alert/Alert'

import './App.css'

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedInUser: undefined,
      products: [],
      quantityInCart: 0,
      alert: null,
      alertText: null
    }
    this.authService = new authService()
    this.cartService = new CartService()
  }


  componentDidMount = () => {
    this.fetchUser()
  }

  setTheUser = user => {
    this.setState({ loggedInUser: user })
    this.loadCart()
  }

  fetchUser = () => {
    this.authService
      .isLoggedIn()
      .then(response => this.setState({ loggedInUser: response.data }))
      .catch(err => this.setState({ loggedInUser: null }))
  }

  loadCart = () => {
    
    if (this.state.loggedInUser) {
        this.cartService
            .getMyCart(this.state.loggedInUser._id)
            .then(response => this.setState({ quantityInCart: response.data.products.length }))
            .catch(err => console.log('Error:', err))
        }
   }

  setAlert = (status, text) => this.setState({ alert: status, alertText: text })

  resetAlert = () => this.setState({ alert: null, alertText: null })
  
  render() {

    return (
      <>
        <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} quantityInCart={this.state.quantityInCart} loadcart={this.loadCart} />
        {this.state.alert === 'ok' && <Alert text={this.state.alertText} status='ok' resetAlert={this.resetAlert}/>}
        {this.state.alert === 'fail' && <Alert text={this.state.alertText} status='fail' resetAlert={this.resetAlert} />}
        <Switch>
          <Route path="/" exact render={() => <Index />} />

          <Route path="/products" exact render={() => <ProductsList loggedInUser={this.state.loggedInUser} />} />
          <Route path="/products/details/:product_id" render={props => <ProductDetails {...props} loadcart={this.loadCart} setAlert={this.setAlert} loggedInUser={this.state.loggedInUser}/>} />
          <Route path="/products/edit/:product_id" render={(props) => this.state.loggedInUser ? <ProductEdit {...props} setAlert={this.setAlert} loggedInUser={this.state.loggedInUser}/> : <Redirect to="/login" />} />
          <Route path="/products/delete/:product_id" render={(props) => this.state.loggedInUser ? <ProductDelete {...props} loggedInUser={this.state.loggedInUser}/> : <Redirect to="/login" />} />

          
          <Route path="/signup" render={props => <Signup setTheUser={this.setTheUser} {...props} />} />
          <Route path="/login" render={props => <Login setTheUser={this.setTheUser} {...props} />} />
          <Route path="/profile" render={(props) => this.state.loggedInUser ? <Profile loggedInUser={this.state.loggedInUser} {...props} /> : <Redirect to="/login" />} />
          <Route path="/cart" render={(props) => this.state.loggedInUser ? <Cart loggedInUser={this.state.loggedInUser} loadCart={this.loadCart} {...props} /> : <Redirect to="/login" />} />

        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
