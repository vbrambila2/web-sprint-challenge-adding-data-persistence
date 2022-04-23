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
});

router.post('/', (req, res) => {
    Resource.createResource(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(() => {
            res.status(500).json({ message: '500 error createResource' });
        })
});

module.exports = router;