import React from 'react'
import { Link } from 'react-router-dom'
import miproducto from './miproducto.png'
import carrito from './carrito.png'

import Card from 'react-bootstrap/Card'
import { MdAddShoppingCart } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'




import ButtonGroup from 'react-bootstrap/ButtonGroup'


const ProductCard = ({ _id, name, image, loggedInUser, userID, stock, index, price}) => {

    return (

        <Card className="product-card">
            <Link to={`/products/details/${_id}`} >
            <img src={image}/>
                
             </Link>
            <Card.Body className="cardlistbody">
        
                <div >
                    <h4>{name}</h4>
                    <p>{price}  €</p>
                    <p>Stock: {stock}</p>
                </div>

                <div>
                        
                
                {loggedInUser && loggedInUser._id === userID
                    ?
                    <ButtonGroup style={{ width: '100%' }}>
                        <Link to={`/profile/${loggedInUser._id}`} className="btn btn-success btn-sm addcartbutton"><CgProfile/></Link>
                    </ButtonGroup>
                    :
                    <ButtonGroup >
                        <Link to={`/products/details/${_id}`} className="btn btn-success btn-sm addcartbutton"><MdAddShoppingCart/></Link>
                    </ButtonGroup>
                    }
                    
                </div>

            
            </Card.Body>
        </Card>

    )
}

export default ProductCard