import Movie from "../models/movie.model.js"

export const GetAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.status(201).json(movies)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const MovieCreate = async (req, res) => {

    // id, title, description
    // validate your data
    const newMovie = new Movie({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const movie = await newMovie.save();
        return res.status(201).json(movie)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
    // Create the movie info
}

export const MovieDetail = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)

        if (movie == null) {
            return res.status(404).json({ message: "Cannot find movie" })
        } else {
            res.json(movie)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const MovieUpdate = async (req, res) => {

    try {

        const updatedMovie = await Movie.findOneAndUpdate(
            { _id: req.params.id }, //finding One
            { title: req.body.title }, // Update
            { new: true }  // return new updated data
        )
        res.status(201).json(updatedMovie)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const MovieDelete = async (req, res) => {

    const movieId = req.params.id

    try {
        await Movie.deleteOne({ _id: movieId })
        res.json({ message: "Movie Deleted" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}