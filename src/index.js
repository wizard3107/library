const express = require('express')
const mongoose = require('mongoose')

const PORT  = process.env.PORT||8000
const DB_url = 'mongodb+srv://Ashish8923:ashu_8923@unacademy.upire.mongodb.net/Library?retryWrites=true&w=majority'
const bookController = require('./Components/Books/Book.controller')
let app = express();
const connect =()=>{
    return mongoose.connect(DB_url);
}
app.use(express.json())
app.use("/books",bookController)
app.listen(PORT,'0.0.0.0',async()=>{
    try{
        await connect();
        console.log('connected to Mongoose');
        console.log(`Connected to Port ${PORT}`);
    }
    catch(e){
        console.log(e.message);
    }
})