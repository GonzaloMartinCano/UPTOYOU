import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import authService from '../../../service/auth.service'

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.authService = new authService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {

        e.preventDefault()

        this.authService
            .signup(this.state)
            .then(response => {
                this.props.setTheUser(response.data)
                this.props.setAlert('ok', ` Hola ${this.state.username}! Tu perfil se ha creado con exito, ya puedes comenzar a comprar!`)
                this.props.history.push('/')
            })
            .catch(err => this.props.setAlert('fail', `Este usuario o contraseña esta en uso, o no cumple las especificaciones. Prueba de nuevo. ${err}`))
    }


    render() {

        return (

            <Container>
                <main>
                    <Row className="justify-content-center">
                        <Col md={{ span: 5 }}>
                            <h1>Registro de usuario</h1>
                            <Form onSubmit={this.handleFormSubmit}>
                                <Form.Group>
                                    <Form.Label>Nombre de usuario</Form.Label>
                                    <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                                </Form.Group>
                                <p>Ya tienes una cuenta? <Link to={`/login`} >Accede aqui.</Link></p><br/>
                                <Button variant="dark" type="submit">Registrarme</Button>
                            </Form>
                        </Col>
                    </Row>
                </main>
            </Container>
        )
    }
}

export default Signup