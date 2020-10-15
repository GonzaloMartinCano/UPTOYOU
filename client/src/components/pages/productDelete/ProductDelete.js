import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'


import productsService from '../../../service/products.service'
import Card from 'react-bootstrap/Card'
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
            .catch(err => this.props.setAlert('fail', `Ha ocurrido un error. Prueba de nuevo. ${err}`))
    }

    deleteProduct = () => {
       
        this.productsService
            .deleteProduct(this.state._id)
            .then(() => {
                this.props.setAlert('ok', `Hemos eliminado el producto de tu tienda.`)
                this.props.history.push('/profile')
            })
            .catch(err => this.props.setAlert('fail', `Ha ocurrido un error. Prueba de nuevo. ${err}`))
    }

    render() {
        
        return (
            <Row>
                <Col md={{ span: 4, offset: 2 }}>
                    <h4 style={{ textAlign: 'center' }}>¿¿ESTAS SEGURO DE QUERER ELIMINAR ESTE PRODUCTO DE TU TIENDA??</h4>
                <Card className="product-card">
                    <Card.Img variant="top" src={this.state.image} />
                    <Card.Body>
                    <h4>{this.state.name}</h4>
                
                        <div style={{ display: 'flex',flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Link to={`/profile`} className="btn btn-dark btn-sm">CANCELAR</Link>
                            <Button onClick={() => this.deleteProduct()} className="btn btn-success btn-sm">ELIMINAR PRODUCTO</Button>
                        </div>
                    
                    </Card.Body>
                </Card>
            </Col>
            </Row>
        )
    }
}

export default DeleteProduct