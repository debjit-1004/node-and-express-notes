const express = require('express')
const app = express();
const { products } = require('./data')
console.log(products)

app.get('/', (req, res) => {
    res.json(products)
    console.log(products)
})


app.listen(5000, () => {
    console.log('server is listening on port 5000....')
})