import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import miproducto from './miproducto.png'


import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'

import Spinner from '../../shared/spinner/Spinner'

import cartService from '../../../service/cart.service'


 class ProductCardCart extends Component {
    constructor(props) {
        super()
        this.state = {}
        this.cartService = new cartService()
    
    }

    componentDidMount = () => {
        this.cartService
            .getMyCart(this.props.loggedInUser._id)
            .then(response => this.setState(response.data.products))
            .then(() => this.props.calculateTotal(this.props.refID.price * this.state[this.props.index].quantity))
            .catch(err => console.log('Error:', err))
    }
     
     handleInputChange = e => {
        
        // Calculate total
         if (this.state[this.props.index].quantity > e.target.value) 
            this.props.calculateTotal(-this.props.refID.price)
         else
            this.props.calculateTotal(this.props.refID.price)
 
        // Upload Cart
        let newProducts = this.state
        newProducts[this.props.index].quantity = e.target.value
        this.setState({newProducts})
         
        this.cartService
            .editCart(this.props.loggedInUser._id, e.target.value, this.props.index)
            .catch(err => console.log('Error:', err))
         
     }
     
    render() {
        
        return (
    
            <ListGroup horizontal>
            <ListGroup.Item ><Link to={`/products/details/${this.props.refID._id}`}><img style={{width: '100px'}} src={this.props.refID.image} alt={this.props.refID.name}></img></Link></ListGroup.Item>
            <ListGroup.Item >Atículo <hr/> {this.props.refID.name}</ListGroup.Item>
                <ListGroup.Item>Cantidad
                    <hr />
                    {this.state[this.props.index]
                        ?
                    <Form.Group>
                        <Form.Control  name="quantity" type="number" min="1" max={this.props.refID.stock} placeholder="1" value={this.state[this.props.index].quantity} onChange={this.handleInputChange}  />
                    </Form.Group>
                        :
                    <Spinner />}
                </ListGroup.Item>
                <ListGroup.Item>€/unidad <hr/> {this.props.refID.price}</ListGroup.Item>
                    <ListGroup.Item >SubTotal <hr /> {this.state[this.props.index] ? <p>{this.props.refID.price * this.state[this.props.index].quantity}€ </p> : <Spinner />} </ListGroup.Item>
                <ListGroup.Item>
                    <ButtonGroup style={{ width: '100%' }}>
                    <Link to={`/products/details/${this.props._id}`} className="btn btn-dark btn-sm">Detalles</Link>
                    </ButtonGroup>
                </ListGroup.Item>
            </ListGroup>
         )
     }
}

export default ProductCardCart