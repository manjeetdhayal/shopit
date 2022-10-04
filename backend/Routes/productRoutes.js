import express from "express";
import expressAsyncHandler from "express-async-handler"; //simple middleware for handling exceptions inside of async express routes and passing them to express error handlers
const router = express.Router();

import Product from "../models/productmodel.js";

//to search for a particular ObjectId from the mongoDB database we need to use 
// finidById(ObjectId(id)); 
// where id = `${req.params.id}`

import {ObjectId} from 'mongodb'


// let's add a header for each routes
// @desc Fetch all products
// @route GET /api/products
// @access Public

router.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//to get the variable id param we use req.params.id from the url

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public

router.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    var id = `${req.params.id}`; 
    const product = await Product.findById(ObjectId(id));

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  })
);

export default router;
