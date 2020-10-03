import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Navigation from './layout/navbar/Navbar'
import Footer from './layout/footer/Footer'

import Index from './pages/index/Index'
import CoastersList from './pages/coastersList/CoastersList'
import CoasterDetails from './pages/coasterDetails/CoasterDetails'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'

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

          <Route path="/coasters" exact render={() => <CoastersList loggedInUser={this.state.loggedInUser} />} />
          <Route path="/coasters/details/:coaster_id" render={props => <CoasterDetails {...props} />} />

          <Route path="/signup" render={props => <Signup setTheUser={this.setTheUser} {...props} />} />
          <Route path="/login" render={props => <Login setTheUser={this.setTheUser} {...props} />} />
          <Route path="/profile" render={() => this.state.loggedInUser ? <Profile loggedInUser={this.state.loggedInUser} /> : <Redirect to="/login" />} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
