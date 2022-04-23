// build your `/api/resources` router here
const express = require('express');
const Resource = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    Resource.getResources()
        .then(resource => {
            res.json(resource);
        })
        .catch(() => {
            res.status(500).json({ message: '500 error getResources' });
        })
})

module.exports = router;