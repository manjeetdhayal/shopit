import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/usermodel.js'
import Product from './models/productmodel.js'
import Order from './models/ordermodel.js'
import connectDB from './config/db.js'
import Users from './data/users.js'

dotenv.config()

await connectDB()

const importData = async () => {
  try {

    //to clear all the db
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    // const createdUsers = await User.insertMany(users)

    // const adminUser = createdUsers[0]._id

    // const sampleProducts = products.map((product) => {
    //   return { ...product, user: adminUser }
    // })

    // await Product.insertMany(sampleProducts)

    // to insert all the users 

    await User.insertMany(users); 
    await Product.insertMany(products); // to insert all the products

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`Error is: ${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

//to get the arguments passed in command line 
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}