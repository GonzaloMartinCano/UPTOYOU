import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import miproducto from './miproducto.png'

import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ListGroup from 'react-bootstrap/ListGroup'

import Spinner from '../../shared/spinner/Spinner'

import productsService from '../../../service/products.service'


 class ProductCardCart extends Component {
        constructor(props) {
            super()
            this.state = {}
            this.productsService = new productsService()
         
        }
     
        componentDidMount = () => {
            this.productsService
                .getMyCart(this.props.loggedInUser._id)
                .then(response => this.setState(response.data))
                .catch(err => console.log('Error:', err))
        }

     render() {
        
         return (
    
                        <ListGroup horizontal>
                        <ListGroup.Item ><img style={{width: '100px'}} src={this.props.image} alt={this.props.name}></img></ListGroup.Item>
                        <ListGroup.Item >Atículo <hr/> {this.props.name}</ListGroup.Item>
                        <ListGroup.Item>Cantidad <hr/> {this.state.quantityInCart ? <p>{this.state.quantityInCart[this.props.index]}</p> : <Spinner />}</ListGroup.Item>
                        <ListGroup.Item>€/unidad <hr/> {this.props.price}</ListGroup.Item>
                        <ListGroup.Item>SubTotal <hr/> {this.state.quantityInCart ? <p>{this.props.price * this.state.quantityInCart[this.props.index]}€</p> : <Spinner />} </ListGroup.Item>
                        <ListGroup.Item><ButtonGroup style={{ width: '100%' }}>
                                            <Link to={`/products/details/${this.props._id}`} className="btn btn-dark btn-sm">Detalles</Link>
                                        </ButtonGroup>
                         </ListGroup.Item>
                        </ListGroup>


         )
     }
}

export default ProductCardCart