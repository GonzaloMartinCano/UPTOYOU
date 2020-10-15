import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import productsService from '../../../service/products.service'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { FiShoppingCart } from 'react-icons/fi'

import ProductCardProfile from './../productCard/ProductCardProfile'
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
        
                    <h5>¡Bienvenid@ a tu perfil, {this.props.loggedInUser.username}!</h5><br></br>


                    {this.props.loggedInUser.isAdmin && <div>
                        <p> Este es tu perfil de administrador, aqui podrás añadir, editar o eliminar todos los productos de tu tienda </p><br></br>
                        <Button onClick={() => this.handleModal(true)} style={{ marginBottom: '20px' }} variant="success" size="sm">Añadir producto</Button>
                    

                    <Row>
                            {
                                this.state.products.length
                                    ?
                                this.state.products.map(elm => 
                                    <Col md={4} key={elm.index}>
                                    <ProductCardProfile loggedInUser={this.props.loggedInUser} key={elm._id} {...elm} click={() => this.handleModal(true)}/>
                                    </Col>
                                )
                                    :
                                    <Spinner />
                            }
                    </Row>
                    </div>}
                    {!this.props.loggedInUser.isAdmin &&
                       
                        <Row>
                        <Col xs={12} md={6}>
                            <Card className="profileCard">
                            <p style={{marginTop: "20px"}}> Role: Usuario</p><br />
                            <Link className="btn btn-light btn-sm" style={{fontWeight: "800", width: "20%", color: "green"}} to="/cart">Mi cesta: <FiShoppingCart /> <br /></Link><br /><br />
                                <p> Pendientes de envio:</p><br />
                                <Row>
                                <ul style={{color: "green"}}>
                                    <li><a style={{color: "green"}} href="/products/details/5f8098e0616ac95ae7250a9f">Naranajas de Valencia</a></li>
                                    <li><a style={{color: "green"}} href="/products/details/5f8098e0616ac95ae7250a9e">Spanish Potatoes</a></li>
                                        <li><a style={{ color: "green" }} href="/products/details/5f8098e0616ac95ae7250aa0">Apples de Murcia</a></li><hr />
                                        <li>TOTAL</li>    
                                </ul>
                                <ul style={{color: "black", listStyleType: 'none'}}>
                                        <li>24.54€</li>
                                        <li>16.83€</li>
                                        <li>54.15€</li><hr/>
                                        <li>95.52</li>
                                    </ul>
                                    </Row>
                            </Card>
                            </Col>
                            <Col xs={6} style={{borderColor: "grey", padding: "10px"}}>
                                <p style={{fontWeight: "600"}} >Quieres comenzar a vender tus propios productos? <br/> <br/> Haz clik en el botón y recibiremos tu solicitud:
                                <Button onClick={() => this.props.setAlert('ok', 'Tu solicitud ha sido enviada con éxito. Nos pondremos en contacto contigo para que puedas comenzar a vender en las póximas 24h')}
                                    style={{ marginLeft: '20px' }} variant="success" size="sm">Solicitar</Button> </p>
                            
                            </Col>
                        </Row>}
                    

                {/* COMUN PARA TODOS LOS PERFILES */}
            
                    <Link to="/products">
                        <Button size="sm" variant="dark" style={{ marginBottom: '50px',  marginTop: '20px'}} >Volver a Inicio</Button>
                    </Link>
                </Container>


                {/* MODAL PARA AÑADIR NUEVO PRODUCTO ADMIN*/}

                <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nuevo producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewProductForm loggedInUser={this.props.loggedInUser} setAlert={this.props.setAlert} closeModal={() => this.handleModal(false)} refreshList={this.loadProducts} />
                    </Modal.Body>
                </Modal>


            
            </>
        )
    }
}

export default Profile