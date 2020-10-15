import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'

import { MdDeleteForever } from 'react-icons/md'
import { BiEdit } from 'react-icons/bi'




const ProductCard = ({ _id, name, image, stock}) => {

    return (

            <Card className="product-card">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                <h4>{name}</h4>
                <p>En stock: {stock}</p>

                    <div style={{ display: 'flex',flexDirection: 'row', justifyContent: 'center',}} >
                        <Link  to={`/products/delete/${_id}`} className="btn btn-danger btn-sm profilecartbutton"><MdDeleteForever/></Link>
                        <Link to={`/products/edit/${_id}`} className="btn btn-success btn-sm profilecartbutton"><BiEdit/></Link>
                    </div>
                
                </Card.Body>
            </Card>

    )
}

export default ProductCard