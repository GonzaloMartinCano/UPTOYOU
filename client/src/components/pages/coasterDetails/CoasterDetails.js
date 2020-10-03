import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import coasterService from './../../../service/coasters.service'

class CoasterDetails extends Component {
    constructor() {
        super()
        this.state = {}
        this.coasterService = new coasterService()
    }

    componentDidMount = () => {
        this.coasterService
            .getOneCoaster(this.props.match.params.coaster_id)
            .then(response => this.setState(response.data))
            .catch(err => console.log('Error:', err))
    }

    render() {

        return (
            <Container>
                <main>
                    <h1>{this.state.title}</h1>
                    <hr />
                    <Row>
                        <Col md={{ span: 4, offset: 1 }}>
                            <h4>Descripción</h4>
                            <p>{this.state.description}</p>
                            <hr />
                            <h4>Especificaciones</h4>
                            <p>Longitud: {this.state.length}</p>
                            <p>Inversiones: {this.state.inversions}</p>
                            <hr />
                            <Link to="/coasters" className="btn btn-dark btn-sm">Volver al índice</Link>
                        </Col>
                        <Col md={6}>
                            <img style={{ width: '100%' }} alt={this.state.title} src={this.state.imageUrl} />
                        </Col>
                    </Row>
                </main>
            </Container>
        )
    }
}

export default CoasterDetails