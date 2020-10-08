import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'


const ProductCard = ({ _id, name, image, stock}) => {

    return (

            <Card className="product-card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <h4>{name}</h4>
                <h4>En stock: {stock}</h4>

                    <ButtonGroup style={{ width: '100%' }}>
                        <Link to={`/products/delete/${_id}`} className="btn btn-dark btn-sm">Eliminar producto</Link>
                        <Link to={`/products/edit/${_id}`} className="btn btn-dark btn-sm">Editar producto</Link>
                    </ButtonGroup>
                
                </Card.Body>
            </Card>

    )
}

export default ProductCard