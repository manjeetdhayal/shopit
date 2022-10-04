// const express = require('express') //it is common js
// const products = require('./data/products')
//now we can use es modules after node v14 (both above are correct)

// converting above commonJs in ES6 module
import express from "express";
import dotenv from "dotenv";
// import products from './data/products.js'
import connectDB from "./config/db.js";

import productRoutes from "./Routes/productRoutes.js";

//importing error handlers
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// const dotenv = require('dotenv');

dotenv.config();

connectDB(); //to conncect to database mongoDB

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});


// test for setting up backend routes -------------

// app.get("/api/products", (req, res) => {
//   res.json(products); 
// })

// app.get("/api/products/:id", (req, res) => {
//   const pro = products.find((p) => p._id === req.params.id); 
//   res.json(pro); 
// })

//-----------


app.use("/api/products", productRoutes); //we are mounting the api end point i.e, now for all api calls it will take /api/products/ as default i.e, it is basically mounting it

//below are moved to backend/Routes/productRoutes.js for better clearity and understandibility

// app.get('/api/products', (req, res)=> {
//     res.json(products);
// });

// //to get the variable id param we use req.params.id from the url

// app.get('/api/products/:id', (req, res)=> {

//     const product = products.find( p => p._id === req.params.id)
//     res.json(product)
// })

//handling exception error when url enterd is incorrect
app.use(notFound);
//custom error handler COMPLEX CONCEPT
app.use(errorHandler);

const PORT = process.env.PORT || 5500;

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);
