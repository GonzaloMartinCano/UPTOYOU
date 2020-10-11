const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Cart = require('../models/cartModel')


router.get('/getMyCart/:userID', (req, res) => {

    // if (!mongoose.Types.ObjectId.isValid(req.params.userID)) {
    //     res.status(400).json({ message: 'Specified id is not valid' })
    //     return
    // }

    Cart.findOne({ userID: req.params.userID })
        .populate('products.refID')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/addToCart/:productId/:userId', (req, res, next) => {

    Cart.findOne({ userID: req.params.userId })
        .then((cart) => {

            let existIn = -1
            cart.products.map((elm, index) => {
                if (elm.refID == req.params.productId) {
                    existIn = index  
                } 
            })

            if (existIn > -1) {

                let newProducts = cart.products
                newProducts[existIn].quantity = Number(req.body.quantity) +  Number(newProducts[existIn].quantity)
                Cart.findOneAndUpdate({userID: req.params.userId}, { products: newProducts})
                    .then((response) => res.json(response))
                    .catch(err => console.log(err))   
            }

            else {
            
                let newProducts = cart.products
                newProducts.push({ refID: req.params.productId, quantity: req.body.quantity })
                Cart.findOneAndUpdate({userID: req.params.userId}, { products: newProducts})
                    .then((response) => res.json(response))
                    .catch(err => console.log(err))
            }

        })
        .catch(err => res.status(500).json(err))
})

router.put('/editCart/:userId/:index', (req, res, next) => { 

    let newCart = []
    Cart.findOne({ userID: req.params.userId })
        .then(cart => {
            newCart = cart.products
            newCart[req.params.index].quantity = req.body.quantity
 
            Cart.findOneAndUpdate({ userID: req.params.userId }, { products: newCart })
            .then((response) => res.json(response))
            .catch(err => console.log(err))

        })
        .catch(err => console.log(err))

})

router.post('/deletecart/:userId/:index', (req, res, next) => { 

    let newCart = []
    Cart.findOne({ userID: req.params.userId })
        .then(cart => {
            newCart = cart.products
            console.log(newCart.length)
            newCart.splice(req.params.index, 1)
            console.log(newCart.length)
            Cart.findOneAndUpdate({ userID: req.params.userId }, { products: newCart })
            .then((response) => res.json(response))
            .catch(err => console.log(err))

        })
        .catch(err => console.log(err))

})





module.exports = router