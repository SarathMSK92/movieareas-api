import express from "express"

const router = express.Router();

//  C - Creating movies
router.post('/', (req, res) => {
    res.send("Creating movies!!")
})

// R - Reading
router.get('/', (req, res) => {
    res.send("Get all movies!!")
})


// U - Update
router.put('/:id', (req, res) => {
    res.send("Update movies")
})

// D - Delete
router.delete('/:id', (req, res) => {
    res.send("Delete movies")
})

export default router;