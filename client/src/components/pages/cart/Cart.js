import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import cartService from '../../../service/cart.service'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'


import ProductCardCart from './../productCard/ProductCardCart'



class Cart extends Component {
    constructor() {
        super()
        this.state = {
            cart: {},
            totalPrice: 0,
            showModal: false
        }
        this.cartService = new cartService()
    }

    componentDidMount = () => {
        this.loadProducts()
        
    }
    
    loadProducts = () => {
        this.cartService
            .getMyCart(this.props.loggedInUser._id)
            .then(response => this.setState({ cart: response.data.products }))
            .catch(err => console.log('Error:', err))
    }

    calculateTotal = (price) => {
        let newTotal = Number(price) + Number(this.state.totalPrice)
        this.setState({totalPrice: newTotal})
    }

    deleteProductCart = (index) => {
        this.cartService
            .deleteProductCart(this.props.loggedInUser._id, index)
            .then(() => {
                this.loadProducts()
                this.props.loadCart()
            })
            .catch(err => console.log('Error:', err))
    }
    confirmacompra = () => {
        this.props.setAlert('ok', `\n Gracias por registrar tu interes! \n Gracias a personas como tu construiremos un mercado más sostenible`)
    }
    render() {
        return (

        <>
        <Container>

            <p>Hola {this.props.loggedInUser.username}, esta es tu cesta de la compra: </p><br></br>

        <Row>
            {
            this.state.cart.length ?
            <Table borderless style={{borderRadius: "10px", boxShadow: "0px 0px 15px 0px #c4f5cd"}} >
                <thead>
                    <tr>
                    <th></th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Unidad</th>
                    <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.cart.map((elm, index) =>
                    <ProductCardCart deleteProductCart={this.deleteProductCart} loggedInUser={this.props.loggedInUser} key={elm._id} {...elm} index={index} calculateTotal={this.calculateTotal} />)}</tbody>
                                    <tr style={{ textAlign: "center", fontWeight: "600" }}>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>TOTAL</td>
                                        <td>
                    {this.state.cart.length ? this.state.totalPrice : 0} €

                                        </td>
                                    
                </tr>
                                        
                                </Table>
                                
            :
            <h1>Aun no hay productos en tu cesta</h1>
            }
        </Row>



        {/* COMUN PARA TODOS LOS PERFILES */}
                    <div className="cartbuttons">
                        
        <Link to="/products">
            <Button size="sm" variant="dark" style={{ marginTop: '20px' }}>Volver a Inicio</Button>
        </Link>
        <Link to="/">
            <Button onClick={this.confirmacompra} size="sm" variant="success" style={{ marginTop: '20px' }}>Confirmar Compra</Button>
        </Link>
        </div>
        </Container>

        </>
        )
    }
}

export default Cart