let movies = [
    {id: 1, title: "spiderman", year: 2002},
    {id: 2, title: "Jhon wick", year: 2014},
    {id: 3, title: "The Avegers", year: 2012},
    {id: 4, title: "Logan", year: 2017}
]

const getMovies = (req, res) => {
  let {title} = req.query 

   console.log(title)

   if(title == undefined){
   title = ""
   }
   let result = ""

   movies.forEach((item, index) => {
    if(item.title.toLowerCase().includes(title)) {
    result += `<h3> ${index+1}.</br>tittle : ${item.title}<br>year : ${item.year}`
    }
    // if (result === "")

    // res.send(`<h3>Data tidak ditemukan.<hbr>`)
  })
  res.send(result);
}


const getMoviesId = (req, res) => {
  let {id} = req.params;
  let hasil = movies.find((item) => {
    return item.id === Number(id)
  })
// if(hasil){
//   return res.send("<h3>Movie tidak dapat ditemukan</br>")
// }
  res.send(hasil)
}

const getMoviesApi = (req, res) => {
  let {title, year} = req.query 

  //  console.log(title)
   if(title == undefined){
   title = ""
   }

   let result = movies.filter((item, index) => {
    return (item.title.toLowerCase().includes(title.toLowerCase()) && (!year || item.year == year))
   })

   res.json(result)
}


const getMoviesbyIdApi = (req, res) => {
  let {id} = req.params;
  let hasil = movies.find((item) => {
    return item.id === Number(id)
  })
  res.send(hasil)
}

// app.get('/api/movies', getMoviesApi)
// app.get('/api/movies/:id', getMoviesbyIdApi)

const loggerMiddleware = (req, res, next) => {
  console.log("Ada request masuk")
  next()
}

const tokenMiddleware = (req, res, next) => {
  let { token } = req.query

  if (token === "12345") {
    next()
  } else {
    res.status(401).json({
      message: "Token tidak valid"
    })
  }
}

const checkMovieIdMiddleware = (req, res, next) => {
  let { id } = req.params
  let result = movies.find(item => item.id === Number(id))
  console.log(new Date())
  if (result) {
    next()
  } else {
    res.status(404).json({ message: "Movie tidak ditemukan" })
  }
}

const timeMiddleware = (req, res, next) => {
  console.log(new Date())
  next()
}

module.exports = {
    getMovies,
    getMoviesId,
    getMoviesApi,
    getMoviesbyIdApi,
    loggerMiddleware,
    tokenMiddleware,
    checkMovieIdMiddleware,
    timeMiddleware
}