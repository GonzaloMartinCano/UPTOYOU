import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import productsService from '../../../service/products.service'
import ProductCard from './ProductCard'


import Spinner from '../../shared/spinner/Spinner'

import './ProductsList.css'

class ProductsList extends Component {
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
            .getAllProducts()
            .then(response => this.setState({ products: response.data }))
            .catch(err => console.log('Error:', err))
    }

    handleModal = showModal => this.setState({ showModal })

    render() {
        return (

                <Container>
                    <main>
                        <h1>Listado de productos</h1>
                        
                        <Row>
                            {
                                this.state.products.length
                                    ?
                                    this.state.products.map(elm => <Col md={4}><ProductCard loggedInUser={this.props.loggedInUser} key={elm._id} {...elm} /></Col>)
                                    :
                                    <Spinner />
                            }
                        </Row>
                    </main>
                </Container>

        )
    }
}

export default ProductsList