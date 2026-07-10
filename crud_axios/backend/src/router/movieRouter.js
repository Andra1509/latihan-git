const express = require("express")
const moviesRouter = express.Router()

// const {getMovies,
//        getMoviesId,
//        getMoviesApi,
//        getMoviesbyIdApi,
//        loggerMiddleware,
//        tokenMiddleware,
//        checkMovieIdMiddleware,
//        timeMiddleware
// } = require("../controller/moviesController.js")
// moviesRouter.get('/movies',getMoviesApi)
// moviesRouter.get('/movies/:id',getMoviesbyIdApi)

const {readMovie, readMovieById, createMovie, updateMovie, deleteMovie} = require('../controller/moviecontroller.js')
const { authJWT } = require("../../midleware/auth.js")
// const { authJWT } = require('../middleware/authJWT');

// moviesRouter.get('/movie', authJWT, readMovie)
moviesRouter.get('/movie', authJWT, readMovie)
moviesRouter.get('/movie/:id', readMovieById)

moviesRouter.post('/movie', createMovie)
moviesRouter.put('/movie/:id', updateMovie)

moviesRouter.delete('/movie/:id', deleteMovie)




module.exports = {moviesRouter}