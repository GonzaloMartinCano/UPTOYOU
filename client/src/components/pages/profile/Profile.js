import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import productsService from '../../../service/products.service'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'


import ProductCard from './../productsList/ProductCard'
import NewProductForm from '../newProduct/NewProduct'
import Spinner from '../../shared/spinner/Spinner'


class Profile extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            showModal: false
        }
        this.productsService = new productsService()
    }

    componentDidMount = () => this.loadProducts()

    loadProducts = () => {
        this.productsService
            .getMyProducts(this.props.loggedInUser._id)
            .then(response => this.setState({ products: response.data }))
            .catch(err => console.log('Error:', err))
    }

    handleModal = showModal => this.setState({ showModal })

    render() {
        return (

            <>
                <Container>
                    
                    {/* ZONA ADMIN */}
        
                    <h2>¡Bienvenid@ a tu perfil, {this.props.loggedInUser.username}!</h2><br></br>

                    {this.props.loggedInUser.isAdmin && <div>
                        <h5> Este es tu perfil de administrador, aqui podrás editar todos los productos de tu tienda </h5><br></br>
                        <Button onClick={() => this.handleModal(true)} style={{ marginBottom: '20px' }} variant="dark" size="sm">Añadir producto</Button>
                    </div>}

                    <Row>
                            {
                                this.state.products.length
                                    ?
                                this.state.products.map(elm => 
                                    <Col md={4}>
                                    <h8 onClick={() => this.handleModal(true)} variant="dark" size="xs">Editar</h8>
                                    <ProductCard loggedInUser={this.props.loggedInUser} key={elm._id} {...elm} click={() => this.handleModal(true)}/>
                                    </Col>
                                )
                                    :
                                    <Spinner />
                            }
                    </Row>



                    {/* COMUN PARA TODOS LOS PERFILES */}
            
                    <Link to="/products">
                        <Button size="sm" variant="dark" style={{ marginTop: '20px' }}>Volver a Inicio</Button>
                    </Link>
                </Container>



                {/* MODAL PARA AÑADIR NUEVO PRODUCTO ADMIN*/}

                <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nuevo producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewProductForm loggedInUser={this.props.loggedInUser} closeModal={() => this.handleModal(false)} refreshList={this.loadProducts} />
                    </Modal.Body>
                </Modal>
                
                {/* MODAL PARA EDITAR NUEVO PRODUCTO ADMIN*/}
                
                <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nuevo producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewProductForm loggedInUser={this.props.loggedInUser} closeModal={() => this.handleModal(false)} refreshList={this.loadProducts} />
                    </Modal.Body>
                </Modal>


            
            </>
        )
    }
}

export default Profile