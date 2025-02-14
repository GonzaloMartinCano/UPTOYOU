import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { MdAddShoppingCart } from 'react-icons/md'

import cartService from '../../../service/cart.service'
import productsService from '../../../service/products.service'

class ProductDetails extends Component {
    constructor(props) {
        super()
        this.state = {
            product: {
                name: '',
                description: '',
                price: '',
                rating: '',
                stock: '',
            },
            quantity: 1,
        }
        this.cartService = new cartService()
        this.productsService = new productsService()
    }

    componentDidMount = () => {
        this.getOneProduct()
    }

    getOneProduct = () => {
        this.productsService
        .getOneProduct(this.props.match.params.product_id)
        .then(response => this.setState({ product: response.data }))
        .catch(err => console.log('Error:', err))
    }

    addToCart = (quantity) => {
        
        if (this.state.product.stock >= this.state.quantity) {
            this.cartService
            .addToCart(this.state.product._id, this.props.loggedInUser._id, this.state.product.stock, quantity)
                .then(() => {
                    this.props.setAlert('ok', 'Producto añadido a tu cesta!')
                    this.getOneProduct()
                    this.props.loadcart()
                })
                .catch(err => console.log('Error:', err))
        }
        else {
            this.props.setAlert('fail', 'Lo sentimos pero no hay stock')
        }
      
    }

    handleInputChange = e => {
        this.setState( {quantity: e.target.value})
    }

    render() {

        return (
            <Container>
                <main>
                   
                    <h1>{this.state.product.name}</h1>
                    <hr />
                    <Row>
                        <Col md={{ span: 4, offset: 1 }}>
                            <h4>Descripción</h4>
                            <p>{this.state.product.description}</p>
                            <hr />
                            <h4>Especificaciones</h4>
                            <p>Precio: {this.state.product.price}</p>
                            <p>Valoración: {this.state.product.rating}</p>
                            <hr/>
                            <h4>QUIERES AÑADIRLO A TU CESTA?</h4>
                            <Form >
                                <Form.Group>
                                    <Form.Label>Cantidad</Form.Label>
                                    <Form.Control  name="quantity" type="number" min="1" max={this.state.product.stock} placeholder="1" value={this.state.quantity} onChange={this.handleInputChange} />
                                </Form.Group>
                            </Form>

                        </Col>
                        <Col md={6}>
                            <img style={{ width: '75%' }} alt={this.state.product.name} src={this.state.product.image} />
                        </Col>
                    </Row>
                    <Row >
                        <Col  className="cartbuttons detailsbuttons">
                            <Link to="/products" style={{ marginLeft: '16%' }} className="btn btn-dark btn-sm">Volver al índice</Link>
                            {this.props.loggedInUser
                                ?
                            <button style={{marginRight: '100px'}} onClick={() => this.addToCart(this.state.quantity)} className="btn btn-success btn-sm cartbuttonsAñadir">Añadir <MdAddShoppingCart/></button>
                                :
                            <Link style={{marginRight: '100px'}} to="/login" className="btn btn-success btn-sm cartbuttonsAñadir">Añadir <MdAddShoppingCart/></Link>   
                            }
                        </Col>
                    </Row>
                </main>
            </Container>
        )
    }
}

export default ProductDetails