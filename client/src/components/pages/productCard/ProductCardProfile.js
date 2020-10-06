import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'


const ProductCard = ({ _id, name, image}) => {

    return (

            <Card className="coaster-card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <h4>{name}</h4>
                   
                    <ButtonGroup style={{ width: '100%' }}>
                            <Link to={`/products/edit/${_id}`} className="btn btn-dark btn-sm">Editar producto</Link>
                    </ButtonGroup>
                
                </Card.Body>
            </Card>

    )
}

export default ProductCard