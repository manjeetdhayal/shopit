// const express = require('express') //it is common js 
// const products = require('./data/products')
//now we can use es modules after node v14 (both above are correct)

// converting above commonJs in ES6 module 
import express from 'express'; 
import dotenv from 'dotenv'; 
import products from './data/products.js'
import connectDB from './config/db.js'





// const dotenv = require('dotenv'); 

dotenv.config(); 

connectDB(); 

const app = express(); 

app.get('/', (req, res)=> {
    res.send('API is running...')
}); 

app.get('/api/products', (req, res)=> {
    res.json(products); 
}); 


//to get the variable id param we use req.params.id from the url 

app.get('/api/products/:id', (req, res)=> {
    
    const product = products.find( p => p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000 

app.listen( PORT, console.log(`server running in ${process.env.NODE_ENV} mode on ${PORT}`)); 