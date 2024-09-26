import { model, Schema } from "mongoose";


// Write Your schema
const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: String
})

//  Create your model
const Movie = model("Movie", movieSchema)

export default Movie;