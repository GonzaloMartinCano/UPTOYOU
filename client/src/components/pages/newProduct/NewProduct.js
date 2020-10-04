import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import coasterService from '../../../service/products.service'

class NewCoaster extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            inversions: '',
            length: '',
            imageUrl: '',
            owner: this.props.loggedInUser ? this.props.loggedInUser._id : ''
        }
        this.coasterService = new coasterService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.coasterService
            .saveCoaster(this.state)
            .then(() => {
                this.props.closeModal()
                this.props.refreshList()
            })
            .catch(err => console.log('Erroro!!', { err }))
    }




    render() {

        return (

            <Form onSubmit={this.handleFormSubmit}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Longitud</Form.Label>
                    <Form.Control type="text" name="length" value={this.state.length} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Inversiones</Form.Label>
                    <Form.Control type="text" name="inversions" value={this.state.inversions} onChange={this.handleInputChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleInputChange} />
                </Form.Group>

                <Button variant="dark" type="submit">Crear montaña rusa</Button>
            </Form>
        )
    }
}

export default NewCoaster