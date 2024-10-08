import express from "express";
import connectDB from "./lib/db.js";
import movieRoutes from './routes/movies.route.js'

const app = express()
const PORT = 6969

// data understanding middleware
app.use(express.json())


// connectDB 
connectDB();

app.get("/", (req, res) => {
    res.json({ msg: 'Hello World!!' })
})


// CRUD functionality of movies
app.use('/movies', movieRoutes)


app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`)
})