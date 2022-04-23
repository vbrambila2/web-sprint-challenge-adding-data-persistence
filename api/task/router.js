// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    Task.getTasks()
        .then(task => {
            res.json(task);
        })
        .catch(() => {
            res.status(500).json({ message: '500 error getTasks' });
        })
})

module.exports = router;