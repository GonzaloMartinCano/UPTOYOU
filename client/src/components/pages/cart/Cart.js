import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import cartService from '../../../service/cart.service'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'


import ProductCardCart from './../productCard/ProductCardCart'
import Spinner from '../../shared/spinner/Spinner'


class Cart extends Component {
    constructor() {
        super()
        this.state = {
            cart: {},
            totalPrice: 0,
            showModal: false
        }
        this.cartService = new cartService()
    }

    componentDidMount = () => {
        this.loadProducts()
        
    }
    loadProducts = () => {
        this.cartService
            .getMyCart(this.props.loggedInUser._id)
            .then(response => this.setState({ cart: response.data.products }))
            .catch(err => console.log('Error:', err))
    }

    calculateTotal = (price) => {
        console.log("ESTAMOS=====   " + price)
        let newTotal = price + this.state.totalPrice
        this.setState({totalPrice: newTotal})
    }


    render() {
        return (

        <>
        <Container>

            <h2>¡Bienvenid@ a tu Cart, {this.props.loggedInUser.username}!</h2><br></br>

        <Row>
            {
            this.state.cart.length ?
                                
            this.state.cart.map((elm, index) => 
            <Col md={7} key={index}>
                <ProductCardCart loggedInUser={this.props.loggedInUser} key={elm._id} {...elm} index={index} calculateTotal={this.calculateTotal}/> 
            </Col>)
                                
            :
            <Spinner />
            }
        </Row>

        <h1>PRECIO TOTAL: {this.state.totalPrice}</h1>


        {/* COMUN PARA TODOS LOS PERFILES */}

        <Link to="/products">
        <Button size="sm" variant="dark" style={{ marginTop: '20px' }}>Volver a Inicio</Button>
        </Link>
        </Container>

        </>
        )
    }
}

export default Cart