import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import productsService from '../../../service/products.service'

class NewProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            price: '',
            image: '',
            userID: this.props.loggedInUser ? this.props.loggedInUser._id : ''
        }
        this.productsService = new productsService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.productsService
            .newProduct(this.state)
            .then(() => {
                this.props.closeModal()
               
            })
            .then(() =>  this.props.refreshList())
            .catch(err => console.log('Erroro!!', { err }))
    }




    render() {

        return (

            <Form onSubmit={this.handleFormSubmit}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text" name="price" value={this.state.price} onChange={this.handleInputChange} />
                </Form.Group>


                <Form.Group>
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                </Form.Group>

                <Button variant="dark" type="submit">Añadir Producto</Button>
            </Form>
        )
    }
}

export default NewProduct