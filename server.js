const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const compression = require('compression');

const PORT = process.env.PORT || 3001;

const app = express();


app.use(logger('dev'));

app.use(compression());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));
app.use('/',require('./controllers/api.js'));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/productive',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
)

app.listen(PORT, () => console.log('Now listening on port:', PORT));