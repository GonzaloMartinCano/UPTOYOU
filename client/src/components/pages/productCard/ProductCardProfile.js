import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import { MdDeleteForever } from 'react-icons/md'
import { BiEdit } from 'react-icons/bi'




const ProductCard = ({ _id, name, image, stock}) => {

    return (

            <Card className="product-card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <h4>{name}</h4>
                <h4>En stock: {stock}</h4>

                    <ButtonGroup style={{ width: '100%' }}>
                        <Link style={{ marginRight: '20px' }} to={`/products/delete/${_id}`} className="btn btn-danger btn-sm">Eliminar <MdDeleteForever/></Link>
                        <Link to={`/products/edit/${_id}`} className="btn btn-success btn-sm">Editar <BiEdit/></Link>
                    </ButtonGroup>
                
                </Card.Body>
            </Card>

    )
}

export default ProductCard