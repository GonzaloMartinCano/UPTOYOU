import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const ProductCard = ({ _id, name, image, loggedInUser, userID }) => {

    return (
        <Col md={4}>
            <Card className="coaster-card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <h4>{name}</h4>

                    {loggedInUser && loggedInUser._id === userID
                        ?
                        <ButtonGroup style={{ width: '100%' }}>
                            <Button className="btn btn-dark btn-sm" onClick={() => alert('TE LO CURRAS')}>Editar</Button>
                            <Link to={`/products/details/${_id}`} className="btn btn-dark btn-sm">Detalles</Link>
                        </ButtonGroup>
                        :
                        <Link to={`/products/details/${_id}`}>
                            <Button variant="dark" size="sm" block>Detalles</Button>
                        </Link>
                    }

                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductCard