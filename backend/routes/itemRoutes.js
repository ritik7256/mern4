const express = require('express');
const Item=require('../models/Items')

const router = express.Router();

router.get('/', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

router.post('/', async (req, res) => {
    const newItem = new Item({ name: req.body.name });
    await newItem.save();
    res.status(201).json(newItem);
});

module.exports = router;