const router = require('express').Router();
const {User} = require('../models/index');

router.post('/api/user', ({body}, res) => {
    User.create(body)
    .then(dbUser => {
        res.json(dbUser);
    })
    .catch(err => {
        res.status(404).json(err);
    })
})



module.exports = router;