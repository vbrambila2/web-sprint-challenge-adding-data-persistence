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
});

router.post('/', (req, res) => {
    console.log(req.body);
    Task.createTask(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(() => {
            res.status(500).json({ message: '500 error createTask' });
        })
});

module.exports = router;