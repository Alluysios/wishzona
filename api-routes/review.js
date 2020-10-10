const express = require('express');

const Review = require('../models/Review');
const Product = require('../models/Product');

const router = express.Router({ mergeParams: true });

const { protect } = require('../middleware/auth');

/*******
 *  baseURL: /products/:pid
********/

// Get all reviews
router.get('/', async(req, res, next) => {
    let filter = {};
    const reviews = await Review.find(filter);

    res.status(200).json({
        status: 'success',
        results: reviews.length,
        reviews
    })
});

// Create review
router.post('/', protect, async(req, res) => {
    if(!req.body.user) req.body.user = req.user;
    if(!req.body.product) req.body.product = req.params.pid;

    const user = await Review.findOne({ user: req.user });
    if(user) return res.status(400).json({ errors: [{ msg: 'You already reviewed this product' }]});

    const review = await Review.create(req.body);

    res.status(200).json({
        status: 'success',
        review
    })
})

// Get review
router.get('/', async(req, res, next) => {
    const review = await Review.findById(req.rid);

    res.status(200).json({
        status: 'success',
        data: {
            review
        }
    })
});

module.exports = router;