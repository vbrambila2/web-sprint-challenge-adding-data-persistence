// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    Project.getProjects()
        .then(pro => {
            res.json(pro);
        })
        .catch(() => {
            res.status(500).json({ message: '500 error getProjects' });
        })
})

module.exports = router;