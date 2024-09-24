import express from "express";

const app = express()
const PORT = 6969

app.get("/", (req, res) => {
    res.json({ msg: 'Hello World' })
})

// CRUD functionality of movies

//  C - Creating movies
app.post('/movies', () => {

})

// R - Reading
app.get('/movies', () => {

})


// U - Update
app.put('/movies', () => {

})

// D - Delete
app.delete('/delete', () => {

})

app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`)
})