import React from "react";
import { Card } from "react-bootstrap";
import Rating from './rating'; 
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"; 

const Product = ({product}) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src = {product.image} alt="not found" varient = 'top' />

            </Link>

            <Card.Body>
            <Link to={`/product/${product._id}`}>
               <Card.Title as = 'h6'> <strong> {product.name} </strong></Card.Title>

            </Link>

            <Card.Text as ='h6'>
                <Rating value={product.rating} 
                text={`${product.numReviews} reviews`}
                 />
                </Card.Text>

                <Card.Text as= 'h6'> ${product.price} </Card.Text>
            </Card.Body>
        </Card>
    )
}

Rating.defaultProps  = {
    color: '#f8e825'
}

Rating.propTypes  = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired, 
    color: PropTypes.string
}


export default Product; 