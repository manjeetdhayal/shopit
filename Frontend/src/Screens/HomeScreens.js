import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

// import products from "../products";  //know we fetch it from our backend
import Product from "../components/Product";

//we will use useDispatch() and useSelector() instead of useState and axios to pass data
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
  //we don't need it now we use dispatch and selector for it.
  // const [products, setProducts] = useState([]); //setProducts is the function that will manipulate products

  // useEffect( async ( ) => {   // fires when the screen loads or component loads
  //   await axios.get('/api/products')
  // })

  //*** we can not make the arrow function async that's why we will make a seperate function  */

  //we will use dispatch now
  // useEffect(() => {
  //   // fires when the screen loads or component loads
  //   const fetchProducts = async () => {
  //     // const res = await axios.get('/api/products') //now res has a data object assigned to it thus we can access it by res.data
  //     // to make our code cleaner we can destructure it by replacing res with {data}

  //     const { data } = await axios.get("/api/products");

  //     setProducts(data);
  //   };

  //   fetchProducts();
  // }, []); //second argument is array of dependecies that we want to fire when we useEffect

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList); //selecting product list from the reducer
  const { loading, error, products } = productList; //loading for spinner

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1> Latest products</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <h3>
                  <Product product={product} />
                </h3>
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
