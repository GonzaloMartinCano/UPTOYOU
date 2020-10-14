import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import Search from '../searchBar/Searchbar'


import productsService from '../../../service/products.service'
import ProductCardList from './../productCard/ProductCardList'


import Spinner from '../../shared/spinner/Spinner'


class ProductsList extends Component {
    constructor() {
        super()
        this.state = {
            allProducts: [],
            products: [],
            productsToSee: [],
            pages: 0,
            pageIndex: 0,
            category: 'all'
        }
        this.productsService = new productsService()
    }

    componentDidMount = () => this.loadProducts()

    loadProducts = () => {
        this.productsService
            .getAllProducts()
            .then(response => {
                this.setState({ allProducts: response.data })
                this.setState({ products: this.state.allProducts })
                this.pagination()
            })
            .catch(err => console.log('Error:', err))
    }

    pagination = () => {
      
        let newProducts = this.state.products
        let pages = []
        if (this.state.products.length > 6) {
            for (let i = 0; i < this.state.products.length / 6; i++){
                pages.push(1)
            }
            this.setState({ pages })
            let count = 6;
            let final = count * this.state.pageIndex + 6
            newProducts = newProducts.slice(count * this.state.pageIndex, final)
        }
        else
        this.setState({ pages: ['']})
        this.setState({ productsToSee: newProducts })
    }

    searcher = valor => {
        let { value } = valor.target

        if (value && this.state.category === 'all') 
            this.setState(({
                products: this.state.allProducts.filter((elm) =>
                    elm.name.toLowerCase().includes(value.toLowerCase()))
            }), () => this.pagination())

        else if (value && this.state.category !== 'all') {
            this.setState(({
                products: this.state.allProducts.filter((elm) =>
                elm.category === this.state.category && elm.name.toLowerCase().includes(value.toLowerCase()))
            }), () => this.pagination())
        }
        
        else if (!value && this.state.category !== 'all') {
            this.setState({
                products: this.state.allProducts.filter((elm) =>
                    elm.category === this.state.category),
            }, () => this.pagination())
        }
        else 
            this.setState({ products: this.state.allProducts }, () => this.pagination())
    }


    filterCheck = e => {

        if(e.target.checked === true)
            this.setState({ products: this.state.products.filter((elm) => elm.stock > 0) }, () => this.pagination())
        else
            this.setState({ products: this.state.allProducts }, () => this.pagination())
    }

    filterCategory = e => {

        if (e.target.value !== 'all')
            this.setState({
                products: this.state.allProducts.filter((elm) =>
                    elm.category === e.target.value),
                category: e.target.value
            }, () => this.pagination())
        else 
            this.setState({ products: this.state.allProducts,  category: 'all' }, () => this.pagination()) 
    }

    setPage = (e) => {

        let newIndex = 0
        if (e.target.value === 'pre' &&  this.state.pageIndex > 0) {
            newIndex = this.state.pageIndex - 1          
        }
        else if (e.target.value === 'next' &&  this.state.pageIndex < this.state.pages.length -1) {
            newIndex = this.state.pageIndex + 1            
        }
        else if (e.target.value !== 'next' && e.target.value !== 'pre'){
            newIndex = e.target.value
        }
        this.setState({pageIndex: newIndex}, () => this.pagination())
        
    }

    render() {
        return (

            <Container style={{marginBottom: "20px"}}>
                <main>
                    <Search searcher={valor => this.searcher(valor)} filterCheck={ valor => this.filterCheck(valor)} filterCategory={this.filterCategory}/>
                    <Row>
                        {
                        this.state.productsToSee.length
                            ?
                                this.state.productsToSee.map((elm, index) =>
                                    <Col md={4} key={index}><ProductCardList loggedInUser={this.props.loggedInUser} {...elm} /></Col>)
                        :
                        <div>No se han encontrado resultados con esos criterios de busqueda <Spinner key='spinner' /></div>
                        }
                    </Row>
                </main>
                <nav aria-label="Page navigation" className="pagination">
                    <ul className="pagination" >
                        <li className="page-item"><Button className="page-link" onClick={this.setPage} value={"pre"}>{"<<"}</Button></li>
                        {
                            this.state.pages.length
                            ?
                            this.state.pages.map((elm, index) =>
                                <li key={index} className="page-item"><Button className="page-link" onClick={this.setPage} value={index}>{index}</Button></li>)
                            :
                            <Spinner key='spinner' />
                        }
                        <li className="page-item"><Button className="page-link" onClick={this.setPage} value={"next"}>{">>"}</Button></li>
                    </ul>
                </nav>
            </Container>

        )
    }
}

export default ProductsList