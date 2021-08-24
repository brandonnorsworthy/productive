const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const habitsSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    icon: {
        type: String, 
        trim: true,
    },
    color: {
        type:String
    },
    repeating: {
        type: Boolean,
    },
    days: {
        type: Array,
        default: [true,true,true,true,true,true,true]
    },
    user_id: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

const Habits = mongoose.model("Habits", habitsSchema);

module.exports = Habits;