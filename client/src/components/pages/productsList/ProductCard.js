import React from 'react'
import { Link } from 'react-router-dom'
import miproducto from './miproducto.png'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const ProductCard = ({ _id, name, image, loggedInUser, userID, click }) => {

    return (

            <Card className="coaster-card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <h4>{name}</h4>

                    {loggedInUser && loggedInUser._id === userID
                        ?
                   
                        <ButtonGroup style={{ width: '100%' }}>
                            <Link to={`/products/details/${_id}`}  className="btn btn-dark btn-sm">Detalles</Link>
                            <Link to={`/profile/${loggedInUser._id}`} className="btn btn-dark btn-sm"><img style={{marginLeft: '10px', height: '100%' }} className="chekmiproducto" src={miproducto}/>Ver en mi perfil</Link>
                        </ButtonGroup>
                     
                        :
                        <Link to={`/products/details/${_id}`}>
                            <Button variant="dark" size="sm" block>Detalles</Button>
                        </Link>
                    }

                </Card.Body>
            </Card>

    )
}

export default ProductCard