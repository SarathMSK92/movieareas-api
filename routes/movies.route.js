import express from "express"
import {
    MovieCreate,
    MovieDelete,
    GetAllMovies,
    MovieUpdate,
    MovieDetail
} from "../controllers/movies.controller.js";

const router = express.Router();

//  C - Creating movies
router.post('/', MovieCreate)

// R - Reading All Movie
router.get('/', GetAllMovies)

// R - Reading Single movie
router.get('/:id', MovieDetail)

// U - Update
router.put('/:id', MovieUpdate)

// D - Delete
router.delete('/:id', MovieDelete)

export default router;