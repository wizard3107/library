const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{type:String,require:true},
    author:[{type:String, require:true}],
    category:{type:String, require:true},
    content:{type:String, require:true}
})

const Book = mongoose.model("book",bookSchema);

module.exports= Book;