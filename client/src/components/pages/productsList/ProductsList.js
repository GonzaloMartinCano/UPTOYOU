import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Search from '../searchBar/Searchbar'


import productsService from '../../../service/products.service'
import ProductCardList from './../productCard/ProductCardList'


import Spinner from '../../shared/spinner/Spinner'


class ProductsList extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            allProducts: []
        }
        this.productsService = new productsService()
    }

    componentDidMount = () => this.loadProducts()

    loadProducts = () => {
        this.productsService
            .getAllProducts()
            .then(response => this.setState({ allProducts: response.data }))
            .then(() => this.setState({ products: this.state.allProducts }))
            .catch(err => console.log('Error:', err))
    }

    searcher = valor => {
        let { value } = valor.target
        if (value)
            this.setState(({ products: this.state.allProducts.filter((elm) => elm.name.toLowerCase().includes(value.toLowerCase())) }))
        else
            this.setState({ products: this.state.allProducts })
    }

    filterCheck = e => {

        if(e.target.checked === true)
            this.setState({ products: this.state.allProducts.filter((elm) => elm.stock > 0) })
        else
            this.setState({ products: this.state.allProducts })
    }

    filterCategory = e => {

        if (e.target.value !== 'all')
            this.setState({ products: this.state.allProducts.filter((elm) => elm.category === e.target.value) })
        else 
            this.setState({ products: this.state.allProducts }) 
        
    }

    render() {
        return (

            <Container>
                <main>
                    <Search searcher={valor => this.searcher(valor)} filterCheck={ valor => this.filterCheck(valor)} filterCategory={this.filterCategory}/>
                    <Row>
                        {
                        this.state.products.length
                            ?
                        this.state.products.map((elm, index) => <Col md={4} key={index}><ProductCardList  loggedInUser={this.props.loggedInUser} {...elm} /></Col>)
                        :
                        <p>No se han encontrado resultados con esos criterios de busqueda <Spinner key='spinner' /></p>
                        }
                    </Row>
                </main>
            </Container>

        )
    }
}

export default ProductsList