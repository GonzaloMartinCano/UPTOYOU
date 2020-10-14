import React from 'react'
import { Link } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import { MdAddShoppingCart } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineStar } from 'react-icons/ai'

import ButtonGroup from 'react-bootstrap/ButtonGroup'
import BeautyStars from 'beauty-stars';


const ProductCard = ({ _id, name, image, loggedInUser, userID, stock, rating, price}) => {

    return (

        <Card className="product-card">
            <Link to={`/products/details/${_id}`} >
                <img src={image} alt={name}/>
                
             </Link>
            <Card.Body className="cardlistbody">
        
                <div style={{marginBottom: "-15px"}}>
                    <h4>{name}</h4>
                    <p>{price}  €</p>
                    <p style={{ fontSize: "0.6rem", marginTop: "5px"  }}>Stock: {stock}</p>
                   
                </div>

                <div >
                        
                
                {loggedInUser && loggedInUser._id === userID
                    ?
                    <div style={{ marginTop: "-5px", marginLeft: "70%" }}>
                        <Link to={`/profile/${loggedInUser._id}`} className="btn btn-success btn-sm addcartbutton"><CgProfile/></Link>
                    </div>
                    :
                        <div style={{ marginTop: "-5px", marginLeft: "70%" }}>
                        <Link to={`/products/details/${_id}`} className="btn btn-success btn-sm addcartbutton"><MdAddShoppingCart/></Link>
                    </div>
                    }
          
                    <p style={{ marginTop: "20px" }}> <BeautyStars value={rating ? rating : 2} size="10px"/> </p>
                </div>

            
            </Card.Body>
        </Card>

    )
}

export default ProductCard