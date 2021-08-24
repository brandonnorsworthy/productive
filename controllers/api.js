const router = require('express').Router();
const mongojs = require('mongojs')
const {User, Habits} = require('../models/index');

// Create A User
router.post('/api/user', ({body}, res) => {
    User.create(body)
    .then(dbUser => {
        res.json(dbUser);
    })
    .catch(err => {
        res.status(404).json(err);
    })
})

// Find All Users
router.get('/api/user/', (req, res) => {
    User.find()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    })
})

// Find User By ID
router.get('/api/user/:id', (req, res) => {
    User.findOne({_id : mongojs.ObjectId(req.params.id)})
    .populate('habits')
    .then(dbHabits => {
        res.json(dbHabits)
    })
    .catch(err => {
        res.json(err)
    })
})

// Create Habits
router.post('/api/habits', ({body}, res) => {
    Habits.create(body)
    .then(({_id}) => {
        User.findOneAndUpdate({}, {$push: {habits: _id} }, {new: true})
        .then(dbHabit => {
            res.json(dbHabit)
        })
    })
    .catch(err => {
        res.status(400).json(err);
    })
})

// Grab Habits By User
router.get('/api/habits/:id', (req, res) => {
    Habits.find({user_id: req.params.id})
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})


module.exports = router;