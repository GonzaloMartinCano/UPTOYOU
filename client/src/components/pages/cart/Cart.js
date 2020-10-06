import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import productsService from '../../../service/products.service'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'


import ProductCardList from './../productCard/ProductCardList'
import Spinner from '../../shared/spinner/Spinner'


class Cart extends Component {
    constructor() {
        super()
        this.state = {
            cart: [],
            showModal: false
        }
        this.productsService = new productsService()
    }

    componentDidMount = () => this.loadProducts()

    loadProducts = () => {
        this.productsService
            .getMyCart(this.props.loggedInUser._id)
            .then(response => this.setState({ cart: response.data.cart }))
            .catch(err => console.log('Error:', err))
    }


    render() {
        return (

            <>
                <Container>
                    
                  
        
                    <h2>¡Bienvenid@ a tu car, {this.props.loggedInUser.username}!</h2><br></br>

                    <Row>
                            {
                                this.state.cart.length
                                    ?
                                this.state.cart.map(elm => 
                                    <Col md={4}>
                                    {/* <h8 onClick={() => this.handleModal(true)} variant="dark" size="xs">Editar</h8> */}
                                    <ProductCardList loggedInUser={this.props.loggedInUser} key={elm._id} {...elm}/>
                                    </Col>
                                )
                                    :
                                    <Spinner />
                            }
                    </Row>



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