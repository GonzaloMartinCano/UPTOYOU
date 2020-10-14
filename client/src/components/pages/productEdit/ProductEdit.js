import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from './../../shared/alert/Alert'


import productsService from '../../../service/products.service'
import Container from 'react-bootstrap/esm/Container'

class EditProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.productsService = new productsService()
    }

    componentDidMount = () => {
       this.getProduct()
    }

    getProduct = () => {
        this.productsService
        .getOneProduct(this.props.match.params.product_id)
        .then(response => this.setState(response.data))
        .catch(err => console.log('Error:', err))
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.productsService
            .updateProduct(this.state._id, this.state)
            .then(() => {
                this.getProduct()
                this.props.setAlert('ok', 'Producto editado correctamente')
            })
            .catch(err => console.log('Erroro!!', { err }))
    }

    render() {

        return (

            <Container>

                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="name" value={this.state.name} placeholder={this.state.name}  onChange={this.handleInputChange} />
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
                                <img style={{ marginTop: '20px', width: '50%' }} alt={this.state.name} src={this.state.image} />
                    </Form.Group>

                    <Link to="/profile">
                        <Button size="sm" variant="dark" style={{ marginRight: '20px' }}>Volver a Inicio</Button>
                    </Link>
                    
                    <Button size="sm" variant="success" type="submit">Confirmar cambios</Button>
                </Form>
                
                </Container>    
        )
    }
}

export default EditProduct