const router = require('express').Router();
const path = require('path');
const {User} = require('../../models/index');

router.post('/api/user', (req, res) => {
    console.log('test');
    User.create(req.body)
    .then(dbUser => {
        res.json(dbUser);
    })
    .catch(err => {
        res.status(404).json(err);
    })
})

module.exports = router;