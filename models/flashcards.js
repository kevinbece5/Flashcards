const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//The Flashcard Schema will have three parts but will only require the question and answer
const flashcardSchema = new Schema({
    question: {
        type: String,
        unique: true,
        trim: true,
        required: false,
    },
    hint:{
        type: String,
        unique: true,
        trim: true,
        required:false,
    },
    answer:{ 
        type: String,
        unique: true,
        trim: true,
        required: true,
    }

})

//exporting the Flashcards
const flashcard = mongoose.model('flaschard', flashcardSchema);
module.exports = flashcard