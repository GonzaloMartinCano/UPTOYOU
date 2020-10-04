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

// router.put('/editCoaster/:coaster_id', (req, res, next) => {

//     if (!mongoose.Types.ObjectId.isValid(req.params.coaster_id)) {
//         res.status(400).json({ message: 'Specified id is not valid' })
//         return
//     }

//     Coaster.findByIdAndUpdate(req.params.coaster_id, req.body)
//         .then(response => res.json(response))
//         .catch(err => res.status(500).json(err))
// })


module.exports = router