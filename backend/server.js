const express = require('express') //it is common js 
const products = require('./data/products')
//now we can use es modules after node v14 

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

app.listen( 5000, console.log('server running on 5000')); 