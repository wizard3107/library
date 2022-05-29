const express = require("express")
const Book = require("./Book.model")
const router = express.Router();
router.post('/', async (req, res) => {
    try {
        let createdItem = await Book.create(req.body)

        res.status(201).json(createdItem)
    }
    catch (e) {
        console.log(e.message)
    }
}
)
router.get('/', async (req, res) => {
    let query = req.query
    console.log(query)
    let items
    try {

        if (query.category) {
             items = await Book.find({ "category": query.category })
        }
        else if(query.author && query.category){
            items = await Book.find({ "category": query.category, "author":query.author }) 

        }
        else if (query.title && query.category) {
            items = await Book.find({ "category": query.category, "title": query.title })
        }
        else if (query.author) {
            items = await Book.find({ "author": query.author })

        }
        else if (query.title) {
            items = await Book.find({ "title": query.title})

        }
        else {
             items = await Book.find({})
        }
        console.log(items)
        res.status(200).json(items);

    }
    catch(e){
        console.log(e.message)
    }
}
)

module.exports = router