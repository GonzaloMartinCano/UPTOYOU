import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


import productsService from '../../../service/products.service'
import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class DeleteProduct extends Component {
    constructor(props) {
        super()
        this.state = {}
        this.productsService = new productsService()
    }

    componentDidMount = () => {
        this.productsService
            .getOneProduct(this.props.match.params.product_id)
            .then(response => this.setState(response.data))
            .catch(err => console.log('Error:', err))
    }

    deleteProduct = () => {
       
        this.productsService
            .deleteProduct(this.state._id)
            .then(() =>  this.props.history.push('/profile'))
            .catch(err => console.log('Erroro!!', { err }))
    }

    render() {
        
        return (
            <Row>
                <Col md={{ span: 4, offset: 2 }}>
                    <h4>¿¿ESTAS SEGURO DE QUERER ELIMINAR ESTE PRODUCTO DE TU TIENDA??</h4>
                <Card className="product-card">
                    <Card.Img variant="top" src={this.state.image} />
                    <Card.Body>
                    <h4>{this.state.name}</h4>
                

                        <ButtonGroup style={{ width: '100%' }}>
                            <Link to={`/profile`} className="btn btn-dark btn-sm">CANCELAR</Link>
                            <Button onClick={() => this.deleteProduct()} className="btn btn-dark btn-sm">ELIMINAR PRODUCTO</Button>
                        </ButtonGroup>
                    
                    </Card.Body>
                </Card>
            </Col>
            </Row>
        )
    }
}

export default DeleteProduct