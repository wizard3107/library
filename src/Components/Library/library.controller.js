const express = require("express")
const Library = require("./library.model")
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        let createdItem = await Library.create(req.body)

        res.status(201).json(createdItem)
    }
    catch (e) {
        console.log(e.message)
    }
}
)
router.patch('/issue/:id', async (req, res) => {
    try {
        let data  = await Library.findById(req.params.id)
        console.log("data:", data)
        if(data.availabilty===true){
            console.log("data:",data)
            let update = await Library.findByIdAndUpdate(req.params.id,
                {
                    availabilty: req.body.availabilty,
                    issueDate: req.body.issueDate
                },
                {new:true}
                )
                console.log(update)
            res.json(update)
        }
        else{
            res.json("book not found")
        }

        
    }
    catch (e) {
        console.log(e.message)
    }
}
)
router.get('/', async (req, res) => {
    try {
         const   items = await Library.find({})
        res.status(200).json(items);
        }
    catch (e) {
        console.log(e.message)
    }
}
)
module.exports=router;