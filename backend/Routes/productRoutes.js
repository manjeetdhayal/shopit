import express from 'express'
import expressAsyncHandler from 'express-async-handler';
const router = express.Router(); 

import Product from '../models/productmodel.js'

// let's a header for each routes
// @desc Fetch all products
// @route GET /api/products
// @access Public

router.get('/', expressAsyncHandler(async (req, res)=> {

    const products = await Product.find({})
    res.json(products); 
})); 


//to get the variable id param we use req.params.id from the url 

// @desc Fetch single all products
// @route GET /api/products
// @access Public



router.get('/:id', expressAsyncHandler( async(req, res)=> {
    
    const product = await Product.findById( req.params.id); 

    if(product) {
        res.json(product)
    } else {
        res.status(404).json({message: 'Product not found'})
    }
}))

export default router; 