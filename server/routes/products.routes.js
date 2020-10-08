const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const User = require('../models/userModel')
const Product = require('../models/productModel')


// Endpoints
router.get('/getAllProducts', (req, res) => {

    Product.find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


router.get('/getOneProduct/:product_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.product_id)) {
        res.status(400).json({ message: 'Specified id is not valid' })
        return
    }

    Product.findById(req.params.product_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/getMyProducts/:userID', (req, res) => {

    // if (!mongoose.Types.ObjectId.isValid(req.params.userID)) {
    //     res.status(400).json({ message: 'Specified id is not valid' })
    //     return
    // }

    Product.find({ userID: req.params.userID })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/newProduct', (req, res, next) => {

    Product.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/updateProduct/:product_id', (req, res, next) => {

    // if (!mongoose.Types.ObjectId.isValid(req.params.product_id)) {
    //     res.status(400).json({ message: 'Specified id is not valid' })
    //     return
    // }

    Product.findByIdAndUpdate(req.params.product_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/deleteProduct/:product_id', (req, res, next) => {

    // if (!mongoose.Types.ObjectId.isValid(req.params.product_id)) {
    //     res.status(400).json({ message: 'Specified id is not valid' })
    //     return
    // }
    console.log("AQUI ESTOY LLEGANDO")
    Product.findByIdAndDelete(req.params.product_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})




router.get('/getMyCart/:userID', (req, res) => {

    // if (!mongoose.Types.ObjectId.isValid(req.params.userID)) {
    //     res.status(400).json({ message: 'Specified id is not valid' })
    //     return
    // }

    User.findById({ _id: req.params.userID })
        .populate('cart')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/addToCart/:productId/:userId', (req, res, next) => {

    let newStock = req.body.stock - req.body.quantity
    console.log( req.body.quantity)
    Product.findByIdAndUpdate(req.params.productId, {stock: newStock}) 
        .then(() => next)
        .catch(err => res.status(500).json(err))

    User.findById(req.params.userId)
        .then((user) => {

            let existIn = -1
            user.cart.map((elm, index) => {
                if (elm == req.params.productId) {
                    existIn = index  
                } 
            })

            if (existIn > -1) {
                let newQuantity = user.quantityInCart
                newQuantity[existIn] = Number(req.body.quantity) +  Number(newQuantity[existIn])
                User.findByIdAndUpdate(req.params.userId, { quantityInCart: newQuantity})
                    .then((response) => res.json(response))
                    .catch(err => console.log(err))
            }

            else {
                let newProducts = user.cart
                let newId = req.params.productId
                newProducts.push(newId)
                let newQuantity = user.quantityInCart
                newQuantity.push(req.body.quantity)
                User.findByIdAndUpdate(req.params.userId, { cart: newProducts, quantityInCart: newQuantity})
                    .then((response) => res.json(response))
                    .catch(err => console.log(err))
                
            }

        })
        .catch(err => res.status(500).json(err))
})





module.exports = router