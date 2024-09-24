import express from "express"
import {
    MovieCreate,
    MovieDelete,
    MovieGet,
    MovieUpdate
} from "../controllers/movies.controller.js";

const router = express.Router();

//  C - Creating movies
router.post('/', MovieCreate)

// R - Reading
router.get('/', MovieGet)

// U - Update
router.put('/:id', MovieUpdate)

// D - Delete
router.delete('/:id', MovieDelete)

export default router;