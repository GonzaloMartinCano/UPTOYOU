import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import miproducto from './../productsList/miproducto.png'


import productsService from '../../../service/products.service'

class ProductDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.productsService = new productsService()
    }

    componentDidMount = () => {
        this.productsService
            .getOneProduct(this.props.match.params.product_id)
            .then(response => this.setState(response.data))
            .catch(err => console.log('Error:', err))
    }

    addToCart = () => {
        this.productsService
        .addToCart(this.state._id, this.props.loggedInUser._id)
        .then(() => alert("hecho"))
        .catch(err => console.log('Error:', err))
    }


    render() {

        return (
            <Container>
                <main>
                    <h1>{this.state.name}</h1>
                    <hr />
                    <Row>
                        <Col md={{ span: 4, offset: 1 }}>
                            <h4>Descripción</h4>
                            <p>{this.state.description}</p>
                            <hr />
                            <h4>Especificaciones</h4>
                            <p>Precio: {this.state.price}</p>
                            <p>Valoración: {this.state.rating}</p>
                            <hr />
                            <Button onClick={() => this.addToCart()} className="btn btn-dark btn-sm"><img style={{marginLeft: '10px', height: '100%' }} className="chekmiproducto" src={miproducto}/>Add to Cart</Button>
                            <hr />
                            <Link to="/products" className="btn btn-dark btn-sm">Volver al índice</Link>
                        </Col>
                        <Col md={6}>
                            <img style={{ width: '100%' }} alt={this.state.name} src={this.state.image} />
                        </Col>
                    </Row>
                </main>
            </Container>
        )
    }
}

export default ProductDetails