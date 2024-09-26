
export const MovieGet = (req, res) => {
    res.send("Get all movies!!")
}


export const MovieCreate = (req, res) => {

    // id, title, description
    console.log(req.body)
    // Create the movie info

    return res.json(req.body)
}


export const MovieUpdate = (req, res) => {
    res.send("Update Movies")
}

export const MovieDelete = (req, res) => {
    res.send("Delete movies")
}