import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css' 

import logo from './logo.png'

import authService from './../../../service/auth.service'
import cartService from '../../../service/cart.service'


export default class extends Component {

    constructor(props) {
        super()
        this.state = []
        this.authService = new authService()
        this.cartService = new cartService()
    }

    logoutUser = () => {
        this.authService
            .logout()
            .then(() => this.props.setTheUser(null))
            .catch(err => console.log('ERRORR!!:', err))
    }

    componentDidMount = () => this.loadCart()

    loadCart = () => {
        console.log("VEEEENGOOO")
        if (this.props.loggedInUser) {
            this.cartService
                .getMyCart(this.props.loggedInUser._id)
                .then(response => console.log("aaaaaaaaaaaaaaaaaaa", response))
                .catch(err => console.log('Error:', err))
        }
            
    }

    render() {
        return (
            <Navbar expand="lg" className="bg-custom-2" style={{paddingBottom: "10px", marginBottom: "20px"}}>
                <Link to="/">
                    <Navbar.Brand >
                        <img

                            alt="Logotipo"
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                </Navbar.Brand>
                </Link>
                <Link to="/"><Navbar.Brand style={{ fontWeight: '900', color: "#2D3A3A"}}>UP2YOU</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto"  >
                        <Link className="nav-link" to="/">Inicio</Link>
                        {this.props.loggedInUser && <Link className="nav-link" to="/cart">Cart {this.state}</Link>}
                        <Link className="nav-link" to="/products">Productos</Link>
                        {!this.props.loggedInUser && <Link className="nav-link" to="/signup">Registro</Link>}
                        {!this.props.loggedInUser && <Link className="nav-link" to="/login">Acceder</Link>}
                        {this.props.loggedInUser && <div className="nav-link" onClick={this.logoutUser}>Cerrar sesión</div>}
                        <Link className="nav-link" to="/profile">- Hola, {this.props.loggedInUser ? this.props.loggedInUser.username : 'invitado'}</Link>
                
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

