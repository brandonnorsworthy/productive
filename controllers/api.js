const router = require('express').Router();
const mongojs = require('mongojs')
const {User, Habits} = require('../models/index');

router.post('/api/user', ({body}, res) => {
    User.create(body)
    .then(dbUser => {
        res.json(dbUser);
    })
    .catch(err => {
        res.status(404).json(err);
    })
})

router.get('/api/user/:id', (req, res) => {
    User.findOne({_id : mongojs.ObjectId(req.params.id)})
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

router.post('/api/habit', ({body}, res) => {
    Habits.create(body)
    .then(dbHabit => {
        res.json(dbHabit);
    })
    .catch(err => {
        res.status(400).json(err);
    })
})
module.exports = router;