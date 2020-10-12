import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css' 

import logo from './logo.png'
import { FiShoppingCart } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

import authService from './../../../service/auth.service'
import cartService from '../../../service/cart.service'


export default class extends Component {

    constructor(props) {
        super()
        this.state = {
            products: []
        }
        this.authService = new authService()
        this.cartService = new cartService()
    }

    logoutUser = () => {
        this.authService
            .logout()
            .then(() => this.props.setTheUser(null))
            .catch(err => console.log('ERRORR!!:', err))
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
                    <Nav className="ml-auto" style={{ fontWeight: '600', color: "#2D3A3A"}} >
                        <Link className="nav-link" to="/">Inicio</Link>
                        <Link className="nav-link" to="/products">Productos</Link>
                        {!this.props.loggedInUser && <Link className="nav-link" to="/signup">Registro</Link>}
                        {!this.props.loggedInUser && <Link className="nav-link" to="/login">Acceder</Link>}
                        <Link className="nav-link" to="/profile"><CgProfile/> Hola {this.props.loggedInUser ? this.props.loggedInUser.username : 'invitado'}</Link>
                        {this.props.loggedInUser && <Link className="nav-link" to="/cart"><FiShoppingCart />  { this.props.quantityInCart}</Link>}
                        {this.props.loggedInUser && <div className="nav-link" onClick={this.logoutUser}>Cerrar sesión</div>}    
                
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

