import React , {useState, useEffect} from "react";
import {Link } from 'react-router-dom'; 
import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'; 


import Rating from "../components/rating";
// import products from "../products";
import { useParams } from "react-router-dom";
import axios from 'axios'; 

const ProductScreen = () => {
    const {id} = useParams(); 
    // console.log(id); 

    // const product = products.find( (p) => p._id === id ); 
    // console.log(product)

    const [product, setProduct] = useState([]); 

    useEffect( ( ) => {   // fires when the screen loads or component loads
        const fetchProduct = async () => {
          // const res = await axios.get('/api/products') //now res has a data object assigned to it thus we can access it by res.data 
          // to make our code cleaner we can destructure it by replacing res with {data}
  
          const {data} = await axios.get(`/api/products/${id}`); 
  
          setProduct(data); 
        }
  
        fetchProduct(); 
    }, [])

    return (
        <div>
           <Link to="/goback" className="btn btn-light my-3"> Go Back </Link>
           <Row>
               <Col md={6}>
                   <Image src = {product.image} alt = {product.name} fluid/>
               </Col>
               <Col md = {3}>
                   <ListGroup variant = 'flush'>
                       <ListGroup.Item>
                           <h3>
                               {product.name}
                           </h3>
                       </ListGroup.Item>
                       <ListGroup.Item>
                           <Rating 
                           value= {product.rating}
                           text = {`${product.numReviews} reviews`}/>
                           
                       </ListGroup.Item>
                       <ListGroup.Item>
                           Price: ${product.price}
                       </ListGroup.Item>
                       <ListGroup>
                           description: {product.description}
                       </ListGroup>
                   </ListGroup>
               </Col>

               <Col md = {3}>
                   <Card>
                       <ListGroup variant = 'flush'>
                           <ListGroup.Item> 
                               <Row>
                                   <Col> Price: </Col>
                                   <Col>
                                   <strong> ${product.price} </strong></Col>
                                   <Col>
                                   <strong> {product.countInStock > 0 ? 'In Stock' : "out of stock"} </strong></Col>
                               </Row>
                           </ListGroup.Item>
                           <ListGroup.Item>
                               <Button className = "btn-block" type  = 'button' disabled = { product.countInStock === 0}>
                                   Add to cart 
                               </Button>
                           </ListGroup.Item>
                       </ListGroup>
                   </Card>
               </Col>
           </Row>
        </div>
    )
}

export default ProductScreen; 