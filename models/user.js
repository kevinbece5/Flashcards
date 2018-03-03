const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//The user Schema will take in 4 fields but will not require the age
const userSchema = new Schema({
    name:{
        type: String, 
        unique: true,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        unique: false,
        trim: true,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    age:{
        type: number,
        unique: false,
        trim: true,
        required: false
    }
})

const user = mongoose.model('user', userSchema);
module.exports = user

//name, password, email, age,