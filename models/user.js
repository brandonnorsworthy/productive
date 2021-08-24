const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        match: [/.+@.+\..+/, "Make sure what you have typed is an email!"],
        required: "Please enter an email"
    },
    password: {
        type: String,
        trim: true,
        required: "Please enter a password"
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;