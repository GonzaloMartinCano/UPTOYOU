import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import miproducto from './miproducto.png'


import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'

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
     
     handleInputChange = e => {
        let newQuantity = this.state.quantityInCart
        newQuantity[this.props.index] = e.target.value
        this.setState({ quantity: newQuantity })
         
        this.productsService
             .editCart(this.props.loggedInUser._id, e.target.value, this.props.index)
             .then(() => {  // el carrito llega aqui
                 this.productsService
                     .getMyCart(this.props.loggedInUser._id)
                     .then(response => this.setState(response.data))
                     .catch(err => console.log('Error:', err))
             })
            .catch(err => console.log('Error:', err))
        this.props.calculateTotal(250000000000)
     }
     

        

    render() {
        
        return (
    
            <ListGroup horizontal>
            <ListGroup.Item ><Link to={`/products/details/${this.props._id}`}><img style={{width: '100px'}} src={this.props.image} alt={this.props.name}></img></Link></ListGroup.Item>
            <ListGroup.Item >Atículo <hr/> {this.props.name}</ListGroup.Item>
                 <ListGroup.Item>Cantidad <hr /> {this.state.quantityInCart
                     ?
                                <Form.Group>

                                    <Form.Control  name="quantity" type="number" min="1" max={this.props.stock} placeholder="1" value={this.state.quantityInCart[this.props.index]} onChange={this.handleInputChange}  />
                    </Form.Group>
                    
                    
                     :
                     <Spinner />}</ListGroup.Item>
            <ListGroup.Item>€/unidad <hr/> {this.props.price}</ListGroup.Item>
                <ListGroup.Item >SubTotal <hr /> {this.state.quantityInCart ? <p>{this.props.price * this.state.quantityInCart[this.props.index]}€ </p> : <Spinner />} </ListGroup.Item>
            <ListGroup.Item><ButtonGroup style={{ width: '100%' }}>
                                <Link to={`/products/details/${this.props._id}`} className="btn btn-dark btn-sm">Detalles</Link>
                            </ButtonGroup>
                </ListGroup.Item>
            </ListGroup>


         )
     }
}

export default ProductCardCart