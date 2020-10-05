import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import productsService from '../../../service/products.service'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'


import ProductCard from './../productsList/ProductCard'
import Spinner from '../../shared/spinner/Spinner'


class Cart extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            showModal: false
        }
        this.productsService = new productsService()
    }

    componentDidMount = () => this.loadProducts()

    loadProducts = () => {
        this.productsService
            .getMyCart(this.props.loggedInUser._id)
            .then(response => this.setState({ products: response.data.products }))
            .catch(err => console.log('Error:', err))
    }


    render() {
        return (

            <>
                <Container>
                    
                  
        
                    <h2>¡Bienvenid@ a tu car, {this.props.loggedInUser.username}!</h2><br></br>

                    <Row>
                            {
                                this.state.products.length
                                    ?
                                this.state.products.map(elm => 
                                    <Col md={4}>
                                    <h8 onClick={() => this.handleModal(true)} variant="dark" size="xs">Editar</h8>
                                    <ProductCard loggedInUser={this.props.loggedInUser} key={elm._id} {...elm}/>
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