const express = require('express')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const app = express()

app.get('/api/products', getProducts)

app.get('/api/products/:id', getProduct)

app.use(express.json())

const port = 4040

app.listen(port, () => console.log(`Server is running on port ${port}`))