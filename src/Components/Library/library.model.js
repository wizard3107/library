const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema({
    book:{type:mongoose.Schema.Types.ObjectId, required:true},
    availabilty:{type:Boolean,required:true, default:true},
    issueDate:{type:String},
    returnDate: {type: String}
})

const Library = mongoose.model("library", librarySchema);

module.exports = Library;